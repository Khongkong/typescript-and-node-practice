import { randomBytes } from "crypto";
import Encryption from "encrypt-decrypt-library";

export class Crypt {
    private static crypt: Encryption

    public static encrypt(value: string | number | undefined): string {
        if (!Crypt.crypt) {
            Crypt.setCrypt();
        }
        return Crypt.crypt.encrypt(value);
    }

    public static decrypt(token: string | undefined): string {
        if (!Crypt.crypt) {
            Crypt.setCrypt();
        }
        return Crypt.crypt.decrypt(token);
    }

    private static setCrypt(): void {
        const config = {
            algorithm: process.env.ALGORITHM || 'aes-128-ofb',
            encryptionKey: process.env.ENCRYPTION_KEY || randomBytes(8).toString('hex'),
            salt: process.env.SALT || '',
            iv: process.env.IV ? Buffer.from(process.env.IV, 'hex') : randomBytes(16),
        }
        Crypt.crypt = new Encryption(config);
    }
}
