# Love Land Kids Website

Official website for Love Land Kids — a resource for early childhood education, mission, vision, and programs.

## Features

- **Multi-language Support**: English, Spanish, French, and Portuguese translations
- **Responsive Design**: Mobile-optimized layout for all screen sizes
- **Modern Angular**: Built with Angular standalone components and signals
- **Navigation Pages**: Home, Mission, Vision, Educational Philosophy, Emotional Regulation

## Tech Stack

- [Angular](https://angular.io/) (v21+) — standalone components, routing, signals
- TypeScript — strict type checking
- CSS3 — responsive design with media queries
- Accessibility — WCAG AA compliance

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Live Website

- **Primary Domain**: https://www.lovelandkids.com
- **GitHub Repository**: https://github.com/lovelandkids/lovelandkids-site
- **Development**: http://localhost:4200/ (local development)
- **Production**: Available on AWS Amplify (URL will be provided after deployment)

### Build

Build for production:

```bash
npm run build
```

Output is stored in `dist/love-land-kids/`.

## Project Structure

```
src/
├── app/
│   ├── app.ts                    # Root component
│   ├── app.html                  # Shell template (header, nav, router outlet)
│   ├── app.css                   # Component styles
│   ├── app.config.ts             # App configuration (routing, providers)
│   ├── translation.service.ts    # Multi-language service (signals-based)
│   └── pages/                    # Page components
│       ├── home.ts
│       ├── mission.ts
│       ├── vision.ts
│       ├── educational-philosophy.ts
│       └── emotional-regulation.ts
├── styles.css                    # Global styles & responsive design
├── main.ts                       # Bootstrap entry point
└── index.html                    # HTML shell

```

## Testing

Run unit tests:

```bash
npm test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
npm run e2e
```

## Localization (i18n)

The website supports multiple languages through the `TranslationService`:

- English (en) — default
- Spanish (es)
- French (fr)
- Portuguese (pt)

Users can switch languages using the language selector in the header. The translation service uses Angular signals for reactive language switching.

### Adding a New Language

1. Open `src/app/translation.service.ts`
2. Add language code and translations to the `translations` object
3. Add language option to the `languages` array
4. Rebuild and test

## Responsive Design

The site is fully responsive with breakpoints at:

- **1100px, 880px, 780px, 480px** — optimized layouts for tablets and mobile devices
- Images scale from full-width on desktop to 260px, 140px, and 120px on smaller screens
- Navigation adapts to mobile screens with proper touch targets

## Deployment

The compiled application is production-ready and can be deployed to any static hosting:

```bash
npm run build
# Output: dist/love-land-kids/
```

## AWS Amplify Deployment

This project uses **AWS Amplify** for hosting and continuous deployment.

### Prerequisites

- AWS Account with Amplify enabled
- Git repository connected to Amplify (https://github.com/lovelandkids/lovelandkids-site)
- Domain configured (https://www.lovelandkids.com)

### Automatic Deployment (Recommended)

When you push changes to the `master` branch on GitHub, AWS Amplify automatically:

1. Builds the project using the `amplify.yml` configuration
2. Deploys the compiled files to the CDN
3. Makes changes live at https://www.lovelandkids.com

**Steps to set up:**

1. Log in to [AWS Amplify Console](https://us-east-1.console.aws.amazon.com/amplify/)
2. Create a new app → Select GitHub as source
3. Authorize GitHub and select the `lovelandkids/lovelandkids-site` repository
4. Select the `master` branch
5. Configure build settings (Amplify will auto-detect `amplify.yml`)
6. Deploy
7. Configure custom domain (https://www.lovelandkids.com) in Amplify console

### Manual Deployment via Drag & Drop

If you need to manually deploy a build:

1. **Build the project locally:**

   ```bash
   npm run build
   ```

2. **Create a zip file from the browser folder:**

   ```bash
   cd dist/love-land-kids/browser
   zip -r ../../lovelandkids-site.zip .
   cd ../../..
   ```

3. **Upload to AWS Amplify:**
   - Go to [AWS Amplify Console](https://us-east-1.console.aws.amazon.com/amplify/)
   - Select your app (`lovelandkids-site`)
   - Click **Deployments** → **Deploy without Git provider**
   - **Drag and drop** `lovelandkids-site.zip` into the upload area
   - Amplify will extract and deploy the contents
   - Wait for the deployment to complete (green checkmark)

4. **Verify deployment:**
   - Visit https://www.lovelandkids.com (or your configured domain)
   - Test navigation, language switching, and responsiveness

### Amplify Configuration

The project includes `amplify.yml` at the root, which defines:

- **Pre-build phase**: Installs dependencies (`npm ci`)
- **Build phase**: Compiles with `npm run build -- --configuration production`
- **Artifacts**: Specifies output directory as `dist/love-land-kids/browser`
- **Cache**: Caches `node_modules` for faster builds

### Rollback

If a deployment causes issues:

1. In AWS Amplify Console → **Deployments**
2. Select a previous successful deployment
3. Click **Redeploy** to revert to that version

## Contributing

Contributions are welcome! Please ensure:

- Code follows Angular best practices (standalone components, signals, reactive forms)
- All changes pass the build check: `npm run build`
- Components have proper accessibility attributes (WCAG AA compliance)

## License

This project is maintained by Love Land Kids.

## Support

For issues or feature requests, please open an issue on [GitHub](https://github.com/lovelandkids/lovelandkids-site).

---

Built with ❤️ for Love Land Kids
