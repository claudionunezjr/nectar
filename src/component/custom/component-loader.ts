import { Component, Registry } from '@darkkenergy/nectar';
import { AppProps } from '@app/types';

interface ComponentLoaderProps {
    lookup: string[];
    props: AppProps;
}

export const ComponentLoader = Component(
    (Template, { lookup, props }: ComponentLoaderProps) => Template`
    ${
        lookup &&
        lookup.map((key) => {
            const lookupKey = key
                .split('-')
                .map((part) =>
                    part
                        .toLowerCase()
                        .replace(/[a-z]/, (firstLetter) =>
                            firstLetter.toUpperCase()
                        )
                )
                .join('');

            return Registry().get(lookupKey)(props[key]) as Node;
        })
    }
`
);
