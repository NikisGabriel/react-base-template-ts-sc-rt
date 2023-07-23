import styled, { css } from "styled-components";

export const Text = styled.p`
  ${({
    theme: {
      colors: { normal },
      typography: { fontFamily, fontSize, fontWeight },
      transition,
    },
  }) => css`
    text-decoration: none;
    height: min-content;
    font-weight: ${fontWeight.normal};

    // state
    &.hover {
      transition: ${transition.normal};

      &:hover {
         {
          color: ${normal.brand.primary};
        }
      }
    }

    // sizes
    &.small {
      font-size: ${fontSize.small};
    }

    &.base {
      font-size: ${fontSize.base};
    }

    &.big {
      font-size: ${fontSize.big};
    }

    // colors
    &.primary {
      color: ${normal.text.primary};
    }

    &.secondary {
      color: ${normal.text.secondary};
    }

    &.tertiary {
      color: ${normal.text.tertiary};
    }

    &.inverted {
      color: ${normal.text.inverted};
    }

    // family
    &.normal {
      font-family: ${fontFamily.normal};
    }

    // decoration
    &.underline {
      text-decoration: underline;
    }

    // lineLimit
    &.lineLimit {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &.lineLimit-1 {
      -webkit-line-clamp: 1;
    }

    &.lineLimit-2 {
      -webkit-line-clamp: 2;
    }
  `}
`;
