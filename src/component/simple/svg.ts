import { Component } from '@darkkenergy/nectar';

interface SvgProps {
    height?: string;
    path?: string;
    size?: string;
    svgId: string;
    width?: string;
}

export const Svg = Component<SvgProps>(
    (html, { height = '1em', path = '', size, svgId, width = '1em' }) => html`
        <svg
            fill="currentColor"
            $height="${size || height}"
            $width="${size || width}"
        >
            <use height="100%" width="100%" href="${path}#${svgId}"></use>
        </svg>
    `
);
