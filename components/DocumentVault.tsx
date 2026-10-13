import React, { useState, useEffect } from "react";
import { Download, FileText, ExternalLink, HardDrive, Printer } from "lucide-react";

interface DocItem {
  id: string;
  title: string;
  description: string;
  category: string;
  filename: string;
  path: string;
  requiresVault: boolean;
}

interface DocumentVaultProps {
  documents: DocItem[];
  unlocked: boolean;
}

export default function DocumentVault({ documents, unlocked }: DocumentVaultProps) {
  const [fileSizes, setFileSizes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function fetchSizes() {
      const newSizes: { [key: string]: string } = {};
      for (const doc of documents) {
        if (doc.id === "doc-brochure") {
          newSizes[doc.id] = "Interactive Page";
          continue;
        }
        try {
          const res = await fetch(doc.path, { method: "HEAD" });
          const contentLength = res.headers.get("content-length");
          if (contentLength) {
            const bytes = parseInt(contentLength, 10);
            if (bytes > 1024 * 1024) {
              newSizes[doc.id] = (bytes / (1024 * 1024)).toFixed(2) + " MB";
            } else {
              newSizes[doc.id] = (bytes / 1024).toFixed(1) + " KB";
            }
          } else {
            newSizes[doc.id] = "Verified PDF";
          }
        } catch (err) {
          newSizes[doc.id] = "PDF Document";
        }
      }
      setFileSizes(newSizes);
    }
    fetchSizes();
  }, [documents]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {documents.map((doc) => {
        const canAccess = unlocked || !doc.requiresVault;
        const sizeText = fileSizes[doc.id] || "Loading size...";
        const isBrochure = doc.id === "doc-brochure";

        return (
          <div
            key={doc.id}
            className="bg-slate-950/80 border border-slate-800/80 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-amber-500/40 w-full overflow-hidden"
          >
            <div className="flex items-start gap-3 sm:gap-4 w-full sm:w-auto overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider block">
                  {doc.category}
                </span>
                <h3 className="text-sm sm:text-base font-outfit font-bold text-white mb-1 truncate">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 sm:line-clamp-1">{doc.description}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[10px] text-slate-500 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800 truncate max-w-[180px]">
                    {doc.filename}
                  </span>
                  <span className="text-[10px] text-amber-400/90 font-mono flex items-center gap-1">
                    <HardDrive className="w-3 h-3" /> {sizeText}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto flex justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
              {canAccess ? (
                isBrochure ? (
                  <a
                    href={doc.path}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 sm:py-3 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 flex items-center justify-center gap-2 text-xs font-bold w-full sm:w-auto"
                    title="Open Digital Brochure"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Brochure</span>
                  </a>
                ) : (
                  <a
                    href={doc.path}
                    download={doc.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 sm:p-3 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 flex items-center justify-center gap-2 text-xs font-bold w-full sm:w-auto"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                    <span className="sm:hidden">Download</span>
                    <span className="hidden sm:inline">Download Document</span>
                  </a>
                )
              ) : (
                <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 sm:p-3 rounded-xl text-slate-600 shrink-0 cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto" title="Unlock vault to view/download">
                  <Download className="w-4 h-4 opacity-40" />
                  <span className="text-xs inline sm:hidden text-slate-500">Locked Vault</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
