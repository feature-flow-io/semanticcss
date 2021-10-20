import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainLayout } from './MainLayout'

export default {
  title: 'layout/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = () => <MainLayout />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'fullscreen',
}
