import React, { useCallback, useState } from "react";

type HandleChangeProps = {
  key: 'template' | 'language';
  value: string;
} | {
  key: 'installDependencies';
  value: boolean;
};

type RemixOptions = {
  template?: string;
  language?: string;
  installDependencies?: boolean;
}

const defaultOptions: RemixOptions = {}

export const OptionsContext = React.createContext<RemixOptions & {
  handleChange: (props: HandleChangeProps) => void;
}>({
  ...defaultOptions,
  handleChange: () => null,
});

export function OptionsProvider({ children }: { children: React.ReactNode }) {
  const [template, setTemplate] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [installDependencies, setInstallDependencies] = useState<boolean>(false);

  const handleChange = useCallback(({ key, value }: HandleChangeProps) => {
    switch (key) {
      case 'template':
        setTemplate(value);
        break;
      case 'language':
        setLanguage(value);
        break;
      case 'installDependencies':
        setInstallDependencies(value);
        break;
      default:
        setTemplate('');
        setLanguage('');
        setInstallDependencies(false);
        break;
    }
  }, []);

  return (
    <OptionsContext.Provider value={{ language, template, installDependencies, handleChange }}>
      {children}
    </OptionsContext.Provider>
  );
}