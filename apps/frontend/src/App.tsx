import * as React from "react";
import { Link, createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { SelectTemplateIndexPage, SelectTemplatePage } from "./components/page/SelectTemplate";
import { Root } from "./components/page/Root/Root";
import { OptionsProvider } from "./components/ui/OptionsProvider/OptionsProvider";
import { SelectLanguageIndexPage, SelectLanguagePage } from "./components/page/SelectLanguage";
import { InstallDepsIndexPage, InstallDepsPage } from "./components/page/InstallDeps";
import { SelectAppTypeIndexPage, SelectAppTypePage } from "./components/page/SelectAppType/SelectAppType.page";
import { DirectoryNameInputIndexPage, DirectoryNameInputPage } from "./components/page/DirectoryNameInput/DirectoryNameInput.page";
import { appTemplateSegment, appTypeSegment, dirSegment, installSegment, languageSegment, remixVersionSegment } from "./components/page/Root/routes";
import { SelectRemixVersionIndexPage, SelectRemixVersionPage } from "./components/page/SelectRemixVersion/SelectRemixVersion.page";
import { VSCodeProvider } from "./components/ui/VSCodeProvider/VSCodeProvider";
import { LoadingIndexPage, LoadingPage } from "./components/page/Loading/Loading.page";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/index.html",
        index: true,
        Component: Home,
      },
      {
        path: "loading",
        Component: LoadingPage,
        children: [
          {
            index: true,
            Component: LoadingIndexPage,
          }
        ]
      },
      {
        path: appTypeSegment.replace("/", ""),
        Component: SelectAppTypePage,
        children: [
          {
            index: true,
            Component: SelectAppTypeIndexPage,
          },
          {
            path: appTemplateSegment.replace("/", ""),
            Component: SelectTemplatePage,
            children: [
              {
                index: true,
                Component: SelectTemplateIndexPage,
              },
              {
                path: languageSegment.replace("/", ""),
                Component: SelectLanguagePage,
                children: [
                  {
                    index: true,
                    Component: SelectLanguageIndexPage,
                  },
                  {
                    path: remixVersionSegment.replace("/", ""),
                    Component: SelectRemixVersionPage,
                    children: [
                      {
                        index: true,
                        Component: SelectRemixVersionIndexPage,
                      },
                      {
                        path: installSegment.replace("/", ""),
                        Component: InstallDepsPage,
                        children: [
                          {
                            index: true,
                            Component: InstallDepsIndexPage,
                          },
                          {
                            path: dirSegment.replace("/", ""),
                            Component: DirectoryNameInputPage,
                            children: [
                              {
                                index: true,
                                Component: DirectoryNameInputIndexPage,
                              },
                            ],
                          }
                        ]
                      }
                    ],
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        path: "*",
        Component: NoMatch
      }
    ]
  }
]);

export default function App() {
  return (
    <OptionsProvider>
      <VSCodeProvider>
        <RouterProvider router={router} fallbackElement={<Fallback />} />
      </VSCodeProvider>
    </OptionsProvider>
  );
}

function Home() {
  return (
    <Navigate to={appTypeSegment} replace={true} />
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export function Fallback() {
  return <p>Performing initial data load</p>;
}
