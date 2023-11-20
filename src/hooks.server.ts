import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { onRender } from '@jill64/svelte-dark-theme'

const { onHandle, onError } = serverInit(
  'https://eb14d94ded5ca2c156fc82ba6fae36d8@o4505814639312896.ingest.sentry.io/4506168409915392'
)

export const handle = onHandle(onRender())
export const handleError = onError()
