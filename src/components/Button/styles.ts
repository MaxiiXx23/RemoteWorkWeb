import styled from "styled-components";

export type Variant = "primary" | "secondary";

interface IContainerButtonProps {
    variant: Variant;
}

export const ContainerButton = styled.button<IContainerButtonProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1rem;
    border: 1px solid ${({theme}) => theme.colors.black };
    border-radius: 8px;

    background-color: ${({theme, variant}) => 
        variant === "primary" ? theme.colors.black : theme.colors.white
    };

    color:  ${({theme, variant}) => 
        variant === "primary" ? theme.colors.white : theme.colors.black 
    };

    :hover {
        transition: 0.5s;
        opacity: 0.8;
    }

`;