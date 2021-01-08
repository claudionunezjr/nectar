import { Component } from '@darkkenergy/nectar';
import { ValueProp } from '@darkkenergy/nectar/dist/types';

export const H3 = Component(
    (Template, { value }: ValueProp) => Template`<h3>${value}</h3>`
);
