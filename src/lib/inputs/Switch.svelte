<script lang="ts">
  interface SwitchProps {
    ariaLabel?: string;
    name: string;
  }

  const { ariaLabel, name }: SwitchProps = $props();
</script>

<label class="switch">
  <input aria-label={ariaLabel} {name} role="switch" type="checkbox" />
  <span class="slider"></span>
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;

    height: 1.25rem;
    width: 2.25rem;
  }

  .switch > input {
    position: absolute;

    height: 1px;
    width: 1px;

    padding: 0;
    margin: -1px;

    border-width: 0;

    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--overlay-0);

    border-radius: 1rem;

    cursor: pointer;

    transition: 250ms ease-in-out;
  }

  .slider::before {
    content: "";

    position: absolute;
    left: 0.125rem;
    bottom: 0.125rem;

    height: 1rem;
    width: 1.25rem;

    background-color: var(--bg);

    border-radius: 1rem;

    transition: 250ms ease-in-out;
  }

  input:checked + .slider {
    background-color: var(--sky);
  }

  input:focus-visible + .slider {
    outline: 1px solid var(--sky);
    outline-offset: 1px;

    transition-property: background-color, border, border-radius;
  }

  input:checked + .slider:before {
    transform: translateX(0.75rem);
  }
</style>
