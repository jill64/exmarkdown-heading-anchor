<script lang="ts">
  import { options } from '$lib/options'

  $: ({ anchor } = $options ?? {})
  $: ({ tag, id } = $$props)
</script>

<svelte:element this={tag} {id}>
  <slot />
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
