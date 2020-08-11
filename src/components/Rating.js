import React from "react";

import styled from "styled-components";
import Stars from "react-rating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontAwesome = styled(FontAwesomeIcon)`
  color: #ffc700;
`;

export const Rating = ({ imdbRating }) => (
  <Stars
    emptySymbol={<FontAwesome icon={["far", "star"]} size="sm" />}
    fullSymbol={<FontAwesome icon={["fas", "star"]} size="sm" />}
    initialRating={imdbRating / 2}
    readonly
  />
);
