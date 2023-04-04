import { useEffect, useState } from "react"
import { generateMnemonic } from "bip39"
import { ethers } from "ethers"
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from "next/router";
import { randomBytes, createHash } from "crypto";
import secp256k1 from "secp256k1";

async function login(privKey,pubKey) {

    console.log(pubKey.length)
    const msg = "HI"
    const hash = createHash('sha256').update(msg).digest("hex");
    const hashBIn = Uint8Array.from(Buffer.from(hash, 'hex'));

    const sigObj = secp256k1.ecdsaSign(hashBIn, privKey)

    let data = { "signature": [...sigObj.signature], "recid": sigObj.recid, "pub_key": [...pubKey], "message": msg };


    const reqAuth = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })

    let res = await reqAuth.json()

    let token = res.token;

    return token



}


function LandingPage({ createWallet }) {



    return (
        <div style={{ border: "1px solid gray", margin: "200px 600px 100px", padding: "50px", borderRadius: "30px", textAlign: "center" }}>
            <div>
                Let's Get Started
                <div>An encrypted chat server</div>
            </div>

            <div style={{ padding: "100px" }}>
                <div style={{ padding: "30px" }}>
                    <div><button onClick={() => {

                        createWallet(1)
                    }}>Create a new Account</button></div>
                </div>

                <div>
                    <div><button nClick={() => {
                        createWallet(2)
                    }}>Import existing Account</button></div>
                </div>
            </div>

        </div>

    )
}

function CreateWallet() {

    const [mnemonic, setMnemonic] = useState(null)

    let router = useRouter()

    useEffect(() => {





        const mnemonic = generateMnemonic()
        const mnemonicArray = mnemonic.split(" ");
        setMnemonic(mnemonicArray);


    }, [])

    const fromHexString = (hexString) =>
    Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
  

    async function walletCreated() {

        const mnemonicWallet = ethers.Wallet.fromPhrase(mnemonic.join(" "));
        let privKey = mnemonicWallet.privateKey.slice(0,64);
        let pubKey = mnemonicWallet.publicKey;

        setCookie("private_key", privKey);
        setCookie("public_key", pubKey)
      
        let privKeyBuf = fromHexString(privKey)
        let pubKeyBuf = fromHexString(pubKey);
        console.log(privKeyBuf)
        const auth = await login(privKeyBuf,pubKeyBuf);
        if (auth.token) {
            router.push("/chat")
        }
        else{
            alert("Problem with keys Please clear cookies")
        }




    }

    return (
        <div style={{ border: "1px solid gray", margin: "200px 600px 100px", padding: "50px", borderRadius: "30px", textAlign: "center" }}>
            <div>
                Write Down your secret phrase
                <div>This will be your unique idea to chat</div>
            </div>

            {mnemonic && <div style={{ padding: "0px", border: "1px solid gray", margin: "30px" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {mnemonic.map((value, index) => {
                        return <div style={{ margin: "30px" }} key={index}>{index + 1}. {value}</div>
                    })}
                </div>
            </div>}

            <div><button onClick={walletCreated}>Submit</button></div>
        </div>

    )



}

export default function WalletSetup() {

    const [createWallet, setCreateWallet] = useState(0);

    function setCreateWalletHandler(n) {

        setCreateWallet(n)


    }

    return (
        <div>
            {console.log(createWallet)}
            {createWallet === 0 ? <LandingPage createWallet={setCreateWalletHandler}></LandingPage> : ""}
            {createWallet === 1 ? <CreateWallet ></CreateWallet> : createWallet === 2 ? <div>HI</div> : ""}

        </div>
    )



}