import { ErrorMessage, Field } from 'formik';
import TextField from '@mui/material/TextField';
import { FC } from 'react';

interface FormikFieldProps {
    name: string;
    label: string | undefined;
    type: string;
    required: boolean;
    variant: string;
    [key: string]: any;
}

const FormikField: FC<FormikFieldProps> = ({
  name, label, type, required, variant, ...other
}) => (
  <div>
    <Field
      required={required}
      autoComplete="off"
      as={TextField}
      label={label}
      name={name}
      fullWidth
      type={type}
      helperText={<ErrorMessage name={name} className="error-msg" />}
      variant={variant}
      {...other}
    />
  </div>
);

export default FormikField;
