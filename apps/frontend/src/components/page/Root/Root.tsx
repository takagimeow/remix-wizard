import { Outlet, useMatches, useNavigate } from "react-router-dom";
import { Layout } from "../../ui/Layout/Layout";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { OptionsContext } from "../../ui/OptionsProvider/OptionsProvider";
import { Route, installRoute, languageRoute, appTemplateRoute, appTypeRoute, dirRotue, remixVersionRoute } from "./routes";
import { appTypes, languages, stacks, templates } from "../../../utils/constants";
import { VSCodeContext } from "../../ui/VSCodeProvider/VSCodeProvider";

function useRouteHistory() {
  const navigate = useNavigate();
  const pushRoute = useCallback((currentRoute: string) => {
    switch (currentRoute) {
      case appTypeRoute.path:
        navigate(appTemplateRoute.path);
        break;
      case appTemplateRoute.path:
        navigate(languageRoute.path);
        break;
      case languageRoute.path:
        navigate(remixVersionRoute.path);
        break;
      case remixVersionRoute.path:
        navigate(installRoute.path);
        break;
      case installRoute.path:
        navigate(dirRotue.path);
        break;
      default:
        navigate(appTypeRoute.path);
        break;
    }
  }, [navigate]);

  const popRoute = useCallback((destinationPath: string) => {
    switch (destinationPath) {
      case appTypeRoute.path:
        navigate(appTypeRoute.path)
        break;
      case appTemplateRoute.path:
        navigate(appTemplateRoute.path)
        break;
      case languageRoute.path:
        navigate(languageRoute.path)
        break;
      case remixVersionRoute.path:
        navigate(remixVersionRoute.path)
        break;
      case installRoute.path:
        navigate(installRoute.path)
        break;
      default:
        navigate(appTypeRoute.path)
        break;
    }
  }, [navigate]);

  return {
    pushRoute,
    popRoute,
  };
}

export function Root() {
  const title = "Remix Setup Wizard";
  const { pushRoute, popRoute } = useRouteHistory();
  const { appType, appTemplate, language, remixVersion, install, dir } = useContext(OptionsContext)
  const { vscode } = useContext(VSCodeContext);
  const navigate = useNavigate();

  const appTypeValue = useMemo(() => {
    const value = appTypes.find((item) => item.value === appType);
    if (!value) {
      return undefined;
    }
    return value.name;
  }, [appType]);
  const appTemplateValue = useMemo(() => {
    const value = [...templates, ...stacks].find((item) => item.value === appTemplate);
    if (!value) {
      return undefined;
    }
    return value.name;
  }, [appTemplate]);
  const languageValue = useMemo(() => {
    const value = languages.find((item) => item.value === language);
    if (!value) {
      return undefined;
    }
    return value.name;
  }, [language]);
  const remixVersionValue = useMemo(() => {
    return remixVersion;
  }, [remixVersion]);
  const matches = useMatches();

  const routes = useMemo(() => {
    const history: Route[] = [];
    matches.map((match) => {
      if (match.pathname === appTypeRoute.path) {
        history.push({
          ...appTypeRoute,
          description: appTypeValue,
        })
      }
      if (match.pathname === appTemplateRoute.path) {
        history.push({
          ...appTemplateRoute,
          description: appTemplateValue,
        })
      }
      if (match.pathname === languageRoute.path) {
        history.push({
          ...languageRoute,
          description: languageValue,
        })
      }
      if (match.pathname === remixVersionRoute.path) {
        history.push({
          ...remixVersionRoute,
          description: remixVersionValue,
        })
      }
      if (match.pathname === installRoute.path) {
        history.push({
          ...installRoute,
          description: install ? "Yes" : "No",
        })
      }
      if (match.pathname === dirRotue.path) {
        history.push({
          ...dirRotue,
        })
      }
    })
    return history;
  }, [matches, appTypeValue, appTemplateValue, languageValue, remixVersionValue, install]);

  const routeIsDisabled = useMemo(() => {
    if (routes.length === 0) {
      return {
        isBackButtonDisabled: false,
        isNextButtonDisabled: false,
      }
    }
    const lastIndex = routes.length - 1;
    const lastRoute = routes[lastIndex];
    switch (lastRoute.path) {
      case appTypeRoute.path: {
        return {
          isBackButtonDisabled: true,
          isNextButtonDisabled: !appType
        }
      }
      case appTemplateRoute.path: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: !appTemplate
        }
      }
      case languageRoute.path: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: !language
        }
      }
      case remixVersionRoute.path: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: !remixVersion,
        }
      }
      case installRoute.path: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: install === undefined
        }
      }
      case dirRotue.path: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: !dir
        }
      }
      default: {
        return {
          isBackButtonDisabled: false,
          isNextButtonDisabled: false
        }
      }
    }
  }, [routes, appType, appTemplate, language, remixVersion, install, dir]);
  const handleFinish = useCallback(() => {
    const options = {
      appType,
      appTemplate,
      language,
      remixVersion,
      install,
      dir,
    }
    vscode?.postMessage({
      command: 'create',
      text: JSON.stringify(options)
    });
    navigate("/loading");
  }, [appType, appTemplate, language, remixVersion, install, dir, vscode, navigate])

  const handleBack = useCallback(() => {
    if (routes.length <= 1) {
      return;
    }
    const lastIndex = routes.length - 2;
    const lastRoute = routes[lastIndex];
    popRoute(lastRoute.path);
  }, [popRoute, routes]);
  const handleNext = useCallback(() => {
    // Get current route path
    const lastIndex = routes.length - 1;
    const lastRoute = routes[lastIndex];
    const currentRoute = lastRoute.path;
    if (currentRoute === dirRotue.path) {
      handleFinish();
      return;
    }
    pushRoute(currentRoute);
  }, [pushRoute, handleFinish, routes]);

  return (
    <Layout
      title={title}
      routes={routes}
      isBackButtonDisabled={routeIsDisabled.isBackButtonDisabled}
      isNextButtonDisabled={routeIsDisabled.isNextButtonDisabled}
      onBack={handleBack}
      onNext={handleNext}
    >
      <Outlet />
    </Layout>
  )
}