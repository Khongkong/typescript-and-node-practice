import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/entities/User";
import { Crypt } from "../Util/Crypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | undefined> {
        const encryptedEmail = Crypt.encrypt(email);
        return this.findOne({email: encryptedEmail});
    }
}
