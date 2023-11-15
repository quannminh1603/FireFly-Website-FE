import { Input } from "antd";
import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
    const {placeholder = 'nhập text', ...rests} = props;
    console.log('props', props)
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput}/>
    )
}

export default InputForm;