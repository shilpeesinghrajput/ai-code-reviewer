function Loading() {
  return (
    <div className="mt-8 text-center">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

      <p className="mt-4 text-slate-600">
        AI is reviewing your code...
      </p>
    </div>
  );
}

export default Loading;