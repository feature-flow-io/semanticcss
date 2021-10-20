import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = () => <Breadcrumb />

export const Base = Template.bind({})
