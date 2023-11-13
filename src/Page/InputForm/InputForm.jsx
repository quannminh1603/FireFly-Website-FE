import { Input } from "antd";
import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
    // const { placeholder = 'Nhập text', ...rests } = props
    // console.log('placeholder', placeholder)
    // placeholder = props
    const {placeholder = 'nhập text', ...rests} = props;
    console.log('props', props)

    // const handleOnchangeInput = (e) => {
    //     props.onChange(e.target.value)
    // }
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests}/>
    )
}

export default InputForm;