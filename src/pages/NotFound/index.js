import React from 'react';
import styled from 'styled-components';

import { ButtonBack } from '../../components/ButtonBack';
import { NotFoundImage } from '../../components/NotFoundImage';

const Main = styled.main`
    box-sizing: border-box;
`;

const Section = styled.section`
    display: block;
    padding: 2rem;
    margin: 0 auto;
    max-width: 76rem;
`;

const SectionBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    justify-content: center;
    align-items: center;
`;

const SectionTitle = styled.h2`
    padding-bottom: 8rem;
`;

function NotFound() {
    return (
        <Main>
            <Section>
                <ButtonBack />
                <SectionBody>
                    <SectionTitle>¡Oooops! Esta página no existe</SectionTitle>
                    <NotFoundImage width={'25rem'} />
                </SectionBody>
            </Section>
        </Main>
    );
}

export { NotFound };
