import type { Plugin } from 'svelte-exmarkdown/types'
import { options as store } from './options.js'
import H1 from './renderer/H1.svelte'
import H2 from './renderer/H2.svelte'
import H3 from './renderer/H3.svelte'
import H4 from './renderer/H4.svelte'
import H5 from './renderer/H5.svelte'
import H6 from './renderer/H6.svelte'
import type { Options } from './types/Options.js'

export const headingAnchor = (options?: Options): Plugin => {
  const opts = {
    prefix: options?.prefix ?? '',
    include: options?.include ?? ['h1', 'h2', 'h3']
  }

  store.set(opts)

  const enable = new Array(6)
    .fill(false)
    .map(
      (_, i) =>
        opts.include?.includes(
          `h${i + 1}` as NonNullable<Options['include']>[number]
        ) ?? false
    )

  return {
    renderer: {
      ...(enable[0] ? { h1: H1 } : {}),
      ...(enable[1] ? { h2: H2 } : {}),
      ...(enable[2] ? { h3: H3 } : {}),
      ...(enable[3] ? { h4: H4 } : {}),
      ...(enable[4] ? { h5: H5 } : {}),
      ...(enable[5] ? { h6: H6 } : {})
    }
  }
}
