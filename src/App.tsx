import React, { useState } from 'react';
import {
  Briefcase,
  Trees,
  Smartphone,
  Layers,
  Heart,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
  Split,
  Eye,
  Store,
  Award,
  Flame,
  Swords,
  Scroll,
  HelpCircle,
  Clock,
  Compass,
  Users,
  Feather,
  BookOpen,
  Crown,
  Download,
  Copy,
  Check,
  Terminal,
  Play,
  Monitor,
  Cpu,
  FolderGit2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'showcase' | 'play_gaomen' | 'play_xiuxian' | 'play_shelter' | 'overview' | 'market' | 'sandbox'>('showcase');
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'mobile'>('desktop');
  const [keyRefresh, setKeyRefresh] = useState(0);
  const [copied, setCopied] = useState(false);

  const gaomenUrl = '/gaomen.html';
  const xiuxianUrl = '/xiuxian_female.html';
  const binjiangDeluxeUrl = '/binjiang.html';
  const tianyuanUrl = '/assets/aistudio/tianyuan_cae35171.html';
  const shelterUrl = '/shelter.html';

  const downloadFile = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyGitCommand = () => {
    navigator.clipboard.writeText('git clone https://github.com/<your-username>/zero-dependency-web-games.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const downloadAllGames = () => {
    const games = [
      { url: gaomenUrl, name: '古代世家_高门主母掌家录.html' },
      { url: xiuxianUrl, name: '云霄仙府_修真经营录.html' },
      { url: binjiangDeluxeUrl, name: '滨江市_打工人生豪华版.html' },
      { url: tianyuanUrl, name: '桃花村_田园经营录.html' },
      { url: shelterUrl, name: '方舟纪元_废土避难所经营录.html' }
    ];
    games.forEach((g, i) => {
      setTimeout(() => downloadFile(g.url, g.name), i * 350);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* 顶部主导航栏 */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-amber-500 to-indigo-500 p-0.5 flex items-center justify-center shadow-lg shadow-rose-600/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-rose-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base lg:text-lg tracking-tight text-white flex items-center gap-2">
                东方叙事与模拟经营 · 原生单文件游戏矩阵
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Zero-Dependency Web Games
              </span>
            </div>
            <p className="text-xs text-slate-400">
              纯原生单文件架构 · 零外部网络依赖 · 双击即玩 · 内置 Web Audio 和弦合成 · 双端响应式排版
            </p>
          </div>
        </div>

        {/* 导航标签栏 */}
        <div className="flex items-center gap-1.5 bg-slate-950/70 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('showcase')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'showcase'
                ? 'bg-gradient-to-r from-indigo-600 to-rose-600 text-white shadow-lg shadow-indigo-600/20 font-bold'
                : 'text-indigo-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            🏠 项目矩阵展示页
          </button>
          <button
            onClick={() => setActiveTab('play_gaomen')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'play_gaomen'
                ? 'bg-gradient-to-r from-rose-700 to-amber-700 text-white shadow-lg shadow-rose-700/20 font-bold'
                : 'text-rose-400 hover:text-rose-200 hover:bg-slate-900'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            🪭 《高门主母》试玩
          </button>
          <button
            onClick={() => setActiveTab('play_xiuxian')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'play_xiuxian'
                ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg shadow-amber-600/20 font-bold'
                : 'text-amber-400 hover:text-amber-200 hover:bg-slate-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            🌸 《修真经营录》试玩
          </button>
          <button
            onClick={() => setActiveTab('play_shelter')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'play_shelter'
                ? 'bg-gradient-to-r from-amber-600 to-emerald-600 text-white shadow-lg shadow-amber-600/20 font-bold'
                : 'text-amber-300 hover:text-amber-100 hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            🛡️ 《废土避难所》试玩
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            三大作精细化横评
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'market'
                ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg shadow-amber-600/20 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            商业市场洞察
          </button>
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'sandbox'
                ? 'bg-cyan-600 text-white shadow font-bold'
                : 'text-cyan-400 hover:text-cyan-200 hover:bg-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            四屏实时沙盒
          </button>
        </div>
      </header>

      {/* 主面板内容 */}
      <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        {/* ================= 0. 项目展示主页 (Showcase Hub) ================= */}
        {activeTab === 'showcase' && (
          <div className="space-y-10">
            {/* 顶栏 Hero 区域 */}
            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-rose-950/25 to-slate-900 p-8 lg:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 max-w-4xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Git 极简分发 · 零构建项目集
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 纯原生无依赖 · 离线开箱即玩
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Web Audio 实时音效合成
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    东方叙事与模拟经营 <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-amber-300 to-indigo-300">
                      纯原生单文件独立游戏矩阵
                    </span>
                  </h2>
                  <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
                    汇聚<strong>高门世家主母掌家</strong>、<strong>修真长生逆天改命</strong>、<strong>江南古典田园耕读</strong>与<strong>现代都市打工逆袭</strong>四大核心题材。每个游戏皆为 100% 独立的单文件 HTML，内嵌高精度矢量 SVG、纯代码合成 Web Audio 宫廷古筝音效、双端自适应防遮挡排版与防反调试保护机制。
                  </p>
                </div>

                {/* 快捷操作条 */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab('play_gaomen')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-700 to-amber-700 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold flex items-center gap-2 shadow-xl shadow-rose-700/30 transition transform hover:-translate-y-0.5"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    试玩超头部新作《高门主母》
                  </button>
                  <button
                    onClick={downloadAllGames}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 transition"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    一键打包下载全部 4 款单文件 HTML
                  </button>
                  <button
                    onClick={copyGitCommand}
                    className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-2 transition"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    <span>{copied ? '已复制 Git 克隆命令！' : 'git clone 仓库命令'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 四大核心单文件作品展示阵列 */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Crown className="w-5 h-5 text-rose-400" />
                    四大核心原生单文件游戏矩阵
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">每个文件均为独立可运行的游戏全集，无构建步骤，开箱即玩</p>
                </div>
                <button
                  onClick={() => setActiveTab('sandbox')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                >
                  打开四屏同台对决沙盒 <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. 高门主母掌家录 */}
                <div className="rounded-2xl border border-rose-500/40 bg-gradient-to-b from-slate-900/95 via-rose-950/20 to-slate-900/90 p-6 flex flex-col justify-between space-y-4 hover:border-rose-400/60 transition shadow-xl group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-rose-900/40 border border-rose-500/40 flex items-center justify-center text-rose-300">
                          <Crown className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-lg text-white group-hover:text-rose-300 transition">
                              古代世家 · 高门主母掌家录
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold">
                              新爆款
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">public/gaomen.html (72 KB)</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-rose-950/60 text-rose-300 border border-rose-800 font-medium">
                        女性向中馈
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      承命入主定远侯府，执掌六大权力中枢：晨起正堂发落例银、寿安堂晨昏定省侍疾、外书房与锦衣卫统领夫君深情对弈解忧、敲打得宠林妾室、突查账房庄田抓贪腐没收私房、为世家儿郎聘大儒择名门亲事、严查后院暗药悬案。
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">六大中馈中枢</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">双端自适应分屏</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">Web Audio 宫廷古筝</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">防 F12 安全锁</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveTab('play_gaomen')}
                      className="px-4 py-2 rounded-lg bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-rose-700/30 transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> 在线试玩
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadFile(gaomenUrl, '古代世家_高门主母掌家录.html')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Download className="w-3.5 h-3.5 text-rose-400" /> 下载 HTML
                      </button>
                      <a
                        href={gaomenUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        全屏 ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. 修真经营录 */}
                <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-slate-900/95 via-amber-950/20 to-slate-900/90 p-6 flex flex-col justify-between space-y-4 hover:border-amber-400/60 transition shadow-xl group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-500/40 flex items-center justify-center text-amber-300">
                          <Flame className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
                              云霄仙府 · 修真经营录
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                              逆天大作
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">public/xiuxian_female.html (90 KB)</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800 font-medium">
                        东方修仙
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      女修逆天证道主轴：九大境界阶梯破境渡劫，寿元倒计时紧迫心流；结识八大倾心蓝颜（清冷剑尊大师兄、药王谷温润医仙、魔道少主等）；开辟灵田烹调灵膳治愈母亲寒毒；诞育代际仙嗣开蒙受业，承袭上古仙帝遗泽。
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">九大境界破境</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">八位蓝颜羁绊</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">代际仙嗣开蒙</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">九重天雷特效</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveTab('play_xiuxian')}
                      className="px-4 py-2 rounded-lg bg-amber-700 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-700/30 transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> 在线试玩
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadFile(xiuxianUrl, '云霄仙府_修真经营录.html')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Download className="w-3.5 h-3.5 text-amber-400" /> 下载 HTML
                      </button>
                      <a
                        href={xiuxianUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        全屏 ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. 桃花村田园经营录 */}
                <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-slate-900/95 via-emerald-950/20 to-slate-900/90 p-6 flex flex-col justify-between space-y-4 hover:border-emerald-400/60 transition shadow-xl group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                          <Trees className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white group-hover:text-emerald-300 transition">
                            桃花村 · 古代田园经营录
                          </h4>
                          <span className="text-xs text-slate-400 font-mono">public/assets/aistudio/tianyuan... (105 KB)</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800 font-medium">
                        古典田园
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      返璞归真的古典田园叙事：春耕夏耘秋收冬藏，直面旱涝霜雪天象；侍奉体弱旧疾老母，打理五亩祖传良田；集市买卖特产杂货，成家立业养育幼子，辅导功课科举中第，享尽三代承欢膝下之福。
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">四时节气流转</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">五亩良田精耕</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">慈母侍疾温情</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">儿女科举仕途</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">田园治愈系开山之作</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadFile(tianyuanUrl, '桃花村_田园经营录.html')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-400" /> 下载 HTML
                      </button>
                      <a
                        href={tianyuanUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        全屏 ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* 4. 滨江市打工人生 */}
                <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-slate-900/95 via-indigo-950/20 to-slate-900/90 p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400/60 transition shadow-xl group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-indigo-900/40 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white group-hover:text-indigo-300 transition">
                            滨江市 · 打工人生 (豪华版)
                          </h4>
                          <span className="text-xs text-slate-400 font-mono">public/binjiang.html (101 KB)</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-800 font-medium">
                        现代都市
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      现代都市奋斗与阶层跃迁真实摹写：从身无分文合租房起步，涉足兼职外卖、大厂程序员至创办实业集团；利用股市低吸高抛、期权期货对冲抗通胀；克服 35 岁失业焦虑，逆袭成为坐拥江景大平层与过亿身家的商界巨子。
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">职场晋升梯队</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">股票房产实业</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">现实通胀对抗</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">身家过亿逆袭</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">现实题材模拟巅峰</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadFile(binjiangDeluxeUrl, '滨江市_打工人生豪华版.html')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Download className="w-3.5 h-3.5 text-indigo-400" /> 下载 HTML
                      </button>
                      <a
                        href={binjiangDeluxeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        全屏 ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* 5. 方舟纪元 · 废土避难所 */}
                <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-slate-900/95 via-amber-950/20 to-slate-900/90 p-6 flex flex-col justify-between space-y-4 hover:border-amber-400/60 transition shadow-xl group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-500/40 flex items-center justify-center text-amber-300">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
                            方舟纪元 · 废土避难所经营录
                          </h4>
                          <span className="text-xs text-slate-400 font-mono">public/shelter.html (58 KB)</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800 font-medium">
                        末日废土
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      废土绝境中的希望灯塔：管理第101号地下避难所，水培温室种植抗辐射番茄，机械工坊检修柴油发电机组；收容机械少女安娜、退役老军医陈大夫、荒野猎人雷诺与遗孤小妹妹小朵；抚摸忠犬黑子治愈疲惫，搜寻废弃超市医院，在长波电台搜寻人类文明火种，挺过严酷核冬与尸潮！
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">水培温室自给</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">忠犬黑子温情陪伴</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">调频电台与商队</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">四大希望终局</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveTab('play_shelter')}
                      className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-600/30 transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> 在线试玩
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadFile(shelterUrl, '方舟纪元_废土避难所经营录.html')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      >
                        <Download className="w-3.5 h-3.5 text-amber-400" /> 下载 HTML
                      </button>
                      <a
                        href={shelterUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition"
                      >
                        全屏 ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术亮点与工程架构 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    纯原生单文件（Zero-Dependency HTML）架构核心亮点
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">为什么选择这种极简却极具生命力的高可靠性交付形态？</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="text-rose-400 text-sm font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> 零外部 CDN 依赖
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    完全剔除外部字体库与图片链接，即使在完全断网的局域网或内网，任意浏览器均可 100% 离线顺畅运行。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="text-amber-400 text-sm font-bold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> Web Audio 纯代码合成
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    无需任何 mp3/ogg 外部资源，利用浏览器内置 AudioContext 振荡器算法，纯数学实时合成古筝与和弦清音。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="text-emerald-400 text-sm font-bold flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4" /> 响应式双端防遮挡
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    PC 宽屏双栏大观，手机端自动开启分屏切换；采用现代无衬线高清晰抗发虚中文字族，小字亦清澈锐利。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="text-indigo-400 text-sm font-bold flex items-center gap-1.5">
                    <Scroll className="w-4 h-4" /> 防反调试与神识存档
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    内置右键防护与 DevTools 反调试钩子；通过 LocalStorage 封装自动印记与多卷宗存档，刷新数据永不丢失。
                  </p>
                </div>
              </div>
            </div>

            {/* Git 使用与一键上传指南 */}
            <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 p-6 lg:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Git 仓库上传与免安装部署步骤</h3>
                </div>
                <span className="text-xs text-slate-400">已自动为您生成标准 README.md</span>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                <div className="text-slate-500"># 1. 提交至本地 Git 仓库</div>
                <div className="text-indigo-300">git add .</div>
                <div className="text-indigo-300">git commit -m "feat: 发布四大东方叙事与模拟经营原生单文件游戏矩阵"</div>
                <div className="text-slate-500 mt-2"># 2. 关联并推送到您的 GitHub / Gitee 仓库</div>
                <div className="text-amber-300">git remote add origin https://github.com/&lt;您的用户名&gt;/&lt;仓库名称&gt;.git</div>
                <div className="text-amber-300">git branch -M main</div>
                <div className="text-amber-300">git push -u origin main</div>
                <div className="text-slate-500 mt-2"># 3. 开启 GitHub Pages 后，即可免安装直接全网公网试玩！</div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 1. 高门主母掌家录模版试玩与下载 ================= */}
        {activeTab === 'play_gaomen' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-rose-500/30 bg-gradient-to-r from-slate-900 via-rose-950/20 to-slate-900 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                      🪭 女性向高门宅斗经营新题材 · 原生单文件原型
                    </span>
                    <span className="text-xs text-slate-400 font-mono">public/gaomen.html (纯原生单文件)</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">《古代世家 · 高门主母掌家录》</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    专为女性向高沉浸打造的古代世家掌家模拟：<strong>主角承命执掌定远侯府中馈，执掌六大权力中枢（正堂公中晨省、内宅规训妾室、账房庄田防贪抓假账、世家儿郎延聘大儒开蒙议亲、京城命妇赏花宴外交、内宅断案家规裁决）；拥有夫君深情书房夜话、老太君侍疾奉茶、京郊庄田税银入库、突查倚翠阁违禁私藏、Web Audio 宫廷古筝和弦与全屏防 F12 安全锁</strong>。
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => downloadFile(gaomenUrl, '古代世家_高门主母掌家录.html')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-700 to-amber-700 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-700/30 transition transform hover:-translate-y-0.5"
                  >
                    📥 一键下载《高门主母掌家录》HTML
                  </button>
                  <a
                    href={gaomenUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    新窗口全屏畅玩 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 真机试玩视口 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">视口切换：</span>
                  <button
                    onClick={() => setDeviceFrame('desktop')}
                    className={`px-2.5 py-1 text-xs rounded-md transition ${deviceFrame==='desktop'?'bg-rose-700 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    全屏大视口
                  </button>
                  <button
                    onClick={() => setDeviceFrame('mobile')}
                    className={`px-2.5 py-1 text-xs rounded-md flex items-center gap-1 transition ${deviceFrame==='mobile'?'bg-rose-700 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> 手机竖屏框
                  </button>
                </div>
                <button
                  onClick={() => setKeyRefresh(prev => prev + 1)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> 重新升座掌家
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-2 min-h-[660px]">
                <div
                  className={`transition-all duration-300 overflow-hidden rounded-lg shadow-2xl ${
                    deviceFrame === 'mobile'
                      ? 'w-[375px] h-[680px] border-4 border-slate-700'
                      : 'w-full h-[650px]'
                  }`}
                >
                  <iframe
                    key={`gm-${keyRefresh}`}
                    src={gaomenUrl}
                    title="高门主母掌家录"
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. 修真经营录试玩 ================= */}
        {activeTab === 'play_xiuxian' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                      🌸 东方仙途 · 逆天长生修仙经营大作
                    </span>
                    <span className="text-xs text-slate-400 font-mono">public/xiuxian_female.html (90 KB)</span>
                  </div>
                  <h2 className="text-2xl font-black text-amber-200">《云霄仙府 · 修真经营录》</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    专为女性向东方修仙打造的纯原生单文件文字模拟大作：<strong>九大修真境界阶梯（练气至渡劫）、寿元紧迫大限倒计时逼迫破境；八位倾心蓝颜深度小说级剧情羁绊；药园仙田培育天灵地宝调配药膳治愈母亲寒毒；代际仙嗣开蒙根骨测验、结丹开辟多夫羁绊与九重天雷动效。</strong>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => downloadFile(xiuxianUrl, '云霄仙府_修真经营录.html')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-rose-700 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-700/30 transition transform hover:-translate-y-0.5"
                  >
                    📥 一键下载《修真经营录》HTML
                  </button>
                  <a
                    href={xiuxianUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    新窗口全屏畅玩 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 真机试玩视口 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">视口切换：</span>
                  <button
                    onClick={() => setDeviceFrame('desktop')}
                    className={`px-2.5 py-1 text-xs rounded-md transition ${deviceFrame==='desktop'?'bg-amber-600 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    全屏大视口
                  </button>
                  <button
                    onClick={() => setDeviceFrame('mobile')}
                    className={`px-2.5 py-1 text-xs rounded-md flex items-center gap-1 transition ${deviceFrame==='mobile'?'bg-amber-600 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> 手机竖屏框
                  </button>
                </div>
                <button
                  onClick={() => setKeyRefresh(prev => prev + 1)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> 重新引灵入道
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-2 min-h-[660px]">
                <div
                  className={`transition-all duration-300 overflow-hidden rounded-lg shadow-2xl ${
                    deviceFrame === 'mobile'
                      ? 'w-[375px] h-[680px] border-4 border-slate-700'
                      : 'w-full h-[650px]'
                  }`}
                >
                  <iframe
                    key={`xx-${keyRefresh}`}
                    src={xiuxianUrl}
                    title="修真经营录"
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2.5 废土避难所试玩 ================= */}
        {activeTab === 'play_shelter' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                      🛡️ 末日绝境 · 希望营地与避难所经营大作
                    </span>
                    <span className="text-xs text-slate-400 font-mono">public/shelter.html (58 KB 纯原生单文件)</span>
                  </div>
                  <h2 className="text-2xl font-black text-amber-200">《方舟纪元 · 废土避难所经营录》</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    专为末日生存与家园模拟打造的纯原生单文件经营大作：<strong>率领幸存者建设第101号避难所；水培温室种植抗辐射番茄，后厨围炉熬煮肉汤，工坊检修柴油发电机；四位个性鲜明的同伴与忠犬黑子温情陪伴；深入废弃商厦与医院搜荒，调频电台联络八方商队与难民，挺过极寒严冬，铸就四大希望终局！</strong>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => downloadFile(shelterUrl, '方舟纪元_废土避难所经营录.html')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-600/30 transition transform hover:-translate-y-0.5"
                  >
                    📥 一键下载《废土避难所》HTML
                  </button>
                  <a
                    href={shelterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    新窗口全屏畅玩 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 真机试玩视口 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">视口切换：</span>
                  <button
                    onClick={() => setDeviceFrame('desktop')}
                    className={`px-2.5 py-1 text-xs rounded-md transition ${deviceFrame==='desktop'?'bg-amber-600 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    全屏大视口
                  </button>
                  <button
                    onClick={() => setDeviceFrame('mobile')}
                    className={`px-2.5 py-1 text-xs rounded-md flex items-center gap-1 transition ${deviceFrame==='mobile'?'bg-amber-600 text-white font-semibold':'text-slate-400 hover:text-slate-200'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> 手机竖屏框
                  </button>
                </div>
                <button
                  onClick={() => setKeyRefresh(prev => prev + 1)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> 重启避难所
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-2 min-h-[660px]">
                <div
                  className={`transition-all duration-300 overflow-hidden rounded-lg shadow-2xl ${
                    deviceFrame === 'mobile'
                      ? 'w-[375px] h-[680px] border-4 border-slate-700'
                      : 'w-full h-[650px]'
                  }`}
                >
                  <iframe
                    key={`sh-${keyRefresh}`}
                    src={shelterUrl}
                    title="废土避难所"
                    className="w-full h-full border-0 bg-slate-950"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. 多作精细化横评 ================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-6 lg:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30 inline-flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-indigo-400" /> 三重宇宙 · 叙事与数值设计精微剖析
                </span>
                <span className="text-xs text-slate-400">
                  纯原生单文件（Zero-Dependency HTML）架构巅峰对决
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                从市井打工、田园炊烟到长生仙路：三款经营题材的设计哲学
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                单文件文字模拟经营的核心魅力在于<strong>「在方寸屏幕间构筑完整的因果闭环与心流循环」</strong>。
                《滨江市 · 打工人生》以现代都市生存痛点为刃，折射当代青年的现实挣扎；
                《桃花村 · 田园经营录》以诗意栖居与农耕宗族为本，抚慰喧嚣尘世的焦渴心灵；
                而《修真经营录》则将宏大的仙途逆天长生、细腻的深情世情羁绊与中国式家长的代际传承融于一体，形成了兼具心流沉浸感与超长复玩性的叙事大作。
              </p>
            </div>

            {/* 核心定位卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-indigo-500/30 bg-slate-900/70 p-5 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                    <h3 className="font-bold text-white text-base">滨江市 · 打工人生</h3>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    101 KB / 现代都市
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>基调：</strong>现实主义、痛感幽默、阶层跃迁。<br />
                  <strong>心流主轴：</strong>从底层兼职到创立连锁实业，在房租通胀与35岁职场危机中撬动过亿身家。
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => downloadFile(binjiangDeluxeUrl, '滨江市_打工人生豪华版.html')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                  >
                    📥 下载单文件 HTML <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500">职场+实业投资</span>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-5 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-bold text-white text-base">桃花村 · 田园经营录</h3>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    105 KB / 古代言情
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>基调：</strong>古典温情、躬耕避世、宗族绵延。<br />
                  <strong>心流主轴：</strong>春耕夏耘秋收冬藏，照料患病老母，打理五亩良田，成家立业扶助幼子科举入仕。
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => downloadFile(tianyuanUrl, '桃花村_田园经营录.html')}
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                  >
                    📥 下载原作单文件 HTML <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500">四季耕读+乡土宗族</span>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/40 bg-gradient-to-b from-amber-950/20 to-slate-900/70 p-5 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-amber-300 text-base">云霄仙府 · 修真经营录</h3>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                    90 KB / 东方修仙
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>基调：</strong>逆天证道、深情世情、洞府仙途。<br />
                  <strong>心流主轴：</strong>大限倒计时逼迫逆天破境，八位蓝颜倾心相伴，灵田药膳治愈母亲寒毒，五代身世探秘承袭至尊仙帝。
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => downloadFile(xiuxianUrl, '云霄仙府_修真经营录.html')}
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                  >
                    📥 立即下载最新版 HTML <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-amber-400/80 font-semibold">八大蓝颜+仙嗣开蒙</span>
                </div>
              </div>
            </div>

            {/* 深度多维精细化对照表 */}
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  三大作品核心系统与叙事机制全方位横向对比
                </h3>
                <p className="text-xs text-slate-400">逐层解构底层机制、情绪节奏、自动化模型与受众心流</p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider font-semibold">
                      <th className="py-3.5 px-4 w-36">对比维度</th>
                      <th className="py-3.5 px-4 text-indigo-300 font-bold w-1/3">《滨江市 · 打工人生》</th>
                      <th className="py-3.5 px-4 text-emerald-300 font-bold w-1/3">《桃花村 · 田园经营录》</th>
                      <th className="py-3.5 px-4 text-amber-300 font-bold w-1/3">《修真经营录》</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">1. 叙事母题与核心驱动</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>新市民阶层跃迁与生存焦虑：</strong>从身无分文的合租打工人起步，面对职场末位淘汰、物价通胀与买房成家，以商业杠杆撬动阶层跨越。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>古典避世归隐与温情守护：</strong>回乡守孝耕耘祖传薄田，直面严冬冻馁与至亲旧疾，以四季耕作为舟，渡过动荡人间的柴米油盐。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>向死而生的长生执念与深情守候：</strong>天道无情，阳寿有尽。在寿元大限的生死倒计时逼迫下逆天改命，与八大蓝颜携手护佑病弱生母、绵延仙嗣宗族。
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">2. 资源经济模型</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>现代金融复利滚雪球：</strong>体力换取初始薪资，现金投入理财基金、A股博弈与期货杠杆，后置实业连锁分红与不动产租金沉淀。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>四时农桑自给自足：</strong>春种秋收、粮食仓储、集市赶集买卖。受限于土地面积与自然灾害，属于线性的温饱积累模型。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>灵气寿元双螺旋递增：</strong>灵石驱动洞府聚灵阵，灵田药膳滋养体魄，境界突破实现寿元与灵气产出几何级暴涨，形成跨维度的数值跃迁。
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">3. 情感与社交深度</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>功能性都市人脉：</strong>包租婆、职场导师、房产中介、行业伙伴。核心提供加薪、内推、低息贷款与投资通道。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>乡土宗族与单线婚恋：</strong>隔壁翠花、村塾夫子、行脚商。结婚生子延续香火，孝奉病母，情感基调朴实温润。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>多位一体蓝颜群像网络：</strong>八位男主拥有完整的身世秘辛、心魔因果与交互链。结丹更可解锁开辟仙府多夫陪伴特权，情绪价值极致充盈。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. 市场商业价值深度解析 ================= */}
        {activeTab === 'market' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/40 via-slate-900/80 to-slate-950 p-6 lg:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-3xl space-y-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> 商业决策核心洞察
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                  为什么「古代高门世家主母」与「仙道经营」商业粘性极高？
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  文字模拟经营的商业逻辑是<strong>「将复杂的现代管理与情绪宣泄，打包进玩家无法亲历的高反差情境中」</strong>。
                  《高门主母掌家录》将现代女性的高阶管理思维（资产配置、公中审计、人事驭下）植入古代深宅大院；
                  而《修真经营录》则将寿元焦虑与长生逆袭转化为跨境界的数值滚雪球，两者皆具备极高的长线 LTV 与自发二创传播力。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <div className="text-xs text-rose-400 font-bold">高门主母掌家赛道</div>
                <div className="text-xl font-bold text-white">执掌生杀 · 爽感爆棚</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  掌管公中库银、庄田商铺盘账抓贪、治服妾室与恶奴，代入感无与伦比。
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <div className="text-xs text-amber-400 font-bold">修真长生逆袭赛道</div>
                <div className="text-xl font-bold text-white">九大境界 · 终极飞升</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  寿元大限逼迫破境，八大蓝颜深度小说文本，结丹开辟后宫多夫特权。
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <div className="text-xs text-indigo-400 font-bold">市井与田园赛道</div>
                <div className="text-xl font-bold text-white">温润治愈 · 耕读传家</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  从底层打工到实业投资，或回乡躬耕照拂病母，抚平焦渴心灵。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= 5. 四屏实时对决沙盒 ================= */}
        {activeTab === 'sandbox' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <Split className="w-3.5 h-3.5 text-amber-400" /> 四大经典单文件同屏体验
              </span>
              <button
                onClick={() => setKeyRefresh(prev => prev + 1)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> 刷新所有视口
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 高门主母 */}
              <div className="flex flex-col rounded-xl border border-rose-500/40 bg-slate-900 overflow-hidden shadow-xl">
                <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                    <Crown className="w-3 h-3" /> 《高门主母》
                  </span>
                  <a href={gaomenUrl} target="_blank" rel="noreferrer" className="text-[11px] text-slate-400 hover:text-rose-300">
                    新窗口 ↗
                  </a>
                </div>
                <div className="w-full h-[580px] bg-slate-950">
                  <iframe key={`sand-gm-${keyRefresh}`} src={gaomenUrl} title="高门主母" className="w-full h-full border-0 bg-white" />
                </div>
              </div>

              {/* 修真经营录 */}
              <div className="flex flex-col rounded-xl border border-amber-500/40 bg-slate-900 overflow-hidden shadow-xl">
                <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Flame className="w-3 h-3" /> 《修真经营录》
                  </span>
                  <a href={xiuxianUrl} target="_blank" rel="noreferrer" className="text-[11px] text-slate-400 hover:text-amber-300">
                    新窗口 ↗
                  </a>
                </div>
                <div className="w-full h-[580px] bg-slate-950">
                  <iframe key={`sand-xx-${keyRefresh}`} src={xiuxianUrl} title="修真经营录" className="w-full h-full border-0 bg-white" />
                </div>
              </div>

              {/* 滨江市豪华版 */}
              <div className="flex flex-col rounded-xl border border-indigo-500/40 bg-slate-900 overflow-hidden shadow-xl">
                <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> 滨江市 (豪华版)
                  </span>
                  <a href={binjiangDeluxeUrl} target="_blank" rel="noreferrer" className="text-[11px] text-slate-400 hover:text-indigo-300">
                    新窗口 ↗
                  </a>
                </div>
                <div className="w-full h-[580px] bg-slate-950">
                  <iframe key={`sand-bj-${keyRefresh}`} src={binjiangDeluxeUrl} title="滨江市豪华版" className="w-full h-full border-0 bg-white" />
                </div>
              </div>

              {/* 桃花村 */}
              <div className="flex flex-col rounded-xl border border-emerald-500/40 bg-slate-900 overflow-hidden shadow-xl">
                <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Trees className="w-3 h-3" /> 桃花村 (原版)
                  </span>
                  <a href={tianyuanUrl} target="_blank" rel="noreferrer" className="text-[11px] text-slate-400 hover:text-emerald-300">
                    新窗口 ↗
                  </a>
                </div>
                <div className="w-full h-[580px] bg-slate-950">
                  <iframe key={`sand-ty-${keyRefresh}`} src={tianyuanUrl} title="桃花村" className="w-full h-full border-0 bg-white" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-5 px-4 text-center text-xs text-slate-400 space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
          <span>🎮 纯原生单文件 HTML 模拟经营矩阵</span>
          <span>•</span>
          <span>⚡ 零外部网络依赖与 CDN 限制</span>
          <span>•</span>
          <span>🎼 Web Audio API 纯原生合成音效</span>
          <span>•</span>
          <span>📄 基于 MIT 协议开源</span>
        </div>
        <div className="text-slate-500">
          可直接将 public 目录下 HTML 单文件拷贝至任何服务器或通过 GitHub Pages 全网免安装分发
        </div>
      </footer>
    </div>
  );
}
