# 🎮 东方叙事与模拟经营 · 原生单文件游戏矩阵
> **Zero-Dependency Web Game Matrix**  
> 纯原生单文件（Zero-Dependency HTML）架构 · 双击即玩 · 无需编译 · 零外部网络依赖 · 永久离线可玩

[![HTML5](https://img.shields.io/badge/HTML5-Single--File-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B%20Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![Web Audio API](https://img.shields.io/badge/Audio-Web%20Audio%20Synthesis-9cf)](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-0%20(Pure%20Native)-success)](#-技术架构与设计哲学)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌐 在线试玩与公网访问直达 (Live Demo)

无论是否安装开发环境，均可通过以下公网链接**直接在手机或电脑浏览器中点击即玩**：

| 游戏 / 展示大厅 | 题材与特色 | GitHub Pages 线上直达 | 云端官方即时镜像 (免等待) |
| :--- | :--- | :---: | :---: |
| 🌐 **矩阵展示控制台 (Showcase Hub)** | 四大矩阵总览、一键直玩、批量导出 | [🔗 点击直达大厅](https://longsongline.github.io/-1/) | [⚡ 点击直达大厅](https://ais-pre-ieeqszp7uvvdvtjkrl4d54-606544057259.us-east1.run.app) |
| 🪭 **《高门主母掌家录》 (105KB 典藏版)** | 古代世家 · 执掌中馈 · 规训群妾 · 助夫登科 · 六大终局 | [👉 点击直接玩](https://longsongline.github.io/-1/gaomen.html) | [⚡ 点击直接玩](https://ais-pre-ieeqszp7uvvdvtjkrl4d54-606544057259.us-east1.run.app/gaomen.html) |
| 🌸 **《修真经营录》 (91KB 仙途版)** | 东方修仙 · 寿元大限 · 八大蓝颜 · 仙嗣传承 · 飞升叩九霄 | [👉 点击直接玩](https://longsongline.github.io/-1/xiuxian_female.html) | [⚡ 点击直接玩](https://ais-pre-ieeqszp7uvvdvtjkrl4d54-606544057259.us-east1.run.app/xiuxian_female.html) |
| 🏙️ **《滨江市 · 打工人生》 (102KB 逆袭版)** | 现代都市 · 阶层跃迁 · 商业杠杆 · 股票房产 · 多重人生 | [👉 点击直接玩](https://longsongline.github.io/-1/binjiang.html) | [⚡ 点击直接玩](https://ais-pre-ieeqszp7uvvdvtjkrl4d54-606544057259.us-east1.run.app/binjiang.html) |
| 🌾 **《桃花村 · 田园经营》 (267KB 治愈版)** | 古典乡村 · 躬耕避世 · 柴米油盐 · 四时农桑 · 乡土温情 | [👉 点击直接玩](https://longsongline.github.io/-1/assets/aistudio/tianyuan_cae35171.html) | [⚡ 点击直接玩](https://ais-pre-ieeqszp7uvvdvtjkrl4d54-606544057259.us-east1.run.app/assets/aistudio/tianyuan_cae35171.html) |

---

## 📸 实机内容精选截图

### 🪭《古代世家 · 高门主母掌家录》实机界面

<div align="center">
  <table border="0">
    <tr>
      <td align="center" width="50%">
        <b>正堂公中 · 晨省点卯与发落例银</b><br/><br/>
        <img src="public/assets/aistudio/image_5d6b2c56.png" width="100%" alt="正堂公中议事界面" style="border-radius:8px; border:1px solid #d4bda8; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      </td>
      <td align="center" width="50%">
        <b>闺府中枢 · 夫君情分与起居注</b><br/><br/>
        <img src="public/assets/aistudio/image_cf15fb2d.png" width="100%" alt="定远侯府中枢与起居注界面" style="border-radius:8px; border:1px solid #d4bda8; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      </td>
    </tr>
  </table>
</div>

> **设计特色**：
> 1. **双端自适应交互**：桌面端呈现宽屏双栏决策台，手机端自动启用专属「掌家中枢 / 侯府起居注」双屏无缝切换，彻底解决移动端截断问题；
> 2. **宋锦高对比工笔字族**：深栗红黑高对比度配色搭配 CJK 抗锯齿无衬线字体，字字清晰悦目；
> 3. **全量精细内嵌矢量 SVG**：每一个行动按钮、属性徽章均采用 100% 纯代码矢量渲染，绝无粗糙模糊与重复图标。

---

## 🌟 项目简介

本项目收录了 **四款极具差异化与沉浸感** 的现代与古代题材文字模拟经营独立游戏。所有作品均采用 **纯原生单文件（Single-File HTML）** 架构开发，将 HTML 结构、CSS3 样式体系、全量精细矢量 SVG 图标、Web Audio 实时和弦合成音效引擎与完整游戏状态机全部封装在 **单个独立 HTML 文件** 内。

无需安装 Node.js、无需运行编译构建脚本、无需联网加载任何第三方 CDN 或图片音频资源。**直接双击文件，即可在任何现代浏览器中畅玩！**

---

## 🏰 四大收录作品概览

| 封面 / 标志 | 作品名称 | 题材背景 | 代码体量 | 单文件路径 | 核心特色系统 |
| :---: | :--- | :--- | :---: | :--- | :--- |
| 🪭 | **《古代世家 · 高门主母掌家录》** | 古代世家 · 高门中馈 | **105 KB** (1,679行) | `public/gaomen.html` | 六大中馈权力中枢、青州绿茶表妹、皇子夺嫡暗帖、御前登闻鼓救夫、殿试探花郎及第、诞育长孙三代世系、6大传世终局长卷 |
| 🌸 | **《修真经营录》** | 东方修仙 · 宗门仙途 | **91 KB** (1,605行) | `public/xiuxian_female.html` | 九大修仙境界、八位倾心蓝颜、灵田药膳治愈母亲、代际传承开蒙、渡劫天雷九重破境 |
| 🏙️ | **《滨江市 · 打工人生》** | 现代都市 · 生存逆袭 | **102 KB** (1,837行) | `public/binjiang.html` | 底层兼职到实业连锁、股票期货期权、城中村租房到江景置业、对抗35岁职业危机与物价通胀 |
| 🌾 | **《桃花村 · 古代田园经营》** | 古典乡村 · 四时农桑 | **267 KB** (4,699行) | `public/assets/aistudio/tianyuan_cae35171.html` | 四时节气流转、五亩良田耕种、老母侍疾抓药、赶集经商、幼子科举入仕、全村民温情支线 |

---

## 📖 作品精微解构

### 1. 🪭《古代世家 · 高门主母掌家录》 (`public/gaomen.html`)
> **“一柄金错匙，掌尽侯府百年荣枯；三尺戒尺下，立稳高门主母威仪。”**

- **背景设定**：主角承命嫁入定远侯府，成为正头大娘子（金陵谢氏锦仪）。内有得宠妾室林小娘、心机寄居表妹柳纤纤，外有夫君沈砚之（从三品锦衣御前统领）官场浮沉与京城命妇名利场。
- **全新核心系统 (105KB 典藏扩充版)**：
  - **正堂公中**：晨起升座点卯、发落例银、训诫奴仆、向老太君寿安堂晨昏奉茶、小膳房亲调滋补药膳、开仓大赈水患流民、宗祠大祭定规矩。
  - **内宅各房**：外书房与夫君沈砚之深夜对弈温存、赠金丝香囊；敲打林小娘与赐居通房；**【寄宿表妹柳纤纤】**暗生攀附之念，大娘子可雷霆立规，或体面赐婚远嫁京营守备。
  - **账房产业**：巡视京郊万亩庄田、绸缎庄与大茶庄，突击盘查公中底册追缴亏空；**【注资控股永丰大钱庄】**月享暴利；参股两淮官盐漕运商战大获全胜。
  - **世家儿女**：延聘翰林大儒与禁军武师傅；考校课业经义；长子沈怀瑾殿试高中**一甲探花郎**跨马游街；娶名门贵女结发大婚；**诞育第三代长孙沈思齐**，开启【祖孙传家训】。
  - **命妇外交**：筹办海棠赏花雅宴、长公主芙蓉池诗会题诗夺魁、递牌子入宫朝见贵妃姑母、重金打点助夫君升官至正二品上柱国统帅、皇太后千秋万寿宴献礼。
  - **家规裁决与朝堂大劫**：查抄倚翠阁违禁暗格；杖毙贪暴恶奴；平反冤案；**【皇子夺嫡密帖】**选择孤臣自保、孤注一掷从龙或密奏天听；**【御前救夫】**侯爷被诬下狱，主母着翟冠朝服御街敲响登闻鼓，逆风昭雪翻盘！
  - **6 大多分支传世终局长卷**：
    - 🏆 *【一品国夫人 · 百年世家宗妇】*（天道大圆满，四世同堂，配享太庙）
    - 👑 *【权倾中朝 · 摄政帝师外戚】*（拥立新君，长子拜相，夫君兵权在握）
    - 💰 *【断舍离 · 和离立户江南首富】*（休弃繁琐深宅，富甲天下纵横商海）
    - 🌸 *【琴瑟和鸣 · 富贵神仙眷侣】*（辞官退隐太湖，雪夜煮茶共白头）
    - ⚔️ *【铁血家主 · 独撑危局大中兴】*（女流之躯挽狂澜于既倒）
    - 🕯️ *【朱门残阳 · 家道中落守古灯】*（中馈亏空，盛极而衰）

---

### 2. 🌸《修真经营录》 (`public/xiuxian_female.html`)
> **“仙途漫漫何所求？偷得浮生半日闲。八位蓝颜倾心伴，代代仙嗣叩九霄。”**

- **核心系统**：
  - **九大境界阶梯**：练气、筑基、金丹、元婴、化神、炼虚、合体、大乘、渡劫，寿元倒计时机制带来极强心流。
  - **八位倾心蓝颜**：清冷剑尊大师兄、温润药王谷谷主、妖族狐王、魔道少主等，专属羁绊剧情与双修增益。
  - **药园与百宝阁**：种植紫猴花、天灵果，炼制筑基丹与九转还魂丹，治愈母亲寒毒。
  - **仙嗣代际传承**：择良伴诞育仙胎，测试天灵根骨，送入顶级仙门受业，代代相传逆天飞升。

---

### 3. 🏙️《滨江市 · 打工人生》 (`public/binjiang.html`)
> **“从城中村合租房到滨江国金中心，每一步都是当代青年的奋斗史诗。”**

- **核心系统**：
  - **职业进阶路线**：外卖兼职、大厂程序员、投资总监、创立连锁实业公司。
  - **金融与不动产**：活期理财、A股低吸高抛、期货杠杆、城中村租房到江景大平层置业。
  - **健康与职场危机**：抗压精力管理、体检就医、应对 35 岁失业焦虑。

---

### 4. 🌾《桃花村 · 古代田园经营》 (`public/assets/aistudio/tianyuan_cae35171.html`)
> **“开荒南野际，守拙归园田。柴米油盐寻常事，岁岁平安胜万钱。”**

- **核心系统**：
  - 四时节气流转（春耕、夏耘、秋收、冬藏），降雨与旱涝天象。
  - 农事耕作、市集赶场、药铺抓药、乡邻人情往来。
  - 养育子女开蒙入塾，供养儿女考取功名，享受三代同堂天伦之乐。

---

## 🛠️ 技术架构与设计哲学

```text
               ┌────────────────────────────────────────────────────────┐
               │            纯原生单文件 (Zero-Dependency HTML)          │
               ├──────────────────────────┬─────────────────────────────┤
               │       HTML5 语义骨架      │     原生 CSS3 响应式系统      │
               │  • 语义化容器与无障碍结构   │  • 现代无衬线高清晰中文字族   │
               │  • 移动端/桌面端视口自适应  │  • 古典宋锦色盘与高对比度排版 │
               ├──────────────────────────┼─────────────────────────────┤
               │   全量精细内嵌矢量 SVG    │    Web Audio API 实时合成   │
               │  • 100% 纯代码矢量绘制   │  • 宫调五声音阶振荡器算法   │
               │  • 零外部图片请求/免占带宽│  • 无需外部 mp3/ogg 音频资源│
               ├──────────────────────────┼─────────────────────────────┤
               │    ES6+ 原生状态机引擎    │      安全与离线持久化机制   │
               │  • 单向数据流与自适应渲染 │  • 深度防 F12 / 反调试锁    │
               │  • 纯原生 DOM 操作高性能 │  • LocalStorage 多卷宗存档  │
               └──────────────────────────┴─────────────────────────────┘
```

1. **零外部网络依赖（Zero-CDN）**：
   不依赖 Google Fonts、Tailwind CDN、FontAwesome、jQuery、Vue 或 React 运行时。即使在完全断网的环境下，依然可以 100% 正常运行。
2. **极速分发与秒开**：
   单文件仅需复制发送即可畅玩，无任何外部资源丢失风险，首屏加载通常小于 30ms。
3. **原生 Web Audio API**：
   利用浏览器底层的 `AudioContext` 实时产生正弦波与三角波振荡，配合衰减包络曲线合成清丽的宫廷古筝音效。
4. **安全保护与神识存档**：
   内置右键拦截、DevTools 快捷键屏蔽与动态反调试保护；基于 `localStorage` 支持自动档与 3 卷宗室手工存简。

---

## 🚀 本地快速运行指南

### 方法一：直接双击运行（最简方式）
在文件管理器中找到 `.html` 文件，双击使用任意现代浏览器打开即可：

```bash
# Windows
start public/gaomen.html

# macOS
open public/gaomen.html

# Linux
xdg-open public/gaomen.html
```

---

### 方法二：使用极简静态服务器
```bash
# 使用 npx serve
npx serve public

# 或使用 Python 内置服务器
cd public && python3 -m http.server 8080
```
浏览器访问 `http://localhost:8080/gaomen.html` 即可畅玩。

---

### 方法三：启动综合 React 展示大厅控制台
本项目根目录配备了基于 React 18 + Vite + Tailwind CSS 的矩阵展示大厅：

```bash
# 1. 安装依赖
npm install --legacy-peer-deps

# 2. 启动开发展示服务器
npm run dev
```
打开 `http://localhost:3000` 即可进入矩阵展示控制台。

---

## 🚢 GitHub Pages 自动部署指南

本项目已内置自动化构建流 `.github/workflows/static.yml`，推送到 GitHub 后可开启全自动公网发布：

1. 进入 GitHub 仓库设置：`Settings` -> `Pages`；
2. 在 **Build and deployment** 下方的 **Source** 中选择 **`GitHub Actions`**；
3. 每次推送到 `main` 分支，GitHub 会自动构建并在 1 分钟内完成上线；
4. 公网访问地址格式：
   - 首页大厅：`https://<用户名>.github.io/<仓库名>/`
   - 主母掌家录：`https://<用户名>.github.io/<仓库名>/gaomen.html`
   - 修真经营录：`https://<用户名>.github.io/<仓库名>/xiuxian_female.html`
   - 滨江打工人生：`https://<用户名>.github.io/<仓库名>/binjiang.html`

---

## 📄 开源许可证

本项目基于 [MIT 许可证](LICENSE) 开源，欢迎自由交流、学习、二创及商业灵感参考。  
*由衷感谢每一位热爱文字模拟与独立经营叙事的开发者与玩家！*
