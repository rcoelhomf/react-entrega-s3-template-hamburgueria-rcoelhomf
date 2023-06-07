import { styled } from "styled-components";

export const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 2.125rem;
    color: ${({font}) => font};
`

export const StyledH2 = styled.h2`
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.5rem;
    color: ${({font}) => font};
`

export const StyledH3 = styled.h3`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${({font}) => font};
`

export const StyledHeadline = styled.p`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({font}) => font};
`

export const StyledBody = styled.p`
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.5rem;
    color: ${({font}) => font};
`

export const StyledBodySec = styled.p`
    font-weight: 600;
    font-size: .875rem;
    line-height: 1.5rem;
    color: ${({font}) => font};
`

export const StyledCaption = styled.p`
    font-weight: 400;
    font-size: .75rem;
    line-height: 1rem;
    color: ${({font}) => font};
`