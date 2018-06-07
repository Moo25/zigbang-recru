import React from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx("footer")}>
    <div className={cx("footer-content")}>
      <div />나는 뿌터에여
    </div>
  </footer>
);

export default Footer;
