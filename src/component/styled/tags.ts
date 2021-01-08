import { H1, H2, H3, Li, P, Ul } from '@app/component/simple/tags';
import { Styled } from '@app/utils';

import { h1, h2, h3, li, p, ul } from './styles.scss';

export const StyledH1 = Styled(H1, h1);
export const StyledH2 = Styled(H2, h2);
export const StyledH3 = Styled(H3, h3);
export const StyledP = Styled(P, p);
export const StyledLi = Styled(Li, li);
export const StyledUl = Styled(Ul, ul);
