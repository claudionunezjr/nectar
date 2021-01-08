import {
    ActivityContext,
    ComponentFunction,
    NodeTemplateFunctionProps
} from '@darkkenergy/nectar/dist/types';

export const Styled = <T>(
    Component: ComponentFunction<T>,
    style: string | ((props: T) => string)
) => (
    props = {} as NodeTemplateFunctionProps<T>,
    ctx = {} as ActivityContext
) =>
    Component(
        {
            ...props,
            className: typeof style === 'function' ? style(props) : style
        },
        ctx
    );
