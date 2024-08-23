# ImageRestore App

This is an image retouching application built using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn](https://github.com/shadcn), [Clerk](https://clerk.com/), and [Stripe](https://stripe.com/). The app leverages AI-based tools for image enhancement, including features such as image restoration, generative fill, object removal, object recoloring, and background removal.

## Features

- **Image Restore**: Recover and enhance old or damaged photos with advanced AI tools.
- **Generative Fill**: Automatically fill in missing parts of an image with seamlessly generated content.
- **Object Remove**: Remove unwanted objects from your images while maintaining a natural appearance.
- **Object Recolor**: Change the color of specific objects within your images with precision.
- **Background Remove**: Instantly remove backgrounds to isolate subjects and create polished images.
- **Responsive Design**: Fully optimized for all devices, ensuring a smooth user experience on mobile, tablet, and desktop.
- **User Authentication**: Secure login and registration using OAuth.
- **Payment Integration**: Simple and secure payment processing with Stripe for purchasing premium features.

## Getting Started

To get started with the development server, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/aialvi/image-restore.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd image-restore
    ```

3. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. **Open your browser and go to:**

    ```bash
    http://localhost:3000
    ```

## Configuration

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Clerk Webhooks Secret
WEBHOOK_SECRET=


# MongoDB
MONGODB_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
