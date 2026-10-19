<script lang="ts">
  import { SettingsIcon, XIcon } from "@lucide/svelte";
  import IconButton from "./buttons/IconButton.svelte";
  import { nav as navRouter } from "../utils/nav.svelte";

  const route = $derived(navRouter.current);
  const isSettingsRoute = $derived(route.name === "settings");

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

<header>
  <h1><strong>Distinct</strong>Favicons</h1>
  <IconButton
    ariaLabel="Settings"
    onClick={handleHeaderButtonClick}
    icon={isSettingsRoute ? XIcon : SettingsIcon}
    variant={isSettingsRoute ? "destructive" : "primary"}
  />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;

    background-color: var(--mantle);

    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    border-bottom: 1px solid var(--border);
  }

  header > h1 {
    font-size: x-large;
    line-height: 0;
    font-weight: normal;
  }
</style>
