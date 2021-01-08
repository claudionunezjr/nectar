import { Component } from '@darkkenergy/nectar';

import { Button } from './button';
import { HGroup } from './h-group';
import { InnerTestActivity } from './innter-test-activity';

interface HeaderProps {
    heading: string;
}

export const Header = Component<HeaderProps>((html, { heading }) => {
    const { update } = InnerTestActivity;
    const onClick = () => {
        const { value } = InnerTestActivity;
        update(!value);
    };

    return html`
        <header>
            ${Button({ onClick })}
            ${HGroup({
                heading
            })}
        </header>
    `;
});
