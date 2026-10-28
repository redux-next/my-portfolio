::: {align="center"}
# ✦ Gyanam --- Cosmic Developer Portfolio

**Full-stack developer · Building for the web, one idea at a time.**

A futuristic portfolio with a purple cosmic atmosphere, smooth motion,
and a custom glowing cursor.

[GitHub Profile](https://github.com/redux-next)
:::

------------------------------------------------------------------------

## ✨ About

This is a personal developer portfolio designed around a deep-space
visual identity: dark backgrounds, violet and lavender glow, orbital
details, and animated interface elements.

The site presents Gyanam's development work and provides a central place
to explore selected projects.

## 🚀 Highlights

-   **Cosmic visual theme** --- deep indigo backgrounds with purple and
    lavender accents.
-   **Motion effects** --- animated interface elements powered by Framer
    Motion.
-   **Custom cursor** --- glowing dot, trailing ring, and hover feedback
    on supported desktop pointers.
-   **Responsive layout** --- designed to adapt across screen sizes.
-   **Reduced-motion awareness** --- custom cursor effects are disabled
    when reduced motion is requested.
-   **Project showcase** --- highlights selected work without fabricated
    user counts, usage statistics, or achievements.
-   **Custom favicon assets** --- matching cosmic "G" icon for browser
    and Apple device tabs.

## 🧰 Tech Stack

  -----------------------------------------------------------------------------------
  Technology                                      Role
  ----------------------------------------------- -----------------------------------
  [Next.js](https://nextjs.org/)                  React framework and App Router

  [React](https://react.dev/)                     UI components

  [TypeScript](https://www.typescriptlang.org/)   Type-safe development

  [Tailwind CSS](https://tailwindcss.com/)        Styling and responsive layouts

  [Framer Motion](https://motion.dev/)            Animations and transitions

  [Lucide React](https://lucide.dev/)             Interface icons
  -----------------------------------------------------------------------------------

## 🗂️ Featured Projects

The portfolio currently highlights these projects:

-   **AI Study Assistant** --- a study-focused application.
-   **Vybe** --- an open-source music streaming project.
-   **QuickBite** --- a hyperlocal food delivery web application.
-   **Cosmic Portfolio** --- this personal portfolio.

Project features and status may evolve as development continues.

## 🖥️ Run Locally

### Requirements

-   Node.js (a current LTS release is recommended)
-   npm
-   Git (optional, for cloning)

### 1. Get the source

If you have the repository locally, open a terminal in its root
directory. If you are cloning from GitHub, use your repository URL:

``` bash
git clone <your-repository-url>
cd <your-project-folder>
```

Replace the placeholders with your actual repository URL and folder
name.

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser.

### 4. Create a production build

``` bash
npm run build
npm start
```

Run these commands from the project root. If the build reports missing
dependencies or type errors, resolve those before deploying.

## 🎨 Customization

-   **Portfolio content:** update the portfolio component in
    `src/components/portfolio.tsx`.
-   **Global styling:** edit `src/app/globals.css`.
-   **Custom cursor:** edit `src/components/cosmic-cursor.tsx`.
-   **App metadata:** check `src/app/layout.tsx`.
-   **Favicon:** place Next.js App Router icon files in `src/app/`, such
    as `icon.png` and `apple-icon.png`.

Your exact file structure may differ slightly depending on the version
of the project you have checked out.

## ♿ Accessibility Notes

-   The custom cursor is decorative and marked as hidden from assistive
    technologies.
-   It is intended for fine-pointer devices; touch devices keep their
    native interaction.
-   Reduced-motion preferences are respected by disabling the custom
    cursor effect.
-   Keep text contrast, keyboard focus indicators, and semantic HTML in
    mind when adding new components.

## 📌 Project Principles

-   Keep the design expressive while maintaining usability.
-   Keep project descriptions grounded in real implementation.
-   Do not add invented metrics, testimonials, or accomplishments.
-   Prefer responsive, maintainable components over one-off hacks.

## 📄 License

No license has been specified here. Add a `LICENSE` file and update this
section if you decide to publish the project under an open-source
license.

------------------------------------------------------------------------

::: {align="center"}
**Designed in a cosmic style. Built for the open web.**
:::
