import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarStack } from './AvatarStack'

export default {
  title: 'AvatarStack',
  component: AvatarStack,
  argTypes: {
    size: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
    },
    avatarCount: {
      control: { type: 'number', min: 1, step: 1 },
    },
  },
} as ComponentMeta<typeof AvatarStack>

const Template: ComponentStory<typeof AvatarStack> = (args) => <AvatarStack {...args} />

export const Base = Template.bind({})
Base.args = {
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"',
  alt: 'Abeid Ahmed',
  size: 4,
  circle: true,
  avatarCount: 4,
  showCount: true,
}
