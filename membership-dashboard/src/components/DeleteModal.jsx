function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  member,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-900 w-[430px] rounded-2xl border border-slate-300 dark:border-slate-700 p-8">
        <div className="text-center text-5xl">
          ⚠️
        </div>

        <h2 className="text-2xl font-bold text-center mt-4">
          Delete Member
        </h2>

        <p className="text-slate-400 text-center mt-5">
          Are you sure you want to delete
        </p>

        <p className="font-semibold text-center mt-2">
          {member?.name} ?
        </p>

        <p className="text-red-400 text-sm text-center mt-5">
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-5 mt-8">
          <button
            onClick={onClose}
            className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;