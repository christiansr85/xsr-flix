import React from 'react';
import { Container, Inner } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    );
}

Jumbotron.Container = function({ children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}
