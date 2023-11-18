import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";

const UserComponent = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log('user', user)
    return (
        <>
            <a href="/login">
            {user?.hoTenKH ? (
              <div>{user.hoTenKH}</div>
            ) : (
              <PersonOutlineOutlinedIcon className="icon" />
            )}
          </a>
            {/* <PersonOutlineOutlinedIcon className="icon" /> */}
        </>
    )
}

export default UserComponent