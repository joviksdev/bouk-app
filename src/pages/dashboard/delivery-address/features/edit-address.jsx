import * as React from "react";
import styled from "@emotion/styled";
import CustomModal from "../../../../components/modal/modal";
import Btn from "../../../../components/btn/btn";
import FormInput from "../../../../components/form-input/form-input";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Header = styled.h2`
  font-weight: 700;
  font-size: 20px;
  font-family: "Oxygen", sans-serif;
  margin-bottom: 0;
  padding: 10px 5px;
  border-bottom: 1px solid #e2e2e2;
`;

const Form = styled.form`
  padding: 30px 20px 10px;
  font-family: "Oxygen", sans-serif;
`;

const AddressTypeContainer = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 16px;
    font-weight: 700;
    color: #181725;
  }
`;

export default function EditAddress({ isOpen, onCancel }) {
  const [addressInfo, setAddressInfo] = React.useState({
    name: "",
    phoneNumber: "",
    address: "",
    addressType: "delivery",
  });

  console.log(addressInfo);

  function handleChange({ target: { name, value } }) {
    setAddressInfo((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <CustomModal isOpen={isOpen} closeModal={onCancel}>
      <Header>Edit Address</Header>
      <Form>
        <FormInput
          label="Name"
          type="text"
          name="name"
          placeholder="Fawale Gbolahan"
          value={addressInfo.name}
          onChange={handleChange}
        />
        <FormInput
          label="Phone Number"
          type="number"
          name="phoneNumber"
          placeholder="8649648940"
          value={addressInfo.phoneNumber}
          onChange={handleChange}
        />
        <FormInput
          label="Address"
          type="text"
          name="address"
          placeholder="No 5 Ogunbadejo street lagos"
          value={addressInfo.address}
          onChange={handleChange}
        />
        <AddressTypeContainer>
          <label id="demo-row-radio-buttons-group-label">Address Type</label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="addressType"
            defaultValue="delivery"
            value={addressInfo.addressType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="delivery"
              control={<Radio />}
              label="Delivery"
            />
            <FormControlLabel
              value="pickUp"
              control={<Radio />}
              label="Pick Up"
            />
          </RadioGroup>
        </AddressTypeContainer>

        <Btn type="button" look="primary-filled">
          Update Address
        </Btn>
      </Form>
    </CustomModal>
  );
}
