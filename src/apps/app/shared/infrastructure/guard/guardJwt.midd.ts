import { Uuid } from '../../domain/value-object/Uuid';
import { User } from '../../../user/user';
import jwt from 'jsonwebtoken';

const secret: string = process.env.NODE_JWT_SEED || 'sin semilla';

export class GuardAppJwt  {
  getKey(user: User): Promise<string> {
    try {
      const unMin = 60 * 60;
      const payload = jwt.sign({ userId: user.id.value }, secret, { expiresIn: unMin });
      return Promise.resolve(payload);
    } catch (error) {
      throw error;
    }
  }
  getDecodedKey(key: string): Promise<Uuid> {
    try {
      return new Promise((res, rej) => {
        jwt.verify(key, secret, function (err, decoded: any) {
          if (err) {
            return rej(err);
          }
          res(new Uuid(decoded.userId));
        });
      });
    } catch (error) {
      throw error;
    }
  }
}
