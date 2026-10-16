<script lang="ts">
  import { ChevronRightIcon, ImageIcon } from "@lucide/svelte";
  import Switch from "./inputs/Switch.svelte";

  interface RuleProps {
    enabled: boolean;
    name: string;
    rulePattern: string;
  }

  const { enabled, name, rulePattern }: RuleProps = $props();
</script>

<div class="favicon-rule" class:favicon-rule-disabled={!enabled}>
  <span class="favicon-preview">
    <ImageIcon size={22} />
  </span>
  <div class="favicon-rule-details">
    <button class="favicon-rule-title">
      <h3>{name}</h3>
      <span>
        <ChevronRightIcon size={16} />
      </span>
    </button>
    <span class="favicon-rule-pattern">{rulePattern}</span>
  </div>
  <Switch
    name="enabled"
    ariaLabel={`${enabled ? "Disable" : "Enable"} ${name}`}
  />
</div>

<style>
  h3 {
    font-size: 1rem;
    font-weight: 700;

    color: var(--text);

    margin: 0;
    overflow-x: auto;
    text-overflow: ellipsis;
  }

  .favicon-preview {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border: 2px dashed var(--border);
    border-radius: 0.75rem;

    color: var(--border);
  }

  .favicon-rule {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    position: relative;

    padding: 0.75rem;
  }

  .favicon-rule-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;

    gap: 0.25rem;
  }

  /* ignores switch due to scoped styles */
  .favicon-rule.favicon-rule-disabled > * {
    opacity: 60%;
  }

  .favicon-rule-title {
    display: flex;
    align-items: center;
    gap: 0.125rem;

    padding: 0;

    background: none;
    border: none;
    border-radius: 0.25rem;

    outline-offset: 2px;

    transition-property: gap;
    transition-duration: 200ms;
  }

  .favicon-rule-title:hover {
    gap: 0.375rem;
    cursor: pointer;
  }

  .favicon-rule-title > span {
    display: flex;
    align-items: center;

    color: var(--overlay-0);

    transition-property: color;
    transition-duration: 200ms;
  }

  .favicon-rule-title:hover > span {
    color: var(--text);
  }

  .favicon-rule-pattern {
    font-family: monospace;
    color: var(--subtext-0);
    font-size: 0.75rem;
  }
</style>
