<script lang="ts">
  import Header from "./lib/Header.svelte";
  import RuleList from "./lib/RuleList.svelte";
  import Settings from "./lib/Settings.svelte";
  import { nav } from "./utils/nav.svelte";

  const route = $derived(nav.current);
</script>

<div>
  <Header />
  <main>
    {#if route.name === "settings"}
      <Settings />
    {:else}
      <RuleList />
    {/if}
  </main>
</div>

<style>
  div,
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
