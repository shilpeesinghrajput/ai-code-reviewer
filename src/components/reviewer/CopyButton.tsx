import toast from "react-hot-toast";
import Button from "../ui/Button";

type CopyButtonProps = {
  review: string;
};

function CopyButton({ review }: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(review);

     toast.success("✅ Review copied successfully!");
    } catch (error) {
     toast.error("❌ Failed to copy review.");
    }
  };

  return (
    <Button
      variant="secondary"
      onClick={handleCopy}
    >
      📋 Copy Review
    </Button>
  );
}

export default CopyButton;