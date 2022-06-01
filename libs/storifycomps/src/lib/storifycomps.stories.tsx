import { Story, Meta } from '@storybook/react';
import { Storifycomps, StorifycompsProps } from './storifycomps';

export default {
  component: Storifycomps,
  title: 'Storifycomps',
} as Meta;

const Template: Story<StorifycompsProps> = (args) => <Storifycomps {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
