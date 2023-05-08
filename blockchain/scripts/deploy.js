async function main() {
  const dMessageServiceContract = await ethers.getContractFactory("DecentralizedMessageService")

  // Start deployment, returning a promise that resolves to a contract object
  const dMessageService = await dMessageServiceContract.deploy()
  await dMessageService.deployed()
  console.log("Contract deployed to address:", dMessageService.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
