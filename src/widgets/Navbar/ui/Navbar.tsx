import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
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
