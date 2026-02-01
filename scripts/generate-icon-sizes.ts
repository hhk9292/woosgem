import fs from 'fs';
import path from 'path';

const svgDir = 'packages/ds-icons/svg';
const mdDir = path.join(svgDir, 'md');
const smDir = path.join(svgDir, 'sm');
const lgDir = path.join(svgDir, 'lg');

const files = fs.readdirSync(mdDir).filter((f) => f.endsWith('.svg'));

files.forEach((file) => {
  const content = fs.readFileSync(path.join(mdDir, file), 'utf-8');

  // Create sm version (20x20)
  const smContent = content
    .replace('width="24"', 'width="20"')
    .replace('height="24"', 'height="20"');
  fs.writeFileSync(path.join(smDir, file), smContent);

  // Create lg version (32x32)
  const lgContent = content
    .replace('width="24"', 'width="32"')
    .replace('height="24"', 'height="32"');
  fs.writeFileSync(path.join(lgDir, file), lgContent);

  console.log(`Generated sm and lg versions for ${file}`);
});
