import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        { text: 'All Products', href: getPermalink('/products') },
        { text: 'SCR DeNOx Catalysts', href: getPermalink('/products/scr-denox-catalysts') },
        { text: 'CO Oxidation Catalyst', href: getPermalink('/products/co-removal-catalyst') },
        { text: 'VOC Catalysts', href: getPermalink('/products/voc-catalysts') },
        { text: 'Zeolite Molecular Sieves', href: getPermalink('/products/zeolite-molecular-sieve') },
        { text: 'Activated Carbon', href: getPermalink('/products/activated-carbon') },
      ],
    },
    {
      text: 'Applications',
      href: getPermalink('/applications'),
    },
    {
      text: 'Materials',
      href: getPermalink('/materials'),
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
    { text: 'Industries', href: getPermalink('/industries') },
    { text: 'Case Studies', href: getPermalink('/case-studies') },
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
        { text: 'SCR DeNOx Catalysts', href: getPermalink('/products/scr-denox-catalysts') },
        { text: 'CO Oxidation Catalyst', href: getPermalink('/products/co-removal-catalyst') },
        { text: 'VOC Catalysts', href: getPermalink('/products/voc-catalysts') },
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
        { text: 'Applications', href: getPermalink('/applications') },
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'Industries', href: getPermalink('/industries') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:625534887@qq.com' },
  ],
  footNote: `
    © 2026 Yancheng Xuanbao Environmental Technology Co., Ltd. All rights reserved.
  `,
};
