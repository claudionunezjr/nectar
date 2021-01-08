import { Component } from '@darkkenergy/nectar';

import { ComponentLoader } from '@app/component/custom/component-loader';
import { ContentProps, AppProps } from '@app/types';

type SectionProps = ContentProps<string[]> &
    {
        [P in keyof AppProps]: AppProps[P];
    };

export const Section = Component(
    (html, { content, title, slug, ...props }: SectionProps) => html`
        <section id="${slug || ''}">
            ${title}

            <div>${ComponentLoader({ lookup: content, props })}</div>
        </section>
    `
);
