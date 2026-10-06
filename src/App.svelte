<script lang="ts">
  import Header from "./lib/Header.svelte";
</script>

<div class="main-content">
  <Header />
</div>

<style>
  :global {
    button:focus-visible {
      outline: solid 1px var(--sky);
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
  }

  .main-content {
    height: 100%;
  }
</style>
