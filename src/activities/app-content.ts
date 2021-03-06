import { Activity } from '@darkkenergy/nectar';

import { Site } from '@app/types';

export interface AppContentActivityProps {
    site: Site;
}

export const AppContentActivity = Activity<
    AppContentActivityProps | undefined
>(JSON.parse('{"pageCollection":{"items":[{"title":"Home","slug":"/","contentCollection":{"items":[{"title":"Get Started","description":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A lightweight, functional JavaScript framework for building component-based reactive applications.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}},"contentCollection":{"items":[]}}]}}]},"siteCollection":{"items":[{"icons":null,"logo":{"contentType":"image/png","description":"Site logo.","height":91,"url":"https://images.ctfassets.net/2x238mu87414/6XeR7Z8onDfOTi9GK7pyTr/000f41ee0d845efdd3bf796491dba73f/nectar-logo-v1.png","width":86},"pagesCollection":{"items":[{"title":"Docs","slug":"docs"},{"title":"API","slug":"api"},{"title":"Guides","slug":"guides"}]},"seoDescription":"Nectar JS is a lightweight, functional JavaScript framework for building component-based reactive applications.","shortDescription":"A lightweight, functional JavaScript framework for building component-based reactive applications.","title":"Nectar"}]}}'));
