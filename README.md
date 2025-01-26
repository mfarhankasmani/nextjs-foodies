# Foodies - Share Your Favorite Meals

Foodies is a Next.js application that allows users to share their favorite meals with a vibrant community. Users can browse delicious meals, share their own recipes, and view detailed information about each meal.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- Browse a list of delicious meals shared by the community.
- Share your own favorite recipes with detailed information.
- View detailed information about each meal, including ingredients and instructions.
- Dynamic metadata generation for SEO optimization.
- Incremental Static Regeneration (ISR) for efficient page updates.

## Installation

To get started with the Foodies project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mfarhankasmani/foodies.git
   cd foodies
   ```

2. Install the dependencies

```bash
   yarn install
```

3. Run the development server:

```bash
   yarn dev
```
Open http://localhost:3000 with your browser to see the result.

## Usage
### Sharing a Meal

1. Navigate to the "Share Your Favorite Recipe" page.
2. Fill out the form with your meal details, including title, summary, instructions, and an image.
3. Submit the form to share your meal with the community.

### Browsing Meals

1. Navigate to the home page to browse a list of meals.
2. Click on a meal to view detailed information about it.

## Folder Structure
The project structure is as follows:


```
foodies/
├── app/
│   ├── meals/
│   │   ├── [mealSlug]/
│   │   │   └── page.tsx
│   │   ├── share/
│   │   │   └── page.tsx
│   ├── api/
│   │   └── revalidate.ts
├── components/
│   ├── Meals.tsx
│   ├── ImagePicker.tsx
├── lib/
│   ├── meals.ts
│   ├── types.ts
│   ├── action.ts
├── public/
│   └── images/
├── styles/
│   ├── globals.css
│   ├── page.module.css
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```