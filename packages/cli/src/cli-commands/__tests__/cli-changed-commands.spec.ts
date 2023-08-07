import { describe, expect, it, vi } from 'vitest';

vi.mock('@lerna-lite/changed', () => null);
import cliChanged from '../cli-changed-commands';

describe('ChangedCommand CLI options', () => {
  it('should log a console error when ChangedCommand is not provided', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(cliChanged.handler(undefined as any)).rejects.toMatchInlineSnapshot(
      '[Error: [vitest] vi.mock("@lerna-lite/changed", factory?: () => unknown) is not returning an object. Did you mean to return an object with a "default" key?]'
    );

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('"@lerna-lite/changed" is optional and was not found.'), expect.anything());
  });
});
