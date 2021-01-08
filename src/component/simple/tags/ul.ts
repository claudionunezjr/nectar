import { Component } from '@darkkenergy/nectar';
import {
    ComponentFunction,
    NodeTemplateFunctionProps
} from '@darkkenergy/nectar/dist/types';

interface UlProps {
    item: ComponentFunction;
    list: NodeTemplateFunctionProps[];
}

export const Ul = Component(
    (Template, { item, list }: UlProps) => Template`
    <ul>
        ${list.map((value) => item(value))}
    </ul>
`
);
