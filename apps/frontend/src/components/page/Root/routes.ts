import type { LayoutProps } from "../../ui/Layout/Layout";

export type Route = LayoutProps["routes"][0];

export const appTypeSegment = "/app-type";
export const appTemplateSegment = "/app-template";
export const languageSegment = "/language";
export const remixVersionSegment = "/remix-version";
export const installSegment = "/install";
export const dirSegment = "/dir";

export const appTypeRoute: Route = {
  path: [appTypeSegment].join(""),
  title: "App Type",
}
export const appTemplateRoute: Route = {
  path: [appTypeSegment, appTemplateSegment].join(""),
  title: "App Template",
}

export const languageRoute: Route = {
  path: [appTypeSegment, appTemplateSegment, languageSegment].join(""),
  title: "Language",
}

export const remixVersionRoute: Route = {
  path: [appTypeSegment, appTemplateSegment, languageSegment, remixVersionSegment].join(""),
  title: "Remix Version",
}

export const installRoute: Route = {
  path: [appTypeSegment, appTemplateSegment, languageSegment, remixVersionSegment, installSegment].join(""),
  title: "Install Dependencies",
}

export const dirRotue: Route = {
  path: [appTypeSegment, appTemplateSegment, languageSegment, remixVersionSegment, installSegment, dirSegment].join(""),
  title: "Project Directory",
}