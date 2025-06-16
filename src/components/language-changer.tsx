'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

// Define available languages in a scalable format
const languages: { label: string; value: Locale; shortcut: string }[] = [
  { label: 'English', value: 'en', shortcut: '⇧⌘P' },
  { label: 'French', value: 'fr', shortcut: '⌘B' },
];

export function LanguageChanger() {
  const handleChange = (value: string) => {
    const locale = value as Locale;
    setUserLocale(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Language</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {languages.map(({ label, value, shortcut }) => (
            <DropdownMenuItem key={value} onClick={() => handleChange(value)}>
              {label}
              <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
