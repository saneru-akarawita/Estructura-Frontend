import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useRef, useState } from "react";
import * as yup from "yup";
import AddressInputs, {
  addressValidators,
  districts,
} from "../components/Auth/AddressInputs";
import TopBar from "../components/TopBar";
import API, { clearTokens } from "../lib/API";
import { violationsToErrors } from "../utils/Violations";

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a well formed email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm Password is required"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  contactNo: yup
    .string()
    .matches(/^(\+94)|(0)[0-9]{9}$/, "Invalid Contact Number")
    .required("Contact Number is required"),
  ...addressValidators,
});

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  contactNo: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  district: districts[0],
};

function HomeOwnerSignUp() {
  const FormRef = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <TopBar title='Sign up as a Homeowner' />
      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity='success'>
          An Email has been sent to your email address. Please verify your email
          to complete the Sign up process.
        </Alert>
      </Snackbar>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: "#f7f8f1",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent='center' spacing={4}>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Grid
              container
              style={{
                backgroundImage: 'url("/HomeOwnerBG.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "4rem",
                  paddingRight: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                    paddingBottom: "1rem",
                    marginTop: "auto",
                  }}
                >
                  Unleash your home’s potential
                </Typography>
                <Typography
                  variant='h4'
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    lineHeight: "1",
                  }}
                >
                  with everything at your fingertips
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem 3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Grid
                item
                xs={12}
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src='/Logo.png' alt='Logo' style={{ width: "40%" }} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <Formik
                  innerRef={FormRef}
                  onSubmit={(values, { setErrors, setSubmitting }) => {
                    clearTokens();
                    setSubmitting(true);
                    if (values.password !== values.confirmPassword) {
                      setErrors({ confirmPassword: "Passwords do not match" });
                    } else {
                      console.log(values);
                      values.role = "CUSTOMER";
                      API.post("/auth/register", values)
                        .then((res) => {
                          if (res.status === 200) {
                            if (res.data.success === true) {
                              console.log("Success");
                              setOpen(true);
                            } else {
                              setErrors(
                                violationsToErrors(
                                  res.data.validation_violations
                                )
                              );
                            }
                          }
                        })
                        .catch((err) => {
                          // BAD REQUEST
                          setErrors(
                            violationsToErrors(
                              err.response.data.validation_violations
                            )
                          );
                        });
                    }
                    setSubmitting(false);
                  }}
                  initialValues={initialValues}
                  validationSchema={ValidationSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => {
                    const spread = (field, helper = true) => {
                      return {
                        name: field,
                        onBlur: handleBlur,
                        onChange: handleChange,
                        value: values[field],
                        error: touched[field] && !!errors[field],
                        disabled: isSubmitting,
                        ...(helper && {
                          helperText: touched[field] && errors[field],
                        }),
                      };
                    };
                    return (
                      <form
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.5rem",
                          width: "100%",
                          maxWidth: "400px",
                          margin: "0 auto",
                        }}
                        onSubmit={handleSubmit}
                      >
                        <TextField
                          label='Email'
                          type='email'
                          fullWidth
                          variant='filled'
                          color='secondary'
                          {...spread("email")}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                            marginLeft: "2px",
                            marginRight: "2px",
                          }}
                        >
                          <TextField
                            sx={{ flex: "1", margin: "1px 1px 1px 0" }}
                            type='firstName'
                            label='First Name'
                            variant='filled'
                            size='small'
                            color='secondary'
                            {...spread("firstname")}
                          />
                          <TextField
                            sx={{ flex: "1", margin: "1px 0 1px 1px" }}
                            type='lastName'
                            label='Last Name'
                            variant='filled'
                            size='small'
                            color='secondary'
                            {...spread("lastname")}
                          />
                        </Box>
                        <TextField
                          label='Contact Number'
                          type='contactNo'
                          fullWidth
                          variant='filled'
                          color='secondary'
                          {...spread("contactNo")}
                        />
                        <TextField
                          label='Password'
                          type='password'
                          fullWidth
                          variant='filled'
                          color='secondary'
                          {...spread("password")}
                        />
                        <TextField
                          label='Confirm Password'
                          type='password'
                          fullWidth
                          variant='filled'
                          color='secondary'
                          {...spread("confirmPassword")}
                        />
                        <AddressInputs spread={spread} />
                        <Button
                          variant='contained'
                          color='primary'
                          type='submit'
                          fullWidth
                        >
                          Sign Up
                        </Button>
                      </form>
                    );
                  }}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomeOwnerSignUp;
