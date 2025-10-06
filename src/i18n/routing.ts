import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'th'],

  // Used when no locale matches
  defaultLocale: 'th',
  
  // Disable automatic locale detection for static export
  localeDetection: false
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);