import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #222;
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  margin: 0 1em;

  ${(props) =>
    props.pri &&
    css`
      background: transparent;
      color: red;
    `}
`;

const Config = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(!loading);
  };
  return (
    <div onClick={handleChange}>
      {loading ? <Button>button</Button> : <Button pri>button</Button>}
    </div>
  );
};

export default Config;
