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
      defaultValue: 'The River - Wage War',
    },
    price: {
      control: {
        type: 'text',
      },
      defaultValue: '200 USD',
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue: 'I SEE YOUR WANDERING EYES AND SECOND GLANCES',
    },
    brand: {
      control: {
        type: 'text',
      },
    },
    categories: {
      control: {
        type: 'text',
        defaultValue: '["category1", "category2"]',
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

const Template: Story = (args) => (
  <Card
    id={0}
    title={''}
    price={0}
    rating={0}
    description={''}
    categories={[]}
    brand={''}
    image={''}
    {...args}
  />
)

export const Primary = Template.bind({})
Primary.args = {}
