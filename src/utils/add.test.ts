import { describe, it, expect } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  it("adds zero", () => {
    expect(add(0, 7)).toBe(7);
    expect(add(7, 0)).toBe(7);
  });
});
