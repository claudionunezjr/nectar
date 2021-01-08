import { SiteNavToggleActivity } from '@app/activities/site-nav-toggle';
import {
    StyledSiteDrawer,
    StyledOverlayCloseButton,
    StyledDrawerSiteNav,
    StyledDrawerSiteNavProps
} from '@app/component/styled';
import { ReactiveComponent } from '@app/types';

export const ReactiveSiteNavDrawer: ReactiveComponent<
    boolean,
    StyledDrawerSiteNavProps
> = (transform) => {
    const { effect, update } = SiteNavToggleActivity;
    const hideSiteNav = () => update(false);

    return effect(({ ctx, value }) =>
        StyledSiteDrawer(
            {
                body: StyledDrawerSiteNav(transform(value)),
                closeButton: StyledOverlayCloseButton({
                    onClick: hideSiteNav
                }),
                isActive: value
            },
            ctx
        )
    );
};
