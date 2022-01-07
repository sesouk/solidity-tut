async function main(){
  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards")
  const keyboardsContract = await keyboardsContractFactory.deploy()
  await keyboardsContract.deployed()

  console.log("Contract deployed to:",keyboardsContract.address)

  const keyboards = await keyboardsContract.getKeyboards()
  console.log("We got the keyboards!", keyboards)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })