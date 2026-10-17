<script lang="ts">
  import { SettingsIcon, XIcon } from "@lucide/svelte";
  import IconButton from "./buttons/IconButton.svelte";
  import { nav as navRouter } from "../utils/nav.svelte";

  const route = $derived(navRouter.current);

  const handleHeaderButtonClick = () => {
    if (route.name !== "settings") {
      navRouter.push({ name: "settings" });
      return;
    }

    if (navRouter.canGoBack) {
      navRouter.back();
    } else {
      navRouter.push({ name: "list" });
    }
  };
</script>

<nav class="navbar">
  <h1><strong>Distinct</strong>Favicons</h1>
  <IconButton
    ariaLabel="Settings"
    onClick={handleHeaderButtonClick}
    icon={route.name === "settings" ? XIcon : SettingsIcon}
  />
</nav>

<style>
  nav.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;

    background-color: var(--mantle);

    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    border-bottom: 1px solid var(--border);
  }

  nav > h1 {
    font-size: x-large;
    line-height: 0;
    font-weight: normal;
  }
</style>
