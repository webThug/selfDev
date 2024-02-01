import type {Meta, StoryObj} from '@storybook/react';

import {LogoutButton} from './LogoutButton';
import {SecondaryElementDecorator} from 'shared/config/storybook';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof LogoutButton> = {
  title: 'features/LogoutButton',
  component: LogoutButton,
  decorators: [SecondaryElementDecorator, StoreDecorator]
};
export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Primary: Story = {
  args: {},
};

export const PrimaryHover: Story = {
  parameters: {
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryActive: Story = {
  parameters: {
    pseudo: {
      active: true
    }
  },
};

export const PrimaryFocus: Story = {
  parameters: {
    pseudo: {
      focus: true
    }
  },
};

export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

export const PrimaryDarkHover: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      hover: true
    }
  },
};

export const PrimaryDarkActive: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      active: true
    }
  },
};

export const PrimaryDarkFocus: Story = {
  parameters: {
    theme: 'dark',
    pseudo: {
      focus: true
    }
  },
};

