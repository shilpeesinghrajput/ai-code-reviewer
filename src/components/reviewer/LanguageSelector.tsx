type LanguageSelectorProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
  const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "cpp",
    "go",
    "rust",
  ];

  return (
    <div className="mb-8 flex justify-end">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;