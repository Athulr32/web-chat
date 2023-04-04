import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { randomBytes, createHash } from "crypto";
import secp256k1 from "secp256k1"
import { encrypt, decrypt, PrivateKey } from 'eciesjs'


function allStorage() {

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
  
    while (i--) {
      if (keys[i] === "ally-supports-cache") {
        continue
      }
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
  
  
  
    return values;
  }


  async function generate() {

    (async () => {
  
      // generate privKey
      let privKey
      do {
        privKey = randomBytes(32)
      } while (!secp256k1.privateKeyVerify(privKey))
  
      // get the public key in a compressed format
      const pubKey = secp256k1.publicKeyCreate(privKey)
  
      const msg = "HI"
      const hash = createHash('sha256').update(msg).digest("hex");
      const hashBIn = Uint8Array.from(Buffer.from(hash, 'hex'));
      // sign the message
      const sigObj = secp256k1.ecdsaSign(hashBIn, privKey)
      // sigObj.pub_key = pubKey
      // sigObj.message = msg
      let data = { "signature": [...sigObj.signature], "recid": sigObj.recid, "pub_key": [...pubKey], "message": msg };
  
  
      const reqAuth = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
      })
  
      console.log(await reqAuth.json())
  
  
    })()
  
  }


export default function Chats() {



    const [chats, setChats] = useState("")
    const [update, setUpdate] = useState(0);
    const [sentMessage, setSentMessage] = useState("")
    const [auth, setAuth] = useState(false);
    const [pubKey, setPubKey] = useState("");
    const [jwt, setJWT] = useState("eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwMmM1NjkxYTc3ZDY3OTQyMGM2NGFlZmQ5MzM0NTFiYTE3NmE4NGM0ZmQzMjA4ZWFlMWFlNDcwOTJkZmI3NGUzMTkifQ.s8JWC0iNL4fXsklU1P7UnUpbkYhQRFQFn6XHCZyOrmU")

    const [socketUrl, setSocketUrl] = useState('ws://localhost:8081/');


    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];


    useEffect(() => {


        let allChats = allStorage()

        setChats(allChats)

        if (lastMessage !== null) {

            if (lastMessage.data == "Authenticated") {
                setAuth(true)
                console.log("Authenticated with websocket")
                return;

            }
            else if (lastMessage.data == "Message sent" || lastMessage.data == "User offline") {

                console.log("Success")
                let oldData = JSON.parse(localStorage.getItem(sentMessage.user) || "[]");
                oldData.push(sentMessage)
                localStorage.setItem(sentMessage.user, JSON.stringify(oldData))



                let allChats = allStorage()

                // delete allChats["ally-supports-cache"]
                setChats(allChats)

                setUpdate(() => {
                    return !update
                })
            }

            else {

                //User messages
                try {

                    let msg = JSON.parse(lastMessage.data);


                    if (msg.from) {

                        let sender = msg.from;
                        let cipher = msg.cipher;


                        let data = {
                            user: sender,
                            cipher,
                            receive: true
                        }

                        let oldData = JSON.parse(localStorage.getItem(sender) || "[]");
                        console.log(oldData)
                        oldData.push(data)
                        localStorage.setItem(sender, JSON.stringify(oldData))



                        let allChats = allStorage()

                        // delete allChats["ally-supports-cache"]
                        setChats(allChats)

                        setUpdate(() => {
                            return !update
                        })
                    }

                }
                catch (e) {


                }

            }


            return;
        }


        if (connectionStatus == "Open" && !auth) {

            sendMessage(JSON.stringify({ token: jwt }));


        }





    }, [lastMessage, readyState]);



    async function sendMess(e) {

        e.preventDefault()
        let message = Buffer.from("Hello how are you");
        let reciever = "0271b012d6238af8e689c3d3a1f400f4b429556cdce5834cc21903f7e5b1971784";
        let encryptData = encrypt(reciever, message)
        console.log(encryptData.toString("hex"))

        let data = {
            user: "0271b012d6238af8e689c3d3a1f400f4b429556cdce5834cc21903f7e5b1971784",
            cipher: "helfdslo",
            receive: false
        }


        // localStorage.setItem(sender, JSON.stringify(data))
        sendMessage(JSON.stringify({ cipher: encryptData.toString("hex"), public_key: "0271b012d6238af8e689c3d3a1f400f4b429556cdce5834cc21903f7e5b1971784" }))

        setSentMessage(data)


    }



    return (
        <>
            <div style={{ height: "100vh" }}>

                <div style={{ margin: "20px 100px 0px", backgroundColor: "gray", height: "100%" }}>

                    <div style={{ display: "flex" }}>


                        <div style={{ width: "50%" }}>
                            <button onClick={sendMess}>Send</button>
                            {console.log(chats)}
                        </div>

                        <div>
                            Hi
                            <button onClick={generate}>Send</button>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}