<script lang="ts">
  import { SearchIcon } from "@lucide/svelte";
</script>

<search>
  <div class="rule-search-container">
    <SearchIcon size={16} />
    <input id="rule-search" type="text" placeholder="Search rules..." />
  </div>
</search>

<style>
  .rule-search-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: var(--bg);
    color: var(--surface-2);

    padding: 0.5rem;

    border: 1px solid var(--border);
    border-radius: 0.75rem;
  }

  .rule-search-container:focus-within {
    outline: solid 1px var(--sky);
  }

  input#rule-search {
    width: 100%;

    background: none;
    border: none;
    outline: none;
    padding: 0;
  }
</style>
