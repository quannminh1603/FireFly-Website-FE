import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="select_contact">
        <h3>Liên hệ</h3>
        <div className="box_contact">
          <div className="box_left">
            <h4>Cửa hàng thời trang thể thao FireFly</h4>
            <div className="box_ionfor">
              <div className="clsaddress">
                Địa chỉ:
                <span>
                  Công viên phần mềm Quang Trung, phường Tân Chánh Hiệp, quận
                  12, thành phố Hồ Chí Minh
                </span>
              </div>
              <div className="clsemail">
                Email: <span> fireflyfashion@gmail.com</span>
              </div>
              <div className="clsphone">
                Số điện thoại: <span>0344.749.816</span>
              </div>
            </div>
          </div>
          <div className="box_right">
            <iframe
              title="Embedded Map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1697261287409!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
