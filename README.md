# Portfolio Website - Full Stack Next.js Application

A modern, responsive portfolio website built with Next.js 14, featuring a complete admin dashboard for managing projects, authentication, and a beautiful user interface.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Beautiful UI**: Styled with shadcn/ui components and responsive design
- **Admin Dashboard**: Full CRUD operations for managing portfolio projects
- **Authentication**: Secure admin login with NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Data Fetching**: React Query for efficient client-side data management
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI primitives
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js with credentials provider
- **State Management**: React Query (TanStack Query)
- **Styling**: Tailwind CSS with custom design system

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   ├── projects/      # Project CRUD endpoints
│   │   └── contact/       # Contact form endpoint
│   ├── admin/             # Admin pages
│   │   ├── login/         # Admin login
│   │   └── dashboard/     # Admin dashboard
│   ├── about/             # About page
│   ├── projects/          # Projects listing
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── ProjectCard.tsx    # Project display card
│   └── FeaturedProjects.tsx # Featured projects section
└── lib/                   # Utility functions
    ├── auth.ts            # NextAuth configuration
    ├── prisma.ts          # Prisma client
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
```

### Step 2: Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/portfolio_db"

# NextAuth
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials
ADMIN_EMAIL="admin@portfolio.com"
ADMIN_PASSWORD="admin123"
```

**Important**: Replace the placeholder values with your actual database credentials and generate a secure NEXTAUTH_SECRET.

### Step 3: Database Setup

```bash
# Initialize Prisma
npx prisma generate

# Create and apply database migrations
npx prisma migrate dev --name init

# (Optional) Seed the database with sample data
npm run seed
```

### Step 4: Run the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## 🔐 Admin Access

- **URL**: `/admin/login`
- **Default Credentials**: 
  - Email: `admin@portfolio.com`
  - Password: `admin123`

**Security Note**: Change these credentials in production by updating the `.env` file.

## 📱 Pages & Routes

- **`/`** - Home page with hero section and featured projects
- **`/about`** - Personal bio and skills showcase
- **`/projects`** - Complete list of all projects
- **`/projects/[id]`** - Individual project details
- **`/contact`** - Contact form and information
- **`/admin/login`** - Admin authentication
- **`/admin/dashboard`** - Protected admin dashboard for project management

## 🎯 Admin Features

- **Create Projects**: Add new portfolio projects with title, description, and optional image
- **Edit Projects**: Modify existing project details
- **Delete Projects**: Remove projects from the portfolio
- **Featured Projects**: Mark/unmark projects as featured (appears on home page)
- **Secure Access**: Protected routes with NextAuth authentication

## 🗄️ Database Schema

```prisma
model Project {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  imageUrl    String?
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.ts`
- Customize shadcn/ui theme in `components.json`

### Content
- Update personal information in About page
- Modify hero section content in `src/components/Hero.tsx`
- Customize contact information in Contact page

### Images
- Replace placeholder images with your own
- Update image URLs in the seed file or admin dashboard
- Consider integrating with Cloudinary for image hosting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Deploy with PostgreSQL database
- **DigitalOcean**: App Platform with managed database

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run seed         # Seed database with sample data
```

### Adding New Features

1. **New Pages**: Create new directories in `src/app/`
2. **Components**: Add reusable components in `src/components/`
3. **API Routes**: Create new endpoints in `src/app/api/`
4. **Database**: Update Prisma schema and run migrations

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify DATABASE_URL in `.env`
   - Ensure PostgreSQL is running
   - Check database permissions

2. **Authentication Issues**
   - Verify NEXTAUTH_SECRET is set
   - Check admin credentials in `.env`
   - Clear browser cookies if needed

3. **Build Errors**
   - Run `npm run build` to identify issues
   - Check TypeScript errors
   - Verify all dependencies are installed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team.

---

**Happy Coding! 🎉**
