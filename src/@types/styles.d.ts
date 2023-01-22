import 'styled-components';

import { defaultTheme } from '../styles/themes/defaultTheme';

// use the method typeof to get typing

type TypeTheme = typeof defaultTheme;

// declare module and subscribe

declare module 'styled-components' {
    export interface DefaultTheme extends TypeTheme {}
}

