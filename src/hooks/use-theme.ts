import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark", // Set default theme to dark
      setTheme: (theme: Theme) => {
        const root = document.documentElement;
        console.log("Setting theme to:", theme);
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        
        // Update CSS variables for theme colors
        if (theme === 'dark') {
          // Dark theme: True black and vibrant blue
          root.style.setProperty('--background', '#000000');
          root.style.setProperty('--foreground', '#ffffff');
          root.style.setProperty('--card', '#0f172a');
          root.style.setProperty('--card-foreground', '#f8fafc');
          root.style.setProperty('--primary', '#3b82f6');
          root.style.setProperty('--primary-foreground', '#ffffff');
          root.style.setProperty('--secondary', '#0f172a');
          root.style.setProperty('--secondary-foreground', '#f8fafc');
          root.style.setProperty('--accent', '#2563eb');
          root.style.setProperty('--accent-foreground', '#ffffff');
          root.style.setProperty('--muted', '#1e293b');
          root.style.setProperty('--muted-foreground', '#94a3b8');
          root.style.setProperty('--border', '#1e293b');
          
          // Additional custom variables for dark theme
          root.style.setProperty('--hero-bg', '#000000');
          root.style.setProperty('--hero-text', '#ffffff');
          root.style.setProperty('--hero-accent', '#3b82f6');
          root.style.setProperty('--hero-muted', '#94a3b8');
        } else {
          // Light theme: Pure white and vibrant blue
          root.style.setProperty('--background', '#ffffff');
          root.style.setProperty('--foreground', '#0f172a');
          root.style.setProperty('--card', '#ffffff');
          root.style.setProperty('--card-foreground', '#0f172a');
          root.style.setProperty('--primary', '#2563eb');
          root.style.setProperty('--primary-foreground', '#ffffff');
          root.style.setProperty('--secondary', '#f8fafc');
          root.style.setProperty('--secondary-foreground', '#0f172a');
          root.style.setProperty('--accent', '#dbeafe');
          root.style.setProperty('--accent-foreground', '#1e40af');
          root.style.setProperty('--muted', '#f1f5f9');
          root.style.setProperty('--muted-foreground', '#64748b');
          root.style.setProperty('--border', '#e2e8f0');
          
          // Additional custom variables for light theme
          root.style.setProperty('--hero-bg', '#ffffff');
          root.style.setProperty('--hero-text', '#0f172a');
          root.style.setProperty('--hero-accent', '#2563eb');
          root.style.setProperty('--hero-muted', '#64748b');
        }
        
        // Force repaint to ensure all colors update
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger a reflow
        document.body.style.display = '';
        
        set({ theme });
      },
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Apply theme when state is rehydrated from storage
          state.setTheme(state.theme);
        }
      },
    }
  )
);