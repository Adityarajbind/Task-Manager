import { useEffect, useState } from "react";
import { X } from "lucide-react";

const TaskModal = ({
  open,
  onClose,
  onSubmit,
  editingTask = null,
  loading,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask, open]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSubmit({
      title,
      description,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 rounded-xl">
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-white/10 bg-gray-600/20 backdrop-blur-2xl p-6">
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {editingTask ? "Edit Task" : "Create Task"}
          </h2>

          <button
            onClick={onClose}
            className="h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title..."
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-500/50"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your task..."
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-purple-500/50"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition cursor-pointer"
            >
              Cancel
            </button>

            {/* <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-[1.02] transition cursor-pointer"
            >
              {editingTask ? "Save Changes" : "Create Task"}
            </button> */}
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-3 rounded-2xl text-white font-medium transition-all flex justify-center items-center min-w-[140px]
  ${
    loading
      ? "bg-purple-700/60 cursor-not-allowed"
      : "bg-linear-to-r from-purple-600 to-blue-600 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
  }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : editingTask ? (
                "Save Changes"
              ) : (
                "Create Task"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
