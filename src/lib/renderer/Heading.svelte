<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    tag,
    id,
    anchor,
    children
  }: {
    tag: string
    id: string
    anchor: string
    children: Snippet
  } = $props()
</script>

<svelte:element this={tag} {id}>
  {@render children()}
  {#if anchor && id}
    <a href="#{id}">
      {anchor}
    </a>
  {/if}
</svelte:element>

<style>
  a {
    visibility: hidden;
  }
  h1:hover a,
  h2:hover a,
  h3:hover a,
  h4:hover a,
  h5:hover a,
  h6:hover a {
    visibility: visible;
  }
</style>
