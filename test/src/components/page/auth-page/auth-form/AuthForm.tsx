import { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Container, DialogActions, Button, MenuItem, InputLabel, RadioGroup, FormLabel,
  FormControlLabel, Radio, FormControl,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import FormikField from '../../../UI/FormikField';
// import httpClient from '../../../api/httpClient';
import userValidation from '../../../../mixins/validation_schema';
import userInitialValues, { userFormValues } from '../../../../initialValues/user';
import { userFirstFields, userLastFields } from '../../../../constants/userFields';
import FormikSelect from '../../../UI/FormikSelect';
import BirthField from './BirthField';

const AuthForm: FC = () => {
  const handleSubmit = (data: userFormValues) => console.log(data);
  return (
    <div className="auth-form">
      <p className="auth-form__title">New  user?</p>
      <p className="auth-form__subtitle">Use the form below to create your account.</p>
      <Formik
        initialValues={userInitialValues}
        validationSchema={userValidation}
        onSubmit={handleSubmit}
      >
        {({
          dirty, isValid,
        }) => (
          <Form>
            <Container maxWidth="sm" className="auth-form__items">
              {/* {formErrors ? <p className="error-msg">{formErrors}</p> : null} */}
              <div className="auth-form__item">
                {userFirstFields.map((column) => (
                  <FormikField
                    key={column.id}
                    name={column.model}
                    label={column.placeholder}
                    required={column.required}
                    type={column.type}
                    sx={{ m: 0, minWidth: 235 }}
                    variant="standard"
                  />
                ))}
              </div>

              <div className="auth-form__item">
                <FormControl sx={{ m: 0, minWidth: 234 }}>
                  <InputLabel id="demo-simple-select-label" sx={{ m: 0 }}>Nationality</InputLabel>
                  <Field name="nationality" component={FormikSelect}>
                    <MenuItem value="american">American</MenuItem>
                    <MenuItem value="russian">Russian</MenuItem>
                    <MenuItem value="german">German</MenuItem>
                  </Field>
                </FormControl>

                <Field type="email" name="email" sx={{ m: 0, minWidth: 235 }} component={TextField} label="E-mail" required variant="standard" />
              </div>

              <div className="auth-form__item">
                <BirthField />
                <FormControl sx={{ m: 0, minWidth: 235 }}>
                  <FormLabel component="legend" sx={{ textAlign: 'left' }}>Gender</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio">
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>

              </div>

              <div className="auth-form__item">
                {userLastFields.map((column) => (
                  <FormikField
                    key={column.id}
                    name={column.model}
                    label={column.placeholder}
                    required={column.required}
                    type={column.type}
                    sx={{ m: 0, minWidth: 235 }}
                    variant="standard"
                  />
                ))}
              </div>
            </Container>

            <DialogActions sx={{ justifyContent: 'space-between', padding: '8px 22px' }}>
              <div className="auth-form__btn">
                <p>Have an account?</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Login</a>
              </div>
              <Button
                type="submit"
                disabled={!dirty || !isValid}
                color="success"
                variant="outlined"
              >
                Complete Signup
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default AuthForm;
