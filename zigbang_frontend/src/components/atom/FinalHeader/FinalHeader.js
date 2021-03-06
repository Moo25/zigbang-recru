import React from "react";
import styles from "./FinalHeader.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx("header")}>
    <div className={cx("header-content")}>
      <div className={cx("title")}>
        <Link to="/">작성리뷰 확인하기</Link>
      </div>
    </div>
  </header>
);

export default Header;
