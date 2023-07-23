import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({
    theme: {
      colors: { normal, translucent },
      spacing,
      borderRadius,
      transition,
      filter,
    },
  }) => css`
    padding: 0 ${spacing(10)};
    border: none;
    border-radius: ${borderRadius.base};

    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: ${normal.brand.primary};

    user-select: none;
    cursor: pointer;

    transition: ${transition.slow};
    // states
    &:hover {
      filter: ${filter.brightness};
    }

    &:disabled {
      cursor: default;

      * {
        opacity: 0.5;
      }
    }

    // size
    &.base {
      height: ${spacing(60)};
    }

    &.small {
      height: ${spacing(40)};
    }

    // shape
    &.squared {
      &.base {
        max-width: ${spacing(60)};
        min-width: ${spacing(60)};
      }

      &.small {
        max-width: ${spacing(40)};
        min-width: ${spacing(40)};
      }
    }

    &.full {
      width: 100%;
    }

    // variants
    &.transparent {
      background-color: transparent;

      // states
      &:hover {
        background-color: ${translucent.background.primary};
      }
    }

    &.none {
      height: unset !important;
      max-width: unset !important;
      min-width: unset !important;
      width: unset !important;
      padding: unset;

      background-color: transparent;

      // states
      &:hover {
        background-color: transparent;
      }
    }

    // children
    * + * {
      margin-left: ${spacing(10)};
    }
  `}
`;
