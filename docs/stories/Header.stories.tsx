import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'fullscreen',
}
