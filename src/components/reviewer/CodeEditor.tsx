import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  language: string;
};

function CodeEditor({
  code,
  setCode,
  language,
}: CodeEditorProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-300 shadow-2xl">
      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 16,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          padding: {
            top: 20,
          },
        }}
      />
    </div>
  );
}

export default CodeEditor;