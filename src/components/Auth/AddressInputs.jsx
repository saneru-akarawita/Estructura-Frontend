import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import * as yup from 'yup';

const districts = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticaloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambantota',
  'Jaffna',
  'Kalutara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Monaragala',
  'Mullaitivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Ratnapura',
  'Trincomalee',
  'Vavuniya',
];

function AddressInputs(props) {
  const { spread } = props;
  return (
    <>
      <Typography sx={{ color: '#435834', textAlign: 'left' }} variant="h8">
        {' '}
        Address{' '}
      </Typography>
      <TextField
        color="secondary"
        fullWidth
        label="Address Line 1"
        type="text"
        variant="filled"
        {...spread('addressLine1')}
      />
      <TextField
        color="secondary"
        fullWidth
        label="Address Line 2"
        type="text"
        variant="filled"
        {...spread('addressLine2')}
      />
      <TextField
        color="secondary"
        fullWidth
        label="City"
        type="city"
        variant="filled"
        {...spread('city')}
      />
      <FormControl
        sx={{
          m: 1,
          marginLeft: 'auto',
          minWidth: 120,
          width: '100%',
        }}
        variant="filled"
      >
        <InputLabel color="secondary" id="selectDistrict">
          Select District
        </InputLabel>
        <Select
          displayEmpty
          labelId="selectDistrict-label"
          {...spread('district', false)}
        >
          {districts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

const addressValidators = {
  addressLine1: yup.string().required('Address Line 1 is required'),
  addressLine2: yup.string().required('Address Line 2 is required'),
  city: yup.string().required('City is required'),
  district: yup
    .string()
    .oneOf(districts, 'District has to be valid')
    .required('District is required'),
};

const addressInitialValues = {
  addressline1: '',
  addressline2: '',
  city: '',
  district: '',
};

export { addressInitialValues, addressValidators, districts };

export default AddressInputs;
