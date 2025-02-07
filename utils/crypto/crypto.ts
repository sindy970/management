import CryptoJS from "crypto-js";

const cryptoKey : string = process.env.CRYPTO_KEY ?? "";

export const encrypto = (payload: string) => {
    const encryptedToken = CryptoJS.AES.encrypt(payload, cryptoKey).toString();
    return encryptedToken;
}

export const decrypto = (encrypted: string) => {
    const bytes = CryptoJS.AES.decrypt(encrypted, cryptoKey);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedToken;
}