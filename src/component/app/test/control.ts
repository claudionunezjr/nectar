import { Component } from '@darkkenergy/nectar';

import { Button } from './button';

interface ControlProps {
    onClick: any;
}

export const Control = Component<ControlProps>(
    (html, props) => html`${Button(props)}`
);
