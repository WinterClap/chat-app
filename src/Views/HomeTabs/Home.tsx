import React from "react";
import { CenteredView, StyledText } from "../../../Components/common";
import { useAuth } from "../../../contexts/AuthProvider";

interface Props {}

export const Home = ({}) => {
  const { currentUser } = useAuth();

  return (
    <CenteredView>
      <StyledText fontSize={30}>
        {currentUser === null ? "Hello, Stranger" : `Hello, ${currentUser.name} from Home`}
      </StyledText>
    </CenteredView>
  );
};
