import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

interface AudioTrack {
  id: string;
  src: string;
  icon: string;
  title: string;
  description: string;
  category: string;
  fallbackDuration: number;
}

const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 'padaria',
    src: '/audio/padaria.mp3',
    icon: '🥖',
    title: 'Padaria',
    description: 'Chamada para destacar um dos setores mais importantes do mercado.',
    category: 'Chamada por Setor',
    fallbackDuration: 30,
  },
  {
    id: 'boas-vindas',
    src: '/audio/boas-vindas.mp3',
    icon: '👋',
    title: 'Boas-vindas',
    description: 'Comece a experiência do cliente com uma recepção profissional.',
    category: 'Aviso Institucional',
    fallbackDuration: 14,
  },
  {
    id: 'acougue',
    src: '/audio/acougue.mp3',
    icon: '🥩',
    title: 'Açougue & Carnes',
    description: 'Uma chamada específica para direcionar atenção ao setor.',
    category: 'Chamada por Setor',
    fallbackDuration: 18,
  },
  {
    id: 'ofertas',
    src: '/audio/ofertas.mp3',
    icon: '📣',
    title: 'Ofertas',
    description: 'Uma vinheta rápida para preparar a atenção do cliente.',
    category: 'Vinheta de Impacto',
    fallbackDuration: 7,
  },
];

