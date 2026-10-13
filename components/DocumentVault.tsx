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
            className="bg-slate-950/80 border border-slate-800/80 p-6 rounded-2xl flex items-center justify-between gap-4 transition-all hover:border-amber-500/40"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                  {doc.category}
                </span>
                <h3 className="text-base font-outfit font-bold text-white mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1">{doc.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-slate-500 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {doc.filename}
                  </span>
                  <span className="text-[10px] text-amber-400/90 font-mono flex items-center gap-1">
                    <HardDrive className="w-3 h-3" /> {sizeText}
                  </span>
                </div>
              </div>
            </div>

            {canAccess ? (
              isBrochure ? (
                <a
                  href={doc.path}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-3 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 flex items-center gap-2 text-xs font-bold"
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
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 p-3 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0 flex items-center justify-center"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              )
            ) : (
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-600 shrink-0 cursor-not-allowed" title="Unlock vault to view/download">
                <Download className="w-4 h-4 opacity-40" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
