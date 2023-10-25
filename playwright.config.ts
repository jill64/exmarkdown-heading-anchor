import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm preview',
    port: 4173
  },
  testDir: 'tests',
  fullyParallel: true,
  workers: '100%'
}

export default config
