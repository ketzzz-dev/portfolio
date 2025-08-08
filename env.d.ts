declare global {
    namespace NodeJS {
        interface ProcessEnv {
            RESEND_API_KEY: string
            EMAIL_ADDRESS: string
        }
    }
}

export {}