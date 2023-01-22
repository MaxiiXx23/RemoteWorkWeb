import { 
    ContainerButton, 
    Variant 
} from "./styles";

interface IProps{
    variant?: Variant;
    text: string;
}

export function Button({ variant = "primary", text }: IProps) {

    return (
        <ContainerButton
            variant={variant}
        >
            {text}
        </ContainerButton>
    )

}