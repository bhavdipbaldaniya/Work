import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = forwardRef((props, ref) => {
  const {
    onClick,
    type,
    isExternal,
    href,
    className,
    style,
    target,
    children,
  } = props;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={className}
          style={style}
          target={target === "_blank" ? "_blank" : undefined}
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        ref={ref}
        to={href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      ref={ref}
      className={className}
      type={type}
      style={style}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  className: "",
  type: "button",
  href: "",
  onClick: () => {},
  target: "",
  style: {},
  children: "",
  isExternal: false,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "link", "submit", "reset"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  children: PropTypes.node,
  isExternal: PropTypes.bool,
};

export default Button;
