<script lang="ts">
  import { FunnelIcon, PlusIcon } from "@lucide/svelte";
  import Button from "./buttons/Button.svelte";
  import IconButton from "./buttons/IconButton.svelte";
  import Search from "./Search.svelte";
  import TitleBar from "./TitleBar.svelte";
</script>

<div class="rules-list">
  <div class="title-container">
    <TitleBar title="Rules">
      <Button
        ariaLabel="New Rule"
        icon={PlusIcon}
        onClick={() => {}}
        text="New"
      />
      <IconButton
        ariaLabel="Filter Rules"
        icon={FunnelIcon}
        onClick={() => {}}
        size="sm"
      />
    </TitleBar>
    <Search />
  </div>
  <ul>
    <li></li>
  </ul>
</div>

<style>
  .rules-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    min-height: 0;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 0.75rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;

    min-height: 0;

    overflow: scroll;
    scrollbar-width: none;

    padding: 0.25rem;
    margin: 0;

    border-radius: 1.25rem;
    border: 1px solid var(--border);

    list-style: none;
  }

  li {
    position: relative;
  }

  ul > li:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: -0rem;
    height: 1px;
    background: var(--border);
  }
</style>
