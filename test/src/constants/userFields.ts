import { v4 as uuidv4 } from 'uuid';

export const userFields = [
  {
    id: uuidv4(),
    title: 'First Name',
    model: 'first_name',
    required: true,
    placeholder: 'Enter First Name',
    type: 'text',
  },
  {
    id: uuidv4(),
    title: 'Last name',
    model: 'second_name',
    placeholder: 'Enter Last Name',
    required: true,
    type: 'text',
  },
  {
    id: uuidv4(),
    model: 'birthday',
    required: true,
    type: 'date',
  },
  {
    id: uuidv4(),
    title: 'Login',
    model: 'login',
    placeholder: 'Login',
    required: true,
    type: 'text',
  },
  {
    id: uuidv4(),
    title: 'Email',
    model: 'email',
    placeholder: 'Enter email',
    required: true,
    type: 'text',
  },
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