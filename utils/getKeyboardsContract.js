import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x676835d2535a40815A003ca24f2C43184B4Ed8BF';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}