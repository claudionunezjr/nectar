import { Component } from '@darkkenergy/nectar';

import { Image } from '@app/component/simple';
import { ContentfulAsset } from '@app/types';
// import { ActiveSectionActivity } from '@app/activities/active-section';
// import { ContentContainer } from '@app/component/styled/content-container';
// import { StyledH2 } from '@app/component/styled/tags';
// import { AppPropsWithPages } from '@app/types';

import styles from './styles.scss';

interface MainProps {
    logo: ContentfulAsset;
    title: string;
}

const Main = Component<MainProps>((html, { logo, title }) => {
    // const { effect } = ActiveSectionActivity;

    return html`
        <main class="${styles.main}">
            ${logo?.url && Image(logo)}
            <h1>${title}</h1>
        </main>
    `;
});

export { Main };
