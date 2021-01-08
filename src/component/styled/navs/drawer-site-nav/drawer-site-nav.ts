import { Nav, NavProps } from '@app/component/simple/nav';
import { Styled } from '@app/utils';

import styles from './styles.scss';

export type StyledDrawerSiteNavProps = NavProps;
export const StyledDrawerSiteNav = Styled(Nav, styles.drawerSiteNav);
