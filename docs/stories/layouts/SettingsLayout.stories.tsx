import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SettingsLayout } from './SettingsLayout'

export default {
  title: 'layout/SettingsLayout',
  component: SettingsLayout,
} as ComponentMeta<typeof SettingsLayout>

const Template: ComponentStory<typeof SettingsLayout> = () => <SettingsLayout />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'fullscreen',
}
