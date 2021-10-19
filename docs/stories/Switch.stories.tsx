import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Switch } from './Switch'

export default {
  title: 'Forms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Base = Template.bind({})
Base.args = {
  size: 'md',
}
