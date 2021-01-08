import { ComponentFunction } from '@darkkenergy/nectar/dist/types';

export const List = <T>(Component: ComponentFunction, props: T[]) =>
    props?.map((linkProps) => Component(linkProps));
