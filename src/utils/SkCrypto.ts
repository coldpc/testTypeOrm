import * as crypto from "crypto";

export class SkCrypto {
    static md5(str: string) {
        let md5 = crypto.createHash('md5');
        md5.update(str);
        str = md5.digest('hex');
        return str;
    }
}