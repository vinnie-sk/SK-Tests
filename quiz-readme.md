# SquareKicker Website Solution Quiz

## Overview
This React component creates an interactive quiz to help potential customers determine the most suitable website solution for their needs.

## Features
- Guided quiz with 4 questions
- Recommends one of three solutions:
  1. Squarespace DIY Website
  2. SquareKicker Template
  3. Custom-Built Website
- Email capture for lead generation
- Responsive design

## Prerequisites
- React 17+
- Tailwind CSS
- shadcn/ui components installed

## Installation
1. Ensure required dependencies are installed
2. Copy the `WebsiteSolutionQuiz.jsx` file into your components directory
3. Import and use in your project:

```jsx
import WebsiteSolutionQuiz from './path/to/WebsiteSolutionQuiz';

function App() {
  return (
    <div>
      <WebsiteSolutionQuiz />
    </div>
  );
}
```

## Customization
- Modify `questions` array to adjust quiz content
- Update `results` object in `renderResult()` to change recommendation text
- Integrate with your specific email marketing system

## TODO
- Implement actual email capture backend
- Add input validation for email
- Create more detailed result recommendations
