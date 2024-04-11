import React from "react";
import styled from "@emotion/styled";
import FormInput from "../../../components/form-input/form-input";
import { AUTH_VIEW } from "../enum";
import Btn from "../../../components/btn/btn";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "../../../redux/authSlice";
import { resetLoading } from "../../../redux/authSlice";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const Form = styled.form`
  padding: 10px 25px 30px;
  font-family: "Oxygen", sans-serif;

  h2 {
    color: #181725;
    font-size: 30px;
    font-weight: 700;
    font-family: inherit;
  }

  .desc {
    color: #7c7c7c;
    font-size: 16px;
    font-family: inherit;
    margin-bottom: 40px;
  }
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-top: 30px;

  span {
    cursor: pointer;
    font-size: 17px;
    color: #3e236e;
    font-weight: 700;
  }
`;

const EnterCode = ({ setCurrentAuthView }) => {
  const [code, setCode] = React.useState("");
  const { loading, phoneNumber } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleChange(event) {
    setCode(event.target.value);
  }
  return (
    <Form>
      <h2>Enter your 6-digit code</h2>
      <p className="desc">Please enter the code that was sent to your email.</p>
      <FormInput
        label="Code"
        type="number"
        name="code"
        placeholder="* * * * * *"
        value={code}
        onChange={handleChange}
      />

      <Cta>
        <span>Resend Code</span>

        <div style={{ width: "50%" }}>
          <Btn
            type="button"
            look="primary-filled"
            onClick={async () => {
              try {
                const res = await dispatch(
                  verifyOTP({ phoneNumber, otp: code })
                ).unwrap();
                // handle result here
                if (res.status === "success") {
                  setCurrentAuthView(AUTH_VIEW.SIGNIN.value);
                  resetLoading();
                  console.log(AUTH_VIEW.ENTER_CODE.value);
                }
                 
              } catch (err) {
                // handle error here
                console.error(err);
              }
            }}
          >
            Continue
          </Btn>
          {loading === "loading" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2%",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </div>
      </Cta>
    </Form>
  );
};

export default EnterCode;
