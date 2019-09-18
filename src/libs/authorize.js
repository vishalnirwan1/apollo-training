import * as jwt from 'jsonwebtoken';
import { configuration } from '../config';

export default (id, token, subscriptionToken) => {
  try {
    const { secretKey } = configuration;
    const userdetail = jwt.verify(token, secretKey);

    const subsUserDetail = jwt.verify(subscriptionToken, secretKey);

    if (id === subsUserDetail.originalID) {
      return true;
    } if (subsUserDetail.role === 'head-trainer') {
      return true;
    } if (userdetail.role === 'trainee') {
      if ((userdetail.role === subsUserDetail.role) && (userdetail.originalId === subsUserDetail.originalId)) {
        return true;
      }
    } else { return false; }
  } catch (err) {
    console.log(err);
    return false;
  }
};
