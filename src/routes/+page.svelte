<script lang="ts">
  import { headingAnchor } from '$lib'
  import { TextArea } from '@jill64/svelte-input'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import mock from './mock.md?raw'

  let md = mock
</script>

<main>
  <TextArea
    style="background: inherit; color: inherit; border-radius: 0.25rem; border: 1px solid #888;"
    padding="0.5rem"
    placeholder="Markdown"
    bind:value={md}
  />
  <div data-testid="markdown-preview">
    <Markdown
      {md}
      plugins={[
        gfmPlugin(),
        headingAnchor({
          prefix: 'anchor-',
          anchor: true
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
  :global(a) {
    color: royalblue;
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
  }
</style>
