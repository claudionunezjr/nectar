import { Component } from '@darkkenergy/nectar';

export interface DrawerContentsProps {
    body: DocumentFragment;
    className?: string;
    header?: DocumentFragment;
}

export const DrawerContents = Component<DrawerContentsProps>(
    (html, { body, className, header }) => html`
        <div class="${className}">
            ${header &&
            `<header>
                ${header}
            </header>`}
            ${body}
        </div>
    `
);
