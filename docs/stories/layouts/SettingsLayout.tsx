import { MainLayout } from './MainLayout'
import { Breadcrumb } from '../Breadcrumb'
import { Subhead } from '../Subhead'

export const SettingsLayout = () => {
  return (
    <MainLayout>
      <main className="p--responsive">
        <div className="border-bottom py-2 mb-4">
          <Breadcrumb />
        </div>

        <section className="section layout">
          <div className="layout-sidebar">
            <Subhead heading="Update your profile" />
          </div>

          <div className="layout-main">
            <div className="box">
              <div className="box-row">Box-row settings</div>

              <div className="box-row">Box-row settings</div>
            </div>
          </div>
        </section>

        <section className="section layout">
          <div className="layout-sidebar">
            <Subhead
              heading="Social preview"
              description="To control the columns of a grid at a specific breakpoint, add a {screen}: prefix."
            />
          </div>

          <div className="layout-main">
            <div className="box">
              <div className="box-row">Box-row settings</div>

              <div className="box-row">Box-row settings</div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
