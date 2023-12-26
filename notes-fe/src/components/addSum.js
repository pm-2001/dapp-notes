import React from 'react';
import { ethers } from 'ethers';

function AddSum() {
  const [sum, setSum] = React.useState(0);
    const getContract = async()=>{
      if(window.ethereum){
        window.ethereum.enable()
      }
        const address = "0x571a55864e3A84F4CC271C46b6E6Ce3868B98f85"
        const abi = [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "a",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "b",
                  "type": "uint256"
                }
              ],
              "name": "add",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "showSum",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const contract = new ethers.Contract(address, abi, signer)
          const add = await contract.add(2,3);
          await add.wait()
          const showSum = await contract.showSum()
          setSum(showSum.toString())
    }
  return (
    <div>
      <button onClick={getContract}>Add</button>
      <p>{sum}</p>
    </div>
  );
}

export default AddSum;