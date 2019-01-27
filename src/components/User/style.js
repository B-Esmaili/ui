/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const UserStyle = styled.div`
  ${({ theme, size, image, color }) => css`
    font-size: ${theme.userFontSize};
    line-height: ${theme.userLineHeight};
    display: flex;

    .user-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .user-picture {
      background: ${theme.userBg};
      border: solid 2px ${theme.userFgHighlight};
      position: relative;
      border-radius: 50%;
      flex-shrink: 0;
      ${size &&
        css`
          height: ${theme[`userSize${size}`]};
          width: ${theme[`userSize${size}`]};
          ${size === 'Small' && 'font-size: 80%;'}
        `}

      &.background {
        color: ${theme.userFg};
        display: flex;
        align-items: center;
        justify-content: center;
        ${color && `background-color: ${color};`}
      }
      &.image {
      ${image && `background-image: ${image};`}
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

    .user-name {
      font-family: ${theme.userFontFamilySecondary};
    }

    .user-title {
      font-size: 0.75rem;
    }

    .user-name,
    .user-title {
      text-align: ${theme.dir === 'rtl' ? 'right' : 'left'};
    }

    .info-container {
      margin-${theme.dir === 'rtl' ? 'right' : 'left'}: 0.5rem;
    }

    &.inverse {
      .user-picture {
        background: ${theme.userFg};

        &.background {
          color: ${theme.userBg};
        }
      }
    }
  `}
`;

export default UserStyle;