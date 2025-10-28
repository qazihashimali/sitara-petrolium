import React, { useEffect } from "react";
import { CheckCircle, AlertTriangle, Info, XCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  success: <CheckCircle className="text-green-600" size={24} />,
  error: <XCircle className="text-red-600" size={24} />,
  warning: <AlertTriangle className="text-yellow-600" size={24} />,
  info: <Info className="text-blue-600" size={24} />,
};

const colors = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
};

export default function Alert({
  type = "info",
  title,
  message,
  show = false,
  onClose,
  autoClose = true,
  duration = 4000,
}) {
  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, autoClose, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 z-50 w-[320px] border shadow-lg rounded-xl p-4 flex items-start gap-3 ${colors[type]}`}
        >
          <div className="mt-1">{icons[type]}</div>
          <div className="flex-1">
            {title && <h4 className="font-semibold mb-1">{title}</h4>}
            <p className="text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
