# BuccalCare AI — Early Buccal Cancer Screening System

A frontend-only final-year academic project demonstrating an AI-assisted workflow for screening suspicious buccal/oral visual patterns.

## Important medical disclaimer

This is an educational prototype, not a medical device or diagnostic system. The demo algorithm is not clinically validated and must not be used to diagnose, rule out, or treat cancer.

## Features

- Responsive healthcare + AI interface
- Image upload and drag & drop
- Browser camera capture using `getUserMedia`
- Basic image quality checks
- Deterministic demo AI screening
- High-risk / low-risk / unable-to-analyze result states
- LocalStorage screening history
- Dashboard statistics
- Fictional doctor demonstration report
- Print / Save as PDF through browser print
- Dark mode
- Mobile navigation
- No backend
- No API key
- No npm dependencies

## Run

Simply open `index.html`.

For camera access, use a local server such as VS Code Live Server because browsers commonly restrict camera APIs on `file://` pages.

## GitHub Pages

Upload the repository to GitHub and enable GitHub Pages from the repository settings. The site is static and does not require a server.

## Demo AI

The inference is intentionally a frontend demonstration. It does not represent a clinically validated probability of cancer. The code is organized around the concept of `analyzeImage(image)` so a trained model or inference API can be integrated later.

## Privacy

The demo does not send images to an external medical AI API. Screening history is stored locally in the browser. Do not upload personally identifiable medical information.

## Presentation flow

Home → AI Screening → Upload/Camera → Quality Check → Demo Analysis → Result → History/Dashboard → Doctor Demo → Print

## Disclaimer

“This project is an academic prototype intended to demonstrate AI-assisted image screening. It has not been clinically validated and must not be used to diagnose, rule out, or treat cancer.”
