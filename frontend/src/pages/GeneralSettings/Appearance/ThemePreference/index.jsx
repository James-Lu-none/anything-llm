import { useTheme } from "@/hooks/useTheme";

export default function ThemePreference() {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="flex flex-col gap-y-1 mt-4">
      <h2 className="text-base leading-6 font-bold text-white">Theme</h2>
      <p className="text-xs leading-[18px] font-base text-white/60">
        Select your preferred theme for the application.
      </p>
      <div className="flex items-center gap-x-4">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border-none bg-theme-bg-input text-theme-text-primary placeholder:text-theme-text-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
        >
          {Object.entries(availableThemes).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
