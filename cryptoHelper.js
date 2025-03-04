import crypto from "crypto";

// AES-256-CBC encryption details
const algorithm = "aes-256-cbc";
const secretKey = "1234567890abcdef1234567890abcdef"; // 32 characters
const iv = "1234567890abcdef"; // 16 characters

// Function to encrypt data
export function encryptedData(text) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, "utf-8"),
     Buffer.from(iv, "utf-8"));
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

// Function to decrypt data
export function decryptedData(encryptedText) {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, "utf-8"),
         Buffer.from(iv, "utf-8"));
        let decrypted = decipher.update(encryptedText, "hex", "utf-8");
        decrypted += decipher.final("utf-8");
        return decrypted;
}