import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { randomBytes, createHash } from "crypto";
import secp256k1 from "secp256k1"
import { encrypt, decrypt, PrivateKey } from 'eciesjs'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i] === "ally-supports-cache") {
            continue
        }

        values.push({ from: keys[i], data: JSON.parse(localStorage.getItem(keys[i])) });
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


        const reqAuth = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(await reqAuth.json())


    })()

}



async function getMessages(jwt) {

    const get = await fetch("http://localhost:8080/getMessage", {
        headers: {
            "AUTHENTICATION": jwt
        }
    });

    const messages = await get.json();
    console.log("Inside" + messages)
    return messages





}




export default function Chats() {

    let router = useRouter()

    const [chats, setChats] = useState("")
    const [update, setUpdate] = useState(0);
    const [sentMessage, setSentMessage] = useState("")
    const [auth, setAuth] = useState(false);
    const [pubKey, setPubKey] = useState("");
    const [jwt, setJWT] = useState("")

    const [socketUrl, setSocketUrl] = useState('ws://localhost:8080/');


    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];


    useEffect(() => {

        if (!jwt) {
            let token = getCookie("jwt")
            setJWT(token)
            if (!token) {
                localStorage.clear()
                router.push("/")

            }
        }


        let allChats = allStorage()

        setChats(allChats)

        if (lastMessage !== null) {

            if (lastMessage.data == "Authenticated") {
                setAuth(true)
                console.log("Authenticated with websocket");

                (async () => {
                    let msg = await getMessages(jwt)
                    let pk = getCookie("private_key");
                    console.log("Extra meesa" + msg)
                    msg.map((value, index) => {

                        let data = {
                            user: value.from,
                            cipher: decrypt(pk, Buffer.from(value.cipher, "hex")).toString("ascii"),
                            receive: true
                        }

                        let oldData = JSON.parse(localStorage.getItem(value.from) || "[]");
                        oldData.push(data)
                        localStorage.setItem(value.from, JSON.stringify(oldData))


                        let allChats = allStorage()

                        // delete allChats["ally-supports-cache"]
                        setChats(allChats)

                    })
                })()
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
                    console.log("Hello" + msg)

                    if (msg.from) {

                        let sender = msg.from;
                        let cipher = msg.cipher;
                        let privKey = getCookie("private_key")
                        let decryptCipher = decrypt(privKey, Buffer.from(cipher, "hex")).toString("ascii")
                        console.log("Decrypt " + decryptCipher)
                        let data = {
                            user: sender,
                            cipher: decryptCipher,
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


        if (connectionStatus == "Open" && !auth && jwt) {

            sendMessage(JSON.stringify({ token: jwt }));


        }





    }, [lastMessage, readyState]);



    async function sendMess(e) {

        e.preventDefault()
        let message = Buffer.from("Athul");
        let reciever = "03b04d7af9b2d14bf651354203f0e42e5f31ea36df8a490000c2f93cf5da35f98d";
        let encryptData = encrypt(reciever, message)
        console.log(encryptData.toString("hex"))

        let data = {
            user: "03b04d7af9b2d14bf651354203f0e42e5f31ea36df8a490000c2f93cf5da35f98d",
            cipher: "Athul",
            receive: false
        }


        // localStorage.setItem(sender, JSON.stringify(data))
        sendMessage(JSON.stringify({ cipher: encryptData.toString("hex"), public_key: "03b04d7af9b2d14bf651354203f0e42e5f31ea36df8a490000c2f93cf5da35f98d" }))

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