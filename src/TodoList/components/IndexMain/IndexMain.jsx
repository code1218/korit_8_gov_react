/** @jsxImportSource @emotion/react */
import * as s from './styles';
import React from 'react';

function IndexMain(props) {
    return (
        <div css={s.container}>
            <div css={s.listContainer}>
                <ul>
                    <li>
                        <input type="checkbox" name="" id="a" />
                        <label htmlFor="a"></label>
                        <div></div>
                    </li>
                    
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input type="text" />
            </div>
        </div>
    );
}

export default IndexMain;