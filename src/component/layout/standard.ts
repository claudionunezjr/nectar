import { Component } from '@darkkenergy/nectar';

export interface StandardLayoutProps {
    bodyTop?: DocumentFragment;
    footer?: DocumentFragment;
    header?: DocumentFragment;
    main?: DocumentFragment;
}

export const StandardLayout = Component<StandardLayoutProps>(
    (html, { bodyTop, footer, header, main }) => html`
        <div class="standard-layout">
            ${bodyTop} ${header} ${main} ${footer}
        </div>
    `
);
