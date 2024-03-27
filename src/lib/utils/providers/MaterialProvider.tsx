import theme from "@/lib/theme/theme";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";

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
