import solid from "vite-plugin-solid"
import postCssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import type { UserConfig } from "vite"

export default {
    plugins: [solid()],
    css: {
        postcss: {
            plugins: [
                postCssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': true
                    }
                }),
                autoprefixer(),
                cssnano()
            ]
        }
    }
} satisfies UserConfig