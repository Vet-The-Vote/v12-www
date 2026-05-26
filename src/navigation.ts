import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Mission',
      href: getPermalink('/#mission'),
    },
    {
      text: 'How It Works',
      href: getPermalink('/#how-it-works'),
    },
    {
      text: 'Vet The Vote',
      href: getPermalink('/#vet-the-vote'),
    },
    {
      text: 'Opportunity',
      href: getPermalink('/#opportunity'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Buy a Witness Node', href: 'https://square.link/u/oIQIRY3V?src=embed', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'V12 Network',
      links: [
        { text: 'Mission', href: '/#mission' },
        { text: 'How It Works', href: '/#how-it-works' },
        { text: 'Vet The Vote', href: '/#vet-the-vote' },
        { text: 'Market Opportunity', href: '/#opportunity' },
        { text: 'Buy a Witness Node', href: '#buy-node' },
        { text: 'Blog', href: getPermalink('/blog') },
      ],
    },
    {
      title: 'Technology',
      links: [
        { text: 'ANTELOPE Leap 5.0', href: getPermalink('/technology/antelope') },
        { text: 'EVM Compatible', href: getPermalink('/technology/evm') },
        { text: 'Quantum-Resistant Encryption', href: getPermalink('/technology/quantum-resistant-encryption') },
        { text: 'NIST Approved Security', href: getPermalink('/technology/quantum-resistant-encryption') },
      ],
    },
    {
      title: 'Legal & Resources',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'U.S. Payments Data & Evidence', href: getPermalink('/evidence/payments-data') },
        { text: 'NIST Post-Quantum Cryptography', href: getPermalink('/technology/quantum-resistant-encryption') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/ValhallaNow', target: '_blank' },
    { ariaLabel: 'Truth Social', icon: 'brand-truthsocial', href: 'https://truthsocial.com/@ValhallaConstructs', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@ValhallaConstruct', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61577619407829', target: '_blank' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Vet-The-Vote/V12-Project', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Vet The Vote (V12). All rights reserved. · <a class="text-blue-600 underline dark:text-muted" href="/terms">Terms</a> · <a class="text-blue-600 underline dark:text-muted" href="/privacy">Privacy</a>
  `,
};
