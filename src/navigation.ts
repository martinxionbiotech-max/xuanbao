import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        { text: 'All Products', href: getPermalink('/products') },
        { text: 'VOC Catalysts', href: getPermalink('/products/voc-catalysts') },
        { text: 'SCR DeNOx Catalysts', href: getPermalink('/products/scr-denox-catalysts') },
        { text: 'CO Oxidation Catalyst', href: getPermalink('/products/co-removal-catalyst') },
        { text: 'Zeolite Molecular Sieves', href: getPermalink('/products/zeolite-molecular-sieve') },
        { text: 'Activated Carbon', href: getPermalink('/products/activated-carbon') },
      ],
    },
    {
      text: 'Applications',
      links: [
        { text: 'All Applications', href: getPermalink('/applications') },
        { text: 'NOx Reduction', href: getPermalink('/applications/nox-reduction') },
        { text: 'CO Removal', href: getPermalink('/applications/co-removal') },
        { text: 'Gas Purification', href: getPermalink('/applications/gas-purification') },
        { text: 'VOC Adsorption', href: getPermalink('/applications/voc-adsorption') },
        { text: 'Waste Gas Treatment', href: getPermalink('/applications/waste-gas-treatment') },
        { text: 'Odor Control', href: getPermalink('/applications/odor-control') },
        { text: 'Water Treatment', href: getPermalink('/applications/water-treatment') },
        { text: 'Decolorization', href: getPermalink('/applications/decolorization') },
        { text: 'Gold Recovery', href: getPermalink('/applications/gold-recovery') },
      ],
    },
    {
      text: 'Materials',
      links: [
        { text: 'All Materials', href: getPermalink('/materials') },
        { text: 'Coal-based Carbon', href: getPermalink('/materials/coal-based-carbon') },
        { text: 'Coconut-shell Carbon', href: getPermalink('/materials/coconut-shell-carbon') },
      ],
    },
    {
      text: 'Solutions',
      links: [
        { text: 'All Solutions', href: getPermalink('/solutions') },
        { text: 'VOC Catalytic Oxidation', href: getPermalink('/solutions/voc-catalytic-oxidation') },
        {
          text: 'Zeolite Adsorption Concentration',
          href: getPermalink('/solutions/molecular-sieve-adsorption-concentration'),
        },
        { text: 'SCR DeNOx', href: getPermalink('/solutions/scr-denox') },
        { text: 'CO Removal', href: getPermalink('/solutions/co-removal') },
        {
          text: 'Adsorption + Catalytic Combustion',
          href: getPermalink('/solutions/adsorption-catalytic-combustion'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        { text: 'Technical Resources', href: getPermalink('/resources') },
        { text: 'Industries', href: getPermalink('/industries') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'R&D', href: getPermalink('/r-and-d') },
        { text: 'Manufacturing', href: getPermalink('/manufacturing') },
        { text: 'Quality', href: getPermalink('/quality') },
        { text: 'Service', href: getPermalink('/service') },
      ],
    },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Request a Quote', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'VOC Catalysts', href: getPermalink('/products/voc-catalysts') },
        { text: 'SCR DeNOx Catalysts', href: getPermalink('/products/scr-denox-catalysts') },
        { text: 'CO Oxidation Catalyst', href: getPermalink('/products/co-removal-catalyst') },
        { text: 'Zeolite Molecular Sieves', href: getPermalink('/products/zeolite-molecular-sieve') },
        { text: 'Activated Carbon', href: getPermalink('/products/activated-carbon') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'VOC Catalytic Oxidation', href: getPermalink('/solutions/voc-catalytic-oxidation') },
        {
          text: 'Zeolite Adsorption Concentration',
          href: getPermalink('/solutions/molecular-sieve-adsorption-concentration'),
        },
        { text: 'SCR DeNOx', href: getPermalink('/solutions/scr-denox') },
        { text: 'CO Removal', href: getPermalink('/solutions/co-removal') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'R&D', href: getPermalink('/r-and-d') },
        { text: 'Manufacturing', href: getPermalink('/manufacturing') },
        { text: 'Quality', href: getPermalink('/quality') },
        { text: 'Service', href: getPermalink('/service') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Knowledge Center', href: 'https://data.xuanbaoenvironment.com' },
        { text: 'Technical Resources', href: getPermalink('/resources') },
        { text: 'Applications', href: getPermalink('/applications') },
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'Industries', href: getPermalink('/industries') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Use', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/8615153588090' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:joanna@dinweys.com' },
  ],
  footNote: `
    © 2026 Yancheng Xuanbao Environmental Technology Co., Ltd. All rights reserved.
  `,
};
