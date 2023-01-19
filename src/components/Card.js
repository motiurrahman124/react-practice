import nerdImage from "../assets/images/illustration.png";
import Button from "./card/Button";
import { CardContainer, ContentContainer } from "./styles/Container.styles";
// import Content from "./Content";
import Image from "./Image";
// import Tag from "./Tag";
import { Tag } from "./styles/Elements";

export default function Card() {
    return(
        <CardContainer>
            <ContentContainer>
                <Tag color="orange">EXCLUSIVE</Tag>
                <h1>React Styled Components</h1>
                <p>
                Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.
                </p>
                <div className="buttons">
                    <Button link="https://lwsbd.link/rsc" text="Watch Now"></Button>
                    <Button link="https://lwsbd.link/react" text="Github Repo"></Button>
                </div>
            </ContentContainer>
            <Image imgSrc={nerdImage} altTag="Nerd" width="300px" />
        </CardContainer>
    );
}