import addData from './mock/addData';
import updateData from './mock/updateData';
import deleteData from './mock/deleteData';
import getTraineeData from './mock/getTraineeData';

export default {
  addTrainee(args) {
    const { name, email, password } = args.input;
    if (name === 'vickyt' && email === 'monty123@gmail.com' && password === '123') return addData.success;
    if (name === '' && email === 'monty123@gmail.com' && password === '123') throw new Error('Name is required');
    if (name === 'vickyt' && email === 'monty123@gmail.com' && password === '') throw new Error('password is required');
    if (name === 'vickyt' && email === '' && password === '123') throw new Error('email is required');
    if (name === '' && email === '' && password === '') throw new Error('email is required,password is required,Name is required');
  },
  updateTrainee(args) {
    const { id, dataToUpdate } = args.input;
    const dataToUpdateLength = Object.keys(dataToUpdate).length;

    if (id === '5d7b952babfeed0edaa0a393' && dataToUpdateLength > 0) return updateData.success;
    if (id === '' && dataToUpdate) throw new Error('id is required');
    if (id === '5d7b952babfeed0edaa0a393' && (dataToUpdateLength === 0)) throw new Error('dataToUpdate is required');
  },
  deleteTrainee(args) {
    const { id } = args.input;
    if (id === '5d79c479a19617249c072a0b') return deleteData.success;
    throw new Error('user not found for delete');
  },
  getTrainee() {
    return getTraineeData.success;
  },
};
