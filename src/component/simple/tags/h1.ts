import { Component } from '@darkkenergy/nectar';
import { ValueProp } from '@darkkenergy/nectar/dist/types';

const H1 = Component(
    (Template, { value }: ValueProp) => Template`<h1>${value}</h1>`
);

export { H1 };
