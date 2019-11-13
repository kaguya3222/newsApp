import { shallowMount } from "@vue/test-utils";
import Input from "../../src/components/registration/Input";

describe("Input", () => {
  
  describe("checkPassword method test", () => {
    it(`Returns "true" when passwords are the same`, () => {
      expect(Input.methods.checkPassword("Palma_2001", "Palma_2001")).toBe(true);
    });
    it(`Returns "false" when passwords are not the same`, () => {
      expect(Input.methods.checkPassword("Palma_2001", "Palma_2000")).toBe(false);
    });
  });
});