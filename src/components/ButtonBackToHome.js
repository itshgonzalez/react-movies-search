import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const WrapperIcon = styled.div`
  padding: 0.5rem 1rem;
`;

const WrapperContent = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  display: flex;
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const TextIcon = styled.span`
  display: none;
  padding-left: 0.5rem;

  ${Content}:hover & {
    display: flex;
  }
`;

const ButtonBackToHome = () => (
  <WrapperIcon>
    <WrapperContent>
      <LinkTo to={"/"}>
        <Content>
          <Icon icon={["fas", "arrow-left"]} size="2x" color="#000" />
          <TextIcon>Back to Home</TextIcon>
        </Content>
      </LinkTo>
    </WrapperContent>
  </WrapperIcon>
);

export default ButtonBackToHome;
