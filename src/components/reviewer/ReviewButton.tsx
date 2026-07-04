import Button from "../ui/Button";

type ReviewButtonProps = {
  loading: boolean;
  onClick: () => void;
};

function ReviewButton({
  loading,
  onClick,
}: ReviewButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="px-10 py-4 text-lg"
    >
      {loading ? "Reviewing..." : "🚀 Review Code"}
    </Button>
  );
}

export default ReviewButton;