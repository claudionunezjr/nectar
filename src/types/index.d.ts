import { LinkProps } from '@app/component/simple';
import {
    MouseEventListener,
    PlainObject
} from '@darkkenergy/nectar/dist/types';
import { ContentfulCollection } from 'contentful';

export interface Page {
    slug: string;
    title: string;
}

export interface Site {
    icons: ContentfulAsset;
    logo: ContentfulAsset;
    pagesCollection: ContentfulCollection<Page>;
    seoDescription: string;
    shortDescription: string;
    title: string;
}

export interface ContentfulApp {
    siteCollection: ContentfulCollection<Site>;
}

export interface ContentfulAsset {
    contentType: 'image/*' | 'image/jpg' | 'image/png';
    description: string;
    height: number;
    url: string;
    width: number;
}

// Content Structure Types

export interface AppProps {
    copyright: string;
    instructors: ContentProps;
    location: PlainObject<number | string>;
    logo: PlainObject<string>;
    'muay-thai': PlainObject<string>;
    navigation: NavItem[];
    pricing: ContentProps[];
}

export interface AppPropsWithPages extends AppProps {
    pages: Pages;
}

interface ContentProps<T = ContentProps<unknown>> {
    content?: T;
    description?: string;
    slug?: string;
    title?: Node;
}

export interface AssetProps {
    alt?: string;
    src?: string;
    title?: string;
}

export interface NavItem {
    label?: string;
    url: string;
}

export type PageProps = ContentProps<string[]>;

export type Pages = PageProps[];

export interface NavProps {
    className?: string;
    navigation: LinkProps[];
}

export interface ReactiveComponent<T = any, P = any> {
    (transform?: (props?: T) => P): DocumentFragment;
}
