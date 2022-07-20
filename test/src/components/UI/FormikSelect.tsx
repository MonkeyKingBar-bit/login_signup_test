import { FC } from 'react';
import { Select } from '@mui/material';

interface SelectProps {
    form: any;
    children: any;
    field: any;
    value: any;
    // { children, form, field }
}

const FormikSelect: FC<SelectProps> = (props: SelectProps) => {
  const { form, children, field } = props;
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name={name}
      value={value.name}
      label="Nationality"
      onChange={(e) => {
        setFieldValue(value.name, e.target.value as string);
      }}
      variant="standard"
      sx={{ margin: 0 }}
    >
      {children}
    </Select>
  );
};

export default FormikSelect;
