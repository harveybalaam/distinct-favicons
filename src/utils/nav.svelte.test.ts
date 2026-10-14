import { beforeEach, describe, expect, it } from "vitest";
import { createNav } from "./nav.svelte";

describe("nav", () => {
  let nav = createNav();
  beforeEach(() => (nav = createNav()));

  it("initialises to the list route", () => {
    expect(nav.current).toEqual({ name: "list" });
    expect(nav.canGoBack).toBe(false);
  });

  it("returns false for canGoBack when the stack has only one route", () => {
    expect(nav.canGoBack).toBe(false);
  });

  it("returns true for canGoBack when the stack has more than one route", () => {
    nav.push({ name: "create" });
    expect(nav.canGoBack).toBe(true);
  });

  it("pushes a route onto the stack", () => {
    nav.push({ name: "create" });
    expect(nav.current).toEqual({ name: "create" });

    nav.push({ name: "settings" });
    expect(nav.current).toEqual({ name: "settings" });
  });

  it("pops a route off the stack when going back", () => {
    nav.push({ name: "create" });
    nav.push({ name: "settings" }); //oxlint-disable-line prefer-single-call

    expect(nav.current).toEqual({ name: "settings" });

    nav.back();
    expect(nav.current).toEqual({ name: "create" });

    nav.back();
    expect(nav.current).toEqual({ name: "list" });
  });

  it("does nothing when going back on a stack with only one route", () => {
    expect(nav.current).toEqual({ name: "list" });

    nav.back();
    expect(nav.current).toEqual({ name: "list" });
  });
});
