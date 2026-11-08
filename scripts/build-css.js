/* eslint-disable @typescript-eslint/no-require-imports */
const tn = require('C:/Users/harsh/Desktop/portfolio/node_modules/@tailwindcss/node/dist/index.js');
const fs = require('fs');
const path = require('path');

async function buildCss() {
  const inputCss = `@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-brand-black: #0B0F19;
  --color-brand-dark: #111827;
  --color-brand-muted: #64748B;
  --color-brand-slate: #475569;
  --color-brand-subtle: #94A3B8;
  --color-brand-cyan: #06B6D4;
  --color-brand-indigo: #6366F1;
  --color-brand-lime: #A3E635;
}

body {
  font-family: 'Geist', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  letter-spacing: -0.011em;
}

.heading-tight {
  letter-spacing: -0.025em;
}

.grid-pattern {
  background-size: 32px 32px;
  background-image: 
    linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
}

.dark .grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
}

.border-subtle {
  border-color: rgba(226, 232, 240, 0.85);
}
`;

  const compiler = await tn.compile(inputCss, {
    base: path.resolve(__dirname, '..'),
    from: path.resolve(__dirname, '../app/globals.css'),
    onDependency: () => {}
  });

  const filesToScan = [
    'app/page.tsx',
    'app/layout.tsx',
    'components/Navbar.tsx',
    'components/Hero.tsx',
    'components/About.tsx',
    'components/Projects.tsx',
    'components/Skills.tsx',
    'components/Research.tsx',
    'components/Contact.tsx',
    'components/Footer.tsx',
    'components/Icons.tsx'
  ];

  const contents = filesToScan
    .map(f => {
      const fullPath = path.resolve(__dirname, '..', f);
      return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
    })
    .join('\n');

  const words = contents.match(/[\w\-/:[\]#%.,]+/g) || [];
  const uniqueWords = Array.from(new Set(words));

  const compiledCss = compiler.build(uniqueWords);
  const outPath = path.resolve(__dirname, '../app/globals.css');
  fs.writeFileSync(outPath, compiledCss, 'utf8');
  console.log(`[build-css] Compiled ${uniqueWords.length} tokens into ${outPath} (${compiledCss.length} bytes)`);
}

buildCss().catch(err => {
  console.error('[build-css] Error:', err);
  process.exit(1);
});
