# Deployment Guide

This project is built using React and Vite, which produces a highly optimized, static Single-Page Application (SPA) in the `dist` directory when built.

Because this is a purely frontend application, it is completely compatible with zero-configuration deployments on modern platforms like **Vercel**, **Netlify**, and **AWS Amplify**.

Below are the instructions to deploy your portfolio.

## 1. Deploying to Vercel (Recommended)

Vercel is the easiest and most seamless way to deploy a Vite + React application.

### Method 1: Using the Vercel Dashboard (Zero-Config)
1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Create an account at [Vercel](https://vercel.com/) and log in.
3. Click on **"Add New..."** and select **"Project"**.
4. Import your newly created repository from GitHub.
5. Vercel will automatically detect that you are using Vite. It will pre-fill the following settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your website will be live in under a minute!

### Method 2: Using the Vercel CLI
1. Install the Vercel CLI globally: `npm i -g vercel`
2. Open a terminal in the root of this project folder (`portfolio`).
3. Run the command: `vercel`
4. Follow the prompts to link your project and deploy. To deploy to production, run: `vercel --prod`.

---

## 2. Deploying to AWS Amplify

AWS Amplify provides a managed CI/CD pipeline similar to Vercel.

1. Push this project to your GitHub repository.
2. Log in to the [AWS Management Console](https://console.aws.amazon.com/) and navigate to **AWS Amplify**.
3. Click on **"Host web app"** and select **GitHub**.
4. Authorize AWS to access your GitHub repositories and select your portfolio repository.
5. In the "Build settings" step, Amplify will automatically detect your `package.json` and generate the build script. It should look something like this:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
6. Save and deploy. AWS will automatically build and host the `dist` folder.

---

## 3. Deploying to Netlify

Netlify is another excellent option for static React SPAs.

1. Push your project to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/).
3. Go to **"Sites"** -> **"Add new site"** -> **"Import an existing project"**.
4. Choose GitHub and select your repository.
5. Netlify will auto-detect Vite and use:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**.

---

## Important Note on Routing (Client-Side Routing)
Since this is a Single-Page Application (SPA), all routing is handled client-side. If you ever add `react-router-dom` in the future for multiple pages (e.g., `/about`, `/projects`), you will need to configure your hosting provider to redirect all 404 requests back to `index.html`. 

For **Vercel**, create a `vercel.json` file in the root folder with:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Currently, since your portfolio is a single-page scrolling application, no routing configuration is needed. It will work perfectly out-of-the-box!
