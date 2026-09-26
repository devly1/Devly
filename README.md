# Pixel Perfect Replica

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://exact-pixel-perfect-651.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/efb8f76e-4e84-4b00-9031-9dba6e5a38a6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## EmailJS quote form

The quote form sends submissions through EmailJS to the recipient configured in the EmailJS template.

1. Connect Gmail under **Email Services** and save an email template with `{{nombre}}`, `{{negocio}}`, `{{whatsapp}}`, `{{correo}}`, `{{tipo}}`, `{{presupuesto}}`, and `{{mensaje}}` variables.
2. Copy the Service ID, Template ID, and Public Key from EmailJS into `.env.local` using the names in `.env.example`.
3. Restart the dev server after changing environment variables. In EmailJS, restrict allowed origins to the website's domains and set the template's Reply To field to `{{correo}}`.

EmailJS's public key is intended for browser use. Do not put Gmail passwords or private OAuth secrets in the frontend. Set these same public EmailJS values in the production hosting environment before deploying.
