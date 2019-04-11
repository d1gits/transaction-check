var Web3 = require("web3");
let tx = require("ethereumjs-tx");

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/b6860465a3ae47089adc24863e582531"
  )
);

let abi = [
  {
    constant: false,
    inputs: [
      {
        name: "x",
        type: "uint256"
      }
    ],
    name: "addNum",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getSum",
    outputs: [
      {
        name: "sum",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

// let contract = Web3.eth.contract(abi);
// let contractAddress = "0xc8fe6f104a5076a8d3b1284cd1a48095d6f5b5cd";
// let contractInstance = contract.at(contractAddress);

// let defaultAccount = '0x262b76df1dcb6542aa4a19296a824f0fdd1b4b04';
// let privatekey = 'ba456ad306a69c3830eed33f690e8f5b93e36cea3cd37ed9604f71b95a5ae1e3';

//     var num = 2;

//     var data = contractInstance.addNum.getData(num);
//             sendRaw(data, function(err, hash){
//                 if(err)
//                 {
//                    console.log("err "+err);
//                 }
//                 else
//                 {
//                     console.log("hash "+hash);
//                 }
//             });

// /**
//  * Function to signed and call function in solidity
//  * param data
//  * return (err, transactionhash)
//  */

// function sendRaw(data, callback)
// {
//     var rawTx  = {
//         nonce: Web3.toHex(++count),
//         from: Web3.toHex(defaultAccount),
//         gasLimit: Web3.toHex(300000),
//         gasPrice: Web3.toHex(Web3.toWei('20', 'gwei')),
//         to: Web3.toHex(contractAddress),
//         value: 0,
//         data: data
//     };
//     var privateKey = new Buffer(privatekey, 'hex');
//     var transaction = new tx(rawTx);
//     transaction.sign(privateKey);

// }

// console.log(web3.utils.toHex(300000));
// console.log(web3.utils.toHex(Web3.toWei("20", "gwei")));

var count = web3.eth
  .getTransactionCount("0xacad7f7dad2d7490260007b388c48a45b31cf552")
  .then(count => {
    var rawTx = {
      nonce: web3.utils.toHex(count++),
      from: web3.utils.toHex("0xacad7f7dad2d7490260007b388c48a45b31cf552"),
      gasLimit: web3.utils.toHex(300000),
      gasPrice: web3.utils.toHex(web3.utils.toWei("20", "gwei")),
      to: web3.utils.toHex("0x115960DecB7aA60f8D53c39cc65e30c860A2E171"),
      value: 100000000,
      data: ""
    };
    // console.log(rawTx);

    var privateKey = new Buffer(
      "003150be54a8c987dad7d999339c51f7c27d4790589ebe6ff958d80787eaed52",
      "hex"
    );
    var transaction = new tx(rawTx);

    transaction.sign(privateKey);
    console.log(transaction.toJSON());
    var serializedTx = transaction.serialize().toString("hex");
    console.log(serializedTx);
    // console.log(
    //   "F86502844A817C8082493E94115960DECB7AA60F8D53C39CC65E30C860A2E17182F424801BA00A08CD8C91293EF7BDC9EC7822DE4A2B10798FF8BBFCD8D86B022847BE37CC42A00080012603A313528F3DC81C850D644F1BC1316AB610078F7FF0C9735F58D8E8".toLowerCase()
    // );
    // console.log(serializedTx);
    // var serializedTx =
    //   "F86702844A817C8082493E94115960DECB7AA60F8D53C39CC65E30C860A2E1718405F5E100801CA00C37BBF57F03E9408E8AB0CCC7C097020C71D292B8484E5AE5C7785027040C09A03FBAC7286D698345F7B51E828523BEF05D24946B23D1D25A58F1EFDE4E6ED2D6";
    // // console.log(new tx("0x" + serializedTx).getSenderAddress().toString("hex"));
    // web3.eth.sendSignedTransaction("0x" + serializedTx, function(err, result) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("success");
    //     console.log(result);
    //   }
    // });
  });
