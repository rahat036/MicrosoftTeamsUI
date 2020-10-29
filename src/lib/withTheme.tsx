import React, { ReactElement, ReactNode } from "react";
import { radios, select } from "@storybook/addon-knobs";

import {
  Provider as FluentUIThemeProvider,
  mergeThemes,
  teamsTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
} from "@fluentui/react-northstar";

import { ComponentVariablesObject, ThemeInput } from "@fluentui/styles";

import {
  defaultV2ThemeOverrides,
  darkV2ThemeOverrides,
  highContrastThemeOverrides,
  TeamsTheme,
} from "../themes";

import translations from "../translations";
import { StoryFn } from "@storybook/addons";

export interface IThemeProviderProps {
  children: ReactNode;
}

export const teamsNextVariableAssignments = {
  componentStyles: {
    Box: {
      root: ({ variables }: ComponentVariablesObject) => ({
        backgroundColor: variables.backgroundColor,
        boxShadow: variables.elevation,
      }),
    },
    Button: {
      root: ({ variables }: ComponentVariablesObject) => ({
        color: variables.color,
      }),
    },
    ButtonContent: {
      root: ({ variables }: ComponentVariablesObject) => ({
        fontWeight: variables.fontWeight,
      }),
    },
    Card: {
      root: ({ variables }: ComponentVariablesObject) => ({
        boxShadow: variables.elevation,
        "&:hover": { boxShadow: variables.hoverElevation },
        "&:focus": { boxShadow: variables.elevation },
      }),
    },
    Flex: {
      root: ({ variables }: ComponentVariablesObject) => ({
        color: variables.color,
        backgroundColor: variables.backgroundColor,
        boxShadow: variables.elevation,
      }),
    },
    ToolbarItem: {
      root: ({ variables }: ComponentVariablesObject) => ({
        color: variables.color,
        fontWeight: variables.fontWeight,
      }),
    },
    PopupContent: {
      content: ({ variables }: ComponentVariablesObject) => ({
        boxShadow: variables.elevation,
        borderWidth: variables.borderWidth,
      }),
    },
    PopupButton: {
      root: ({ variables }: ComponentVariablesObject) => ({
        color: variables.color,
      }),
    },
    TableRow: {
      root: ({ variables }: ComponentVariablesObject) => ({
        height: variables.compactRow
          ? variables.compactRowHeight
          : variables.defaultRowHeight,
        minHeight: variables.compactRow
          ? variables.compactRowMinHeight
          : variables.defaultRowMinHeight,
        alignItems: variables.cellVerticalAlignment,
      }),
    },
    TableCell: {
      root: ({ variables }: ComponentVariablesObject) => ({
        paddingTop: variables.compactRow
          ? variables.compactRowVerticalPadding
          : variables.defaultRowVerticalPadding,
        paddingBottom: variables.compactRow
          ? variables.compactRowVerticalPadding
          : variables.defaultRowVerticalPadding,
      }),
    },
    TreeItem: {
      root: ({ variables }: ComponentVariablesObject) => ({
        color: variables.color,
      }),
    },
  },
};

export const themes: { [themeKey: string]: ThemeInput<any> } = {
  [TeamsTheme.Default]: mergeThemes(
    teamsTheme,
    teamsNextVariableAssignments,
    defaultV2ThemeOverrides
  ),
  [TeamsTheme.Dark]: mergeThemes(
    teamsDarkTheme,
    teamsNextVariableAssignments,
    darkV2ThemeOverrides
  ),
  [TeamsTheme.HighContrast]: mergeThemes(
    teamsHighContrastTheme,
    teamsNextVariableAssignments,
    highContrastThemeOverrides
  ),
};

const langKnob = () =>
  select(
    "Language",
    {
      "English (US)": "en-US",
      فارسی: "fa",
    },
    "en-US",
    "Theme"
  );

const themeKnob = () =>
  radios(
    "Theme",
    {
      "Teams Light": TeamsTheme.Default,
      "Teams Dark": TeamsTheme.Dark,
      "Teams High Contrast": TeamsTheme.HighContrast,
    },
    TeamsTheme.Default,
    "Theme"
  );

export const StorybookThemeProvider = ({ children }: IThemeProviderProps) => {
  const lang = langKnob();

  // [v-wishow] todo: translations will (presumably) eventually need to be loaded asynchronously

  const theme = themes[themeKnob()];
  if (theme.siteVariables) {
    theme.siteVariables.lang = lang;
    theme.siteVariables.t = translations[lang];
  }
  return (
    <FluentUIThemeProvider theme={themes[themeKnob()]} rtl={lang === "fa"}>
      <style>{`html, body, #root, #root > .ui-provider { height: 100% } #root > .ui-provider { overflow: auto }`}</style>
      {children}
    </FluentUIThemeProvider>
  );
};

export const withTheme = (storyFn: StoryFn<any>) => (
  <StorybookThemeProvider>{storyFn()}</StorybookThemeProvider>
);
