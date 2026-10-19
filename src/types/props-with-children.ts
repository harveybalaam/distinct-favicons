//oxlint-disable eslint/id-length
import type { Snippet } from "svelte";

export interface PropsWithChildren<T extends unknown[] = []> {
  children?: Snippet<T>;
}
