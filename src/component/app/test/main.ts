import { Component } from '@darkkenergy/nectar';

interface MainProps {
    body: string;
    color: string;
    header: DocumentFragment;
}

export const Main = Component<MainProps>(
    (html, { body, color, header }) => html`
        <main style="color: ${color}">
            ${header}
            <p>${body}</p>
        </main>
    `
);
