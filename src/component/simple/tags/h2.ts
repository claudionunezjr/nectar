import { Component } from '@darkkenergy/nectar';
import { ValueProp } from '@darkkenergy/nectar/dist/types';

const H2 = Component(
    (Template, { value }: ValueProp) => Template`<h2>${value}</h2>`
);

export { H2 };
