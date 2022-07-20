export interface userFormValues {
  id: string;
  first_name: string;
  second_name: string;
  nationality: string;
  email: string;
  day: string;
  month: string;
  year: string
  picked: string;
  password: string;
  password_confirmation: string;

}

const userInitialValues: userFormValues = {
  id: '',
  first_name: '',
  second_name: '',
  nationality: '',
  email: '',
  day: 'day',
  month: 'month',
  year: 'year',
  picked: '',
  password: '',
  password_confirmation: '',
};

export default userInitialValues;
