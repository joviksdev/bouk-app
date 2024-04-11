import React from "react";
import styled from "@emotion/styled";
import { MdNotifications } from "react-icons/md";
import { Avatar } from "@mui/material";
import { ReactComponent as Logo } from "../../../../assets/bouk-logo.svg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // max-width: 1300px;
  padding: 12px 75px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 12px 30px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export default function Header() {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1",
        backgroundColor: "#fff",
      }}
    >
      <StyledHeader>
        <div>
          <Logo />
        </div>

        <HeaderActions>
          <MdNotifications fontSize={20} cursor="pointer" />

          <Avatar
            {...stringAvatar("Gbolahan Fawale")}
            sx={{ width: 36, height: 36 }}
          />
        </HeaderActions>
      </StyledHeader>
    </div>
  );
}
