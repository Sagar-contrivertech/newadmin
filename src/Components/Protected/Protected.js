import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Protected = (props) => {
  let Cmp = props.cmp;
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
};

export default Protected;