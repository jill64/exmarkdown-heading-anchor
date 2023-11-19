import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(
  'https://eb14d94ded5ca2c156fc82ba6fae36d8@o4505814639312896.ingest.sentry.io/4506168409915392'
)

export const handle = onHandle()
export const handleError = onError()
