import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full text-text-tertiary transition-colors hover:bg-black/5 hover:text-text-primary dark:hover:bg-white/10"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
