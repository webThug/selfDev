import type {Meta, StoryObj} from '@storybook/react';

import RegistrationPage from './RegistrationPage';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {LayoutDecorator} from 'shared/config/storybook/decorators/LayoutDecorator';

const meta: Meta<typeof RegistrationPage> = {
  title: 'pages/RegistrationPage',
  component: RegistrationPage,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof RegistrationPage>;

export const Separate: Story = {
  decorators: [StoreDecorator]
};

export const AuthorizedLayout: Story = {
  parameters: {
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};


export const UnauthorizedLayout: Story = {
  parameters: {
    pageLayout: 'unauthorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};

export const UnauthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized'
  },
  decorators: [LayoutDecorator, StoreDecorator]
};