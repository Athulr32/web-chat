import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { randomBytes, createHash } from "crypto";
import secp256k1 from "secp256k1"
import { encrypt, decrypt, PrivateKey } from 'eciesjs'
import Chats from './components/Chats';
import WalletSetup from './components/WalletSetup';




export default function Home() {



  return (

    <div>
      <WalletSetup></WalletSetup>
      {/* <Chats></Chats> */}
    </div>
  )

}











// if (lastMessage.data == "Invalid" || lastMessage.data == "Invalid Key") {


//   (async () => {

//     // generate privKey
//     let privKey
//     do {
//       privKey = randomBytes(32)
//     } while (!secp256k1.privateKeyVerify(privKey))

//     // get the public key in a compressed format
//     const pubKey = secp256k1.publicKeyCreate(privKey)
//     console.log(Buffer.from(pubKey).toString("hex"))
//     const msg = "HI"
//     const hash = createHash('sha256').update(msg).digest("hex");
//     const hashBIn = Uint8Array.from(Buffer.from(hash, 'hex'));
//     // sign the message
//     const sigObj = secp256k1.ecdsaSign(hashBIn, privKey)
//     // sigObj.pub_key = pubKey
//     // sigObj.message = msg
//     let data = { "signature": [...sigObj.signature], "recid": sigObj.recid, "pub_key": [...pubKey], "message": msg };


//     const reqAuth = await fetch("http://localhost:8080/login", {
//       method: "POST",
//       headers: {
//         'Content-Type': "application/json"
//       },
//       body: JSON.stringify(data)
//     })

//     let token = await reqAuth.json();
//     console.log(token)
//     setJWT(token.token)


//   })()
// }
// else 