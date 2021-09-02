import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { CenteredView, StyledText } from "../../../Components/common";
import { useAuth } from "../../../contexts/AuthProvider";

interface Props {}

export const Account = ({}) => {
  const { logout, currentUser } = useAuth();

  return (
    <CenteredView>
      <StyledText fontSize={30}>
        {currentUser === null ? "Hello, Stranger" : `Hello, ${currentUser.name} from account`}
      </StyledText>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </CenteredView>
  );
};
