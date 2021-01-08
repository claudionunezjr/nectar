import {
    AppContentActivity,
    AppContentActivityProps
} from '@app/activities/app-content';
import { StandardLayout, StandardLayoutProps } from '@app/component/layout';
import { BodyTop, Header } from '@app/component/container/regions';
import { ReactiveComponent } from '@app/types';

export const ReactiveAppLayout: ReactiveComponent<
    AppContentActivityProps,
    StandardLayoutProps
> = () => {
    const { effect } = AppContentActivity;
    return StandardLayout({
        bodyTop: BodyTop(),
        header: effect(({ ctx, value = { site: {} } }) => {
            const {
                icons,
                pagesCollection,
                shortDescription,
                ...appLayoutProps
            } = value.site;
            return Header(
                {
                    ...appLayoutProps,
                    icons: [icons],
                    headline: shortDescription,
                    pages: pagesCollection?.items
                },
                ctx
            );
        })
        // main: Main({ logo, title })
    });
};
