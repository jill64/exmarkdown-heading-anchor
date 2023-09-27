<script lang="ts">
  import { makeID } from '$lib/utils/makeID'
  import { onMount } from 'svelte'

  let dom: HTMLHeadingElement | null = null
  let id: string | null = null

  $: onMount(() => {
    id = $makeID(dom)
  })
</script>

<h3 bind:this={dom} {id}>
  <slot />
</h3>
