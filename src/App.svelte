<script lang="ts">
  import Header from "./lib/Header.svelte";
  import TitleBar from "./lib/TitleBar.svelte";
</script>

<div class="main-content">
  <Header />
  <div class="rules-container">
    <TitleBar />
  </div>
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

  .main-content,
  .rules-container {
    display: flex;
    flex-direction: column;
  }

  .main-content {
    height: 100%;
  }

  .rules-container {
    flex: 1;
    padding: 1rem;
    min-height: 0;
  }
</style>
