import { Component } from '@darkkenergy/nectar';
import { MouseEventListener } from '@darkkenergy/nectar/dist/types';

import { Svg } from '@app/component/simple';

export interface CloseButtonProps {
    className?: string;
    onClick: MouseEventListener;
}

export const CloseButton = Component<CloseButtonProps>(
    (html, { className, onClick = () => {} }) =>
        html`
            <button $click="${onClick}" class="${className}">
                ${Svg({
                    path: 'src/svg/ui-sprite.svg',
                    svgId: 'icon-close'
                })}
            </button>
        `
);
