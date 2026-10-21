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
    color: var(--placeholder);

    padding: 0 0.5rem 0 0.5rem;

    border: 1px solid var(--border);
    border-radius: 0.75rem;
  }

  .rule-search-container:focus-within {
    outline: solid 2px var(--sky);
    outline-offset: -1px;
  }

  input#rule-search {
    width: 100%;

    padding: 0.5rem 0 0.5rem 0;

    background: none;
    border: none;
    outline: none;
  }

  input#rule-search:focus-visible {
    outline: none;
  }
</style>
