import { Meta, Story } from '@storybook/react';

import { Main } from '.';

export default {
  title: 'Components/Main',
  component: Main,
} as Meta;

export const Default: Story = (args) => <Main {...args} />;