export const AudioShowcase: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [currentTimes, setCurrentTimes] = useState<Record<string, number>>({});
  const [audioErrors, setAudioErrors] = useState<Record<string, boolean>>({});
  const [isScrubbing, setIsScrubbing] = useState<string | null>(null);

  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const barRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const formatTime = (seconds: number | undefined): string => {
    if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Event handlers que usam event.currentTarget em vez de refs
  const handleTimeUpdate = (
    event: React.SyntheticEvent<HTMLAudioElement>,
    id: string
  ) => {
    if (isScrubbing === id) return;
    const audio = event.currentTarget;
    if (!audio) return;

    const ct = audio.currentTime;
    setCurrentTimes((prev) => ({
      ...prev,
      [id]: Number.isFinite(ct) ? ct : 0,
    }));
  };

  const handleLoadedMetadata = (
    event: React.SyntheticEvent<HTMLAudioElement>,
    id: string
  ) => {
    const audio = event.currentTarget;
    if (!audio) return;

    const dur = audio.duration;
    if (Number.isFinite(dur) && dur > 0) {
      setDurations((prev) => ({
        ...prev,
        [id]: dur,
      }));
    }
  };

  const handleEnded = (id: string) => {
    setPlayingId((curr) => (curr === id ? null : curr));
    setCurrentTimes((prev) => ({
      ...prev,
      [id]: 0,
    }));
  };

  const handlePause = (id: string) => {
    setPlayingId((curr) => (curr === id ? null : curr));
  };

  const handleError = (id: string) => {
    setAudioErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
    setPlayingId((curr) => (curr === id ? null : curr));
  };

  // Toggle Play / Pause seguro
  const toggleAudio = async (id: string) => {
    const selectedAudio = audioRefs.current[id];
    if (!selectedAudio) {
      return;
    }

    // Pausar qualquer outro áudio de forma segura
    Object.entries(audioRefs.current).forEach(([otherId, audio]) => {
      if (otherId !== id && audio && !audio.paused) {
        try {
          audio.pause();
          if (Number.isFinite(audio.currentTime)) {
            audio.currentTime = 0;
          }
          setCurrentTimes((prev) => ({ ...prev, [otherId]: 0 }));
        } catch {
          // Fallback seguro
        }
      }
    });

    if (selectedAudio.paused) {
      try {
        await selectedAudio.play();
        setPlayingId(id);
      } catch (error) {
        console.warn('Não foi possível reproduzir o áudio:', error);
        setPlayingId(null);
      }
    } else {
      try {
        selectedAudio.pause();
      } catch {
        // Fallback seguro
      }
      setPlayingId(null);
    }
  };

  // Seek seguro na barra de progresso
  const seekAudio = (id: string, newTime: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    const duration = audio.duration;
    if (!Number.isFinite(duration) || duration <= 0) {
      return;
    }

    const safeTime = Math.max(0, Math.min(newTime, duration));
    try {
      audio.currentTime = safeTime;
      setCurrentTimes((prev) => ({
        ...prev,
        [id]: safeTime,
      }));
    } catch {
      // Ignorar erros de seek
    }
  };

  const handlePointerDown = (trackId: string, e: React.PointerEvent<HTMLDivElement>) => {
    const bar = barRefs.current[trackId];
    const audio = audioRefs.current[trackId];
    if (!bar || !audio) return;

    setIsScrubbing(trackId);
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const duration = Number.isFinite(audio.duration) && audio.duration > 0
      ? audio.duration
      : (durations[trackId] || AUDIO_TRACKS.find((t) => t.id === trackId)?.fallbackDuration || 1);
    
    seekAudio(trackId, ratio * duration);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (trackId: string, e: React.PointerEvent<HTMLDivElement>) => {
    if (isScrubbing !== trackId) return;
    const bar = barRefs.current[trackId];
    const audio = audioRefs.current[trackId];
    if (!bar || !audio) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const duration = Number.isFinite(audio.duration) && audio.duration > 0
      ? audio.duration
      : (durations[trackId] || AUDIO_TRACKS.find((t) => t.id === trackId)?.fallbackDuration || 1);

    seekAudio(trackId, ratio * duration);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isScrubbing) {
      setIsScrubbing(null);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignorado se não capturado
      }
    }
  };

  // Cleanup na desmontagem
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio && !audio.paused) {
          try {
            audio.pause();
          } catch {
            // Ignorado no unmount
          }
        }
      });
    };
  }, []);

  return (
    <section id="demonstracao" className="py-14 sm:py-20 bg-[#F5F6F7] border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-[#E31E2D] text-xs font-bold uppercase tracking-wider mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Demonstração Real</span>
          </div>
          <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
            Não precisa imaginar. Dê o play.
          </h2>
          <p className="mt-3 text-fluid-body text-[#5B616B]">
            Ouça alguns dos áudios que você poderá usar dentro do seu mercado.
          </p>
        </div>

        {/* 4 Cards de Áudio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {AUDIO_TRACKS.map((track) => {
            const isPlaying = playingId === track.id;
            const currentTime = currentTimes[track.id] ?? 0;
            const rawDuration = durations[track.id] || track.fallbackDuration;
            const safeDuration = Number.isFinite(rawDuration) && rawDuration > 0 ? rawDuration : track.fallbackDuration;
            const progressRatio = safeDuration > 0 ? Math.min(100, Math.max(0, (currentTime / safeDuration) * 100)) : 0;
            const isUnavailable = audioErrors[track.id];

            return (
              <div
                key={track.id}
                className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-200 shadow-2xs flex flex-col justify-between ${
                  isPlaying
                    ? 'border-[#E31E2D]/50 shadow-md ring-1 ring-[#E31E2D]/20'
                    : 'border-[#E6E9EE] hover:border-slate-300'
                }`}
              >
                {/* Elemento de Áudio HTML5 Invisível com eventos protegidos */}
                <audio
                  ref={(element) => {
                    audioRefs.current[track.id] = element;
                  }}
                  src={track.src}
                  preload="metadata"
                  onTimeUpdate={(e) => handleTimeUpdate(e, track.id)}
                  onLoadedMetadata={(e) => handleLoadedMetadata(e, track.id)}
                  onEnded={() => handleEnded(track.id)}
                  onPause={() => handlePause(track.id)}
                  onError={() => handleError(track.id)}
                />

                {/* Top do Card: Ícone, Categoria, Título e Descrição */}
                <div>
                  <div className="flex items-start gap-3.5 mb-2.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F7F8FA] border border-[#E6E9EE] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                      <span role="img" aria-label={track.title}>
                        {track.icon}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold text-[#E31E2D] uppercase tracking-wider block">
                        {track.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-[#171717] leading-tight mt-0.5">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B616B] leading-relaxed mt-1">
                        {track.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Linha Divisória Suave */}
                <div className="w-full h-px bg-[#E6E9EE] my-4"></div>

                {/* Player Personalizado Minimalista & Premium */}
                <div className="w-full bg-[#F7F8FA] border border-[#E6E9EE] rounded-[16px] px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[64px] sm:min-h-[68px] flex items-center gap-3 sm:gap-4 select-none">
                  
                  {/* Botão Play / Pause */}
                  <button
                    type="button"
                    disabled={isUnavailable}
                    onClick={() => toggleAudio(track.id)}
                    aria-label={isPlaying ? `Pausar áudio ${track.title}` : `Reproduzir áudio ${track.title}`}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E31E2D] disabled:opacity-50 text-white flex items-center justify-center shrink-0 shadow-xs hover:scale-[1.04] active:scale-95 transition-transform duration-150 cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current ml-0.5" />
                    )}
                  </button>

                  {/* Barra de Progresso Personalizada */}
                  <div
                    ref={(el) => {
                      barRefs.current[track.id] = el;
                    }}
                    onPointerDown={(e) => handlePointerDown(track.id, e)}
                    onPointerMove={(e) => handlePointerMove(track.id, e)}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="flex-1 min-w-0 py-3 cursor-pointer relative touch-none group"
                  >
                    {/* Barra Vazia */}
                    <div className="w-full h-[5px] bg-[#E7EAF0] rounded-full relative overflow-visible">
                      {/* Barra Reproduzida */}
                      <div
                        className="h-full bg-[#E31E2D] rounded-full relative"
                        style={{ width: `${progressRatio}%` }}
                      >
                        {/* Dot Indicador (Thumb) */}
                        <div
                          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#E31E2D] shadow-xs border-2 border-white transition-opacity ${
                            isPlaying || isScrubbing === track.id ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contador de Tempo Dinâmico */}
                  <div className="text-[11px] sm:text-xs font-semibold text-[#687080] tabular-nums shrink-0 whitespace-nowrap min-w-[62px] text-right">
                    {formatTime(currentTime)} / {formatTime(safeDuration)}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pequeno Bloco de Copy Conciso */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <h3 className="text-xl sm:text-2xl font-black text-[#171717] tracking-tight">
            Seu cliente não vive a compra apenas com os olhos.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#5B616B] leading-relaxed">
            Música, avisos, chamadas e vinhetas ajudam a criar ritmo, organização e identidade dentro do ambiente.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 font-extrabold text-sm sm:text-base text-[#E31E2D]">
            Não é sobre fazer barulho. É sobre não deixar a experiência do seu mercado no improviso.
          </div>
        </div>

      </div>
    </section>
  );
};
