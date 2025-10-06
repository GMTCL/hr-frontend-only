import '../globals.css';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'th' }
  ];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  return (
    <html lang={locale}>
      <head>
        <title>HR Management System</title>
        <meta name="description" content="Complete HR Management System with Thai-English support" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}