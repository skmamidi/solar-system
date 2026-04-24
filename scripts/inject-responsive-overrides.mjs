import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const results = [];

    for (const entry of entries) {
        if (entry.name === '.git' || entry.name === 'assets' || entry.name === 'scripts') continue;
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            results.push(...walk(fullPath));
            continue;
        }

        if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.endsWith('_old.html')) {
            results.push(fullPath);
        }
    }

    return results;
}

function relativeCssPath(filePath) {
    const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
    const depth = relPath.split('/').length - 1;
    return `${'../'.repeat(depth)}assets/css/responsive-overrides.css`;
}

for (const filePath of walk(ROOT)) {
    const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
    const cssPath = relativeCssPath(filePath);
    const linkTag = `    <link rel="stylesheet" href="${cssPath}">\n`;
    const source = fs.readFileSync(filePath, 'utf8');

    if (source.includes(cssPath)) {
        continue;
    }

    const headEnd = source.indexOf('</head>');
    if (headEnd === -1) {
        throw new Error(`No </head> tag found in ${relPath}`);
    }

    const updated = source.slice(0, headEnd) + linkTag + source.slice(headEnd);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Injected responsive overrides into ${relPath}`);
}
