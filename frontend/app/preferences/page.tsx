"use client";
import PreferencesForm from "../../components/PreferencesForm";
import { usePreferences } from "../../context/PreferencesContext";

export default function PreferencesPage() {
  const { preferences, setPreferences } = usePreferences();
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Preferences</h1>
      <PreferencesForm initialPreferences={preferences} onSave={setPreferences} />
    </div>
  );
}
