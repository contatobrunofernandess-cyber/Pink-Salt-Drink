"use client";

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';

interface Note {
  id: string;
  date: string;
  day: number;
  weight?: number;
  energy: number;
  mood: number;
  symptoms: string[];
  notes: string;
}

export function NotesModule() {
  const { language } = useApp();
  const t = translations[language];
  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentNote, setCurrentNote] = useState<Partial<Note>>({
    day: 1,
    energy: 5,
    mood: 5,
    symptoms: [],
    notes: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('pinkSalt_notes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  const saveNotes = (newNotes: Note[]) => {
    setNotes(newNotes);
    localStorage.setItem('pinkSalt_notes', JSON.stringify(newNotes));
  };

  const saveNote = () => {
    if (!currentNote.day) return;

    const note: Note = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      day: currentNote.day!,
      weight: currentNote.weight,
      energy: currentNote.energy!,
      mood: currentNote.mood!,
      symptoms: currentNote.symptoms!,
      notes: currentNote.notes!
    };

    const existingIndex = notes.findIndex(n => n.day === note.day);
    let newNotes;
    
    if (existingIndex >= 0) {
      newNotes = [...notes];
      newNotes[existingIndex] = note;
    } else {
      newNotes = [...notes, note];
    }

    saveNotes(newNotes.sort((a, b) => a.day - b.day));
    setShowForm(false);
    setCurrentNote({
      day: 1,
      energy: 5,
      mood: 5,
      symptoms: [],
      notes: ''
    });
  };

  const editNote = (note: Note) => {
    setCurrentNote(note);
    setShowForm(true);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter(n => n.id !== id);
    saveNotes(newNotes);
  };

  const toggleSymptom = (symptom: string) => {
    const symptoms = currentNote.symptoms || [];
    const newSymptoms = symptoms.includes(symptom)
      ? symptoms.filter(s => s !== symptom)
      : [...symptoms, symptom];
    setCurrentNote({ ...currentNote, symptoms: newSymptoms });
  };

  const availableSymptoms = [
    t.notes.symptoms.headache,
    t.notes.symptoms.fatigue,
    t.notes.symptoms.nausea,
    t.notes.symptoms.bloating,
    t.notes.symptoms.cravings,
    t.notes.symptoms.irritability
  ];

  if (showForm) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">{t.notes.addEntry}</h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Day Selection */}
          <div className="bg-pink-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              {t.notes.day}
            </label>
            <select
              value={currentNote.day}
              onChange={(e) => setCurrentNote({ ...currentNote, day: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-white border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {[1, 2, 3, 4, 5, 6, 7].map(day => (
                <option key={day} value={day}>{t.schedule.day} {day}</option>
              ))}
            </select>
          </div>

          {/* Weight */}
          <div className="bg-blue-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              {t.notes.weight} ({t.notes.optional})
            </label>
            <div className="relative">
              <input
                type="number"
                value={currentNote.weight || ''}
                onChange={(e) => setCurrentNote({ ...currentNote, weight: Number(e.target.value) || undefined })}
                placeholder="70"
                className="w-full px-4 py-2 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-4 top-2 text-gray-500 text-sm">kg</span>
            </div>
          </div>

          {/* Energy Level */}
          <div className="bg-yellow-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              {t.notes.energy}: {currentNote.energy}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentNote.energy}
              onChange={(e) => setCurrentNote({ ...currentNote, energy: Number(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>{t.notes.low}</span>
              <span>{t.notes.high}</span>
            </div>
          </div>

          {/* Mood */}
          <div className="bg-green-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              {t.notes.mood}: {currentNote.mood}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentNote.mood}
              onChange={(e) => setCurrentNote({ ...currentNote, mood: Number(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>{t.notes.low}</span>
              <span>{t.notes.high}</span>
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-red-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              {t.notes.symptomsTitle}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableSymptoms.map((symptom) => (
                <label key={symptom} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentNote.symptoms?.includes(symptom) || false}
                    onChange={() => toggleSymptom(symptom)}
                    className="text-red-500 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-purple-50 rounded-2xl p-4">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              {t.notes.notesTitle}
            </label>
            <textarea
              value={currentNote.notes}
              onChange={(e) => setCurrentNote({ ...currentNote, notes: e.target.value })}
              placeholder={t.notes.notesPlaceholder}
              rows={3}
              className="w-full px-4 py-2 bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={saveNote}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200"
          >
            {t.notes.save}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{t.notes.title}</h2>
          <p className="text-sm text-gray-600">{t.notes.subtitle}</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-pink-500 text-white p-2 rounded-xl hover:bg-pink-600 transition-colors"
        >
          <span className="text-lg">+</span>
        </button>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-gray-600 mb-4">{t.notes.empty}</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition-colors"
          >
            {t.notes.addFirst}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <div key={note.id} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
                    {t.schedule.day} {note.day}
                  </span>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => editNote(note)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-600">{note.energy}/10</div>
                  <div className="text-xs text-gray-600">{t.notes.energy}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{note.mood}/10</div>
                  <div className="text-xs text-gray-600">{t.notes.mood}</div>
                </div>
              </div>

              {note.weight && (
                <div className="text-center mb-3">
                  <div className="text-lg font-bold text-blue-600">{note.weight}kg</div>
                  <div className="text-xs text-gray-600">{t.notes.weight}</div>
                </div>
              )}

              {note.symptoms.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-gray-600 mb-1">{t.notes.symptomsTitle}:</div>
                  <div className="flex flex-wrap gap-1">
                    {note.symptoms.map((symptom) => (
                      <span key={symptom} className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {note.notes && (
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-xs text-gray-600 mb-1">{t.notes.notesTitle}:</div>
                  <p className="text-sm text-gray-700">{note.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}