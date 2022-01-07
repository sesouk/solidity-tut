import { useState, useEffect } from "react"
import PrimaryButton from "../components/primary-button"
import Keyboard from "../components/keyboard"
import abi from "../utils/Keyboards.json"
import { ethers } from "ethers"

export default function Home() {
  const [ethereum, setEthereum] = useState(undefined)
  const [connectedAccount, setConnectedAccount] = useState(undefined)
  const [keyboards, setKeyboards] = useState([])
  const [newKeyboard, setNewKeyboard] = useState("")
  const [keyboardsLoading, setKeyboardsLoading] = useState(false)

  const contractAddress = '0x4D82c56ae8d8c80957B6750FDb88EeF92FEb757a'
  const contractABI = abi.abi

  const handleAccounts = (accounts) => {
    if (accounts.length > 0) {
      const account = accounts[0]
      console.log("We have an authorized account: ", account)
      setConnectedAccount(account)
    } else {
      console.log("No authorized accounts yet")
    }
  }

  const submitCreate = async (e) => {
    e.preventDefault();

    if (!ethereum) {
      console.error('Ethereum object is required to create a keyboard');
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);

    const createTxn = await keyboardsContract.create(newKeyboard);
    console.log('Create transaction started...', createTxn.hash);

    await createTxn.wait();
    console.log('Created keyboard!', createTxn.hash);

    await getKeyboards();
  }

  const getKeyboards = async () => {
    if (ethereum && connectedAccount) {
      setKeyboardsLoading(true)
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer)
  
        const keyboards = await keyboardsContract.getKeyboards()
        console.log('Retrieved keyboards...', keyboards)
        setKeyboards(keyboards)
      } finally {
        setKeyboardsLoading(false)
      }
    }
  }

  useEffect(() => getKeyboards(), [connectedAccount])

  const getConnectedAccount = async () => {
    if (window.ethereum) {
      setEthereum(window.ethereum)
    }

    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      handleAccounts(accounts)
    }
  }
  
  useEffect(() => getConnectedAccount(), [])

  const connectAccount = async () => {
    if (!ethereum) {
      alert('MetaMask is required to connect an account')
      return
    }
    
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    handleAccounts(accounts)
  }

  if (!ethereum) {
    return <p>Please install MetaMask to connect this site</p>
  }

  if (!connectedAccount) {
    return <PrimaryButton onClick={connectAccount}>
      Connect MetaMask Wallet
    </PrimaryButton>
  }

  if (keyboards.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <PrimaryButton type="link" href="/create">Create a Keyboard!</PrimaryButton>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
          {keyboards.map(
            ([kind, isPBT, filter], i) => (
              <Keyboard key={i} kind={kind} isPBT={isPBT} filter={filter} />
            )
          )}
        </div>
      </div>
    )
  }

  if (keyboardsLoading) {
    return (
      <div className="flex flex-col gap-4">
        <PrimaryButton type="link" href="/create">Create a Keyboard!</PrimaryButton>
        <p>Loading Keyboards...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <PrimaryButton type="link" href="/create">Create a Keyboard!</PrimaryButton>
      <p>No keyboards yet!</p>
    </div>
  )
}