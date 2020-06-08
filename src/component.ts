import { Template } from '@framework';
import { ComponentWrapper } from '@framework/types';

export const Component: ComponentWrapper = (template) => (
    props = {},
    ctx = {}
) => {
    ctx.render = ctx.render || Template.bind(ctx);
    return template(ctx.render, props);
};
