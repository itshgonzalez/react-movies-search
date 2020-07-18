import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  width: 48px;
  height: 48px;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const ButtonBackToHome = () => (
  <Link to={"/"}>
    <Icon icon={["fas", "arrow-left"]} size="2x" color="#000" />
  </Link>
);

export default ButtonBackToHome;
