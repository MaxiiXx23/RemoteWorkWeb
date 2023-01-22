import { useState } from "react";

import { CaretDown, List, X } from "phosphor-react";

import { useMediaQuery } from "../../hooks/useMediaQueries";
import { size } from "../../styles/themes/defaultTheme";

import {
    NavBar,
    Logo,
    WrapperLogoOptions,
    ContainerOptionsDown,
    WrapperOptions,
    Option,
    OptionDropDown,
    DropDown,
    OptionIcon,
    IconSVG,
    BtnToggleMenu,
    ContainerToggleMenu,
    WrapperIconClose
} from "./styles";

import LogoImg from "../../assets/logo.svg";
import IconTodoList from "../../assets/icon-todo.svg";
import IconCalendarSVG from "../../assets/icon-calendar.svg";
import IconRemindersSVG from "../../assets/icon-reminders.svg";
import IconPlanningSVG from "../../assets/icon-planning.svg";

import { Button } from "../Button";


export function Header() {

    const isAboveMediumScreen = useMediaQuery(`(max-width: ${size.tablet})`);
    const [isOpenToggleMenu, setIsOpenToggleMenu] = useState(false);


    function handleOpenToggleMenu() {
        setIsOpenToggleMenu(previus => !previus);
    }

    return (
        <NavBar
            isOpenToggleMenu={isOpenToggleMenu}
        >
            <WrapperLogoOptions>

                <Logo
                    src={LogoImg}
                    alt="Logo"
                />

                {
                    isAboveMediumScreen ? null
                        :
                        <WrapperOptions>

                            <ContainerOptionsDown>

                                <OptionDropDown>
                                    Features
                                    <CaretDown />
                                </OptionDropDown>

                                <DropDown>
                                    <OptionIcon>
                                        <IconSVG src={IconTodoList} alt="icon-todo-list" />
                                        Todo List
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconCalendarSVG} alt="icon-calendar" />
                                        Calendar
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconRemindersSVG} alt="icon-reminders" />
                                        Reminders
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconPlanningSVG} alt="icon-planning" />
                                        Planning
                                    </OptionIcon>
                                </DropDown>

                            </ContainerOptionsDown>

                            <ContainerOptionsDown>
                                <OptionDropDown>
                                    Company
                                    <CaretDown />
                                </OptionDropDown>

                                <DropDown>
                                    <Option>
                                        History
                                    </Option>

                                    <Option>
                                        Our team
                                    </Option>

                                    <Option>
                                        Blog
                                    </Option>

                                </DropDown>
                            </ContainerOptionsDown>
                            <Option>
                                Careers
                            </Option>

                            <Option>
                                About
                            </Option>

                        </WrapperOptions>
                }
            </WrapperLogoOptions>

            {
                isAboveMediumScreen ?
                    null
                    :
                    <WrapperOptions>
                        <Option>
                            Login
                        </Option>
                        <Option>
                            <Button
                                variant="secondary"
                                text="Register"
                            />
                        </Option>
                    </WrapperOptions>
            }

            {
                isAboveMediumScreen && !isOpenToggleMenu
                    ?
                    < BtnToggleMenu
                        title="BtnToggleMenu"
                        onClick={handleOpenToggleMenu}
                    >
                        <List
                            size={16}
                        />
                    </BtnToggleMenu>
                    : null
            }

            {
                isOpenToggleMenu && isAboveMediumScreen ?
                    <ContainerToggleMenu>
                        <WrapperIconClose>
                            <X
                                size={16}
                                onClick={handleOpenToggleMenu}
                            />
                        </WrapperIconClose>
                        <WrapperOptions
                            isOpenToggleMenu={isOpenToggleMenu}
                        >

                            <ContainerOptionsDown
                                isOpenToggleMenu={isOpenToggleMenu}
                            >

                                <OptionDropDown>
                                    Features
                                    <CaretDown />
                                </OptionDropDown>

                                <DropDown>
                                    <OptionIcon>
                                        <IconSVG src={IconTodoList} alt="icon-todo-list" />
                                        Todo List
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconCalendarSVG} alt="icon-calendar" />
                                        Calendar
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconRemindersSVG} alt="icon-reminders" />
                                        Reminders
                                    </OptionIcon>
                                    <OptionIcon>
                                        <IconSVG src={IconPlanningSVG} alt="icon-planning" />
                                        Planning
                                    </OptionIcon>
                                </DropDown>

                            </ContainerOptionsDown>

                            <ContainerOptionsDown>
                                <OptionDropDown>
                                    Company
                                    <CaretDown />
                                </OptionDropDown>

                                <DropDown>
                                    <Option>
                                        History
                                    </Option>

                                    <Option>
                                        Our team
                                    </Option>

                                    <Option>
                                        Blog
                                    </Option>

                                </DropDown>
                            </ContainerOptionsDown>
                            <Option>
                                Careers
                            </Option>

                            <Option>
                                About
                            </Option>

                        </WrapperOptions>
                    </ContainerToggleMenu>
                    :
                    null
            }

        </NavBar >
    )

}