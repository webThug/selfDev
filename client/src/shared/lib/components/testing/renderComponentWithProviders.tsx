import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18nForTests from 'app/config/i18n/i18nForTest';
import {MemoryRouter} from 'react-router-dom';

export interface ComponentRenderOptions {
  route?: string;
}

export function renderComponentWithProviders(component: ReactNode, options: ComponentRenderOptions = {}) {
  const {route = '/',} = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}