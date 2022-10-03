import { statSync } from "fs";

const getFileSize = (filePath) => {
  const stats = statSync(filePath);
  return stats.size;
};

export default getFileSize;

// Exported to:
// src/ImageIndex.js
