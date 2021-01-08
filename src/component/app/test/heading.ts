import { Component } from '@darkkenergy/nectar';

import { H2 } from './h2';

interface HeadingProps {
    className: string;
    heading: string;
}

export const Heading = Component<HeadingProps>(
    (html, props) => html`<div>${H2(props)}</div> `
);
