import { litPlugin } from "@custom-elements-manifest/analyzer/src/features/framework-plugins/lit/lit.js";

export default {
  globs: ["elements/**/hpe-*.ts", "foundation/**/hpe-*.ts"],
  exclude: ["**/*.stories.ts", "**/*.styles.ts", "**/*.test.ts"],
  outdir: "dist",
  plugins: [litPlugin()],
  litelement: true,
};
