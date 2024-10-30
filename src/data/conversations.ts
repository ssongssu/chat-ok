export type Conversation = {
  speaker: string;
  message: string;
  gender: 'male' | 'female';
}[];

export const conversations = [
  // Original parking dispute conversation
  [
    { speaker: 'Jack', message: "Hey, did you take my parking spot again? That's the third time this week!", gender: 'male' },
    { speaker: 'Emma', message: "Oh, come on. It's not like your name is on it, Mr. Grumpy.", gender: 'female' },
    // ... rest of the original conversation
  ],
  // Restaurant order mix-up
  [
    { speaker: 'Sarah', message: "Excuse me, I ordered the vegetarian pasta, but this has chicken in it.", gender: 'female' },
    { speaker: 'Mike', message: "I apologize for the mix-up, ma'am. Let me check with the kitchen.", gender: 'male' },
    { speaker: 'Sarah', message: "I've been waiting for 40 minutes already.", gender: 'female' },
    { speaker: 'Mike', message: "I understand your frustration. I'll have this fixed right away.", gender: 'male' },
    { speaker: 'Sarah', message: "And my water hasn't been refilled either.", gender: 'female' },
    { speaker: 'Mike', message: "I'm terribly sorry about that. I'll bring you fresh water immediately.", gender: 'male' },
    { speaker: 'Sarah', message: "This is not the dining experience I expected.", gender: 'female' },
    { speaker: 'Mike', message: "You're absolutely right. I'll comp your meal today.", gender: 'male' },
    { speaker: 'Sarah', message: "Well... that's very kind of you.", gender: 'female' },
    { speaker: 'Mike', message: "It's the least we can do. I'll be right back with your correct order.", gender: 'male' }
  ],
  // Job Interview
  [
    { speaker: 'Lisa', message: "Thank you for coming in today. Could you tell me about your previous experience?", gender: 'female' },
    { speaker: 'Tom', message: "Of course! I've spent five years developing web applications.", gender: 'male' },
    { speaker: 'Lisa', message: "Interesting. What would you say is your greatest strength?", gender: 'female' },
    { speaker: 'Tom', message: "I'm excellent at problem-solving and working in teams.", gender: 'male' },
    { speaker: 'Lisa', message: "Can you give me a specific example?", gender: 'female' },
    { speaker: 'Tom', message: "In my last project, I led a team that reduced loading times by 60%.", gender: 'male' },
    { speaker: 'Lisa', message: "That's impressive. How do you handle tight deadlines?", gender: 'female' },
    { speaker: 'Tom', message: "I prioritize tasks and communicate clearly with stakeholders.", gender: 'male' },
    { speaker: 'Lisa', message: "Where do you see yourself in five years?", gender: 'female' },
    { speaker: 'Tom', message: "I aim to grow into a technical lead role while mentoring others.", gender: 'male' }
  ],
  // Coffee Shop
  [
    { speaker: 'Alex', message: "Welcome to StarCafe! What can I get for you today?", gender: 'male' },
    { speaker: 'Rachel', message: "Hi! I'd like a caramel macchiato with oat milk.", gender: 'female' },
    { speaker: 'Alex', message: "Perfect! Would you like that hot or iced?", gender: 'male' },
    { speaker: 'Rachel', message: "Iced, please. And can you add an extra shot of espresso?", gender: 'female' },
    { speaker: 'Alex', message: "Absolutely! That'll be $6.75.", gender: 'male' },
    { speaker: 'Rachel', message: "Oh, and could you add a chocolate croissant?", gender: 'female' },
    { speaker: 'Alex', message: "I'm sorry, we just sold our last one.", gender: 'male' },
    { speaker: 'Rachel', message: "What about the blueberry muffin?", gender: 'female' },
    { speaker: 'Alex', message: "Great choice! That brings your total to $9.50.", gender: 'male' },
    { speaker: 'Rachel', message: "Perfect, here's my card.", gender: 'female' }
  ],
  // Shopping for Clothes
  [
    { speaker: 'David', message: "Hi there! Can I help you find anything today?", gender: 'male' },
    { speaker: 'Lucy', message: "Yes, I'm looking for a dress for a wedding next month.", gender: 'female' },
    { speaker: 'David', message: "What style were you thinking of?", gender: 'male' },
    { speaker: 'Lucy', message: "Something elegant but not too formal. Maybe knee-length?", gender: 'female' },
    { speaker: 'David', message: "I have some great options in our new collection. What's your size?", gender: 'male' },
    { speaker: 'Lucy', message: "I usually wear a size 8.", gender: 'female' },
    { speaker: 'David', message: "Perfect! How about this navy blue dress with floral details?", gender: 'male' },
    { speaker: 'Lucy', message: "Oh, that's beautiful! Can I try it on?", gender: 'female' },
    { speaker: 'David', message: "Of course! The fitting rooms are right this way.", gender: 'male' },
    { speaker: 'Lucy', message: "Thank you, you've been very helpful!", gender: 'female' }
  ]
];