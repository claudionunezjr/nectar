import { Component } from '@darkkenergy/nectar';
import { Header } from './header';

import { Main } from './main';
import { TestActivity } from './test-activity';

interface PageProps {
    defaultBody: string;
    defaultColor: string;
    defaultHeading: string;
    pageTitle: string;
}

export const Page = Component<PageProps>(
    (html, { defaultBody, defaultColor, pageTitle }) => {
        const { effect, update } = TestActivity;
        let colorToggle = Math.round(Math.random());
        const colors = ['red', 'green'];
        const onClick = () => {
            update({
                body: '',
                color: colors[colorToggle],
                heading: ''
            });
            colorToggle = Number(!colorToggle);
        };

        return html`
            <section>
                <h1>${pageTitle}</h1>
                ${effect(({ ctx, value: { body, color } }) =>
                    Main(
                        {
                            body: body || defaultBody,
                            color: color || defaultColor,
                            header: Header({
                                heading: (color || defaultColor).toUpperCase()
                            })
                        },
                        ctx
                    )
                )}
                <button $click="${onClick}">Toggle color.</button>
            </section>
        `;
    }
);
