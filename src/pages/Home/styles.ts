import styled from "styled-components";

export const ContainerMain = styled.section`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    gap: 8rem;
    padding: 8rem 8rem 0 8rem;
    

    @media ${({theme}) => theme.device.tablet} {
        flex-direction: column-reverse;
        padding: 8rem 8rem 0 8rem;
    }

    @media ${({theme}) => theme.device.laptop} {
        padding: 8rem 2rem 0 2rem;
    }

    @media ${({theme}) => theme.device.mobileL} {
        padding: 8rem 2rem 0 2rem;
    }

    @media ${({theme}) => theme.device.mobileM} {
        padding: 8rem 1.5rem 0 1.5rem;
    }

    @media ${({theme}) => theme.device.mobileS} {
        padding: 8rem 1rem 0 1rem;
    }
`;

export const ContainerLearnMore = styled.div`

    padding: 0.625rem;
    height: 100%;
    width: 100%;

`;
export const Title = styled.strong`

    font-size: 3rem;
`;
export const InfoContent = styled.div`

    padding: 2rem 0 2rem 0;
    color: ${({ theme }) => theme.colors["gray-400"]};
`;

export const WrapperImgSvg = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30rem;
`;

export const ImgSVG = styled.img`
    width: 100%;
    height: 100%;
`;

export const WrapperImgsSponsor = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 9rem;
`;

export const ImgSponsor = styled.img`

`;