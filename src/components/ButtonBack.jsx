import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { ArrowLeft } from 'iconoir-react';

const SectionHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TitleHead = styled.h1`
    font-size: xx-large;
    margin-left: 1rem;
`;

const ButtonBck = styled.button`
    padding: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
`;

function ButtonBack({ title }) {
    return (
        <SectionHead>
            <ButtonBck onClick={() => window.history.back()}>
                <ArrowLeft width={42} height={42} />
            </ButtonBck>
            {title ? <TitleHead>{title}</TitleHead> : null}
        </SectionHead>
    );
}

ButtonBack.propTypes = {
    title: PropTypes.string,
};

export { ButtonBack };
