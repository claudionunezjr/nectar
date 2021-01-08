import { Component } from '@darkkenergy/nectar';

import { SiteNavToggleActivity } from '@app/activities/site-nav-toggle';
import { ReactiveSiteNavDrawer } from '@app/component/reactive/site-nav-drawer';
import { Image, LinkProps, Svg } from '@app/component/simple';
import {
    StyledCtaButton,
    StyledSiteNav,
    StyledSiteNavButton
} from '@app/component/styled';
import { ContentfulAsset, Page } from '@app/types';

import styles from './styles.scss';

interface HeaderProps {
    icons: ContentfulAsset[];
    logo: ContentfulAsset;
    pages: Page[];
    headline: string;
    title: string;
}

export const Header = Component<HeaderProps>(
    (html, { headline, logo, pages, title }) => {
        const { update } = SiteNavToggleActivity;
        const showSiteNav = () => update(true);
        const navigation: LinkProps[] = pages?.map(({ slug, title }) => ({
            label: title,
            url: `/${slug}`
        }));

        return html`
            <header class="${styles.header}">
                <h1>${logo?.url && Image(logo)}${title}</h1>
                <h2>${headline}</h2>
                ${ReactiveSiteNavDrawer(() => ({ navigation }))}
                <div class="styles.toolbar">
                    ${StyledSiteNav({
                        navigation
                    })}
                    ${StyledSiteNavButton({
                        label: Svg({
                            path: 'src/svg/ui-sprite.svg',
                            svgId: 'icon-menu-open'
                        }),
                        onClick: showSiteNav
                    })}
                </div>
                ${StyledCtaButton({
                    label: 'Get started.'
                })}
            </header>
        `;
    }
);
