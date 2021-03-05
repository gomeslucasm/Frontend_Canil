import React from "react";
import DefaultPage from "../Components/DefaultPage";

const wrapperPage = (WrappedComponent) => {
  const WrapperPage = () => {
    return (
      <DefaultPage>
        <WrappedComponent />
      </DefaultPage>
    );
  };
  return WrapperPage;
};

export default wrapperPage;