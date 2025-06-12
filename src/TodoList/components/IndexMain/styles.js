import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const listContainer = css`
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 432px;
        overflow-y: scroll;

        & > li {
            display: flex;
            box-sizing: border-box;
            border-bottom: 1px solid #dbdbdb;
            
            & > input[type=checkbox] {
                display: none;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    border: 1px solid #dbdbdb;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                }

                &:checked + label::after {
                    content: "";
                    display: block;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    background-color:#0b4f8f;
                }
            }
        }
    }
`;

export const todoInputContainer = css`
    box-sizing: border-box;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    overflow: hidden;

    & > input {
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
    }
`;