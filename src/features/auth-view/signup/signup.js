import React from "react";
import styled from "@emotion/styled";
import FormInput from "../../../components/form-input/form-input";
import { AUTH_VIEW } from "../enum";
import Btn from "../../../components/btn/btn";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/authSlice";
import { resetLoading } from "../../../redux/authSlice";

const Form = styled.form`
  padding: 10px 25px 30px;
  font-family: "Oxygen", sans-serif;
  height: '70%';
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
  justify-content: center;
  gap: 5px;
  margin-top: 30px;

  span {
    color: #181725;
    font-weight: 700;
    font-size: 14px;
  }

  a {
    color: #6438b0 !important;
    font-family: "Oxygen", sans-serif;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`;

const SignUp = ({ setCurrentAuthView }) => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  function handleChange({ target: { name, value } }) {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <Form>
      <h2>Sign Up</h2>
      <p className="desc">Please fill in your details to continue</p>
      <FormInput
        label="Name"
        type="text"
        name="name"
        placeholder="Fulll name"
        value={userDetails.name}
        onChange={handleChange}
      />
      <FormInput
        label="Phone Number"
        type="number"
        name="phoneNumber"
        placeholder="name@example.com"
        value={userDetails.phoneNumber}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="name@example.com"
        value={userDetails.email}
        onChange={handleChange}
      />

      <FormInput
        label="Password"
        type="password"
        name="password"
        placeholder="**********"
        value={userDetails.password}
        onChange={handleChange}
      />

      <Btn
        type="button"
        look="primary-filled"
        onClick={async () => {

          try {
            const res = await dispatch(register({name: userDetails.name, phoneNumber: userDetails.phoneNumber, email: userDetails.email, password: userDetails.password })).unwrap();
            // handle result here
           if( res.status === "success") {
            setCurrentAuthView(AUTH_VIEW.ENTER_CODE.value);
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

      <Cta>
        <span>Already have an account?</span>
        <a onClick={() => setCurrentAuthView(AUTH_VIEW.SIGNIN.value)}>Login</a>
      </Cta>
    </Form>
  );
};

export default SignUp;
