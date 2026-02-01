import { spawn } from 'child_process';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../..');

const logFile = resolve(__dirname, 'test_output.txt');
const coverage = process.argv.includes('--coverage');

// Ensure coverage directory exists if needed
if (coverage && !existsSync(resolve(rootDir, 'coverage'))) {
  mkdirSync(resolve(rootDir, 'coverage'), { recursive: true });
}

const args = ['run'];
if (coverage) args.push('--coverage');

console.log(`Running vitest ${args.join(' ')}...`);
console.log(`Logging output to: ${logFile}`);

const writeStream = createWriteStream(logFile);
const child = spawn('npx', ['vitest', ...args], {
  cwd: __dirname,
  shell: true,
  stdio: ['inherit', 'pipe', 'pipe'],
});

child.stdout?.pipe(writeStream);
child.stderr?.pipe(writeStream);

// Also log to console
child.stdout?.on('data', (data: Buffer) => process.stdout.write(data));
child.stderr?.on('data', (data: Buffer) => process.stderr.write(data));

child.on('close', (code) => {
  writeStream.end();
  process.exit(code ?? 1);
});
