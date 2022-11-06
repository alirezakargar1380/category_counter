import jwt from "jsonwebtoken"
import Exception from "../utils/error.utility";

class JWT {
    private secret: string;
    constructor() {
        this.secret = process.env.JWT_SECRET || 'yrturtyutyruryuryurtyrt'
    }

    login_token(data: any) {
        var token = jwt.sign(data, this.secret, {
            expiresIn: '1h'
        });
        return token
    }

    verify_token(token: string) {
        try {
            var decoded = jwt.verify(token, this.secret);
            return decoded
        } catch (err) {
            throw Exception.setError("invalid token", true)
        }
    }
}

export default new JWT()