
// connect to metamask
async function connect() {
    if (window.ethereum != undefined) {
       try {
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
          console.log(accounts, 'accounts');
          alert('Connected to MetaMask!');
       } catch (error) {
          console.error('MetaMask connection error:', error);
       }
    } else {
       alert('MetaMask not detected. Please install MetaMask.');
    }
 }
 let account;
 const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" }); 
        account = accounts[0];
        document.getElementById("accountarea").innerHTML = account;
    }
 }
 const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "createStudentDetail",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "deleteDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "updateDetailsAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "updateDetailsName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "updateStudentDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_ID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Details",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "getStudentDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const Address = "0x6dFb35e3AC2FDc1c388A0297f37B4437d91D2AD9";

 const connectToContract = async () => {
   window.web3 = new Web3(window.ethereum);
   window.contract = await new window.web3.eth.Contract(ABI, Address);
   document.getElementById("contractarea").innerHTML = "connected to smart contract";
 }
 const getId = async() => {
   window.web3 = new Web3(window.ethereum);
   window.contract = await new window.web3.eth.Contract(ABI, Address);
   const getid = await window.contract.methods._ID().call();
   document.getElementById("dataId").innerHTML = `ID is ${getid}`;
   console.log("id is", getid)
 }
 document.getElementById("createDetail").addEventListener("submit", async function (event) {
   event.preventDefault();
   try {
      const inputName = document.getElementById("inputName").value;
      const inputAge = parseInt(document.getElementById("inputAge").value);
      const inputGender = document.getElementById("inputGender").value;
      console.log(inputName, 'detail created')
      window.web3 = new Web3(window.ethereum);
      window.contract = await new window.web3.eth.Contract(ABI, Address);
      const detail = await window.contract.methods.createStudentDetail(inputName, inputAge, inputGender).send({from: account});
      console.log("this is", detail);
   } catch (error) {
      console.log(error, 'this is a callback error')
   }
 });
