import nerdImage from "../assets/images/illustration.png";
import Button from "./card/Button";
import { CardContainer, ContentContainer, ButtonContainer } from "./styles/Container.styles";
// import Content from "./Content";
import Image from "./Image";
// import Tag from "./Tag";
import { Tag, H1, P } from "./styles/Elements";

export default function Card() {
    return(
        <CardContainer>
            <ContentContainer>
                <Tag color="orange">EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch Now"></Button>
                    <Button link="https://lwsbd.link/react" text="Github Repo"></Button>
                </ButtonContainer>
            </ContentContainer>
            <Image imgSrc={nerdImage} altTag="Nerd" width="300px" />
        </CardContainer>
    );
}