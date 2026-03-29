import {describe, it, expect, vi, beforeEach} from 'vitest';
import { processObjectFile } from "../../../src/processor/object";
import path from "node:path";

const processExampleObjFile = (file: string) => {
  return processObjectFile(
    path.join(__dirname, "examples", `${file}.ts`),
  );
}

describe('processObjectFile()', () => {

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should correctly parse a class name and its methods into scripts', async () => {
    const result = processExampleObjFile("obj_base_class");
    expect(result).toMatchSnapshot();
  });

  it('should handle methods within a class', async () => {
    const result = processExampleObjFile("obj_w_methods");
    expect(result).toMatchSnapshot();
  });

  it('should handle methods within a class without onCreate event', async () => {
    const result = processExampleObjFile("obj_w_methods_no_create");
    expect(result).toMatchSnapshot();
  });

  it('should handle methods inheritance when extending', async () => {
    const result = processExampleObjFile("obj_w_extends");
    expect(result).toMatchSnapshot();
  });

  it('obj_example_1', async () => {
    const result = processExampleObjFile("obj_example_1");
    expect(result).toMatchSnapshot();
  });
});