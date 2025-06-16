/** @jsxImportSource @emotion/react */
import * as s from './styles';
import React from 'react';

function Signup(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>회원가입</h1>
                <div css={s.inputItem}>
                    <div css={s.inputContainer()}>
                        <input type="text" />
                        <div></div>
                    </div>
                    <div css={s.messageContainer()}></div>
                </div>
                <div css={s.inputItem}>
                    <div css={s.inputContainer()}>
                        <input type="text" />
                        <div></div>
                    </div>
                    <div css={s.messageContainer()}></div>
                </div>
                <div css={s.inputItem}>
                    <div css={s.inputContainer()}>
                        <input type="text" />
                        <div></div>
                    </div>
                    <div css={s.messageContainer()}></div>
                </div>
                <div css={s.inputItem}>
                    <div css={s.inputContainer()}>
                        <input type="text" />
                        <div></div>
                    </div>
                    <div css={s.messageContainer()}></div>
                </div>
            </div>
            <button css={s.submitButton}>가입하기</button>
        </div>
    );
}

export default Signup;