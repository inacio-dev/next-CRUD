import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 3 * 1000, // 3 segundos
          refetchOnWindowFocus: false,
        },
      },
    }),
)
