import { Form, Formik } from 'formik';

import {
  Autocomplete, Container, Dialog, DialogActions, Button,
  DialogContent, DialogTitle, Grid, TextField, Box,
} from '@mui/material';

import { FC } from 'react';
import FormikField from '../../../UI/FormikField';
import { userFields, userFirstFields, userSecondFields } from '../../../constants/userFields';
import httpClient from '../../../api/httpClient';
import userInitialValues from '../../../initialValues/userInitialValues';
import userValidation from '../../../mixins/validation_schema/user';
import { Company, Role, UserCreateFormProps } from '../../../common/interfaces_types';

const AuthForm: FC = () => {
  const handleSubmit = (data) => console.log(data);
  return (
    <div>
      <Formik
        initialValues={userInitialValues}
        validationSchema={userValidation}
        onSubmit={handleSubmit}
      >
        {({
          dirty, isValid, handleChange, values,
        }) => (
          <Form>
            <Container maxWidth="sm">
              {/* {formErrors ? <p className="error-msg">{formErrors}</p> : null} */}
              {userFields.map((column: userFields) => (
                <FormikField
                  key={column.id}
                  name={column.model}
                  label={column.placeholder}
                  required={column.required}
                  type={column.type}
                  variant="standard"
                />
              ))}

              <Autocomplete
                id="role"
                options={roles}
                getOptionLabel={(option: Role) => option.role_name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onSelect={handleChange}
                    margin="normal"
                    label="Role"
                    fullWidth
                    value={values?.role}
                  />
                )}
              />

            </Container>

            <DialogActions sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
              <p>Have an account?</p>
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
