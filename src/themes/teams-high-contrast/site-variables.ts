import { TeamsTheme } from "../constants";

export default {
  theme: TeamsTheme.HighContrast,
  colorScheme: {
    elevations: {
      2: "none",
      4: "none",
      8: "none",
      16: "none",
      32: "none",
      64: "none",
    },
    // Color scheme which needs no overrides reproduced for reference:
    // "default": {
    //   "foreground": "#fff",
    //   "background": "#000",
    //   "border": "#fff",
    //   "shadow": "#000",
    //   "foregroundHover": "#000",
    //   "backgroundHover": "#1aebff",
    //   "borderHover": "#1aebff",
    //   "shadowHover": "#000",
    //   "foregroundActive": "#1aebff",
    //   "backgroundActive": "#000",
    //   "borderActive": "#1aebff",
    //   "foregroundFocus": "#000",
    //   "backgroundFocus": "#1aebff",
    //   "borderFocus": "#1aebff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#1aebff",
    //   "foregroundDisabled": "#000",
    //   "backgroundDisabled": "#3ff23f",
    //   "borderDisabled": "#3ff23f",
    //   "foreground1": "#fff",
    //   "foreground2": "#fff",
    //   "foreground3": "#fff",
    //   "foreground4": "#000",
    //   "background1": "#000",
    //   "background2": "#000",
    //   "background3": "#000",
    //   "background4": "#000",
    //   "background5": "#ffff01",
    //   "border1": "#fff",
    //   "border2": "#fff",
    //   "border3": "#fff",
    //   "foregroundHover1": "#000",
    //   "foregroundHover2": "#1aebff",
    //   "backgroundHover1": "#1aebff",
    //   "backgroundHover2": "#1aebff",
    //   "backgroundHover3": "#000",
    //   "backgroundHover4": "#000",
    //   "backgroundPressed3": "#1aebff",
    //   "foregroundActive1": "#000",
    //   "backgroundActive1": "#1aebff",
    //   "borderActive1": "#1aebff",
    //   "borderActive2": "#1aebff",
    //   "borderActive3": "#1aebff",
    //   "foregroundFocus1": "#000",
    //   "foregroundFocus2": "#000",
    //   "foregroundFocus3": "#000",
    //   "backgroundFocus1": "#1aebff",
    //   "backgroundFocus2": "#1aebff",
    //   "backgroundFocus3": "#1aebff",
    //   "borderFocusWithin": "#000",
    //   "foregroundDisabled1": "#3ff23f",
    //   "backgroundDisabled1": "#000",
    //   "backgroundDisabled2": "#3ff23f",
    //   "backgroundDisabled3": "#3ff23f"
    // },
    // "brand": {
    //   "foreground": "#fff",
    //   "background": "#fff",
    //   "border": "#fff",
    //   "shadow": "#000",
    //   "foregroundHover": "#000",
    //   "backgroundHover": "#1aebff",
    //   "borderHover": "#1aebff",
    //   "shadowHover": "#000",
    //   "foregroundActive": "#1aebff",
    //   "backgroundActive": "#000",
    //   "borderActive": "#1aebff",
    //   "foregroundFocus": "#000",
    //   "backgroundFocus": "#1aebff",
    //   "borderFocus": "#1aebff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#1aebff",
    //   "foregroundDisabled": "#000",
    //   "backgroundDisabled": "#3ff23f",
    //   "borderDisabled": "#3ff23f",
    //   "foreground1": "#ffff01",
    //   "foreground2": "#ffff01",
    //   "foreground3": "#ffff01",
    //   "foreground4": "#000",
    //   "background1": "#000",
    //   "background2": "#000",
    //   "background3": "#000",
    //   "background4": "#000",
    //   "border1": "#fff",
    //   "border2": "#fff",
    //   "foregroundHover1": "#000",
    //   "foregroundHover2": "#000",
    //   "backgroundHover1": "#1aebff",
    //   "backgroundHover2": "#ffff01",
    //   "foregroundPressed1": "#000",
    //   "foregroundActive1": "#000",
    //   "foregroundActive2": "#1aebff",
    //   "backgroundActive1": "#1aebff",
    //   "borderActive1": "#1aebff",
    //   "borderActive2": "#1aebff",
    //   "foregroundFocus1": "#000",
    //   "foregroundFocus2": "#000",
    //   "foregroundFocus3": "#000",
    //   "foregroundFocus4": "#000",
    //   "backgroundFocus1": "#1aebff",
    //   "backgroundFocus2": "#1aebff",
    //   "backgroundFocus3": "#1aebff",
    //   "borderFocusWithin": "#000",
    //   "borderFocus1": "#1aebff",
    //   "foregroundDisabled1": "#3ff23f",
    //   "backgroundDisabled1": "#000"
    // },
    // "black": {
    //   "foreground": "#fff",
    //   "background": "#000",
    //   "border": "#fff",
    //   "shadow": "#fff",
    //   "foregroundHover": "#ffff01",
    //   "backgroundHover": "#000",
    //   "borderHover": "#1aebff",
    //   "shadowHover": "#1aebff",
    //   "foregroundActive": "#1aebff",
    //   "backgroundActive": "#000",
    //   "borderActive": "#1aebff",
    //   "shadowActive": "#1aebff",
    //   "foregroundFocus": "#000",
    //   "backgroundFocus": "#1aebff",
    //   "borderFocus": "#fff",
    //   "shadowFocus": "#fff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#fff",
    //   "shadowPressed": "#fff",
    //   "foregroundDisabled": "#000",
    //   "backgroundDisabled": "#3ff23f",
    //   "borderDisabled": "#000",
    //   "shadowDisabled": "#000"
    // },
    // "white": {
    //   "foreground": "#fff",
    //   "background": "#000",
    //   "border": "#fff",
    //   "shadow": "#fff",
    //   "foregroundHover": "#ffff01",
    //   "backgroundHover": "#000",
    //   "borderHover": "#1aebff",
    //   "shadowHover": "#1aebff",
    //   "foregroundActive": "#1aebff",
    //   "backgroundActive": "#000",
    //   "borderActive": "#1aebff",
    //   "shadowActive": "#1aebff",
    //   "foregroundFocus": "#000",
    //   "backgroundFocus": "#1aebff",
    //   "borderFocus": "#fff",
    //   "shadowFocus": "#fff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#fff",
    //   "shadowPressed": "#fff",
    //   "foregroundDisabled": "#000",
    //   "backgroundDisabled": "#3ff23f",
    //   "borderDisabled": "#000",
    //   "shadowDisabled": "#000"
    // },
    // "green": {
    //   "foreground": "#fff",
    //   "background": "#fff",
    //   "foreground1": "#000",
    //   "foreground2": "#fff"
    // },
    // "orange": {
    //   "foreground": "#ffff01",
    //   "background": "#ffff01",
    //   "border": "#1aebff",
    //   "foreground1": "#ffff01"
    // },
    // "pink": {"foreground": "#000", "background": "#fff", "border": "#fff", "foreground1": "#fff"},
    // "red": {
    //   "foreground": "#fff",
    //   "background": "#fff",
    //   "border": "#fff",
    //   "foregroundHover": "#000",
    //   "backgroundHover": "#1aebff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "foreground1": "#000",
    //   "foreground2": "#000",
    //   "background1": "#000",
    //   "background2": "#000",
    //   "background3": "#ffff01",
    //   "backgroundHover1": "#1aebff"
    // },
    // "yellow": {
    //   "foreground": "#fff",
    //   "background": "#fff",
    //   "foreground1": "#000",
    //   "foreground2": "#000",
    //   "background1": "#FBF6D9",
    //   "background2": "#fff"
    // },
    // "silver": {
    //   "foreground": "#fff",
    //   "background": "#000",
    //   "border": "#fff",
    //   "foregroundHover": "#000",
    //   "backgroundHover": "#1aebff",
    //   "borderHover": "#fff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#fff",
    //   "foregroundDisabled": "#3ff23f",
    //   "backgroundDisabled": "#000",
    //   "borderDisabled": "#3ff23f",
    //   "foreground1": "#fff"
    // },
    // "onyx": {
    //   "background": "#000",
    //   "border": "#fff",
    //   "background1": "#000",
    //   "background2": "#fff",
    //   "border1": "#fff",
    //   "border2": "#fff"
    // },
    // "amethyst": {
    //   "background": "rgba(255,255,255,0.05)",
    //   "backgroundHover": "#1aebff",
    //   "backgroundActive": "#1aebff",
    //   "backgroundHover1": "#1aebff"
    // },
    // "grey": {
    //   "foreground": "#fff",
    //   "background": "#000",
    //   "border": "#fff",
    //   "shadow": "#fff",
    //   "foregroundHover": "#ffff01",
    //   "backgroundHover": "#000",
    //   "borderHover": "#1aebff",
    //   "shadowHover": "#1aebff",
    //   "foregroundActive": "#1aebff",
    //   "backgroundActive": "#000",
    //   "borderActive": "#1aebff",
    //   "shadowActive": "#1aebff",
    //   "foregroundFocus": "#000",
    //   "backgroundFocus": "#1aebff",
    //   "borderFocus": "#fff",
    //   "shadowFocus": "#fff",
    //   "foregroundPressed": "#000",
    //   "backgroundPressed": "#1aebff",
    //   "borderPressed": "#fff",
    //   "shadowPressed": "#fff",
    //   "foregroundDisabled": "#000",
    //   "backgroundDisabled": "#3ff23f",
    //   "borderDisabled": "#000",
    //   "shadowDisabled": "#000",
    //   "foreground1": "#484644",
    //   "foreground2": "#605E5C",
    //   "foreground3": "#fff",
    //   "foreground4": "#fff",
    //   "background1": "#FAF9F8",
    //   "background2": "#F3F2F1",
    //   "background3": "#EDEBE9",
    //   "background4": "#F3F2F1",
    //   "background5": "#979593",
    //   "border1": "#EDEBE9",
    //   "border2": "#E1DFDD",
    //   "border3": "#EDEBE9",
    //   "foregroundHover1": "#fff",
    //   "foregroundHover2": "#fff",
    //   "backgroundHover1": "#EDEBE9",
    //   "backgroundHover2": "transparent",
    //   "backgroundHover3": "#EDEBE9",
    //   "backgroundHover4": "#FAF9F8",
    //   "backgroundPressed3": "#EDEBE9",
    //   "foregroundActive1": "#fff",
    //   "backgroundActive1": "#EDEBE9",
    //   "borderActive1": "#EDEBE9",
    //   "borderActive2": "#E1DFDD",
    //   "borderActive3": "#EDEBE9",
    //   "foregroundFocus1": "#484644",
    //   "foregroundFocus2": "#605E5C",
    //   "foregroundFocus3": "#fff",
    //   "backgroundFocus1": "#FAF9F8",
    //   "backgroundFocus2": "#F3F2F1",
    //   "backgroundFocus3": "#EDEBE9",
    //   "borderFocusWithin": "#fff",
    //   "foregroundDisabled1": "#C8C6C4",
    //   "backgroundDisabled1": "#EDEBE9",
    //   "backgroundDisabled2": "#FAF9F8",
    //   "backgroundDisabled3": "#FAF9F8"
    // },
  },
};
