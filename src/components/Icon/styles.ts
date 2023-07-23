import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      colors: { normal },
      spacing,
    },
  }) => css`
    //sizes
    &.small {
      &,
      svg,
      path {
        max-width: ${spacing(15)};
        max-height: ${spacing(15)};
      }
    }

    &.base {
      &,
      svg,
      path {
        max-width: ${spacing(20)};
        max-height: ${spacing(20)};
      }
    }

    &.big {
      &,
      svg,
      path {
        max-width: ${spacing(25)};
        max-height: ${spacing(25)};
      }
    }

    // colors
    &.primary {
      svg,
      path {
        fill: ${normal.text.primary};
      }
    }

    &.secondary {
      svg,
      path {
        fill: ${normal.text.secondary};
      }
    }

    &.tertiary {
      svg,
      path {
        fill: ${normal.text.tertiary};
      }
    }

    &.inverted {
      svg,
      path {
        fill: ${normal.text.inverted};
      }
    }

    &.info {
      svg,
      path {
        fill: ${normal.semantic.info};
      }
    }

    &.error {
      svg,
      path {
        fill: ${normal.semantic.error};
      }
    }

    &.success {
      svg,
      path {
        fill: ${normal.semantic.success};
      }
    }

    &.warning {
      svg,
      path {
        fill: ${normal.semantic.warning};
      }
    }
  `}
`;
