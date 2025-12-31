#!/bin/bash

echo "Adding files to git..."
git add app/data/projects.ts
git add components/ProjectCard.tsx
git add components/CompanyLogo.tsx
git add scripts/download-logos.js

echo "Committing changes..."
git commit -m "feat: Add GoFundMe project and fix company logos with fallback

- Added GoFundMe/Classy project to portfolio
- Created CompanyLogo component with automatic fallback to initials
- Fixed LinkedIn image 403 errors with elegant fallback
- Updated ProjectCard to use new CompanyLogo component"

echo "Pushing to remote..."
git push origin main

echo "Done! Changes pushed to GitHub and will auto-deploy to Vercel"

