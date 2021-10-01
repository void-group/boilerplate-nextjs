import { Meta, Story } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
