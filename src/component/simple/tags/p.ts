import { Component } from '@darkkenergy/nectar';
import { ValueProp } from '@darkkenergy/nectar/dist/types';

const P = Component(
    (Template, { value }: ValueProp) => Template`<p>${value}</p>`
);

export { P };
