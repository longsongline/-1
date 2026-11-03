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
  Crown
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'play_gaomen' | 'overview' | 'play_xiuxian' | 'market' | 'sandbox'>('play_gaomen');
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'mobile'>('desktop');
  const [keyRefresh, setKeyRefresh] = useState(0);

  const gaomenUrl = '/gaomen.html';
  const xiuxianUrl = '/xiuxian_female.html';
  const binjiangDeluxeUrl = '/binjiang.html';
  const tianyuanUrl = '/assets/aistudio/tianyuan_cae35171.html';

  const downloadFile = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
                古代世家 · 高门主母掌家录
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 超头部女性向新题材 · 原生单文件模版
              </span>
            </div>
            <p className="text-xs text-slate-400">
              定远侯府中馈掌家、公中账房查贪、老夫人寿安堂晨省侍疾、夫君书房解忧、妾室立规矩、世家联姻望子成龙
            </p>
          </div>
        </div>

        {/* 导航标签栏 */}
        <div className="flex items-center gap-1.5 bg-slate-950/70 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('play_gaomen')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'play_gaomen'
                ? 'bg-gradient-to-r from-rose-700 to-amber-700 text-white shadow-lg shadow-rose-700/20'
                : 'text-rose-400 hover:text-rose-200 hover:bg-slate-900'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            🪭 《高门主母掌家录》模版
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            三大作精细化横评
          </button>
          <button
            onClick={() => setActiveTab('play_xiuxian')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'play_xiuxian'
                ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-600/20'
                : 'text-amber-400 hover:text-amber-200 hover:bg-slate-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            🌸 《修真经营录》
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'market'
                ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg shadow-amber-600/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            潜力题材商业市场洞察
          </button>
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'sandbox'
                ? 'bg-cyan-600 text-white shadow'
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
        {/* ================= 0. 高门主母掌家录模版试玩与下载 ================= */}
        {activeTab === 'play_gaomen' && (
          <div className="space-y-6">
            {/* 作品卡片 */}
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
                    onClick={() => downloadFile('/gaomen.html', '古代世家_高门主母掌家录.html')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-700 to-amber-700 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-700/30 transition transform hover:-translate-y-0.5"
                  >
                    📥 一键下载《高门主母掌家录》HTML
                  </button>
                  <a
                    href="/gaomen.html"
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

        {/* ================= 1. 三大作精细化横评 ================= */}
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
                        <strong>逆天改命与大道长生世情：</strong>背负身世谜团与寿元大限，在尔虞我诈的修仙界建立自给洞府，以情入道、以战立威、守护至亲飞升天界。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">2. 死亡威胁与倒计时机制</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>月度现金流断裂与健康归零：</strong>房租逾期被驱逐、健康/情绪击穿导致过度疲劳猝死；35岁遭遇裁员断崖，失业即陷入财务危机。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>严冬冻饿饥荒与母亲沉疴：</strong>冬季无柴火导致全家冻毙、粮食见底引发饿殍事件；母亲病重未能及时买药将含恨离世。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>天道寿元大限与九天雷劫：</strong>练气仅百岁大限，大限将至前必须凝练灵气冲关渡劫；渡劫失败受雷罚重创损寿，道心不稳将招致走火入魔。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">3. 经济循环与离线/挂机</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>现代连锁门店与店长分红：</strong>从便利店、咖啡馆到物流驿站、MCN机构，耗重金投建并雇佣职业店长，实现按月被动现金流入。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>五亩田地与长工仆从劳作：</strong>开垦肥沃农田，种植麦稻桑麻；雇佣忠厚长工代为播种收割，蓄养家禽产蛋剪毛，运往县城换取铜钱。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>洞府灵脉矿山与机关傀儡：</strong>培植洗髓草、凝霜花等天地灵药；投建聚灵阵、灵石矿脉与炼丹阁，炼制机关傀儡杂役实现自动化采掘反哺。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">4. 情感交互与社交网络</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>现代相亲角与现实婚姻考量：</strong>接触外企白领、教师、富二代等多位伴侣，需满足彩礼、车房资产硬性门槛，婚后共同分担家庭支出。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>古代市井邻里与媒妁聘娶：</strong>偶遇青梅竹马、豆腐西施、富家千金，三媒六聘举办传统婚礼，伴侣协助操持家务与农桑织布。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>八大蓝颜深情与后宫多夫制：</strong>清冷师尊、忠犬影卫、邪魅魔尊、巨富少主等8位高颜值男主，具备独立24段小说级剧情；金丹后解锁后宫入幕特权。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">5. 子女培育与代际传承</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>现代教育卷王与鸡娃路径：</strong>买学区房 ➔ 少年兴趣班 ➔ 中考分流 ➔ 高考冲刺名校或出国留学 ➔ 成家独立并按月汇款孝顺父母。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>耕读传家与科举金榜题名：</strong>私塾蒙学 ➔ 乡试会试殿试 ➔ 状元及第出仕官居一品 ➔ 画像相看成家（偶有私奔事件），朝廷俸禄光宗耀祖。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>修仙版中国式家长：</strong>周岁抓周定道心（木剑/丹经/算盘） ➔ 十岁开蒙测先天灵根（杂灵根至混沌道体） ➔ 选送万仙盟首座真传 ➔ 及笄仙婚反哺洞府。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">6. 休闲副业与特色支线</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>都市财富博弈与市井机缘：</strong>彩票站即开型刮刮乐、二手跳蚤市场淘宝捡漏、商业竞标争夺战、夜市摆摊叫卖。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>山野奇趣与草根娱乐：</strong>深山拉弓射鹿捕兔、河畔垂钓摸河蚌取珍珠、地下赌场摇骰押注、后山采摘野生草药。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>修仙四大特色玩法：</strong>万宝楼原石坊赌石切玉（普通/老坑/至尊天龙灵髓暴利博弈）、仙门大比斗法天骄、上古仙魔秘境探索、玉髓药膳烹饪。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">7. 核心剧情线与情感归宿</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>老家反哺与财务自由救赎：</strong>按月向农村老家寄钱盖洋楼、帮衬兄弟成家、结识贵人摆脱中产陷阱，最终荣归故里或跨入亿万资本之巅。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        <strong>母亲旧疾与家传宝玉谜题：</strong>寻名医为咳血老母抓药祛病延寿、抵御山贼盗匪劫掠宗族、重振破败家声成为江南望族。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        <strong>救母重塑仙骨与五阶寻父：</strong>洗髓草/凝霜花/千年何首乌三阶彻底拔除母亲九幽寒毒；凭半枚凤凰残玉探秘南域，救出被困仙帝生父，承袭至尊仙帝道统。
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-semibold text-slate-200">8. 视听交互与工程架构</td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        Web Audio 原生合成都市 Lo-Fi 暖调背景音，响应式双栏移动适配，6槽位本地存档与长文本压缩导入导出，防 F12 审查。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed">
                        外链经典民乐古琴音效，四季变换全屏粒子飘落（花瓣/绿叶/枫叶/雪花），StoryQueue 队列锁死逻辑卡死漏洞。
                      </td>
                      <td className="py-3.5 px-4 leading-relaxed text-amber-200/90 bg-amber-500/5">
                        Web Audio 原生合成五声音阶古筝和弦，全屏灵花花瓣动态飘落，严格防 F12/反调试注入，万字长文本神识码分段导出，0 外部网络依赖。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. 修真经营录试玩与下载 ================= */}
        {activeTab === 'play_xiuxian' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                      东方仙侠长篇经营新作 · 对标桃花村体量
                    </span>
                    <span className="text-xs text-slate-400 font-mono">public/xiuxian_female.html (纯原生单文件)</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">《云霄仙府 · 修真经营录》</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    以逆天长生与世情羁绊为内核：<strong>八大绝色蓝颜男主（清冷白衣师尊、忠犬重剑影卫、狂放邪魅魔尊、人间富贵花少主、温润药王大师兄等）、24段长篇小说情缘、结丹开启多夫后宫特权、灵田药膳照料病母、五阶段凤凰残玉寻父身世主线、仙嗣灵根望子成龙传承培养、万宝楼切石赌玉、仙门大比斗法、StoryQueue剧情队列、6槽位大容量导出与防 F12 安全锁</strong>。
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => downloadFile('/xiuxian_female.html', '云霄仙府_修真经营录.html')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-600/30 transition transform hover:-translate-y-0.5"
                  >
                    📥 一键下载《修真经营录》HTML
                  </button>
                  <a
                    href="/xiuxian_female.html"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    新窗口全屏畅玩 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

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

        {/* ================= 3. 市场商业价值深度解析 ================= */}
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

        {/* ================= 4. 四屏实时对决沙盒 ================= */}
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
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-4 px-4 text-center text-xs text-slate-500">
        四大独立单文件 HTML 模拟经营体系 · 纯原生 JavaScript/DOM 引擎驱动 · 零外部网络依赖
      </footer>
    </div>
  );
}
