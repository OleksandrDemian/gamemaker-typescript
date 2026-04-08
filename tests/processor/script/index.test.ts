import {describe, it, expect, vi, beforeEach} from 'vitest';
import { processScriptFile } from "../../../src/processor/script";
import path from "node:path";

const processExampleScrFile = (file: string) => {
  return processScriptFile(
    path.join(__dirname, "examples", `${file}.ts`),
  );
}

describe('processScriptFile()', () => {

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should correctly parse a script', async () => {
    const result = processExampleScrFile("scr_base");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script where functions have arguments', async () => {
    const result = processExampleScrFile("scr_w_args");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script when arguments have default values', async () => {
    const result = processExampleScrFile("scr_w_args_w_default");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script with const and let declarations', async () => {
    const result = processExampleScrFile("scr_w_variables");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script with a bunch of stuff in it', async () => {
    const result = processExampleScrFile("scr_generic_tests");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script with a class', async () => {
    const result = processExampleScrFile("scr_class");
    expect(result).toMatchSnapshot();
  });

  it('should correctly parse a script with a class and inheritance', async () => {
    const result = processExampleScrFile("scr_class_inheritance");
    expect(result).toMatchSnapshot();
  });
});