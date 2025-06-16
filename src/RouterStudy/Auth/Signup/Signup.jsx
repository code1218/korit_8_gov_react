/** @jsxImportSource @emotion/react */
import { CiCircleCheck } from 'react-icons/ci';
import * as s from './styles';
import React, { useState } from 'react';
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';

function Signup(props) {

    const [ inputState, setInputState ] = useState({
        username: {
            value: "",
            message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
            status: "idle", //success(성공), error(오류), idle(초기 대기상태)
        },
        password: {
            value: "",
            message: "비밀번호는 8~20자이며, 영문·숫자·특수문자를 모두 포함해야 합니다.",
            regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,20}$/,
            status: "idle",
        },
        checkPassword: {
            value: "",
            message: "비밀번호가 서로 일치하지 않습니다.",
            status: "idle",
        },
        fullName: {
            value: "",
            message: "이름은 한글 2~20자여야 합니다.",
            regex: /^[가-힣]{2,20}$/,
            status: "idle",
        },
        email: {
            value: "",
            message: "유효하지 않은 이메일 형식입니다.",
            regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            status: "idle",
        }
    });

    const handleOnChange = (e) => {
        setInputState(prev => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.value,
            }
        }));
    }

    const handleOnBlur = (e) => {
        setInputState(prev => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                status: prev[e.target.name].regex.test(prev[e.target.name].value) ? "success" : "error",
            }
        }));
    }

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>회원가입</h1>
                <div css={s.inputItem}>
                    <div css={s.inputContainer()}>
                        <input type="text" name='username' value={inputState.username.value} onChange={handleOnChange} onBlur={handleOnBlur} />
                        <div>
                            {
                                inputState.username.status !== "idle"
                                && (
                                    inputState.username.status === "success" 
                                    ? <MdOutlineCheckCircle />
                                    : <MdOutlineErrorOutline />
                                )
                            }
                        </div>
                    </div>
                    {
                        inputState.username.status === "error" &&
                        <div css={s.messageContainer()}>{inputState.username.message}</div>
                    }
                </div>
            </div>
            <button css={s.submitButton}>가입하기</button>
        </div>
    );
}

export default Signup;


/**
 * username, password, checkpassword, fullname(한글), email 
 * javascript 정규표현식을 각각 만들어주고 error메세지도 만들어줘
 */