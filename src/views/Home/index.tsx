import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "components/common/Layout";
import Icon from "components/common/Icon";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";
import { colors, Img } from "styles/globalStyles";
import { StyledSpan } from "./styles";

const Home = (props: RouteComponentProps) => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  return (
    <Layout>
      <span style={{ textAlign: "center" }}>
        <h1 style={{ margin: "24px auto" }}>Welcome {authUser.displayName}</h1>
      </span>
      {!authUser?.photoURL ? (
        <Icon
          style={{ float: "right", margin: 16 }}
          icon={faUser}
          color={colors.primary}
          size="lg"
        />
      ) : (
        <Img
          className="rounded-circle"
          src={authUser?.photoURL}
          alt="user"
          width="88px"
          margin="16px auto"
          display="block"
          cursor="pointer"
        />
      )}
      <div style={{ textAlign: "center", padding: 24 }}>
        <StyledSpan fontSize="24px" fontWeight="bold" margin="16px auto">
          {authUser.displayName}
        </StyledSpan>
        <StyledSpan fontSize="16px" margin="16px auto">
          {authUser.email}
        </StyledSpan>
        <StyledSpan fontSize="16px" margin="16px auto">
          {authUser?.phoneNumber}
        </StyledSpan>
        <StyledSpan fontSize="12px" margin="16px auto">
          Would you like edit your info?; let's click on pen of header
        </StyledSpan>
      </div>
    </Layout>
  );
};

export default Home;
