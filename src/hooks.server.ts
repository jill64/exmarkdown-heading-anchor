import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { hooks } from '@jill64/npm-demo-layout'

const { onHandle, onError } = init(
  'https://eb14d94ded5ca2c156fc82ba6fae36d8@o4505814639312896.ingest.sentry.io/4506168409915392'
)

export const handle = onHandle(hooks)
export const handleError = onError()
