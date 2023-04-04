import { useEffect, useRef, useState } from "react"
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39"
import { ethers } from "ethers"
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from "next/router";
import { randomBytes, createHash } from "crypto";
import secp256k1 from "secp256k1";
import Image from "next/image";

async function login(privKey, pubKey) {

    console.log(pubKey.length)
    const msg = "HI"
    const hash = createHash('sha256').update(msg).digest("hex");
    const hashBIn = Uint8Array.from(Buffer.from(hash, 'hex'));

    const sigObj = secp256k1.ecdsaSign(hashBIn, privKey)

    let data = { "signature": [...sigObj.signature], "recid": sigObj.recid, "pub_key": [...pubKey], "message": msg };


    const reqAuth = await fetch("http://localhost:8080/login", {
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

    let router = useRouter();

    useEffect(() => {

        let token = getCookie("jwt")
        console.log(token)
        if (token) {
            router.push("/chat")
        }

    }, [])



    return (
        <div style={{ backgroundColor: "whitesmoke", backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div style={{backgroundColor:'white', borderRadius:10}}>
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
                    <div><button onClick={() => {
                        createWallet(2)
                    }}>Import existing Account</button></div>
                </div>
                </div>
                </div>
            </div>

        </div>

    )
}




function NewAccount() {


    const seedInput = useRef(null);
    let router = useRouter()

    async function createAcClick(e) {
        e.preventDefault()
        let mnemonic = seedInput.current.value;
        let val = validateMnemonic(mnemonic);
        if (!val) {
            alert("Wrong menmonics")
        }
        else {
            const seed = mnemonicToSeedSync(mnemonic.trim());
            let privKeyBytes = seed.slice(0, 32);
            console.log(privKeyBytes)
            let pubKeyBytes = secp256k1.publicKeyCreate(privKeyBytes)
            console.log(pubKeyBytes)


            setCookie("private_key", Buffer.from(privKeyBytes).toString("hex"));
            setCookie("public_key", Buffer.from(pubKeyBytes).toString("hex"))


            const auth = await login(privKeyBytes, pubKeyBytes);

            if (auth) {
                setCookie("jwt", auth)
                router.push("/chat")
            }
            else {
                alert("Problem with keys Please clear cookies")
            }
        }



    }

    return (
        <div style={{ backgroundColor: "whitesmoke", backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
            {/* <Image src={'/safespacelogo.png'} /> */}
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div style={{ backgroundColor: 'white', padding: 30, borderRadius: 10 }}>
                    <p> Enter your Secret Phrase</p>
                    <div style={{ backgroundColor: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                        <input ref={seedInput} style={{ padding: 7, margin: 10, height: 100, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}></input></div>
                    <p style={{ marginTop: 10, color: 'gray', fontSize: 14 }}>Typically 12 words separated by single spaces</p>
                    <div>
                        <button onClick={createAcClick} style={{ marginTop: 50, backgroundColor: 'white', width: '100%', height: 30 }}>Move on</button>
                    </div>
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


        const seed = mnemonicToSeedSync(mnemonic.join(" "));
        let privKeyBytes = seed.slice(0, 32);
        console.log(privKeyBytes)
        let pubKeyBytes = secp256k1.publicKeyCreate(privKeyBytes)
        console.log(pubKeyBytes)

        const mnemonicWallet = ethers.Wallet.fromPhrase(mnemonic.join(" "));
        let privKey = mnemonicWallet.privateKey.slice(0, 64);
        let pubKey = mnemonicWallet.publicKey;

        setCookie("private_key", Buffer.from(privKeyBytes).toString("hex"));
        setCookie("public_key", Buffer.from(pubKeyBytes).toString("hex"))


        const auth = await login(privKeyBytes, pubKeyBytes);

        if (auth) {
            setCookie("jwt", auth)
            router.push("/chat")
        }
        else {
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
            {createWallet === 1 ? <CreateWallet ></CreateWallet> : createWallet === 2 ? <NewAccount></NewAccount> : ""}

        </div>
    )



}