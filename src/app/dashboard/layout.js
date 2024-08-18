import DashbaordSidebar from '@/components/dashboard/DashbaordSidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <DashbaordSidebar>
            {children}
        </DashbaordSidebar>
    </div>
  )
}

export default layout