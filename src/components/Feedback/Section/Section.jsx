import { StyledSection } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <h1>{title}</h1>
            <div>{children}</div>
        </StyledSection>
    )
}

export default Section;