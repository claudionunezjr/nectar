import { Component } from '@darkkenergy/nectar';

import { ComponentLoader } from '@app/component/custom/component-loader';
import { StyledH1 } from '@app/component/styled/tags';
import { AppProps, ContentProps } from '@app/types';

export const About = Component(
    (
        Template,
        { content, title, ...props }: ContentProps<string[]> & Partial<AppProps>
    ) => Template`

    ${StyledH1({ value: title })}
    <div>
        ${ComponentLoader({ ...props, lookup: content })}
    </div>
`
);
