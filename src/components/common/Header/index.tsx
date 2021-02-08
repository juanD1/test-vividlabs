import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { faHome, faPen } from "@fortawesome/free-solid-svg-icons";
import AccountManager from "components/AccountManager";
import Icon from "components/common/Icon";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";
import { StyledHeader } from "./styles";
import { colors } from "styles/globalStyles";

const Header: React.FC = () => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  const history = useHistory();

  return (
    <StyledHeader>
      {authUser.providerId !== "password" && (
        <Icon
          style={{ float: "left", margin: 16 }}
          icon={faHome}
          color={colors.primary}
          size="lg"
          onClick={() => history.push("/")}
        />
      )}
      {authUser.providerId !== "password" && (
        <Icon
          style={{ float: "left", margin: 16 }}
          icon={faPen}
          color={colors.primary}
          size="lg"
          onClick={() => history.push("edit")}
        />
      )}
      <AccountManager />
    </StyledHeader>
  );
};

export default Header;
