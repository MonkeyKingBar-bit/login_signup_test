export interface userFormValues {
  id: string;
  first_name: string;
  second_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  birthday: string;
}

const userInitialValues: userFormValues = {
  id: '',
  first_name: '',
  second_name: '',
  birthday: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export default userInitialValues;
