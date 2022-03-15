import React from 'react';

import styled from 'styled-components';

import ButtonBackToHome from 'components/ButtonBackToHome';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    margin: 2rem auto;
`;

const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    margin: 1rem auto;
`;

const Title = styled.h1`
    font-weight: 700;
`;
const SubTitle = styled.h2`
    font-weight: 700;
`;

function NotFound() {
    return (
        <Wrapper>
            <ButtonBackToHome />
            <NotFoundContent>
                <span role="img" aria-label="sadface">
                    😔
                </span>
                <Title>404!</Title>
                <SubTitle>Not found</SubTitle>
            </NotFoundContent>
        </Wrapper>
    );
}

export default NotFound;
