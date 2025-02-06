const cryptoKey = process.env.CRYPTO_KEY;

export function encrypt(key:string){
    const encryptedToken = CryptoJS.AES.encrypt(key, cryptoKey).toString();
    return encryptedToken;
}

export function decrypt(key: string){
    const bytes = CryptoJS.AES.decrypt(key, cryptoKey);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedToken;
}