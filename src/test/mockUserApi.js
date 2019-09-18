import userProfileData from './mock/userProfiledata';
import loginData from './mock/loginData';

export default {
  profile() {
    return userProfileData.success;
  },
  login(args) {
    const { email, password } = args.input;
    if ((email === 'vishal@gmail.com') && (password === 'Training@123')) {
      return loginData.success;
    }
    if ((email === 'visha@gmail.com') && (password === 'Training@123')) throw new Error('User not found');
  },
};
