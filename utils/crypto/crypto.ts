import CryptoJS from "crypto-js";

export const encrypto = (payload: string) => {
    // SHA256 ==> 단방향이여서 복호화 불가 , AES ==> DB 조회 불가(매번 다르게 암호화되기 때문에)
    const encryptedToken = CryptoJS.SHA256(payload).toString();
    return encryptedToken;
}

// export const decrypto = (encrypted: string) => {
//     const bytes = CryptoJS.AES.decrypt(encrypted, cryptoKey);
//     const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
//
//     return decryptedToken;
// }