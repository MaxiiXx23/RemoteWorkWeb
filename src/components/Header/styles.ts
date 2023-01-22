import styled from "styled-components";


interface INavBarProps{
    isOpenToggleMenu?: boolean;
}

export const NavBar = styled.nav<INavBarProps>`

    width: 100%;
    height: 6.25rem;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    padding: 0 0.875rem;
    flex-direction: row;
    align-items: ${({isOpenToggleMenu}) => isOpenToggleMenu ? 'flex-start' : 'center'};;
    justify-content: space-between;
    background: ${({theme}) => theme.colors["gray-100"]};
`;

export const Logo = styled.img`

    width: 6.25rem;
    height: 1.25rem;
    margin-right: 2rem;
`;

export const WrapperLogoOptions = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const WrapperOptions = styled.div<INavBarProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({isOpenToggleMenu}) => isOpenToggleMenu ? 'column' : 'row'};
    height: 100%;
    margin-top: -8px;
`;

export const Option = styled.div<INavBarProps>`
    cursor: pointer;
    color: ${({theme}) => theme.colors["gray-400"]};
    padding: ${({isOpenToggleMenu}) => isOpenToggleMenu ? '2rem' : '0.625rem'};
    :hover{
        transition: 0.5s;
        color: ${({theme}) => theme.colors.black}
    }
`;

export const DropDown = styled.div`
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({theme}) => theme.colors["gray-100"]};
    width: 8rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ContainerOptionsDown = styled.div<INavBarProps>`
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    &:hover ${DropDown} {
        display: block;
        position: ${({isOpenToggleMenu}) => isOpenToggleMenu ? 'static' : 'absolute' };
    }
`;

export const OptionDropDown = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.colors["gray-400"]};

    padding: 0.625rem;
    
    :hover{
        transition: 0.5s;
        color: ${({theme}) => theme.colors.black}
    }
`;

export const OptionIcon = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
    color: ${({theme}) => theme.colors["gray-400"]};
    :hover{
        transition: 0.5s;
        color: ${({theme}) => theme.colors.black}
    }
`;

export const IconSVG = styled.img`

    margin-right: 0.625rem;

`;

export const BtnToggleMenu = styled.button`
    cursor: pointer;
    outline: 0;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 8px;
    padding: 0.4rem 1rem;
    :hover {
        opacity: 0.8;
    }
`;

export const ContainerToggleMenu = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 20;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({theme}) => theme.colors["gray-100"]};
`;

export const WrapperIconClose = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1rem 0 0;
    :hover {
        opacity: 0.8;
    }
`;

