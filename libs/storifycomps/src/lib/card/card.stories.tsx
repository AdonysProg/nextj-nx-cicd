import { Story, Meta } from '@storybook/react'
import { Card } from './card'

export default {
  component: Card,
  title: 'Card',
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    price: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    brand: {
      control: {
        type: 'text',
      },
    },
    categories: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'text',
      },
    },
    rating: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {}
