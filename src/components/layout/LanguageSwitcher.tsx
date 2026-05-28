import { useSearchParams } from 'react-router-dom';
import i18n from '../../i18n';

interface LanguageSwitcherProps {
  mobile?: boolean;
}

const LanguageSwitcher = ({ mobile = false }: LanguageSwitcherProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLang = i18n.language;
  const isZh = currentLang.startsWith('zh');

  const switchTo = (lang: 'en' | 'zh') => {
    i18n.changeLanguage(lang);
    if (lang === 'en') {
      const next = new URLSearchParams(searchParams);
      next.delete('lang');
      setSearchParams(next, { replace: true });
    } else {
      setSearchParams({ ...Object.fromEntries(searchParams), lang }, { replace: true });
    }
  };

  if (mobile) {
    return (
      <div className="flex gap-2 w-full">
        <button
          onClick={() => switchTo('en')}
          className={`flex-1 py-2 text-xs font-semibold tracking-[0.08em] uppercase border transition-colors duration-200 ${
            !isZh
              ? 'bg-accent/10 text-accent border-accent'
              : 'text-slate-400 border-slate-200 hover:text-primary hover:border-slate-400'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchTo('zh')}
          className={`flex-1 py-2 text-xs font-semibold tracking-[0.08em] uppercase border transition-colors duration-200 ${
            isZh
              ? 'bg-accent/10 text-accent border-accent'
              : 'text-slate-400 border-slate-200 hover:text-primary hover:border-slate-400'
          }`}
        >
          中文
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0">
      <button
        onClick={() => switchTo('en')}
        className={`relative text-[11px] font-semibold tracking-[0.08em] uppercase px-2 py-1 transition-colors duration-200 ${
          !isZh ? 'text-accent' : 'text-steel hover:text-primary'
        }`}
      >
        EN
        {!isZh && (
          <span className="absolute bottom-0 left-2 right-2 h-px bg-accent" />
        )}
      </button>
      <span className="text-steel/40 text-[11px] select-none">|</span>
      <button
        onClick={() => switchTo('zh')}
        className={`relative text-[11px] font-semibold tracking-[0.08em] uppercase px-2 py-1 transition-colors duration-200 ${
          isZh ? 'text-accent' : 'text-steel hover:text-primary'
        }`}
      >
        中文
        {isZh && (
          <span className="absolute bottom-0 left-2 right-2 h-px bg-accent" />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
