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
  @media (max-width: 60.75rem) {
    padding: 0.5rem 0;
  }
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
  transition: 0.2s ease-in-out;
`;

const ButtonBackToHome = () => (
  <WrapperIcon>
    <WrapperContent>
      <LinkTo to={"/"}>
        <Content>
          <Icon icon={["fas", "arrow-left"]} size="2x" color="#000" />
        </Content>
      </LinkTo>
    </WrapperContent>
  </WrapperIcon>
);

export default ButtonBackToHome;
