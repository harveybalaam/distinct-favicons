<script lang="ts">
  import Header from "./lib/Header.svelte";
  import RuleList from "./lib/RuleList.svelte";
  import { nav } from "./utils/nav.svelte";

  const route = $derived(nav.current);
</script>

<div class="main-content">
  <Header />
  {#if route.name === "list"}
    <RuleList />
  {/if}
</div>

<style>
  :global {
    *:focus-visible {
      outline: solid 1px var(--sky);
      outline-offset: -1px;
    }

    input {
      color: var(--text);
      font-size: 0.875rem;
    }

    input::placeholder {
      color: var(--surface-2);
    }

    button {
      border: 1px solid var(--border);
    }

    button:active {
      outline: none;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
