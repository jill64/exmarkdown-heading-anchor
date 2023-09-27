<script lang="ts">
  import { headingAnchor } from '$lib/index.js'
  import { TextArea } from '@jill64/svelte-input'
  import { Toaster } from '@jill64/svelte-toast'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'

  let md = mock
</script>

<Toaster />
<h1>exmarkdown-heading-anchor</h1>
<main>
  <TextArea
    placeholder="Markdown"
    style="background: inherit; color: inherit;"
    bind:value={md}
  />
  <div data-testid="markdown-preview">
    <Markdown
      {md}
      plugins={[
        gfmPlugin(),
        headingAnchor({
          prefix: 'anchor-'
        })
      ]}
    />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #222;
      color: #eee;
    }
  }
</style>
