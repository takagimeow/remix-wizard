import React, { useCallback, useState } from "react";

type HandleChangeProps = {
  key: 'appType' | 'appTemplate' | 'language' | 'remixVersion' | 'dir';
  value: string;
} | {
  key: 'install';
  value: boolean;
};

type RemixOptions = {
  appType?: string;
  appTemplate?: string;
  language?: string;
  remixVersion?: string;
  install?: boolean;
  dir?: string;
}

const defaultOptions: RemixOptions = {}

export const OptionsContext = React.createContext<RemixOptions & {
  handleChange: (props: HandleChangeProps) => void;
}>({
  ...defaultOptions,
  handleChange: () => null,
});

export function OptionsProvider({ children }: { children: React.ReactNode }) {
  const [appType, setAppType] = useState<string>('');
  const [appTemplate, setAppTemplate] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [remixVersion, setRemixVersion] = useState<string>('');
  const [install, setInstall] = useState<boolean>(false);
  const [dir, setDir] = useState<string>('');

  const handleChange = useCallback(({ key, value }: HandleChangeProps) => {
    switch (key) {
      case 'appType':
        setAppType(value);
        break;
      case 'appTemplate':
        setAppTemplate(value);
        break;
      case 'language':
        if (value === "typescript" && appTemplate === "remix") {
          setAppTemplate("remix");
        }
        setLanguage(value);
        break;
      case 'remixVersion':
        setRemixVersion(value);
        break;
      case 'install':
        setInstall(value);
        break;
      case 'dir':
        setDir(value);
        break;
      default:
        setAppTemplate('');
        setLanguage('');
        setInstall(false);
        break;
    }
  }, [appTemplate, language]);

  return (
    <OptionsContext.Provider value={{ appType, appTemplate, language, remixVersion, install, dir, handleChange }}>
      {children}
    </OptionsContext.Provider>
  );
}