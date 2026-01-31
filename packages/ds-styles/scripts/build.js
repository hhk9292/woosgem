#!/usr/bin/env node
/**
 * Build script for @woosgem/styles
 * Compiles SCSS to CSS with source maps and minification
 */

const sass = require('sass');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

/**
 * Compile a SCSS file to CSS
 * @param {string} inputPath - Path to input SCSS file
 * @param {string} outputPath - Path to output CSS file
 * @param {object} options - Compilation options
 */
function compile(inputPath, outputPath, options = {}) {
  const { minify = false, sourceMap = true } = options;

  try {
    const result = sass.compile(inputPath, {
      loadPaths: [srcDir],
      style: minify ? 'compressed' : 'expanded',
      sourceMap: sourceMap,
    });

    // Write CSS
    let css = result.css;
    if (sourceMap && result.sourceMap) {
      const mapFileName = path.basename(outputPath) + '.map';
      css += `\n/*# sourceMappingURL=${mapFileName} */`;

      // Write source map
      fs.writeFileSync(
        outputPath + '.map',
        JSON.stringify(result.sourceMap)
      );
    }

    fs.writeFileSync(outputPath, css);
    console.log(`[OK] ${path.relative(process.cwd(), outputPath)}`);

    return true;
  } catch (error) {
    console.error(`[ERROR] ${inputPath}: ${error.message}`);
    return false;
  }
}

// Build configurations
const builds = [
  // Main bundle (dev)
  {
    input: path.join(srcDir, 'index.scss'),
    output: path.join(distDir, 'index.css'),
    options: { minify: false, sourceMap: true }
  },
  // Main bundle (minified)
  {
    input: path.join(srcDir, 'index.scss'),
    output: path.join(distDir, 'index.min.css'),
    options: { minify: true, sourceMap: true }
  },
  // Theme: Default
  {
    input: path.join(srcDir, 'themes/default.scss'),
    output: path.join(distDir, 'themes/default.css'),
    options: { minify: false, sourceMap: true }
  },
  {
    input: path.join(srcDir, 'themes/default.scss'),
    output: path.join(distDir, 'themes/default.min.css'),
    options: { minify: true, sourceMap: false }
  },
  // Theme: Dark
  {
    input: path.join(srcDir, 'themes/dark.scss'),
    output: path.join(distDir, 'themes/dark.css'),
    options: { minify: false, sourceMap: true }
  },
  {
    input: path.join(srcDir, 'themes/dark.scss'),
    output: path.join(distDir, 'themes/dark.min.css'),
    options: { minify: true, sourceMap: false }
  },
];

// Run builds
console.log('Building @woosgem/styles...\n');

// Ensure themes directory exists
const themesDistDir = path.join(distDir, 'themes');
if (!fs.existsSync(themesDistDir)) {
  fs.mkdirSync(themesDistDir, { recursive: true });
}

let success = true;
for (const build of builds) {
  if (!compile(build.input, build.output, build.options)) {
    success = false;
  }
}

console.log(success ? '\nBuild completed successfully!' : '\nBuild completed with errors.');
process.exit(success ? 0 : 1);
