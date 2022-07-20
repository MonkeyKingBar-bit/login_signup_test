import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { Field } from 'formik';
import FormikSelect from '../../../UI/FormikSelect';

const BirthField = () => (
  <div>
    <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ textAlign: 'left' }}>Date of Birth</InputLabel>
    <div className="auth-form__item-select">
      <FormControl variant="standard" sx={{ minWidth: 56 }} margin="none">
        <InputLabel htmlFor="uncontrolled-native">Day</InputLabel>
        <Field name="day" component={FormikSelect} sx={{ margin: 0 }}>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Field>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 91 }} margin="none">
        <InputLabel htmlFor="uncontrolled-native">Month</InputLabel>
        <Field name="month" component={FormikSelect}>
          <MenuItem value="january">January</MenuItem>
          <MenuItem value="february">February</MenuItem>
          <MenuItem value="december">December</MenuItem>
        </Field>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 68 }} margin="none">
        <InputLabel htmlFor="uncontrolled-native">Year</InputLabel>
        <Field name="year" component={FormikSelect}>
          <MenuItem value="1995">1995</MenuItem>
          <MenuItem value="1985">1985</MenuItem>
          <MenuItem value="1980">1980</MenuItem>
        </Field>
      </FormControl>
    </div>

  </div>
);

export default BirthField;
