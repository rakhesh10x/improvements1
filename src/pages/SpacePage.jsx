import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SpacePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const url = state?.url ?? '';
  const title = state?.title ?? 'AI Space';

  // Convert HF spaces URL to embeddable .hf.space URL
  const embedUrl = url.startsWith('https://huggingface.co/spaces/')
    ? url
        .replace('https://huggingface.co/spaces/', '')
        .split('/')
        .join('-')
        .replace(/^(.+)$/, 'https://$1.hf.space')
    : url;

  return (
    <div className="fixed inset-0 flex flex-col bg-[#07070f]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#0d0d18] border-b border-white/[0.07] shrink-0 z-10">
        <div className="flex items-center gap-4 min-w-0">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[13px] font-medium shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="w-px h-4 bg-white/10 shrink-0" />
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#512DA8] shrink-0" />
            <span className="text-white/70 text-[13px] font-medium truncate">{title}</span>
          </div>
        </div>

      </div>

      {/* Full-window iframe */}
      <iframe
        src={embedUrl}
        title={title}
        className="flex-1 w-full border-0"
        allow="accelerometer; camera; encrypted-media; fullscreen; geolocation; gyroscope; microphone; midi"
        loading="lazy"
      />
    </div>
  );
};

export default SpacePage;
