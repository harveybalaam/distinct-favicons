<script lang="ts">
  import Header from "./lib/Header.svelte";
  import RuleList from "./lib/RuleList.svelte";
  import Settings from "./lib/Settings.svelte";
  import { nav } from "./utils/nav.svelte";

  const route = $derived(nav.current);
</script>

<div class="main-content">
  <Header />
  {#if route.name === "settings"}
    <Settings />
  {:else}
    <RuleList />
  {/if}
</div>

<style>
  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
