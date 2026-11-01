import { execFileSync, spawnSync } from 'node:child_process'
import { cp, mkdtemp, readdir, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const dist = resolve('dist')
if (!(await stat(dist).catch(() => null))?.isDirectory()) {
  throw new Error('Missing dist directory. Run npm run build first.')
}

const checkout = await mkdtemp(join(tmpdir(), 'sabi-pages-'))
const git = (...args) => execFileSync('git', args, { cwd: checkout, stdio: 'inherit' })

try {
  git('clone', '--quiet', '--depth', '1', '--branch', 'gh-pages', 'git@github.com:voke1/sabi-landing.git', checkout)

  for (const name of await readdir(checkout)) {
    if (name !== '.git') await rm(join(checkout, name), { recursive: true, force: true })
  }

  for (const name of await readdir(dist)) {
    await cp(join(dist, name), join(checkout, name), { recursive: true })
  }

  git('add', '--all')
  const changes = spawnSync('git', ['diff', '--cached', '--quiet'], { cwd: checkout })
  if (changes.status === 0) {
    process.stdout.write('GitHub Pages already has this build.\n')
  } else if (changes.status === 1) {
    git('commit', '-m', 'Publish Sabi landing site')
    git('push', 'origin', 'gh-pages')
  } else {
    throw new Error('Could not compare the built site with gh-pages.')
  }
} finally {
  await rm(checkout, { recursive: true, force: true })
}
