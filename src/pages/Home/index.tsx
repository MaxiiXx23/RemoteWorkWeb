
import {
    ContainerMain,
    ContainerLearnMore,
    Title,
    InfoContent,
    WrapperImgsSponsor,
    ImgSponsor,
    WrapperImgSvg,
    ImgSVG
} from "./styles";

import ImgHeroDesktop from "../../assets/image-hero-desktop.png";
import ImgDataBizSVG from "../../assets/client-databiz.svg";
import ImgAudioPhileSVG from "../../assets/client-audiophile.svg";
import ImgMeetSVG from "../../assets/client-meet.svg";
import ImgMakerSVG from "../../assets/client-maker.svg";

import { Button } from "../../components/Button";

export function Home() {

    return (
        <ContainerMain>
            <ContainerLearnMore>
                <Title>
                    Make<br />
                    Remote Work
                </Title>
                <InfoContent>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals and watch
                    productivity soar.
                </InfoContent>
                <Button
                    variant="primary"
                    text="Learn More"
                />
                <WrapperImgsSponsor>
                    <ImgSponsor
                        src={ImgDataBizSVG}
                        title="Image-DataBiz"
                        alt="Image-DataBiz"
                    />
                    <ImgSponsor
                        src={ImgAudioPhileSVG}
                        title="Image-Audio-Phile"
                        alt="Image-Audio-Phile"
                    />
                    <ImgSponsor
                        src={ImgMeetSVG}
                        title="Image-Meet"
                        alt="Image-Meet"
                    />
                    <ImgSponsor
                        src={ImgMakerSVG}
                        title="Image-Maker"
                        alt="Image-Maker"
                    />
                </WrapperImgsSponsor>
            </ContainerLearnMore>
            <WrapperImgSvg>
                <ImgSVG
                    src={ImgHeroDesktop}
                    title="Image-Welcome"
                    alt="Image-Welcome"
                />
            </WrapperImgSvg>
        </ContainerMain>
    )

}