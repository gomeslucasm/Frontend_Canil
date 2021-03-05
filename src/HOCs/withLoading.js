import React from "react";

const withLoading = (WrappedComponent) => {
  const WithLoading = (props) => {
    if (props.data.length === 0) {
      return <> Página de loading</>;
    } else {
      return <WrappedComponent />;
    }
  };
  return withLoading;
};

export default withLoading;
