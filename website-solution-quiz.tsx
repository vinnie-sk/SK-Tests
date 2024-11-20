import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const WebsiteSolutionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [resultType, setResultType] = useState(null);

  const questions = [
    {
      text: "What's your technical skill level with websites?",
      options: [
        { text: "I'm not tech-savvy at all", value: 'diy-low' },
        { text: "I know some basics but need help", value: 'template' },
        { text: "I'm comfortable with web technologies", value: 'custom' }
      ]
    },
    {
      text: "What's your budget for a website?",
      options: [
        { text: "Very limited (under $500)", value: 'diy-low' },
        { text: "Moderate ($500-$2000)", value: 'template' },
        { text: "Flexible (over $2000)", value: 'custom' }
      ]
    },
    {
      text: "How quickly do you need your website?",
      options: [
        { text: "I want something up immediately", value: 'diy-low' },
        { text: "Within a few weeks", value: 'template' },
        { text: "I can wait for a custom solution", value: 'custom' }
      ]
    },
    {
      text: "What's the primary purpose of your website?",
      options: [
        { text: "Simple blog or personal site", value: 'diy-low' },
        { text: "Small business or portfolio", value: 'template' },
        { text: "Complex business needs or e-commerce", value: 'custom' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      determineResult(newAnswers);
    }
  };

  const determineResult = (userAnswers) => {
    const valueCounts = {
      'diy-low': 0,
      'template': 0,
      'custom': 0
    };

    Object.values(userAnswers).forEach(value => {
      valueCounts[value]++;
    });

    if (valueCounts['diy-low'] >= 3) {
      setResultType('diy');
    } else if (valueCounts['custom'] >= 3) {
      setResultType('custom');
    } else {
      setResultType('template');
    }

    setShowResult(true);
  };

  const renderResult = () => {
    const results = {
      'diy': {
        title: "Squarespace DIY Website",
        description: "Based on your needs, a Squarespace DIY website is your best bet. It's quick, affordable, and requires minimal technical skills.",
        cta: "Get Started with Squarespace"
      },
      'template': {
        title: "SquareKicker Template",
        description: "Our SquareKicker template is perfect for your needs. It offers a balance of customization and ease of use.",
        cta: "Explore SquareKicker Templates"
      },
      'custom': {
        title: "Custom-Built Website",
        description: "A fully custom-built website will give you the flexibility and advanced features you require.",
        cta: "Request Custom Website Consultation"
      }
    };

    const result = results[resultType];

    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{result.title}</h2>
        <p>{result.description}</p>
        
        <div className="space-y-2">
          <Label htmlFor="email">Enter your email to get your full report:</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Button 
            onClick={() => {
              // Here you would typically integrate with your email capture system
              alert(`Thanks! We'll send your ${result.title} report to ${email}`);
            }}
            className="w-full"
          >
            {result.cta}
          </Button>
        </div>
      </div>
    );
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Your Website Solution</CardTitle>
        </CardHeader>
        <CardContent>
          {renderResult()}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Website Solution Matcher</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="text-xl">{questions[currentQuestion].text}</h2>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button 
              key={index} 
              onClick={() => handleAnswer(option.value)}
              variant="outline"
              className="w-full"
            >
              {option.text}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </CardContent>
    </Card>
  );
};

export default WebsiteSolutionQuiz;
