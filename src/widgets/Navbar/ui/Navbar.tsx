import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          to="/"
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.SECONDARY}
        >
          Главная
        </AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};