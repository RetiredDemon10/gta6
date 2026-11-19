export type Step = {
  title: string
  body: string
  tip?: string
}

export type PlatformGuide = {
  id: string
  name: string
  short: string
  icon: 'playstation' | 'xbox' | 'pc'
  time: string
  difficulty: string
  steps: Step[]
}

export const platformGuides: PlatformGuide[] = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    short: 'PS5',
    icon: 'playstation',
    time: '15–40 min',
    difficulty: 'Easy',
    steps: [
      {
        title: 'Update your console',
        body: 'Go to Settings → System → System Software Update. Install the latest firmware before downloading a large game.',
        tip: 'A system update can take 5–10 minutes and may require a restart.',
      },
      {
        title: 'Check free storage',
        body: 'GTA VI needs a large install. Aim for at least 160 GB of free space on your SSD. Delete old games or move them to an external drive if needed.',
      },
      {
        title: 'Buy or redeem your copy',
        body: 'Purchase GTA VI from the PlayStation Store, or redeem the digital code from your order email in the store under Account → Redeem Codes.',
      },
      {
        title: 'Download and install',
        body: 'Open the Library, highlight Grand Theft Auto VI and press Download. Keep the console connected to power and wait for the install to finish.',
        tip: 'Use a wired connection for the most stable download speed.',
      },
      {
        title: 'Launch and sign in',
        body: 'Once installed, press X on the game icon. Sign in to your Rockstar Games account when prompted to link your progress and social club features.',
      },
      {
        title: 'Need a hand?',
        body: 'If the download stalls or the game will not start, send us your console model and error code through the support form and we will help you step by step.',
      },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox Series X | S',
    short: 'Xbox',
    icon: 'xbox',
    time: '15–40 min',
    difficulty: 'Easy',
    steps: [
      {
        title: 'Connect to Xbox Live',
        body: 'Press the Xbox button, go to Profile & system → Settings → Account → Sign-in, security & passkey and make sure you are signed in.',
      },
      {
        title: 'Free up space',
        body: 'GTA VI requires roughly 160 GB. Use Settings → System → Storage to review or remove old installs.',
      },
      {
        title: 'Get the game',
        body: 'Open the Microsoft Store, search for Grand Theft Auto VI and select Buy, or choose Redeem code and enter the code from your order email.',
      },
      {
        title: 'Install from My Games',
        body: 'Go to My Games & Apps → See all → Games, find GTA VI and select Install. You can play other games while it downloads in the background.',
        tip: 'Set your console to sleep instead of turning it off to keep downloads going.',
      },
      {
        title: 'Link your Rockstar account',
        body: 'Launch the game and follow the prompt to connect your Rockstar Games account for progress and online features.',
      },
      {
        title: 'Ask for help',
        body: 'Stuck at an error screen? Contact support with your console model, region and the exact error message.',
      },
    ],
  },
  {
    id: 'pc',
    name: 'PC / Handheld',
    short: 'PC',
    icon: 'pc',
    time: '20–50 min',
    difficulty: 'Medium',
    steps: [
      {
        title: 'Confirm your platform',
        body: 'Check the official Rockstar Games store page for the confirmed PC release and launcher before you buy a PC key. We only help with legitimate retail copies.',
      },
      {
        title: 'Check your specs',
        body: 'Compare your CPU, GPU, RAM and storage against the official system requirements. Leave at least 160 GB free on an SSD.',
      },
      {
        title: 'Install the launcher',
        body: 'Download the official launcher from the publisher and sign in with the account used for your purchase.',
      },
      {
        title: 'Download the game',
        body: 'Open your library, select Grand Theft Auto VI and choose Install. Pick your install folder and let the launcher verify the files.',
        tip: 'Keep your graphics drivers up to date for the best performance.',
      },
      {
        title: 'First launch',
        body: 'Run the game, sign in to your Rockstar Games account and adjust graphics settings to match your hardware.',
      },
      {
        title: 'Troubleshooting',
        body: 'For crashes or launcher errors, send us your OS, GPU model and a screenshot of the error through the support form.',
      },
    ],
  },
]

export type Faq = {
  question: string
  answer: string
}

export const installFaqs: Faq[] = [
  {
    question: 'How long does GTA VI take to download?',
    answer:
      'It depends on your connection. On a 50 Mbps connection, a 160 GB download takes roughly 7–8 hours. Fiber connections are much faster. You can use your console while it downloads in the background.',
  },
  {
    question: 'Do you provide game files or cracked copies?',
    answer:
      'No. We only help you install a legitimately purchased copy from an official store. We do not share game files, keys of unknown origin or bypasses for DRM.',
  },
  {
    question: 'When will I receive my digital code?',
    answer:
      'Digital codes are sent to the email address used at checkout, usually within minutes of an confirmed order. Check your spam folder if it does not arrive within 15 minutes, then contact support.',
  },
  {
    question: 'Can I move the game to an external drive?',
    answer:
      'On Xbox Series X|S you can move games to a compatible external drive and move them back to the internal SSD to play. On PS5, GTA VI must stay on the internal SSD or a supported NVMe expansion.',
  },
  {
    question: 'What if my order says paid but I got no code?',
    answer:
      'Keep your order number handy and contact support. We will verify the payment status and resend your code or arrange a refund according to our policy.',
  },
]

export const supportFaqs: Faq[] = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'You can pay with PayPal, cryptocurrency (BTC, ETH or USDT) or Cash App at checkout. All prices are listed and charged in US dollars unless your crypto wallet converts at the current rate.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Console orders ship within 1–2 business days and usually arrive in 3–7 business days. Bundle orders include free priority shipping.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Unopened hardware can be returned within 30 days. Digital codes cannot be returned once revealed. Contact us with your order number and we will review your request.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'We currently ship to the United States and Canada. Digital codes are available worldwide where the game is officially released.',
  },
  {
    question: 'Is this an official Rockstar Games store?',
    answer:
      'No. This is an independent demo showcase and storefront concept. GTA VI and Rockstar Games are trademarks of their respective owners. No real payments are processed on this demo.',
  },
]
