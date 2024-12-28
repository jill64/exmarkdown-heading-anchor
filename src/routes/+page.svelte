<script lang="ts">
  import { page } from '$app/stores'
  import { headingAnchor } from '$lib'
  import { headingTag } from '$lib/headingTag'
  import type { HeadingTag } from '$lib/types/HeadingTag'
  import { CheckList, Radio } from '@jill64/svelte-input'
  import { Markdown } from 'svelte-exmarkdown'
  import { gfmPlugin } from 'svelte-exmarkdown/gfm'
  import { define } from 'svelte-qparam'
  import { enums, json, string } from 'svelte-qparam/serde'
  import mock from './mock.md?raw'

  const extract = define({
    prefix: string,
    anchor: enums(['🔗', '＃'], '🔗'),
    include: json(
      (x): x is HeadingTag[] =>
        Array.isArray(x) &&
        x.every(
          (s) =>
            typeof s === 'string' &&
            (headingTag as Readonly<string[]>).includes(s)
        ),
      ['h1', 'h2', 'h3'] as const
    )
  })

  $: ({ qparams } = extract($page.url))
  $: ({ prefix, anchor, include } = qparams)

  $: onChange = (x: Record<string, boolean>) => {
    $include = Object.entries(x)
      .filter(([, v]) => v)
      .map(([k]) => k) as HeadingTag[]
  }

  let md = mock
</script>

<aside>
  <label>
    Prefix
    <input bind:value={$prefix} />
  </label>
  <fieldset>
    <legend>Anchor Icon</legend>
    <Radio list={['🔗', '＃']} bind:value={$anchor}>
      {#snippet children(item)}
        <span style:margin-left="0.5rem">{item}</span>
      {/snippet}
    </Radio>
  </fieldset>
  <fieldset>
    <legend>Include Tags</legend>
    <CheckList
      value={Object.fromEntries(
        headingTag.map((tag) => [tag, $include.includes(tag)])
      )}
      {onChange}
    >
      {#snippet children(item)}
        <span style:margin-left="0.5rem">{item}</span>
      {/snippet}
    </CheckList>
  </fieldset>
</aside>

<main>
  <textarea
    style="padding: 0.5rem; background: inherit; color: inherit; border-radius: 0.25rem; border: 1px solid #888;"
    placeholder="Markdown"
    bind:value={md}
  ></textarea>
  <div>
    <output data-testid="markdown-preview">
      <Markdown
        {md}
        plugins={[
          gfmPlugin(),
          headingAnchor({
            prefix: $prefix,
            anchor: $anchor,
            include: $include
          })
        ]}
      />
    </output>
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  @media (max-width: 640px) {
    main {
      grid-template-columns: 1fr;
    }
  }
  :global(a) {
    color: royalblue;
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
  }
  fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  legend {
    margin: 0.25rem 0;
  }
  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }
  input {
    border: 1px solid #888;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: large;
    color: inherit;
    background: inherit;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
