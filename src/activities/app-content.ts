import { Activity } from '@darkkenergy/nectar';

import { Site } from '@app/types';
import {
    assetFields,
    contentFields,
    pagesCollection,
    siteCollection
} from '@app/contentful/graphql';

export interface AppContentActivityProps {
    site: Site;
}

const contentfulToken = '4CTufSIoA8Raqrc-0c-7ANq-ch4vHWgzXAwH3cv7uOI';
const environment = 'master';
const space = '2x238mu87414';
const isPreview = true;
const query = `
query ($isPreview: Boolean = true) {
    ${pagesCollection}
    ${siteCollection}
}
${assetFields}
${contentFields}
`;

export const AppContentActivity = Activity<
    AppContentActivityProps | undefined
>();

fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
    {
        body: JSON.stringify({
            query,
            variables: {
                isPreview
            }
        }),
        headers: {
            Authorization: `Bearer ${contentfulToken}`,
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }
)
    .then((res) => res.json())
    .then(({ data }) => {
        console.log('data', data);
        AppContentActivity.update({
            site: data.siteCollection?.items[0]
        });
    });
