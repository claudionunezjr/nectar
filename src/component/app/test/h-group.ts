import { Component } from '@darkkenergy/nectar';

import { Heading } from './heading';
import { InnerTestActivity } from './innter-test-activity';

interface HGroupProps {
    heading: string;
}

export const HGroup = Component<HGroupProps>((html, props) => {
    const { effect } = InnerTestActivity;
    return html`<hgroup>
        ${effect(({ ctx, value }) =>
            Heading({ ...props, className: String(value) }, ctx)
        )}
    </hgroup>`;
});
