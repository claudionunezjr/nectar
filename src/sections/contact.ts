import { Component } from '@darkkenergy/nectar';

import { ComponentLoader } from '@app/component/custom/component-loader';
import { H1 } from '@app/component/simple/tags';
import { ContentProps, AppProps } from '@app/types';

const Contact = Component(
    (
        Template,
        { content, title, ...props }: ContentProps<string[]> & Partial<AppProps>
    ) => Template`

    ${H1({ value: title })}
    ${ComponentLoader({ ...props, lookup: content })}

`
);

export { Contact };
