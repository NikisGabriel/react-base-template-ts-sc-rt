import styled, { css } from "styled-components";

export const Textarea = styled.textarea`
  ${({
    theme: {
      colors: { text, translucentBackground, background, semantic },
      typography: { fontFamily, fontWeight, fontSize },
      spacing,
      borderRadius,
      transition,
    },
  }) => css`
    height: 100%;
    width: 100%;
    padding: 16px ${spacing(20)};
    border: 3px solid transparent;
    outline: none;
    border-radius: ${borderRadius.base};
    resize: none;

    background: ${translucentBackground.secondary};

    font-family: ${fontFamily.normal};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.base};
    color: ${text.light};

    transition: ${transition.normal};

    // special
    &::placeholder {
      font-family: ${fontFamily.normal};
      font-weight: ${fontWeight.normal};
      font-size: ${fontSize.base};
      color: ${background.tertiary};
    }

    // states
    &:focus {
      background: ${translucentBackground.primary};
    }

    &:hover {
      background: ${translucentBackground.primary};
    }

    &[aria-invalid="true"] {
      border: 3px solid ${semantic.error};
    }
  `}
`;
