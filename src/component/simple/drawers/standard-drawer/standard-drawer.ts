import { Drawer, DrawerProps } from '@app/component/simple/drawers';
import { ActivityContext } from '@darkkenergy/nectar/dist/types';
import { DrawerContents } from './drawer-contents';

export interface StandardDrawerProps extends Omit<DrawerProps, 'contents'> {
    body: DocumentFragment;
    header?: DocumentFragment;
}

export const StandardDrawer = (
    { body, header, ...drawProps }: StandardDrawerProps,
    ctx: ActivityContext
) =>
    Drawer(
        {
            ...drawProps,
            contents: DrawerContents({
                body,
                header
            })
        },
        ctx
    );
