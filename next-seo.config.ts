const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Dashboard UI Elements';
const description =
  'Based on https://dribbble.com/shots/15472608-Dashboard-UI-Elements, by YesYou Studio.';
const nextSeo = {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'en-US',
    site_name: siteName,
    description,
  },
};

export default nextSeo;
