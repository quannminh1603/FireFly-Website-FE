import React from "react";
import { message } from "antd"
import { useNavigate } from "react-router-dom";

const success = (mes = 'Success') => {
    message.success(mes)
}

const error = (mes = 'Error') => {
    message.error(mes)
}

const warning = (mes = 'Warning') => {
    message.warning(mes)
}


export { success, error, warning }