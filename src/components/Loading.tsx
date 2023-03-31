import React from "react";
import "./Loading.scss";
import { useNavigation } from "react-router-dom";

const Loading = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  return <></>;
};

export default Loading;
