import { Component } from '@darkkenergy/nectar';
import { MouseEventListener } from '@darkkenergy/nectar/dist/types';

import Link, { LinkProps } from '@app/component/simple/link';
import { List } from '@app/utils';

export interface NavProps {
    className?: string;
    navigation: Omit<LinkProps, 'onClick'>[];
    onClick?: MouseEventListener;
}

export const Nav = Component<NavProps>(
    (html, { className, navigation, onClick }) => html`
        <nav class="${className}">
            ${List<LinkProps>(
                Link,
                navigation?.map((link) => ({ ...link, onClick }))
            )}
        </nav>
    `
);
