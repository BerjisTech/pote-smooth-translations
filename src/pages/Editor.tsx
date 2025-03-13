
import React from "react";
import Layout from "@/components/layout/Layout";
import TranslationEditor from "@/components/editor/TranslationEditor";

const Editor = () => {
  return (
    <Layout title="Translation Editor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Translation Editor</h2>
        </div>
        
        <div className="glass-card">
          <TranslationEditor />
        </div>
      </div>
    </Layout>
  );
};

export default Editor;
