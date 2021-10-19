import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from './Link'

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Base = Template.bind({})
Base.args = {
  text: 'Link',
  scheme: 'default',
}
