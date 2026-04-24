// vitest.config.ts
import {defineProject} from "vitest/config";
import {playwright} from "@vitest/browser-playwright";

export default defineProject({
    test: {
        globals: true, // Allows using `describe`, `it`, `expect` without imports
        //setupFiles: './src/setupTests.ts', // File for test setup (see below)
        projects: [
            {
                // add "extends: true" to inherit the options from the root config
                extends: true,
                test: {
                    include: ['src/**/*.browser.{ts,tsx}'],
                    // it is recommended to define a name when using inline configs
                    //name: 'browser',
                    name: { label: 'browser', color: 'magenta' },
                    environment: 'playwright',
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        // https://vitest.dev/config/browser/playwright
                        instances: [
                            { browser: 'chromium' },
                        ],
                    },
                }
            },
            {
                test: {
                    globals: true,
                    include: ['src/**/*.test.{ts,tsx}'],
                    // color of the name label can be changed
                    name: { label: 'jsdom', color: 'green' },
                    environment: 'jsdom',
                    setupFiles: './src/setupTests.ts', // File for test setup (see below)
                }
            }
        ],
    }
})


