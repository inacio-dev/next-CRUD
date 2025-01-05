import React from 'react'
import ReactQueryProviders from '@/providers/react-query'
import { dehydrate } from '@tanstack/react-query'

import { getQueryClient } from '@/lib/react-query/client'
import { Hydrate } from '@/lib/react-query/hydrate'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  const dehydratedState = dehydrate(queryClient)

  return (
    <>
      <ReactQueryProviders>
        <Hydrate state={dehydratedState}>{children}</Hydrate>
      </ReactQueryProviders>
    </>
  )
}
