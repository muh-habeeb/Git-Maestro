'use client';

import {Menu} from 'lucide-react';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface JumpToMenuProps {
  sections: {id: string; title: string}[];
}

export default function JumpToMenu({sections}: JumpToMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg glow-border"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-background/90 backdrop-blur-sm border-primary/20"
        >
          <SheetHeader>
            <SheetTitle className="font-headline text-primary text-glow">
              Jump to Section
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8">
            <ul className="space-y-4">
              {sections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-headline text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
