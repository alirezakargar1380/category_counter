import crypto from "crypto"

export const hash = (password: string) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
    return {
        salt: salt,
        hash: hash
    }
} 

export const hashBysalt = (password: string, salt: string): string => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
} 