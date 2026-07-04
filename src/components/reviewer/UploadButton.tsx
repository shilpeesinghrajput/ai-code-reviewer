import type { Dispatch, SetStateAction } from "react";
import { detectLanguage } from "../../utils/detectLanguage";

type UploadButtonProps = {
  setCode: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<string>>;
};

function UploadButton({
  setCode,
  setLanguage,
}: UploadButtonProps) {
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
  const content = e.target?.result as string;

  setCode(content);

  const detected = detectLanguage(content);

  setLanguage(detected);
};

    reader.readAsText(file);
  };

  return (
    <label className="cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
      📂 Upload Code

      <input
        type="file"
        accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c,.go,.rs"
        className="hidden"
        onChange={handleFileUpload}
      />
    </label>
  );
}

export default UploadButton;