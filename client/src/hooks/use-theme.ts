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
        set({ theme });
      },
    }),
    {
      name: "theme-storage",
    }
  )
);