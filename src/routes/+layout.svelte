<script lang="ts">
  import { FlipButton, ThemeManager } from '@jill64/svelte-dark-theme'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<ThemeManager />

<header>
  <hgroup>
    <h1>exmarkdown-heading-anchor</h1>
    <p>⚓️ A svelte-exmarkdown plugin that places anchors in heading tags</p>
  </hgroup>
  <FlipButton />
  <a href="https://github.com/jill64/exmarkdown-heading-anchor">
    <GitHubLogo />
  </a>
</header>

<slot />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    font-family: sans-serif;
    padding: 0 0.5rem;
  }
  :global(.dark body) {
    background: #222;
    color: #eee;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  hgroup {
    margin-right: auto;
  }
</style>
