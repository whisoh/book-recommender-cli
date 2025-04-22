import { useState } from "react";

interface PreferencesFormProps {
  initialPreferences: string[];
  onSave: (prefs: string[]) => void;
}

export default function PreferencesForm({ initialPreferences, onSave }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<string[]>(initialPreferences);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addPreference = () => {
    if (!input.trim()) {
      setError("Preference cannot be empty");
      return;
    }
    if (preferences.includes(input.trim())) {
      setError("Already added");
      return;
    }
    setPreferences([...preferences, input.trim()]);
    setInput("");
    setError("");
  };

  const removePreference = (pref: string) => {
    setPreferences(preferences.filter((p) => p !== pref));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferences.length) {
      setError("Please add at least one preference");
      return;
    }
    setError("");
    onSave(preferences);
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add preference"
          className="border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white"
        />
        <button type="button" onClick={addPreference} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex flex-wrap gap-2">
        {preferences.map((pref) => (
          <span key={pref} className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded flex items-center">
            {pref}
            <button type="button" onClick={() => removePreference(pref)} className="ml-1 text-xs text-red-600">×</button>
          </span>
        ))}
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-2">Save Preferences</button>
    </form>
  );
}
