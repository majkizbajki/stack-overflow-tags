import { ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import theme from '@/lib/theme/theme';

interface MaterialProviderProps {
    children: ReactNode;
}

export const MaterialProvider = ({ children }: MaterialProviderProps) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
