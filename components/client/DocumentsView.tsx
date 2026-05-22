'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { formatDate } from '@/lib/helpers';
import { storage, STORAGE_KEYS } from '@/lib/storage';
import type { Policy, DocumentEntry } from '@/types';

interface DocumentsViewProps {
  policies: Policy[];
}

function DocCard({ doc, onDelete }: { doc: DocumentEntry; onDelete: (id: string) => void }) {
  const handleDownload = () => {
    if (!doc.dataUrl) return;
    const a = document.createElement('a');
    a.href = doc.dataUrl;
    a.download = doc.name;
    a.click();
  };

  return (
    <div className="bg-deep border border-gold/10 p-4 flex items-start gap-3 group hover:border-gold/30 transition-colors">
      <div className="w-10 h-12 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center shrink-0">
        <span className="text-gold-light text-[9px] font-mono">
          {doc.type?.includes('pdf') ? 'PDF' : 'DOC'}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-paper text-sm truncate" title={doc.name}>
          {doc.name}
        </div>
        <div className="text-paper/40 text-xs mt-1">
          {(doc.size / 1024).toFixed(0)} KB · {formatDate(doc.uploadedAt)}
        </div>
        <div className="flex gap-3 mt-2 text-xs">
          <button
            onClick={handleDownload}
            disabled={!doc.dataUrl}
            className="text-gold-light hover:text-gold flex items-center gap-1 disabled:opacity-40"
          >
            <Icon name="download" className="w-3 h-3" /> Baixar
          </button>
          <button
            onClick={() => onDelete(doc.id)}
            className="text-paper/40 hover:text-red-400 flex items-center gap-1"
          >
            <Icon name="trash" className="w-3 h-3" /> Remover
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DocumentsView({ policies }: DocumentsViewProps) {
  const [docs, setDocs] = useState<DocumentEntry[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPolicyId, setSelectedPolicyId] = useState('');

  useEffect(() => {
    const stored = storage.get<DocumentEntry[]>(STORAGE_KEYS.documents);
    if (stored) setDocs(stored);
  }, []);

  useEffect(() => {
    storage.set(STORAGE_KEYS.documents, docs);
  }, [docs]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      alert('Arquivo muito grande. Limite de 4MB no demo. Em produção, conecte um storage (S3, Supabase Storage, etc).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const newDoc: DocumentEntry = {
        id: 'doc-' + Date.now(),
        policyId: selectedPolicyId || null,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toISOString(),
        dataUrl,
      };
      setDocs((prev) => [newDoc, ...prev]);
      if (e.target) e.target.value = '';
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    if (confirm('Remover este documento?')) {
      setDocs((prev) => prev.filter((d) => d.id !== id));
    }
  };

  const docsByPolicy = (policyId: string) => docs.filter((d) => d.policyId === policyId);
  const orphanDocs = docs.filter((d) => !d.policyId || !policies.find((p) => p.id === d.policyId));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-1">Repositório</div>
          <h1 className="display text-paper text-3xl md:text-4xl">Documentos</h1>
          <p className="text-paper/55 text-sm mt-1">
            Suas apólices em PDF, contratos e documentos organizados por produto.
          </p>
        </div>
      </div>

      <div className="bg-night border border-dashed border-gold/30 p-8 text-center hover:border-gold/60 transition-colors">
        <Icon name="upload" className="w-10 h-10 text-gold/60 mx-auto mb-4" />
        <div className="text-paper mb-2 font-medium">Enviar nova apólice ou documento</div>
        <p className="text-paper/50 text-sm mb-5">PDF, imagem ou documento até 4MB</p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <select
            value={selectedPolicyId}
            onChange={(e) => setSelectedPolicyId(e.target.value)}
            className="flex-1 bg-deep border border-gold/15 text-paper text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50"
          >
            <option value="">Sem apólice vinculada</option>
            {policies.map((p) => (
              <option key={p.id} value={p.id}>
                {p.product} — {p.provider}
              </option>
            ))}
          </select>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleUpload}
            accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
            className="hidden"
          />
          <button onClick={() => fileInputRef.current?.click()} className="btn-gold whitespace-nowrap">
            <Icon name="upload" className="w-4 h-4" /> Selecionar arquivo
          </button>
        </div>
      </div>

      {policies.map((p) => {
        const pDocs = docsByPolicy(p.id);
        if (pDocs.length === 0) return null;
        const cat = PRODUCT_CATEGORIES[p.category];
        return (
          <div key={p.id} className="bg-night border border-gold/10 p-6">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gold/10">
              <Icon name={cat?.icon || 'shield'} className="w-5 h-5" style={{ color: cat?.color }} />
              <div className="flex-1">
                <div className="text-paper font-medium">{p.product}</div>
                <div className="text-paper/50 text-xs">
                  {p.provider} · {pDocs.length} {pDocs.length === 1 ? 'documento' : 'documentos'}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pDocs.map((d) => (
                <DocCard key={d.id} doc={d} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        );
      })}

      {orphanDocs.length > 0 && (
        <div className="bg-night border border-gold/10 p-6">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gold/10">
            <Icon name="file" className="w-5 h-5 text-paper/60" />
            <div>
              <div className="text-paper font-medium">Outros documentos</div>
              <div className="text-paper/50 text-xs">
                {orphanDocs.length} {orphanDocs.length === 1 ? 'arquivo' : 'arquivos'} sem apólice vinculada
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {orphanDocs.map((d) => (
              <DocCard key={d.id} doc={d} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}

      {docs.length === 0 && (
        <div className="bg-night border border-gold/10 p-16 text-center">
          <Icon name="file" className="w-12 h-12 text-paper/20 mx-auto mb-4" />
          <div className="text-paper/60 mb-1">Nenhum documento ainda</div>
          <div className="text-paper/40 text-sm">Comece enviando suas apólices em PDF.</div>
        </div>
      )}
    </div>
  );
}
