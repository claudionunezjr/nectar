import { Component } from '@darkkenergy/nectar';

interface AnchorWithSlugProps {
    slug: string;
}

const AnchorWithSlug = Component(
    (Template, { slug }: AnchorWithSlugProps) => Template`
    <a name="${slug}">
`
);

export { AnchorWithSlug };
