import styled, { css } from 'styled-components';

interface ContainerProps {
  isAvailable: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 8px;

  background: #f0f0f5;

  header {
    height: 192px;
    
    border-radius: 8px 8px 0px 0px;

    background: #ffb84d;
    
    text-align: center;
    
    overflow: hidden;
    transition: 0.3s opacity;

    ${({ isAvailable }) => !isAvailable && css`
      opacity: 0.3;
    `}

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      margin-top: 16px;
      
      color: #3d3d4d;
    }

    .price {
      color: #39b100;
      
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      
      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 30px;
    border-radius: 0px 0px 8px 8px;

    background: #e4e4eb;

    div.icon-container {
      display: flex;

      button {
        display: flex;

        padding: 10px;
        border: none;
        border-radius: 8px;
        
        background: #fff;
        
        transition: 0.1s;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        
        display: inline-block;
        
        width: 88px;
        height: 32px;
        margin-left: 12px;

        & input {
          width: 0;
          height: 0;

          opacity: 0;
        }

        .slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          
          border-radius: 16px;

          background-color: #c72828;
          
          cursor: pointer;
          transition: 0.4s;
          -webkit-transition: 0.4s;

          &:before {
            position: absolute;
            left: 8px;
            bottom: 6px;

            height: 20px;
            width: 40px;
            
            border-radius: 10px;
            
            background-color: white;
            
            content: '';
            transition: 0.4s;
            -webkit-transition: 0.4s;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          transform: translateX(32px);
          -ms-transform: translateX(32px);
          -webkit-transform: translateX(32px);
        }
      }
    }
  }
`;
