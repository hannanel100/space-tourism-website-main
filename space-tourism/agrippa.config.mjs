// @ts-check
import { defineConfig, Framework, PostCommandPlugin } from 'agrippa';

export default defineConfig({
  options: {
    framework: Framework.REACT,
    typescript: true,
    baseDir: './src/components',
  },
  plugins: [new PostCommandPlugin('code -r <componentPath>')],
});
