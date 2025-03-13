
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Save, ZapIcon } from "lucide-react";

interface TranslationSegment {
  id: number;
  source: string;
  target: string;
  isCurrent: boolean;
}

const initialSegments: TranslationSegment[] = [
  {
    id: 1,
    source: "The quick brown fox jumps over the lazy dog.",
    target: "",
    isCurrent: true,
  },
  {
    id: 2,
    source: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    target: "",
    isCurrent: false,
  },
  {
    id: 3,
    source: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    target: "",
    isCurrent: false,
  },
  {
    id: 4,
    source: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    target: "",
    isCurrent: false,
  },
];

const TranslationEditor = () => {
  const [segments, setSegments] = useState<TranslationSegment[]>(initialSegments);
  const [isSaving, setIsSaving] = useState(false);

  const handleSegmentClick = (id: number) => {
    setSegments(
      segments.map((segment) => ({
        ...segment,
        isCurrent: segment.id === id,
      }))
    );
  };

  const handleTargetChange = (id: number, value: string) => {
    setSegments(
      segments.map((segment) =>
        segment.id === id ? { ...segment, target: value } : segment
      )
    );
  };

  const handleAIAssist = () => {
    const currentSegment = segments.find((segment) => segment.isCurrent);
    if (currentSegment) {
      // In a real app, this would call an AI service
      // For now, we'll just simulate with a basic translation
      setTimeout(() => {
        handleTargetChange(
          currentSegment.id,
          "AI-assisted translation would appear here."
        );
      }, 1000);
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between py-4 px-6 border-b border-border">
        <h2 className="text-lg font-medium">Translation Editor</h2>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleAIAssist}
            className="flex items-center space-x-1"
          >
            <ZapIcon size={16} />
            <span>AI Assist</span>
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="flex items-center space-x-1"
            disabled={isSaving}
          >
            <Save size={16} />
            <span>{isSaving ? "Saving..." : "Save"}</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {segments.map((segment) => (
            <motion.div
              key={segment.id}
              layout
              className={`glass-card transition-all duration-300 ${
                segment.isCurrent
                  ? "border-primary border-2"
                  : "hover:shadow-md cursor-pointer"
              }`}
              onClick={() => handleSegmentClick(segment.id)}
            >
              <div className="p-4 text-sm text-muted-foreground">
                {segment.source}
              </div>
              <Separator />
              <div className="p-4">
                <textarea
                  className={`w-full bg-transparent border-none outline-none resize-none text-sm ${
                    segment.isCurrent ? "focus:outline-none" : "cursor-pointer"
                  }`}
                  placeholder="Enter translation here..."
                  value={segment.target}
                  onChange={(e) =>
                    handleTargetChange(segment.id, e.target.value)
                  }
                  disabled={!segment.isCurrent}
                  rows={2}
                  autoFocus={segment.isCurrent}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslationEditor;
