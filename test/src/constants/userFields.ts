import { v4 as uuidv4 } from 'uuid';

export const userFirstFields = [
  {
    id: uuidv4(),
    title: 'First Name',
    model: 'first_name',
    required: true,
    placeholder: 'First Name',
    type: 'text',
  },
  {
    id: uuidv4(),
    title: 'Last name',
    model: 'second_name',
    placeholder: 'Last Name',
    required: true,
    type: 'text',
  },
];
export const userLastFields = [
  {
    id: uuidv4(),
    title: 'Password',
    model: 'password',
    onlyLogin: true,
    placeholder: 'Password',
    required: true,
    type: 'password',
  },
  {
    id: uuidv4(),
    title: 'Repeat password',
    model: 'password_confirmation',
    placeholder: 'Repeat Password',
    required: true,
    type: 'password',
  },
];
