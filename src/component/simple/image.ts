import { Component } from '@darkkenergy/nectar';

import { ContentfulAsset } from '@app/types';

export const Image = Component<ContentfulAsset & { inline?: boolean }>(
    (html, { description = '', height = '', url = '', width = '' }) =>
        html`
            <img
                alt="${description}"
                height="${height || 'auto'}"
                src="${url}"
                width="${width || 'auto'}"
            />
        `
);
