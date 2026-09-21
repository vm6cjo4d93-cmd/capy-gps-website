/* Capy GPS Simulator — marketing site i18n + render */

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.gpssimulator.app&pcampaignid=web_share";

const LANG_META = {
  zh: { label: "繁體中文", dir: "ltr" },
  en: { label: "English", dir: "ltr" },
  ja: { label: "日本語", dir: "ltr" },
  ko: { label: "한국어", dir: "ltr" },
  es: { label: "Español", dir: "ltr" },
  pt: { label: "Português", dir: "ltr" },
  hi: { label: "हिन्दी", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
  it: { label: "Italiano", dir: "ltr" },
  th: { label: "ไทย", dir: "ltr" },
};

const FEATURE_ICONS = ["✨", "📡", "✏️", "🕹️", "🗺️", "📊", "🔗", "🌐"];
const WHY_ICONS = ["🎯", "🛠️", "🔄", "🔒"];
const USECASE_ICONS = ["🧪", "🔁", "🗺️", "📶", "📼"];

// 這裡放你自己的推薦連結：image（圖片路徑）、link（網址）、name/desc（留空則顯示各語言的預設「敬請期待」文字）
const RELATED_PRODUCTS = [
  { image: "assets/img/icon.png", link: "#", name: "", desc: "" },
];

const T = {

zh: {
  nav: { features: "功能", usecases: "使用情境", screenshots: "實際畫面", pricing: "方案", faq: "常見問題", download: "免費下載" },
  hero: {
    badge: "Android GPS 位置模擬工具",
    title: "全球任何地點，一鍵傳送",
    subtitle: "Capy GPS Simulator 是專為開發測試、LBS 應用驗證與路線模擬打造的 GPS 位置模擬工具。AI 自動生成路線、GPS 漂移引擎、懸浮控制面板與多裝置同步，一個 App 全部搞定。",
    ctaPrimary: "在 Google Play 下載",
    ctaSecondary: "查看功能",
    trust: ["無需 Root", "10 種語言介面", "AI 智慧路線生成"],
  },
  features: {
    title: "核心功能",
    subtitle: "為 QA 測試、GIS 模擬與開發驗證而生",
    items: [
      { title: "AI 路線生成", desc: "輸入距離與行為模式，AI 自動生成通勤、漫步、跑步、觀光等真實路線，支援沿道路與迴圈路線。" },
      { title: "GPS 漂移引擎", desc: "模擬都市峽谷、訊號抖動與精確度誤差，重現真實世界的 GPS 雜訊，測試更貼近實際場景。" },
      { title: "路線繪製 / GPX 匯入", desc: "地圖上點擊繪製路線，或匯入 Strava、Garmin 的 GPX 檔案，也能直接貼上座標快速建立路線。" },
      { title: "懸浮控制面板", desc: "7 按鈕懸浮視窗，搭配搖桿、迷你地圖與速度控制，切換到其他 App 也能即時操控模擬。" },
      { title: "離線地圖", desc: "下載地圖圖磚供離線使用，無網路環境也能規劃與模擬路線。" },
      { title: "分析儀表板", desc: "完整記錄每次模擬的路徑、速度與電量消耗，可匯出 HTML 報告與 GPX 檔案。" },
      { title: "LAN 多裝置同步", desc: "透過區域網路同步多台裝置的 GPS 位置，適合多裝置協同測試。" },
      { title: "10 種語言介面", desc: "介面支援中、英、日、韓、西、葡、印地、阿拉伯、義、泰共 10 種語言。" },
    ],
  },
  how: {
    title: "怎麼運作",
    subtitle: "從路線到模擬定位，只要四個步驟",
    steps: [
      { title: "選擇路線", desc: "AI 自動生成、地圖上點擊繪製、匯入 GPX，或直接貼上座標清單。" },
      { title: "設定速度與漂移", desc: "選擇更新頻率與移動速度，也可以加入 GPS 漂移，讓訊號更貼近真實情況。" },
      { title: "啟動模擬", desc: "點擊開始，Foreground Service 接管 GPS 與 Network 兩個定位來源。" },
      { title: "App 讀到模擬座標", desc: "任何讀取定位的 App 都會即時看到你設定的模擬座標。" },
    ],
  },
  useCases: {
    title: "適合的使用情境",
    subtitle: "為開發測試與 LBS 應用驗證打造的五大情境",
    items: [
      { title: "QA / LBS 應用測試", desc: "驗證定位相關功能在不同座標下的行為是否正確。" },
      { title: "路線模擬與回放", desc: "重複播放同一條路線，執行一致且可重複的測試。" },
      { title: "GIS 行為模擬", desc: "模擬地理資訊系統在不同區域的定位反應。" },
      { title: "GPS 漂移與雜訊測試", desc: "驗證 App 在訊號不穩定時的容錯與重試機制。" },
      { title: "位置回放（GPX／自訂路線）", desc: "匯入既有 GPX 檔或自訂座標，重現特定的移動軌跡。" },
    ],
  },
  screenshots: {
    title: "實際畫面",
    subtitle: "看看 App 實際運作的樣子",
    captions: ["地圖主畫面", "AI 路線生成", "更多功能選單", "Pro 訂閱方案"],
  },
  why: {
    title: "為什麼選擇 Capy GPS Simulator",
    items: [
      { title: "真實可信的模擬", desc: "不只是瞬間傳送，而是完整模擬移動過程，包含速度、加速度與 GPS 誤差。" },
      { title: "開發者友善", desc: "Foreground Service 穩定運作，同時模擬 Mock GPS 與 Network Provider 雙重定位來源。" },
      { title: "持續更新", desc: "功能持續迭代，Pro 訂閱可搶先使用所有未來新功能。" },
      { title: "隱私透明", desc: "完整公開的隱私政策與服務條款，資料使用透明可查。" },
    ],
  },
  pricing: {
    title: "方案與定價",
    subtitle: "先免費體驗，需要更多再升級",
    free: {
      name: "免費版", price: "NT$0", note: "永久免費",
      items: ["基本 AI 路線生成（含少量廣告）", "GPS 漂移基礎功能", "7 天 Analytics 紀錄", "路線繪製 / GPX 匯入匯出"],
      cta: "立即下載",
    },
    pro: {
      name: "Pro 版", monthly: "USD $1.99 ／月", yearly: "USD $12.00 ／年", badge: "最受歡迎",
      items: [
        "所有功能完全無廣告", "AI 路線無廣告", "Premium AI 行為模式：步行 / 駕車 / 騎車 / 慢跑 / 景點巡訪",
        "景點巡訪：真實 POI 自動排線", "GPS 漂移半徑自訂 + 都市峽谷效應", "高更新頻率（15 / 20 / 30 Hz）",
        "Analytics 完整記錄", "GPX 路線匯出 + HTML 報告", "LAN 多裝置同步", "Google Fit / Health 步數同步",
        "離線地圖無限區域下載", "所有未來功能優先使用",
      ],
      cta: "升級 Pro",
    },
  },
  faq: {
    title: "常見問題",
    items: [
      { q: "這個 App 安全嗎？會不會被偵測？", a: "Capy GPS Simulator 使用 Android 標準的 Mock Location API（開發者選項），主要設計用於開發測試、QA 驗證與 LBS 應用測試。實際使用是否符合特定 App 的服務條款，請自行評估並遵守相關規範。" },
      { q: "需要 Root 手機嗎？", a: "不需要。只要在開發者選項中開啟「模擬位置應用程式」即可使用，不需要 Root 權限。" },
      { q: "支援哪些 Android 版本？", a: "支援 Android 8.0（API 26）以上版本。" },
      { q: "可以匯入自己的路線嗎？", a: "可以，支援匯入 GPX 檔案（相容 Strava、Garmin 匯出格式），也能直接在地圖上繪製路線或貼上座標清單。" },
      { q: "免費版跟 Pro 版差在哪裡？", a: "免費版即可使用核心模擬與 AI 路線功能（含少量廣告），Pro 版解鎖無廣告體驗、Premium AI 行為模式、高更新頻率、LAN 同步、Google Fit 整合與離線地圖等進階功能。" },
      { q: "可以隨時取消訂閱嗎？", a: "可以，Pro 訂閱可透過 Google Play 帳戶管理隨時取消，彈性無綁約。" },
    ],
  },
  whatsNew: {
    title: "最新更新",
    subtitle: "持續改進中，以下是近期亮點",
    items: [
      "AI 路線生成後立即在地圖上預覽，不用等到開始模擬才看得到",
      "「更多功能」選單重新分類，找功能更快",
      "首次使用導覽精簡為 9 個核心步驟",
      "收藏標記新增健身房／補給站／化石 3 個分類",
    ],
  },
  related: {
    title: "更多推薦",
    subtitle: "值得搭配使用的其他資源",
    placeholder: { name: "敬請期待", desc: "更多推薦內容準備中", cta: "了解更多" },
  },
  ctaBanner: { title: "準備好開始模擬了嗎？", subtitle: "免費下載，馬上體驗 AI 路線生成", button: "在 Google Play 下載" },
  footer: {
    tagline: "Android GPS 位置模擬工具",
    privacy: "隱私政策", terms: "服務條款", playstore: "Google Play",
    disclaimer: "本 App 僅供開發測試、QA 驗證與教育用途，請遵守當地法律及各應用程式的服務條款。",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

en: {
  nav: { features: "Features", usecases: "Use Cases", screenshots: "Screenshots", pricing: "Pricing", faq: "FAQ", download: "Free Download" },
  hero: {
    badge: "Android GPS Location Simulator",
    title: "Teleport anywhere in the world, one tap",
    subtitle: "Capy GPS Simulator is a GPS location simulation tool built for development testing, LBS app verification, and route simulation. AI route generation, a GPS drift engine, a floating control panel, and multi-device sync — all in one app.",
    ctaPrimary: "Get it on Google Play",
    ctaSecondary: "See features",
    trust: ["No root needed", "10 languages", "AI-powered routes"],
  },
  features: {
    title: "Core Features",
    subtitle: "Built for QA testing, GIS simulation, and development verification",
    items: [
      { title: "AI Route Generation", desc: "Set a distance and behavior mode — AI generates realistic commute, stroll, run, or sightseeing routes, with road-following and loop options." },
      { title: "GPS Drift Engine", desc: "Simulates urban canyon effects, signal jitter, and accuracy error to reproduce real-world GPS noise for more realistic testing." },
      { title: "Route Drawing / GPX Import", desc: "Draw a route by tapping the map, import GPX files from Strava or Garmin, or paste a coordinate list to build a route instantly." },
      { title: "Floating Control Panel", desc: "A 7-button floating overlay with joystick, mini-map, and speed control lets you steer the simulation even while using other apps." },
      { title: "Offline Maps", desc: "Download map tiles for offline use, so you can plan and run simulations without a network connection." },
      { title: "Analytics Dashboard", desc: "Full logging of path, speed, and battery usage for every simulation, exportable as HTML reports and GPX files." },
      { title: "LAN Multi-Device Sync", desc: "Sync GPS positions across multiple devices over a local network — ideal for coordinated multi-device testing." },
      { title: "10-Language Interface", desc: "The interface supports Chinese, English, Japanese, Korean, Spanish, Portuguese, Hindi, Arabic, Italian, and Thai." },
    ],
  },
  how: {
    title: "How It Works",
    subtitle: "From a route to simulated GPS in four steps",
    steps: [
      { title: "Pick a route", desc: "Let AI generate one, draw it on the map, import a GPX file, or paste a list of coordinates." },
      { title: "Set speed & drift", desc: "Choose the update rate and movement speed, and optionally add GPS drift for more realistic signal noise." },
      { title: "Start the simulation", desc: "Tap start — a foreground service takes over both the Mock GPS and Network location providers." },
      { title: "Apps read the simulated location", desc: "Any app that reads your location sees the coordinates you set, updated in real time." },
    ],
  },
  useCases: {
    title: "Built For These Scenarios",
    subtitle: "Five common use cases for development testing and LBS verification",
    items: [
      { title: "QA / LBS App Testing", desc: "Verify that location-dependent features behave correctly across different coordinates." },
      { title: "Route Simulation & Playback", desc: "Replay the same route repeatedly to run consistent, repeatable tests." },
      { title: "GIS Behavior Simulation", desc: "Simulate how a GIS system responds to positioning across different regions." },
      { title: "GPS Drift & Noise Testing", desc: "Verify how your app handles error tolerance and retries under unstable signal conditions." },
      { title: "Location Replay (GPX / Custom Routes)", desc: "Import an existing GPX file or custom coordinates to reproduce a specific movement path." },
    ],
  },
  screenshots: {
    title: "See It In Action",
    subtitle: "A quick look at the app in use",
    captions: ["Main map screen", "AI route generation", "More features menu", "Pro subscription plans"],
  },
  why: {
    title: "Why Capy GPS Simulator",
    items: [
      { title: "Believable simulation", desc: "Not just an instant jump — it fully simulates movement, including speed, acceleration, and GPS error." },
      { title: "Developer-friendly", desc: "A stable foreground service simulates both the Mock GPS and Network location providers at once." },
      { title: "Actively maintained", desc: "New features ship regularly, and Pro subscribers get early access to everything new." },
      { title: "Transparent privacy", desc: "A fully public privacy policy and terms of service, so data handling is clear and verifiable." },
    ],
  },
  pricing: {
    title: "Plans & Pricing",
    subtitle: "Start free, upgrade when you need more",
    free: {
      name: "Free", price: "$0", note: "Free forever",
      items: ["Basic AI route generation (with occasional ads)", "Basic GPS drift", "7-day analytics history", "Route drawing / GPX import & export"],
      cta: "Download now",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / month", yearly: "USD $12.00 / year", badge: "Most popular",
      items: [
        "Ad-free across the entire app", "Ad-free AI routes", "Premium AI behaviors: walking / driving / cycling / jogging / sightseeing",
        "Sightseeing mode with real POI-based routing", "Custom GPS drift radius + urban canyon effect", "High update rate (15 / 20 / 30 Hz)",
        "Full analytics history", "GPX export + HTML reports", "LAN multi-device sync", "Google Fit / Health step sync",
        "Unlimited offline map downloads", "Early access to all future features",
      ],
      cta: "Upgrade to Pro",
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { q: "Is this app safe? Will it be detected?", a: "Capy GPS Simulator uses Android's standard Mock Location API (Developer Options), designed for development testing, QA verification, and LBS app testing. Whether a specific use case complies with an app's terms of service is your own responsibility to review." },
      { q: "Do I need a rooted phone?", a: "No. Simply enable \"Select mock location app\" in Developer Options — no root access required." },
      { q: "Which Android versions are supported?", a: "Android 8.0 (API 26) and above." },
      { q: "Can I import my own routes?", a: "Yes. You can import GPX files (compatible with Strava and Garmin exports), draw routes on the map, or paste a list of coordinates." },
      { q: "What is the difference between Free and Pro?", a: "The Free tier gives you core simulation and AI route features (with occasional ads). Pro unlocks an ad-free experience, Premium AI behaviors, higher update rates, LAN sync, Google Fit integration, and offline maps." },
      { q: "Can I cancel my subscription anytime?", a: "Yes. Pro subscriptions can be cancelled anytime through your Google Play account — no long-term commitment." },
    ],
  },
  whatsNew: {
    title: "What's New",
    subtitle: "Actively improving — here are some recent highlights",
    items: [
      "AI-generated routes now preview on the map instantly, no need to start simulating first",
      "Reorganized the \"More\" menu so features are easier to find",
      "Simplified the first-time tour to 9 core steps",
      "Added 3 new favorite marker categories: Gym, Aid Station, Fossil",
    ],
  },
  related: {
    title: "More Recommendations",
    subtitle: "Other resources worth pairing with this app",
    placeholder: { name: "Coming soon", desc: "More recommendations are on the way", cta: "Learn more" },
  },
  ctaBanner: { title: "Ready to start simulating?", subtitle: "Download for free and try AI route generation now", button: "Get it on Google Play" },
  footer: {
    tagline: "Android GPS Location Simulator",
    privacy: "Privacy Policy", terms: "Terms of Service", playstore: "Google Play",
    disclaimer: "This app is intended for development testing, QA verification, and educational use only. Please comply with local laws and each app's terms of service.",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

ja: {
  nav: { features: "機能", usecases: "活用シーン", screenshots: "画面", pricing: "料金", faq: "よくある質問", download: "無料ダウンロード" },
  hero: {
    badge: "Android GPS 位置シミュレーター",
    title: "世界のどこへでも、ワンタップでテレポート",
    subtitle: "Capy GPS Simulator は、開発テスト・LBS アプリ検証・ルートシミュレーションのために作られた GPS 位置シミュレーションツールです。AIルート生成、GPSドリフトエンジン、フローティング操作パネル、複数端末同期をこれ1つで。",
    ctaPrimary: "Google Play で入手",
    ctaSecondary: "機能を見る",
    trust: ["Root化不要", "10言語対応", "AIによるルート生成"],
  },
  features: {
    title: "主な機能",
    subtitle: "QAテスト・GISシミュレーション・開発検証のために設計",
    items: [
      { title: "AIルート生成", desc: "距離と行動モードを指定するだけで、通勤・散歩・ランニング・観光などリアルなルートをAIが自動生成。道路追従やループルートにも対応。" },
      { title: "GPSドリフトエンジン", desc: "都市キャニオン効果・信号のゆらぎ・精度誤差をシミュレートし、実際のGPSノイズを再現。より現実的なテストが可能に。" },
      { title: "ルート描画 / GPXインポート", desc: "地図をタップしてルートを描いたり、Strava・GarminのGPXファイルをインポート。座標を貼り付けて即座にルート作成も可能。" },
      { title: "フローティング操作パネル", desc: "7ボタンのフローティングウィンドウとジョイスティック、ミニマップ、速度調整で、他のアプリ使用中でもシミュレーションを操作。" },
      { title: "オフライン地図", desc: "地図タイルをダウンロードしてオフラインで使用可能。ネットワークがない環境でもルート計画・シミュレーションができます。" },
      { title: "分析ダッシュボード", desc: "各シミュレーションの経路・速度・バッテリー消費を記録し、HTMLレポートやGPXファイルとしてエクスポート。" },
      { title: "LANマルチデバイス同期", desc: "ローカルネットワーク経由で複数端末のGPS位置を同期。複数端末での協調テストに最適。" },
      { title: "10言語インターフェース", desc: "中国語・英語・日本語・韓国語・スペイン語・ポルトガル語・ヒンディー語・アラビア語・イタリア語・タイ語の10言語に対応。" },
    ],
  },
  how: {
    title: "使い方",
    subtitle: "ルートからシミュレーション位置情報まで、たった4ステップ",
    steps: [
      { title: "ルートを選ぶ", desc: "AIによる自動生成、地図上での描画、GPXファイルのインポート、座標リストの貼り付けから選べます。" },
      { title: "速度とドリフトを設定", desc: "更新頻度と移動速度を選択。GPSドリフトを追加すればよりリアルな信号ノイズを再現できます。" },
      { title: "シミュレーションを開始", desc: "開始をタップすると、フォアグラウンドサービスがMock GPSとNetworkプロバイダの両方を引き継ぎます。" },
      { title: "アプリが模擬座標を取得", desc: "位置情報を読み取るどのアプリも、設定した模擬座標をリアルタイムで受け取ります。" },
    ],
  },
  useCases: {
    title: "こんな場面に最適",
    subtitle: "開発テストとLBS検証のための5つの代表的な活用シーン",
    items: [
      { title: "QA / LBSアプリテスト", desc: "異なる座標で位置情報関連機能が正しく動作するか検証します。" },
      { title: "ルートシミュレーション＆再生", desc: "同じルートを繰り返し再生し、一貫したテストを実施できます。" },
      { title: "GIS動作シミュレーション", desc: "地域ごとのGISシステムの位置情報応答をシミュレートします。" },
      { title: "GPSドリフト＆ノイズテスト", desc: "信号が不安定な状況でのアプリのエラー耐性や再試行動作を検証します。" },
      { title: "位置再生（GPX／カスタムルート）", desc: "既存のGPXファイルやカスタム座標をインポートして、特定の移動軌跡を再現します。" },
    ],
  },
  screenshots: {
    title: "実際の画面",
    subtitle: "アプリの動作を見てみましょう",
    captions: ["メインマップ画面", "AIルート生成", "その他機能メニュー", "Proプラン"],
  },
  why: {
    title: "Capy GPS Simulator が選ばれる理由",
    items: [
      { title: "リアルなシミュレーション", desc: "瞬間移動だけでなく、速度・加速度・GPS誤差を含めた移動プロセス全体を再現します。" },
      { title: "開発者フレンドリー", desc: "安定したフォアグラウンドサービスが、Mock GPSとNetworkプロバイダの両方を同時にシミュレート。" },
      { title: "継続的なアップデート", desc: "機能は継続的に進化しており、Pro会員はすべての新機能をいち早く利用できます。" },
      { title: "透明性のあるプライバシー", desc: "プライバシーポリシーと利用規約を完全公開。データの取り扱いが明確に確認できます。" },
    ],
  },
  pricing: {
    title: "料金プラン",
    subtitle: "まずは無料で体験、必要に応じてアップグレード",
    free: {
      name: "無料版", price: "¥0", note: "永久無料",
      items: ["基本的なAIルート生成（一部広告あり）", "基本的なGPSドリフト機能", "7日間の分析履歴", "ルート描画 / GPXインポート・エクスポート"],
      cta: "今すぐダウンロード",
    },
    pro: {
      name: "Pro版", monthly: "USD $1.99 ／月", yearly: "USD $12.00 ／年", badge: "人気No.1",
      items: [
        "全機能広告なし", "AIルートも広告なし", "プレミアムAI行動モード：徒歩／車／自転車／ジョギング／観光巡り",
        "観光巡り：実在POIによる自動ルート最適化", "GPSドリフト半径カスタム + 都市キャニオン効果", "高更新頻度（15／20／30Hz）",
        "分析履歴を無期限保存", "GPXエクスポート + HTMLレポート", "LANマルチデバイス同期", "Google Fit／Health歩数連携",
        "オフライン地図を無制限にダウンロード", "今後追加されるすべての新機能に優先アクセス",
      ],
      cta: "Proにアップグレード",
    },
  },
  faq: {
    title: "よくある質問",
    items: [
      { q: "このアプリは安全ですか？検知されませんか？", a: "Capy GPS Simulatorは、Android標準のMock Location API（開発者向けオプション）を使用しており、主に開発テスト・QA検証・LBSアプリのテスト用に設計されています。特定のアプリの利用規約に適合するかどうかは、ご自身でご確認・ご判断ください。" },
      { q: "スマートフォンのRoot化は必要ですか？", a: "不要です。開発者向けオプションで「モックロケーションアプリの選択」を有効にするだけで利用できます。" },
      { q: "対応しているAndroidバージョンは？", a: "Android 8.0（API 26）以降に対応しています。" },
      { q: "自分のルートをインポートできますか？", a: "はい。Strava・Garmin互換のGPXファイルのインポート、地図上での描画、座標リストの貼り付けによるルート作成に対応しています。" },
      { q: "無料版とPro版の違いは？", a: "無料版でも基本的なシミュレーションとAIルート機能（一部広告あり）を利用できます。Pro版では広告なし体験、プレミアムAI行動モード、高更新頻度、LAN同期、Google Fit連携、オフライン地図などが解放されます。" },
      { q: "いつでも解約できますか？", a: "はい。Proサブスクリプションはいつでも Google Play アカウントから解約でき、縛りはありません。" },
    ],
  },
  whatsNew: {
    title: "最新アップデート",
    subtitle: "継続的に改善中。最近の主なハイライトはこちら",
    items: [
      "AIルート生成後すぐに地図上でプレビュー可能に、シミュレーション開始を待つ必要なし",
      "「その他の機能」メニューを再分類し、機能を見つけやすく改善",
      "初回チュートリアルをコア9ステップに簡素化",
      "お気に入りマーカーに新しい3カテゴリを追加：ジム／補給ポイント／化石",
    ],
  },
  related: {
    title: "おすすめ",
    subtitle: "あわせて使いたいその他のリソース",
    placeholder: { name: "近日公開", desc: "おすすめコンテンツを準備中です", cta: "詳しく見る" },
  },
  ctaBanner: { title: "シミュレーションを始めましょう", subtitle: "無料でダウンロードして、AIルート生成をすぐに体験", button: "Google Play で入手" },
  footer: {
    tagline: "Android GPS 位置シミュレーター",
    privacy: "プライバシーポリシー", terms: "利用規約", playstore: "Google Play",
    disclaimer: "本アプリは開発テスト・QA検証・教育目的での利用を想定しています。各地域の法律および各アプリの利用規約を遵守してください。",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

ko: {
  nav: { features: "기능", usecases: "활용 사례", screenshots: "스크린샷", pricing: "요금제", faq: "자주 묻는 질문", download: "무료 다운로드" },
  hero: {
    badge: "Android GPS 위치 시뮬레이터",
    title: "전 세계 어디든, 탭 한 번으로 이동",
    subtitle: "Capy GPS Simulator는 개발 테스트, LBS 앱 검증, 경로 시뮬레이션을 위해 만들어진 GPS 위치 시뮬레이션 도구입니다. AI 경로 생성, GPS 드리프트 엔진, 플로팅 컨트롤 패널, 다중 기기 동기화까지 하나의 앱으로 해결하세요.",
    ctaPrimary: "Google Play에서 다운로드",
    ctaSecondary: "기능 보기",
    trust: ["루팅 불필요", "10개 언어 지원", "AI 경로 자동 생성"],
  },
  features: {
    title: "핵심 기능",
    subtitle: "QA 테스트, GIS 시뮬레이션, 개발 검증을 위해 설계됨",
    items: [
      { title: "AI 경로 생성", desc: "거리와 행동 모드를 설정하면 AI가 출퇴근, 산책, 러닝, 관광 등 현실적인 경로를 자동 생성합니다. 도로 추적 및 루프 경로도 지원합니다." },
      { title: "GPS 드리프트 엔진", desc: "도심 협곡 효과, 신호 떨림, 정확도 오차를 시뮬레이션하여 실제 GPS 노이즈를 재현, 더욱 사실적인 테스트가 가능합니다." },
      { title: "경로 그리기 / GPX 가져오기", desc: "지도를 탭하여 경로를 그리거나 Strava, Garmin의 GPX 파일을 가져올 수 있습니다. 좌표를 붙여넣어 바로 경로를 만들 수도 있습니다." },
      { title: "플로팅 컨트롤 패널", desc: "7개 버튼의 플로팅 창과 조이스틱, 미니맵, 속도 조절 기능으로 다른 앱 사용 중에도 시뮬레이션을 실시간 제어할 수 있습니다." },
      { title: "오프라인 지도", desc: "지도 타일을 다운로드하여 오프라인으로 사용할 수 있어, 네트워크가 없는 환경에서도 경로 계획과 시뮬레이션이 가능합니다." },
      { title: "분석 대시보드", desc: "매 시뮬레이션의 경로, 속도, 배터리 소모량을 완전히 기록하고 HTML 보고서와 GPX 파일로 내보낼 수 있습니다." },
      { title: "LAN 다중 기기 동기화", desc: "로컬 네트워크를 통해 여러 기기의 GPS 위치를 동기화하여 다중 기기 협업 테스트에 적합합니다." },
      { title: "10개 언어 인터페이스", desc: "중국어, 영어, 일본어, 한국어, 스페인어, 포르투갈어, 힌디어, 아랍어, 이탈리아어, 태국어 총 10개 언어를 지원합니다." },
    ],
  },
  how: {
    title: "작동 방식",
    subtitle: "경로부터 시뮬레이션 위치까지, 단 4단계",
    steps: [
      { title: "경로 선택", desc: "AI 자동 생성, 지도에서 그리기, GPX 파일 가져오기, 좌표 목록 붙여넣기 중에서 선택하세요." },
      { title: "속도와 드리프트 설정", desc: "업데이트 빈도와 이동 속도를 선택하고, GPS 드리프트를 추가해 더 현실적인 신호 노이즈를 재현할 수 있습니다." },
      { title: "시뮬레이션 시작", desc: "시작을 탭하면 포그라운드 서비스가 Mock GPS와 Network 프로바이더를 동시에 제어합니다." },
      { title: "앱이 시뮬레이션 좌표를 읽음", desc: "위치 정보를 사용하는 모든 앱이 설정한 시뮬레이션 좌표를 실시간으로 받습니다." },
    ],
  },
  useCases: {
    title: "이런 상황에 적합해요",
    subtitle: "개발 테스트와 LBS 검증을 위한 5가지 대표 활용 사례",
    items: [
      { title: "QA / LBS 앱 테스트", desc: "다양한 좌표에서 위치 기반 기능이 올바르게 동작하는지 검증합니다." },
      { title: "경로 시뮬레이션 및 재생", desc: "동일한 경로를 반복 재생하여 일관된 테스트를 수행합니다." },
      { title: "GIS 동작 시뮬레이션", desc: "지역별 GIS 시스템의 위치 응답을 시뮬레이션합니다." },
      { title: "GPS 드리프트 및 노이즈 테스트", desc: "신호가 불안정한 상황에서 앱의 오류 허용 및 재시도 동작을 검증합니다." },
      { title: "위치 재생(GPX／커스텀 경로)", desc: "기존 GPX 파일이나 커스텀 좌표를 가져와 특정 이동 경로를 재현합니다." },
    ],
  },
  screenshots: {
    title: "실제 화면",
    subtitle: "앱이 실제로 작동하는 모습을 확인해 보세요",
    captions: ["메인 지도 화면", "AI 경로 생성", "추가 기능 메뉴", "Pro 구독 플랜"],
  },
  why: {
    title: "Capy GPS Simulator를 선택해야 하는 이유",
    items: [
      { title: "신뢰할 수 있는 시뮬레이션", desc: "단순한 순간 이동이 아니라 속도, 가속도, GPS 오차를 포함한 전체 이동 과정을 시뮬레이션합니다." },
      { title: "개발자 친화적", desc: "안정적인 포그라운드 서비스가 Mock GPS와 Network 프로바이더를 동시에 시뮬레이션합니다." },
      { title: "지속적인 업데이트", desc: "기능이 꾸준히 개선되며, Pro 구독자는 모든 신기능을 가장 먼저 사용할 수 있습니다." },
      { title: "투명한 개인정보 보호", desc: "개인정보처리방침과 서비스 약관을 전면 공개하여 데이터 처리 방식을 투명하게 확인할 수 있습니다." },
    ],
  },
  pricing: {
    title: "요금제",
    subtitle: "무료로 먼저 체험하고, 필요할 때 업그레이드하세요",
    free: {
      name: "무료", price: "₩0", note: "영구 무료",
      items: ["기본 AI 경로 생성 (일부 광고 포함)", "기본 GPS 드리프트 기능", "7일간 분석 기록", "경로 그리기 / GPX 가져오기·내보내기"],
      cta: "지금 다운로드",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / 월", yearly: "USD $12.00 / 년", badge: "가장 인기",
      items: [
        "전체 앱 광고 제거", "AI 경로 광고 제거", "프리미엄 AI 행동 모드: 도보 / 운전 / 자전거 / 조깅 / 관광",
        "관광 모드: 실제 POI 기반 자동 경로 최적화", "GPS 드리프트 반경 커스텀 + 도심 협곡 효과", "높은 업데이트 빈도 (15 / 20 / 30 Hz)",
        "전체 분석 기록 보관", "GPX 내보내기 + HTML 보고서", "LAN 다중 기기 동기화", "Google Fit / Health 걸음수 동기화",
        "무제한 오프라인 지도 다운로드", "모든 향후 신기능 우선 이용",
      ],
      cta: "Pro로 업그레이드",
    },
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      { q: "이 앱은 안전한가요? 탐지되지 않나요?", a: "Capy GPS Simulator는 Android 표준 Mock Location API(개발자 옵션)를 사용하며, 개발 테스트, QA 검증, LBS 앱 테스트를 위해 설계되었습니다. 특정 앱의 서비스 약관 준수 여부는 사용자 스스로 검토하고 판단해야 합니다." },
      { q: "휴대폰을 루팅해야 하나요?", a: "아니요. 개발자 옵션에서 '모의 위치 앱 선택'만 활성화하면 되며, 루팅 권한이 필요하지 않습니다." },
      { q: "어떤 Android 버전을 지원하나요?", a: "Android 8.0(API 26) 이상을 지원합니다." },
      { q: "직접 만든 경로를 가져올 수 있나요?", a: "네, Strava, Garmin과 호환되는 GPX 파일 가져오기를 지원하며, 지도에서 직접 경로를 그리거나 좌표 목록을 붙여넣어 경로를 만들 수도 있습니다." },
      { q: "무료 버전과 Pro 버전의 차이는 무엇인가요?", a: "무료 버전에서도 핵심 시뮬레이션과 AI 경로 기능(일부 광고 포함)을 사용할 수 있습니다. Pro 버전은 광고 없는 경험, 프리미엄 AI 행동 모드, 높은 업데이트 빈도, LAN 동기화, Google Fit 연동, 오프라인 지도 등을 제공합니다." },
      { q: "언제든지 구독을 취소할 수 있나요?", a: "네, Pro 구독은 Google Play 계정 관리에서 언제든지 취소할 수 있으며 별도의 약정이 없습니다." },
    ],
  },
  whatsNew: {
    title: "최신 업데이트",
    subtitle: "지속적으로 개선 중입니다. 최근 주요 변경사항입니다",
    items: [
      "AI 경로 생성 후 시뮬레이션 시작 전에도 지도에서 바로 미리보기 가능",
      "'더 많은 기능' 메뉴를 재분류하여 기능을 더 빠르게 찾을 수 있도록 개선",
      "최초 튜토리얼을 핵심 9단계로 간소화",
      "즐겨찾기 마커에 새 카테고리 3개 추가: 헬스장／보급소／화석",
    ],
  },
  related: {
    title: "추천 콘텐츠",
    subtitle: "함께 사용하면 좋은 다른 리소스",
    placeholder: { name: "곧 공개 예정", desc: "추천 콘텐츠를 준비 중입니다", cta: "자세히 보기" },
  },
  ctaBanner: { title: "시뮬레이션을 시작할 준비가 되셨나요?", subtitle: "무료로 다운로드하고 AI 경로 생성을 바로 체험해보세요", button: "Google Play에서 다운로드" },
  footer: {
    tagline: "Android GPS 위치 시뮬레이터",
    privacy: "개인정보처리방침", terms: "서비스 약관", playstore: "Google Play",
    disclaimer: "본 앱은 개발 테스트, QA 검증 및 교육 목적으로만 사용하시기 바랍니다. 현지 법률 및 각 앱의 서비스 약관을 준수해 주세요.",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

es: {
  nav: { features: "Funciones", usecases: "Casos de uso", screenshots: "Capturas", pricing: "Precios", faq: "Preguntas", download: "Descarga gratis" },
  hero: {
    badge: "Simulador de ubicación GPS para Android",
    title: "Teletranspórtate a cualquier lugar del mundo",
    subtitle: "Capy GPS Simulator es una herramienta de simulación de ubicación GPS creada para pruebas de desarrollo, verificación de apps LBS y simulación de rutas. Generación de rutas con IA, motor de deriva GPS, panel flotante y sincronización multidispositivo, todo en una sola app.",
    ctaPrimary: "Consíguelo en Google Play",
    ctaSecondary: "Ver funciones",
    trust: ["Sin necesidad de root", "10 idiomas", "Rutas generadas por IA"],
  },
  features: {
    title: "Funciones principales",
    subtitle: "Diseñado para pruebas de QA, simulación GIS y verificación de desarrollo",
    items: [
      { title: "Generación de rutas con IA", desc: "Indica una distancia y un modo de comportamiento: la IA genera rutas realistas de trayecto, paseo, carrera o turismo, con opción de seguir carreteras o crear bucles." },
      { title: "Motor de deriva GPS", desc: "Simula el efecto cañón urbano, fluctuaciones de señal y errores de precisión para reproducir el ruido GPS del mundo real." },
      { title: "Dibujo de rutas / Importar GPX", desc: "Dibuja una ruta tocando el mapa, importa archivos GPX de Strava o Garmin, o pega una lista de coordenadas para crear una ruta al instante." },
      { title: "Panel de control flotante", desc: "Una ventana flotante con 7 botones, joystick, minimapa y control de velocidad te permite controlar la simulación incluso usando otras apps." },
      { title: "Mapas sin conexión", desc: "Descarga los mosaicos del mapa para usarlos sin conexión y así planificar y ejecutar simulaciones sin red." },
      { title: "Panel de análisis", desc: "Registro completo de ruta, velocidad y consumo de batería de cada simulación, exportable como informes HTML y archivos GPX." },
      { title: "Sincronización LAN multidispositivo", desc: "Sincroniza la posición GPS entre varios dispositivos a través de la red local, ideal para pruebas coordinadas." },
      { title: "Interfaz en 10 idiomas", desc: "La interfaz admite chino, inglés, japonés, coreano, español, portugués, hindi, árabe, italiano y tailandés." },
    ],
  },
  how: {
    title: "Cómo funciona",
    subtitle: "De la ruta a la ubicación simulada en cuatro pasos",
    steps: [
      { title: "Elige una ruta", desc: "Genérala con IA, dibújala en el mapa, importa un archivo GPX o pega una lista de coordenadas." },
      { title: "Configura velocidad y deriva", desc: "Elige la frecuencia de actualización y la velocidad de movimiento; añade deriva GPS para un ruido de señal más realista." },
      { title: "Inicia la simulación", desc: "Toca iniciar: un servicio en primer plano toma el control de los proveedores Mock GPS y de red." },
      { title: "Las apps leen la ubicación simulada", desc: "Cualquier app que lea tu ubicación verá las coordenadas configuradas, actualizadas en tiempo real." },
    ],
  },
  useCases: {
    title: "Ideal para estos escenarios",
    subtitle: "Cinco casos de uso comunes para pruebas de desarrollo y verificación LBS",
    items: [
      { title: "Pruebas de apps QA / LBS", desc: "Verifica que las funciones basadas en ubicación se comporten correctamente en distintas coordenadas." },
      { title: "Simulación y repetición de rutas", desc: "Repite la misma ruta varias veces para pruebas consistentes y repetibles." },
      { title: "Simulación de comportamiento GIS", desc: "Simula cómo responde un sistema GIS al posicionamiento en distintas regiones." },
      { title: "Pruebas de deriva y ruido GPS", desc: "Verifica cómo tu app tolera errores y reintentos con señal inestable." },
      { title: "Reproducción de ubicación (GPX / rutas personalizadas)", desc: "Importa un GPX existente o coordenadas personalizadas para reproducir un trayecto específico." },
    ],
  },
  screenshots: {
    title: "La app en acción",
    subtitle: "Un vistazo rápido a cómo funciona la app",
    captions: ["Pantalla principal del mapa", "Generación de rutas con IA", "Menú de más funciones", "Planes de suscripción Pro"],
  },
  why: {
    title: "Por qué elegir Capy GPS Simulator",
    items: [
      { title: "Simulación creíble", desc: "No es solo un salto instantáneo: simula el movimiento completo, incluyendo velocidad, aceleración y error GPS." },
      { title: "Pensado para desarrolladores", desc: "Un servicio en primer plano estable simula a la vez los proveedores Mock GPS y de red." },
      { title: "Actualizaciones constantes", desc: "Las funciones se amplían continuamente y los suscriptores Pro acceden antes a todas las novedades." },
      { title: "Privacidad transparente", desc: "Política de privacidad y términos de servicio totalmente públicos, con un uso de datos claro y verificable." },
    ],
  },
  pricing: {
    title: "Planes y precios",
    subtitle: "Empieza gratis y mejora cuando lo necesites",
    free: {
      name: "Gratis", price: "0 €", note: "Gratis para siempre",
      items: ["Generación de rutas con IA básica (con anuncios ocasionales)", "Deriva GPS básica", "Historial de análisis de 7 días", "Dibujo de rutas / Importar y exportar GPX"],
      cta: "Descargar ahora",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / mes", yearly: "USD $12.00 / año", badge: "Más popular",
      items: [
        "Toda la app sin anuncios", "Rutas de IA sin anuncios", "Comportamientos IA Premium: caminar / conducir / bicicleta / correr / turismo",
        "Modo turismo con rutas automáticas basadas en POI reales", "Radio de deriva GPS personalizable + efecto cañón urbano", "Frecuencia de actualización alta (15 / 20 / 30 Hz)",
        "Historial de análisis completo", "Exportación GPX + informes HTML", "Sincronización LAN multidispositivo", "Sincronización de pasos con Google Fit / Health",
        "Descargas de mapas sin conexión ilimitadas", "Acceso anticipado a todas las funciones futuras",
      ],
      cta: "Mejorar a Pro",
    },
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Es segura esta app? ¿Se puede detectar?", a: "Capy GPS Simulator utiliza la API estándar de ubicación simulada de Android (Opciones de desarrollador), diseñada para pruebas de desarrollo, verificación de QA y pruebas de apps LBS. Es tu responsabilidad revisar si un uso concreto cumple los términos de servicio de cada app." },
      { q: "¿Necesito el teléfono rooteado?", a: "No. Basta con activar \"Seleccionar app de ubicación simulada\" en Opciones de desarrollador; no se requiere acceso root." },
      { q: "¿Qué versiones de Android son compatibles?", a: "Android 8.0 (API 26) y versiones posteriores." },
      { q: "¿Puedo importar mis propias rutas?", a: "Sí. Puedes importar archivos GPX (compatibles con exportaciones de Strava y Garmin), dibujar rutas en el mapa o pegar una lista de coordenadas." },
      { q: "¿Cuál es la diferencia entre la versión gratuita y Pro?", a: "La versión gratuita incluye la simulación principal y las rutas con IA (con anuncios ocasionales). Pro desbloquea una experiencia sin anuncios, comportamientos IA Premium, mayor frecuencia de actualización, sincronización LAN, integración con Google Fit y mapas sin conexión." },
      { q: "¿Puedo cancelar la suscripción en cualquier momento?", a: "Sí. Las suscripciones Pro se pueden cancelar en cualquier momento desde tu cuenta de Google Play, sin permanencia." },
    ],
  },
  whatsNew: {
    title: "Novedades",
    subtitle: "Mejorando constantemente — estos son algunos aspectos destacados recientes",
    items: [
      "Las rutas generadas por IA ahora se previsualizan en el mapa al instante, sin esperar a iniciar la simulación",
      "Se reorganizó el menú \"Más\" para encontrar funciones más rápido",
      "Tutorial inicial simplificado a 9 pasos clave",
      "Se añadieron 3 nuevas categorías de marcadores favoritos: Gimnasio, Punto de abastecimiento, Fósil",
    ],
  },
  related: {
    title: "Más recomendaciones",
    subtitle: "Otros recursos que combinan bien con esta app",
    placeholder: { name: "Próximamente", desc: "Estamos preparando más recomendaciones", cta: "Saber más" },
  },
  ctaBanner: { title: "¿Listo para empezar a simular?", subtitle: "Descárgala gratis y prueba ya la generación de rutas con IA", button: "Consíguelo en Google Play" },
  footer: {
    tagline: "Simulador de ubicación GPS para Android",
    privacy: "Política de privacidad", terms: "Términos de servicio", playstore: "Google Play",
    disclaimer: "Esta app está pensada solo para pruebas de desarrollo, verificación de QA y uso educativo. Cumple las leyes locales y los términos de servicio de cada app.",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

pt: {
  nav: { features: "Recursos", usecases: "Casos de uso", screenshots: "Capturas", pricing: "Planos", faq: "Perguntas frequentes", download: "Baixar grátis" },
  hero: {
    badge: "Simulador de localização GPS para Android",
    title: "Teletransporte-se para qualquer lugar do mundo",
    subtitle: "O Capy GPS Simulator é uma ferramenta de simulação de localização GPS criada para testes de desenvolvimento, verificação de apps LBS e simulação de rotas. Geração de rotas com IA, motor de deriva GPS, painel flutuante e sincronização entre dispositivos, tudo em um único app.",
    ctaPrimary: "Disponível no Google Play",
    ctaSecondary: "Ver recursos",
    trust: ["Sem necessidade de root", "10 idiomas", "Rotas geradas por IA"],
  },
  features: {
    title: "Principais recursos",
    subtitle: "Criado para testes de QA, simulação GIS e verificação de desenvolvimento",
    items: [
      { title: "Geração de rotas com IA", desc: "Defina distância e modo de comportamento e a IA gera rotas realistas de deslocamento, caminhada, corrida ou turismo, com opção de seguir vias ou criar loops." },
      { title: "Motor de deriva GPS", desc: "Simula o efeito de cânion urbano, oscilações de sinal e erros de precisão para reproduzir o ruído real do GPS." },
      { title: "Desenho de rotas / Importar GPX", desc: "Desenhe uma rota tocando no mapa, importe arquivos GPX do Strava ou Garmin, ou cole uma lista de coordenadas para criar uma rota instantaneamente." },
      { title: "Painel de controle flutuante", desc: "Uma janela flutuante com 7 botões, joystick, minimapa e controle de velocidade permite controlar a simulação mesmo usando outros apps." },
      { title: "Mapas offline", desc: "Baixe os blocos do mapa para uso offline, permitindo planejar e executar simulações sem conexão de rede." },
      { title: "Painel de análises", desc: "Registro completo de rota, velocidade e consumo de bateria de cada simulação, exportável como relatórios HTML e arquivos GPX." },
      { title: "Sincronização multidispositivo via LAN", desc: "Sincronize a posição GPS entre vários dispositivos pela rede local, ideal para testes coordenados." },
      { title: "Interface em 10 idiomas", desc: "A interface é compatível com chinês, inglês, japonês, coreano, espanhol, português, hindi, árabe, italiano e tailandês." },
    ],
  },
  how: {
    title: "Como funciona",
    subtitle: "Da rota à localização simulada em quatro passos",
    steps: [
      { title: "Escolha uma rota", desc: "Gere com IA, desenhe no mapa, importe um arquivo GPX ou cole uma lista de coordenadas." },
      { title: "Defina velocidade e deriva", desc: "Escolha a taxa de atualização e a velocidade de movimento; adicione deriva GPS para um ruído de sinal mais realista." },
      { title: "Inicie a simulação", desc: "Toque em iniciar — um serviço em primeiro plano assume os provedores Mock GPS e de rede." },
      { title: "Os apps leem a localização simulada", desc: "Qualquer app que leia sua localização verá as coordenadas definidas, atualizadas em tempo real." },
    ],
  },
  useCases: {
    title: "Ideal para estes cenários",
    subtitle: "Cinco casos de uso comuns para testes de desenvolvimento e verificação LBS",
    items: [
      { title: "Testes de apps QA / LBS", desc: "Verifique se os recursos baseados em localização se comportam corretamente em diferentes coordenadas." },
      { title: "Simulação e repetição de rotas", desc: "Reproduza a mesma rota repetidamente para testes consistentes e repetíveis." },
      { title: "Simulação de comportamento GIS", desc: "Simule como um sistema GIS responde ao posicionamento em diferentes regiões." },
      { title: "Testes de deriva e ruído GPS", desc: "Verifique como seu app tolera erros e tenta novamente com sinal instável." },
      { title: "Reprodução de localização (GPX / rotas personalizadas)", desc: "Importe um GPX existente ou coordenadas personalizadas para reproduzir um trajeto específico." },
    ],
  },
  screenshots: {
    title: "O app em ação",
    subtitle: "Uma olhada rápida no app em funcionamento",
    captions: ["Tela principal do mapa", "Geração de rota com IA", "Menu de mais recursos", "Planos de assinatura Pro"],
  },
  why: {
    title: "Por que escolher o Capy GPS Simulator",
    items: [
      { title: "Simulação realista", desc: "Não é apenas um salto instantâneo: simula todo o processo de movimento, incluindo velocidade, aceleração e erro de GPS." },
      { title: "Amigável para desenvolvedores", desc: "Um serviço em primeiro plano estável simula simultaneamente os provedores Mock GPS e de rede." },
      { title: "Atualizações constantes", desc: "Novos recursos são lançados regularmente, e assinantes Pro têm acesso antecipado a todas as novidades." },
      { title: "Privacidade transparente", desc: "Política de privacidade e termos de serviço totalmente públicos, com uso de dados claro e verificável." },
    ],
  },
  pricing: {
    title: "Planos e preços",
    subtitle: "Comece grátis, faça upgrade quando precisar",
    free: {
      name: "Grátis", price: "R$0", note: "Grátis para sempre",
      items: ["Geração básica de rotas com IA (com anúncios ocasionais)", "Deriva GPS básica", "Histórico de análises de 7 dias", "Desenho de rotas / Importação e exportação GPX"],
      cta: "Baixar agora",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / mês", yearly: "USD $12.00 / ano", badge: "Mais popular",
      items: [
        "App inteiro sem anúncios", "Rotas de IA sem anúncios", "Comportamentos IA Premium: caminhada / direção / ciclismo / corrida / turismo",
        "Modo turismo com roteirização automática baseada em POIs reais", "Raio de deriva GPS personalizável + efeito de cânion urbano", "Alta taxa de atualização (15 / 20 / 30 Hz)",
        "Histórico de análises completo", "Exportação GPX + relatórios HTML", "Sincronização multidispositivo via LAN", "Sincronização de passos com Google Fit / Health",
        "Downloads ilimitados de mapas offline", "Acesso antecipado a todos os recursos futuros",
      ],
      cta: "Fazer upgrade para Pro",
    },
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Este app é seguro? Pode ser detectado?", a: "O Capy GPS Simulator usa a API padrão de localização simulada do Android (Opções do desenvolvedor), projetada para testes de desenvolvimento, verificação de QA e testes de apps LBS. É sua responsabilidade avaliar se um uso específico está de acordo com os termos de serviço de cada app." },
      { q: "Preciso de um celular com root?", a: "Não. Basta ativar \"Selecionar app de localização fake\" nas Opções do desenvolvedor; não é necessário acesso root." },
      { q: "Quais versões do Android são compatíveis?", a: "Android 8.0 (API 26) ou superior." },
      { q: "Posso importar minhas próprias rotas?", a: "Sim. Você pode importar arquivos GPX (compatíveis com exportações do Strava e Garmin), desenhar rotas no mapa ou colar uma lista de coordenadas." },
      { q: "Qual a diferença entre a versão gratuita e a Pro?", a: "A versão gratuita já oferece a simulação principal e as rotas com IA (com anúncios ocasionais). A Pro desbloqueia uma experiência sem anúncios, comportamentos IA Premium, taxa de atualização mais alta, sincronização LAN, integração com Google Fit e mapas offline." },
      { q: "Posso cancelar a assinatura a qualquer momento?", a: "Sim. As assinaturas Pro podem ser canceladas a qualquer momento pela sua conta do Google Play, sem fidelidade." },
    ],
  },
  whatsNew: {
    title: "Novidades",
    subtitle: "Melhorando continuamente — confira alguns destaques recentes",
    items: [
      "Rotas geradas por IA agora aparecem em pré-visualização no mapa instantaneamente, sem precisar iniciar a simulação",
      "Menu \"Mais\" reorganizado para encontrar recursos mais rápido",
      "Tutorial inicial simplificado para 9 passos essenciais",
      "Adicionadas 3 novas categorias de marcadores favoritos: Academia, Ponto de Apoio, Fóssil",
    ],
  },
  related: {
    title: "Mais recomendações",
    subtitle: "Outros recursos que combinam bem com este app",
    placeholder: { name: "Em breve", desc: "Mais recomendações estão a caminho", cta: "Saiba mais" },
  },
  ctaBanner: { title: "Pronto para começar a simular?", subtitle: "Baixe grátis e experimente agora a geração de rotas com IA", button: "Disponível no Google Play" },
  footer: {
    tagline: "Simulador de localização GPS para Android",
    privacy: "Política de Privacidade", terms: "Termos de Serviço", playstore: "Google Play",
    disclaimer: "Este app destina-se apenas a testes de desenvolvimento, verificação de QA e uso educacional. Cumpra as leis locais e os termos de serviço de cada app.",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

it: {
  nav: { features: "Funzionalità", usecases: "Casi d'uso", screenshots: "Screenshot", pricing: "Prezzi", faq: "FAQ", download: "Scarica gratis" },
  hero: {
    badge: "Simulatore di posizione GPS per Android",
    title: "Teletrasportati ovunque nel mondo con un tocco",
    subtitle: "Capy GPS Simulator è uno strumento di simulazione della posizione GPS pensato per test di sviluppo, verifica di app LBS e simulazione di percorsi. Generazione di percorsi con IA, motore di deriva GPS, pannello di controllo flottante e sincronizzazione multi-dispositivo, tutto in un'unica app.",
    ctaPrimary: "Scaricala su Google Play",
    ctaSecondary: "Scopri le funzionalità",
    trust: ["Nessun root richiesto", "10 lingue", "Percorsi generati dall'IA"],
  },
  features: {
    title: "Funzionalità principali",
    subtitle: "Pensato per test QA, simulazioni GIS e verifica dello sviluppo",
    items: [
      { title: "Generazione percorsi con IA", desc: "Imposta distanza e modalità di comportamento: l'IA genera percorsi realistici per tragitti, passeggiate, corse o turismo, con opzione di seguire le strade o creare percorsi ad anello." },
      { title: "Motore di deriva GPS", desc: "Simula l'effetto canyon urbano, le fluttuazioni del segnale e gli errori di precisione per riprodurre il rumore GPS reale." },
      { title: "Disegno percorsi / Importa GPX", desc: "Disegna un percorso toccando la mappa, importa file GPX da Strava o Garmin, oppure incolla un elenco di coordinate per creare subito un percorso." },
      { title: "Pannello di controllo flottante", desc: "Una finestra flottante a 7 pulsanti con joystick, minimappa e controllo della velocità per gestire la simulazione anche usando altre app." },
      { title: "Mappe offline", desc: "Scarica i tile della mappa per l'uso offline, così puoi pianificare ed eseguire simulazioni anche senza connessione." },
      { title: "Dashboard di analisi", desc: "Registrazione completa di percorso, velocità e consumo della batteria per ogni simulazione, esportabile come report HTML e file GPX." },
      { title: "Sincronizzazione LAN multi-dispositivo", desc: "Sincronizza la posizione GPS tra più dispositivi tramite rete locale, ideale per test coordinati." },
      { title: "Interfaccia in 10 lingue", desc: "L'interfaccia supporta cinese, inglese, giapponese, coreano, spagnolo, portoghese, hindi, arabo, italiano e thailandese." },
    ],
  },
  how: {
    title: "Come funziona",
    subtitle: "Dal percorso alla posizione simulata in quattro passaggi",
    steps: [
      { title: "Scegli un percorso", desc: "Generalo con l'IA, disegnalo sulla mappa, importa un file GPX o incolla un elenco di coordinate." },
      { title: "Imposta velocità e deriva", desc: "Scegli la frequenza di aggiornamento e la velocità di movimento; aggiungi la deriva GPS per un rumore di segnale più realistico." },
      { title: "Avvia la simulazione", desc: "Tocca avvia: un servizio in primo piano prende il controllo dei provider Mock GPS e di rete." },
      { title: "Le app leggono la posizione simulata", desc: "Qualsiasi app che legge la tua posizione vedrà le coordinate impostate, aggiornate in tempo reale." },
    ],
  },
  useCases: {
    title: "Ideale per questi scenari",
    subtitle: "Cinque casi d'uso comuni per test di sviluppo e verifica LBS",
    items: [
      { title: "Test di app QA / LBS", desc: "Verifica che le funzionalità basate sulla posizione si comportino correttamente con coordinate diverse." },
      { title: "Simulazione e riproduzione percorsi", desc: "Riproduci lo stesso percorso più volte per test coerenti e ripetibili." },
      { title: "Simulazione del comportamento GIS", desc: "Simula come un sistema GIS risponde al posizionamento in diverse regioni." },
      { title: "Test di deriva e rumore GPS", desc: "Verifica come la tua app tollera errori e tentativi con segnale instabile." },
      { title: "Riproduzione della posizione (GPX / percorsi personalizzati)", desc: "Importa un GPX esistente o coordinate personalizzate per riprodurre un tragitto specifico." },
    ],
  },
  screenshots: {
    title: "L'app in azione",
    subtitle: "Uno sguardo veloce all'app in funzione",
    captions: ["Schermata principale della mappa", "Generazione percorso con IA", "Menu altre funzionalità", "Piani abbonamento Pro"],
  },
  why: {
    title: "Perché scegliere Capy GPS Simulator",
    items: [
      { title: "Simulazione credibile", desc: "Non è un semplice salto istantaneo: simula l'intero processo di movimento, inclusi velocità, accelerazione ed errore GPS." },
      { title: "Pensato per gli sviluppatori", desc: "Un servizio in primo piano stabile simula contemporaneamente i provider Mock GPS e di rete." },
      { title: "Aggiornamenti costanti", desc: "Le funzionalità vengono ampliate regolarmente e gli abbonati Pro accedono in anteprima a tutte le novità." },
      { title: "Privacy trasparente", desc: "Informativa sulla privacy e termini di servizio completamente pubblici, con un uso dei dati chiaro e verificabile." },
    ],
  },
  pricing: {
    title: "Piani e prezzi",
    subtitle: "Inizia gratis, esegui l'upgrade quando ti serve di più",
    free: {
      name: "Gratuito", price: "0 €", note: "Gratis per sempre",
      items: ["Generazione base di percorsi con IA (con annunci occasionali)", "Deriva GPS di base", "Cronologia analisi di 7 giorni", "Disegno percorsi / Importazione ed esportazione GPX"],
      cta: "Scarica ora",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / mese", yearly: "USD $12.00 / anno", badge: "Più popolare",
      items: [
        "App interamente senza pubblicità", "Percorsi IA senza pubblicità", "Comportamenti IA Premium: a piedi / in auto / in bici / jogging / turismo",
        "Modalità turismo con percorso automatico su POI reali", "Raggio di deriva GPS personalizzabile + effetto canyon urbano", "Frequenza di aggiornamento alta (15 / 20 / 30 Hz)",
        "Cronologia analisi completa", "Esportazione GPX + report HTML", "Sincronizzazione LAN multi-dispositivo", "Sincronizzazione passi con Google Fit / Health",
        "Download di mappe offline illimitati", "Accesso anticipato a tutte le funzionalità future",
      ],
      cta: "Passa a Pro",
    },
  },
  faq: {
    title: "Domande frequenti",
    items: [
      { q: "Questa app è sicura? Può essere rilevata?", a: "Capy GPS Simulator utilizza l'API standard di Android per la posizione simulata (Opzioni sviluppatore), pensata per test di sviluppo, verifica QA e test di app LBS. La conformità di un uso specifico ai termini di servizio di un'app resta responsabilità dell'utente." },
      { q: "Serve il root sul telefono?", a: "No. Basta attivare \"Seleziona app di posizione fittizia\" nelle Opzioni sviluppatore; non è richiesto l'accesso root." },
      { q: "Quali versioni di Android sono supportate?", a: "Android 8.0 (API 26) e versioni successive." },
      { q: "Posso importare i miei percorsi?", a: "Sì. Puoi importare file GPX (compatibili con le esportazioni di Strava e Garmin), disegnare percorsi sulla mappa o incollare un elenco di coordinate." },
      { q: "Qual è la differenza tra versione gratuita e Pro?", a: "La versione gratuita offre già simulazione principale e percorsi IA (con annunci occasionali). Pro sblocca un'esperienza senza pubblicità, comportamenti IA Premium, frequenza di aggiornamento più alta, sincronizzazione LAN, integrazione Google Fit e mappe offline." },
      { q: "Posso annullare l'abbonamento in qualsiasi momento?", a: "Sì. Gli abbonamenti Pro possono essere annullati in qualsiasi momento dal tuo account Google Play, senza vincoli." },
    ],
  },
  whatsNew: {
    title: "Novità",
    subtitle: "Miglioriamo costantemente — ecco alcune novità recenti",
    items: [
      "I percorsi generati dall'IA ora mostrano un'anteprima sulla mappa istantaneamente, senza attendere l'avvio della simulazione",
      "Menu \"Altro\" riorganizzato per trovare le funzionalità più velocemente",
      "Tutorial iniziale semplificato a 9 passaggi chiave",
      "Aggiunte 3 nuove categorie di segnaposto preferiti: Palestra, Punto di rifornimento, Fossile",
    ],
  },
  related: {
    title: "Altri consigli",
    subtitle: "Altre risorse da abbinare a questa app",
    placeholder: { name: "Prossimamente", desc: "Altri consigli in arrivo", cta: "Scopri di più" },
  },
  ctaBanner: { title: "Pronto a iniziare a simulare?", subtitle: "Scaricala gratis e prova subito la generazione di percorsi con IA", button: "Scaricala su Google Play" },
  footer: {
    tagline: "Simulatore di posizione GPS per Android",
    privacy: "Informativa sulla privacy", terms: "Termini di servizio", playstore: "Google Play",
    disclaimer: "Questa app è pensata solo per test di sviluppo, verifica QA e uso didattico. Rispetta le leggi locali e i termini di servizio di ciascuna app.",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

hi: {
  nav: { features: "सुविधाएं", usecases: "उपयोग परिदृश्य", screenshots: "स्क्रीनशॉट", pricing: "मूल्य", faq: "सामान्य प्रश्न", download: "मुफ़्त डाउनलोड" },
  hero: {
    badge: "Android GPS लोकेशन सिम्युलेटर",
    title: "एक टैप में दुनिया में कहीं भी टेलीपोर्ट करें",
    subtitle: "Capy GPS Simulator एक GPS लोकेशन सिमुलेशन टूल है जो डेवलपमेंट टेस्टिंग, LBS ऐप सत्यापन और रूट सिमुलेशन के लिए बनाया गया है। AI रूट जनरेशन, GPS ड्रिफ्ट इंजन, फ्लोटिंग कंट्रोल पैनल और मल्टी-डिवाइस सिंक — सब कुछ एक ही ऐप में।",
    ctaPrimary: "Google Play पर पाएं",
    ctaSecondary: "सुविधाएं देखें",
    trust: ["Root की जरूरत नहीं", "10 भाषाएं", "AI-संचालित रूट"],
  },
  features: {
    title: "मुख्य सुविधाएं",
    subtitle: "QA टेस्टिंग, GIS सिमुलेशन और डेवलपमेंट सत्यापन के लिए बनाया गया",
    items: [
      { title: "AI रूट जनरेशन", desc: "दूरी और व्यवहार मोड सेट करें — AI यथार्थवादी आवागमन, सैर, दौड़ या पर्यटन रूट बनाता है, सड़क-अनुसरण और लूप विकल्पों के साथ।" },
      { title: "GPS ड्रिफ्ट इंजन", desc: "शहरी कैन्यन प्रभाव, सिग्नल में उतार-चढ़ाव और सटीकता त्रुटि का अनुकरण करके वास्तविक GPS शोर को फिर से बनाता है।" },
      { title: "रूट ड्रॉइंग / GPX आयात", desc: "मानचित्र पर टैप करके रूट बनाएं, Strava या Garmin से GPX फ़ाइलें आयात करें, या तुरंत रूट बनाने के लिए निर्देशांक सूची पेस्ट करें।" },
      { title: "फ्लोटिंग कंट्रोल पैनल", desc: "7-बटन वाली फ्लोटिंग विंडो, जॉयस्टिक, मिनी-मैप और स्पीड कंट्रोल के साथ, अन्य ऐप्स का उपयोग करते समय भी सिमुलेशन नियंत्रित करें।" },
      { title: "ऑफ़लाइन मानचित्र", desc: "ऑफ़लाइन उपयोग के लिए मानचित्र टाइल डाउनलोड करें, ताकि बिना नेटवर्क के भी रूट योजना और सिमुलेशन किया जा सके।" },
      { title: "एनालिटिक्स डैशबोर्ड", desc: "हर सिमुलेशन के रूट, स्पीड और बैटरी उपयोग का पूरा रिकॉर्ड, जिसे HTML रिपोर्ट और GPX फ़ाइल के रूप में निर्यात किया जा सकता है।" },
      { title: "LAN मल्टी-डिवाइस सिंक", desc: "लोकल नेटवर्क के ज़रिए कई डिवाइसों की GPS लोकेशन सिंक करें — मल्टी-डिवाइस टेस्टिंग के लिए आदर्श।" },
      { title: "10 भाषाओं का इंटरफ़ेस", desc: "इंटरफ़ेस चीनी, अंग्रेज़ी, जापानी, कोरियाई, स्पेनिश, पुर्तगाली, हिंदी, अरबी, इतालवी और थाई सहित 10 भाषाओं में उपलब्ध है।" },
    ],
  },
  how: {
    title: "यह कैसे काम करता है",
    subtitle: "रूट से सिम्युलेटेड लोकेशन तक, सिर्फ़ 4 चरणों में",
    steps: [
      { title: "रूट चुनें", desc: "AI से जनरेट करें, मानचित्र पर बनाएं, GPX फ़ाइल आयात करें, या निर्देशांक सूची पेस्ट करें।" },
      { title: "स्पीड और ड्रिफ्ट सेट करें", desc: "अपडेट दर और मूवमेंट स्पीड चुनें, और अधिक यथार्थवादी सिग्नल शोर के लिए GPS ड्रिफ्ट जोड़ें।" },
      { title: "सिमुलेशन शुरू करें", desc: "स्टार्ट टैप करें — एक फ़ोरग्राउंड सेवा Mock GPS और Network दोनों प्रोवाइडर को नियंत्रित करती है।" },
      { title: "ऐप्स सिम्युलेटेड लोकेशन पढ़ते हैं", desc: "लोकेशन पढ़ने वाला कोई भी ऐप आपके सेट किए गए निर्देशांक को रीयल-टाइम में देखेगा।" },
    ],
  },
  useCases: {
    title: "इन परिदृश्यों के लिए उपयुक्त",
    subtitle: "डेवलपमेंट टेस्टिंग और LBS सत्यापन के लिए पांच सामान्य उपयोग के मामले",
    items: [
      { title: "QA / LBS ऐप टेस्टिंग", desc: "अलग-अलग निर्देशांकों पर लोकेशन-आधारित सुविधाओं का सही व्यवहार सत्यापित करें।" },
      { title: "रूट सिमुलेशन और रीप्ले", desc: "एक ही रूट को बार-बार रीप्ले करके सुसंगत टेस्ट चलाएं।" },
      { title: "GIS व्यवहार सिमुलेशन", desc: "अलग-अलग क्षेत्रों में GIS सिस्टम की पोजिशनिंग प्रतिक्रिया का अनुकरण करें।" },
      { title: "GPS ड्रिफ्ट और शोर टेस्टिंग", desc: "अस्थिर सिग्नल स्थितियों में आपके ऐप की त्रुटि सहनशीलता और रीट्राई व्यवहार जांचें।" },
      { title: "लोकेशन रीप्ले (GPX／कस्टम रूट)", desc: "किसी विशेष मूवमेंट पाथ को फिर से बनाने के लिए मौजूदा GPX या कस्टम निर्देशांक आयात करें।" },
    ],
  },
  screenshots: {
    title: "ऐप को क्रिया में देखें",
    subtitle: "ऐप के वास्तविक उपयोग की एक झलक",
    captions: ["मुख्य मानचित्र स्क्रीन", "AI रूट जनरेशन", "अधिक सुविधाएं मेनू", "Pro सब्सक्रिप्शन प्लान"],
  },
  why: {
    title: "Capy GPS Simulator क्यों चुनें",
    items: [
      { title: "विश्वसनीय सिमुलेशन", desc: "यह सिर्फ़ तुरंत स्थान बदलना नहीं है — यह स्पीड, गति और GPS त्रुटि सहित संपूर्ण गति प्रक्रिया का अनुकरण करता है।" },
      { title: "डेवलपर के अनुकूल", desc: "एक स्थिर फ़ोरग्राउंड सेवा एक साथ Mock GPS और नेटवर्क प्रोवाइडर दोनों का अनुकरण करती है।" },
      { title: "निरंतर अपडेट", desc: "सुविधाएं नियमित रूप से जोड़ी जाती हैं, और Pro सब्सक्राइबर्स को हर नई सुविधा जल्द मिलती है।" },
      { title: "पारदर्शी गोपनीयता", desc: "पूरी तरह से सार्वजनिक गोपनीयता नीति और सेवा की शर्तें, ताकि डेटा उपयोग स्पष्ट और सत्यापन योग्य हो।" },
    ],
  },
  pricing: {
    title: "प्लान और मूल्य",
    subtitle: "मुफ़्त में शुरू करें, ज़रूरत पड़ने पर अपग्रेड करें",
    free: {
      name: "मुफ़्त", price: "₹0", note: "हमेशा के लिए मुफ़्त",
      items: ["बेसिक AI रूट जनरेशन (कुछ विज्ञापनों सहित)", "बेसिक GPS ड्रिफ्ट", "7-दिन का एनालिटिक्स इतिहास", "रूट ड्रॉइंग / GPX आयात-निर्यात"],
      cta: "अभी डाउनलोड करें",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 / माह", yearly: "USD $12.00 / वर्ष", badge: "सबसे लोकप्रिय",
      items: [
        "पूरा ऐप बिना विज्ञापन", "AI रूट बिना विज्ञापन", "प्रीमियम AI व्यवहार: पैदल / ड्राइविंग / साइकिलिंग / जॉगिंग / पर्यटन",
        "पर्यटन मोड: वास्तविक POI आधारित स्वचालित रूटिंग", "कस्टम GPS ड्रिफ्ट रेडियस + शहरी कैन्यन प्रभाव", "उच्च अपडेट दर (15 / 20 / 30 Hz)",
        "पूर्ण एनालिटिक्स इतिहास", "GPX निर्यात + HTML रिपोर्ट", "LAN मल्टी-डिवाइस सिंक", "Google Fit / Health स्टेप सिंक",
        "असीमित ऑफ़लाइन मानचित्र डाउनलोड", "सभी भविष्य की सुविधाओं तक जल्द पहुंच",
      ],
      cta: "Pro में अपग्रेड करें",
    },
  },
  faq: {
    title: "सामान्य प्रश्न",
    items: [
      { q: "क्या यह ऐप सुरक्षित है? क्या यह पकड़ में आ सकता है?", a: "Capy GPS Simulator Android के मानक Mock Location API (डेवलपर विकल्प) का उपयोग करता है, जो डेवलपमेंट टेस्टिंग, QA सत्यापन और LBS ऐप टेस्टिंग के लिए बनाया गया है। किसी विशेष उपयोग का किसी ऐप की सेवा शर्तों के अनुपालन की जांच करना आपकी अपनी ज़िम्मेदारी है।" },
      { q: "क्या फ़ोन को Root करना ज़रूरी है?", a: "नहीं। डेवलपर विकल्पों में केवल \"मॉक लोकेशन ऐप चुनें\" सक्षम करें — Root एक्सेस की आवश्यकता नहीं है।" },
      { q: "कौन से Android संस्करण समर्थित हैं?", a: "Android 8.0 (API 26) और उससे ऊपर।" },
      { q: "क्या मैं अपने खुद के रूट आयात कर सकता हूं?", a: "हां। आप GPX फ़ाइलें आयात कर सकते हैं (Strava, Garmin एक्सपोर्ट के साथ संगत), मानचित्र पर रूट बना सकते हैं, या निर्देशांक सूची पेस्ट कर सकते हैं।" },
      { q: "फ्री और Pro वर्ज़न में क्या अंतर है?", a: "फ्री वर्ज़न में मुख्य सिमुलेशन और AI रूट सुविधाएं (कुछ विज्ञापनों सहित) मिलती हैं। Pro में बिना विज्ञापन अनुभव, प्रीमियम AI व्यवहार, उच्च अपडेट दर, LAN सिंक, Google Fit एकीकरण और ऑफ़लाइन मानचित्र जैसी सुविधाएं अनलॉक होती हैं।" },
      { q: "क्या मैं कभी भी सब्सक्रिप्शन रद्द कर सकता हूं?", a: "हां। Pro सब्सक्रिप्शन को Google Play खाते से कभी भी रद्द किया जा सकता है, बिना किसी दीर्घकालिक प्रतिबद्धता के।" },
    ],
  },
  whatsNew: {
    title: "नया क्या है",
    subtitle: "लगातार सुधार हो रहा है — यहां कुछ हालिया मुख्य बदलाव हैं",
    items: [
      "AI रूट जनरेशन के बाद अब सिमुलेशन शुरू किए बिना ही मानचित्र पर तुरंत पूर्वावलोकन",
      "सुविधाएं जल्दी खोजने के लिए 'अधिक सुविधाएं' मेनू को फिर से व्यवस्थित किया गया",
      "पहली बार के ट्यूटोरियल को 9 मुख्य चरणों में सरल किया गया",
      "पसंदीदा मार्कर में 3 नई श्रेणियां जोड़ी गईं: जिम, सप्लाई स्टेशन, जीवाश्म",
    ],
  },
  related: {
    title: "और सुझाव",
    subtitle: "इस ऐप के साथ उपयोग करने लायक अन्य संसाधन",
    placeholder: { name: "जल्द आ रहा है", desc: "और सुझाव जल्द ही तैयार होंगे", cta: "और जानें" },
  },
  ctaBanner: { title: "सिमुलेशन शुरू करने के लिए तैयार हैं?", subtitle: "मुफ़्त डाउनलोड करें और अभी AI रूट जनरेशन आज़माएं", button: "Google Play पर पाएं" },
  footer: {
    tagline: "Android GPS लोकेशन सिम्युलेटर",
    privacy: "गोपनीयता नीति", terms: "सेवा की शर्तें", playstore: "Google Play",
    disclaimer: "यह ऐप केवल डेवलपमेंट टेस्टिंग, QA सत्यापन और शैक्षणिक उपयोग के लिए है। कृपया स्थानीय कानूनों और प्रत्येक ऐप की सेवा शर्तों का पालन करें।",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

ar: {
  nav: { features: "الميزات", usecases: "سيناريوهات الاستخدام", screenshots: "لقطات الشاشة", pricing: "الأسعار", faq: "الأسئلة الشائعة", download: "تنزيل مجاني" },
  hero: {
    badge: "محاكي موقع GPS لأندرويد",
    title: "انتقل فورًا إلى أي مكان في العالم بنقرة واحدة",
    subtitle: "تطبيق Capy GPS Simulator أداة لمحاكاة موقع GPS مصممة لاختبارات التطوير والتحقق من تطبيقات LBS ومحاكاة المسارات. توليد مسارات بالذكاء الاصطناعي، ومحرك انحراف GPS، ولوحة تحكم عائمة، ومزامنة بين عدة أجهزة، كل ذلك في تطبيق واحد.",
    ctaPrimary: "احصل عليه من Google Play",
    ctaSecondary: "استعرض الميزات",
    trust: ["لا حاجة إلى الروت", "10 لغات", "مسارات مولَّدة بالذكاء الاصطناعي"],
  },
  features: {
    title: "الميزات الأساسية",
    subtitle: "مصمم لاختبارات ضمان الجودة ومحاكاة نظم المعلومات الجغرافية والتحقق من التطوير",
    items: [
      { title: "توليد المسارات بالذكاء الاصطناعي", desc: "حدد المسافة ونمط السلوك، ليقوم الذكاء الاصطناعي بتوليد مسارات واقعية للتنقل أو المشي أو الجري أو السياحة، مع خيارات اتباع الطرق أو المسارات الدائرية." },
      { title: "محرك انحراف GPS", desc: "يحاكي تأثير الوادي الحضري وتذبذب الإشارة وأخطاء الدقة لإعادة إنتاج ضوضاء GPS الواقعية." },
      { title: "رسم المسارات / استيراد GPX", desc: "ارسم مسارًا بالنقر على الخريطة، أو استورد ملفات GPX من Strava أو Garmin، أو الصق قائمة إحداثيات لإنشاء مسار فورًا." },
      { title: "لوحة تحكم عائمة", desc: "نافذة عائمة بسبعة أزرار مع عصا تحكم وخريطة مصغرة وتحكم بالسرعة، للتحكم بالمحاكاة حتى أثناء استخدام تطبيقات أخرى." },
      { title: "خرائط بدون اتصال", desc: "قم بتنزيل بلاطات الخريطة للاستخدام دون اتصال، لتخطيط المحاكاة وتشغيلها حتى بدون شبكة." },
      { title: "لوحة التحليلات", desc: "تسجيل كامل لمسار وسرعة واستهلاك البطارية لكل محاكاة، مع إمكانية التصدير كتقارير HTML وملفات GPX." },
      { title: "مزامنة عبر الشبكة المحلية", desc: "زامن موقع GPS بين عدة أجهزة عبر الشبكة المحلية، مثالي للاختبارات المنسقة على أجهزة متعددة." },
      { title: "واجهة بـ 10 لغات", desc: "تدعم الواجهة الصينية والإنجليزية واليابانية والكورية والإسبانية والبرتغالية والهندية والعربية والإيطالية والتايلاندية." },
    ],
  },
  how: {
    title: "كيف يعمل",
    subtitle: "من المسار إلى الموقع المحاكى في أربع خطوات",
    steps: [
      { title: "اختر مسارًا", desc: "وّلده بالذكاء الاصطناعي، ارسمه على الخريطة، استورد ملف GPX، أو الصق قائمة إحداثيات." },
      { title: "اضبط السرعة والانحراف", desc: "اختر معدل التحديث وسرعة الحركة، ويمكنك إضافة انحراف GPS لضوضاء إشارة أكثر واقعية." },
      { title: "ابدأ المحاكاة", desc: "اضغط على بدء — تتولى خدمة تعمل في المقدمة التحكم بمزوّدي الموقع Mock GPS والشبكة معًا." },
      { title: "تقرأ التطبيقات الموقع المحاكى", desc: "أي تطبيق يقرأ موقعك سيرى الإحداثيات التي حددتها، محدثة في الوقت الفعلي." },
    ],
  },
  useCases: {
    title: "مثالي لهذه السيناريوهات",
    subtitle: "خمس حالات استخدام شائعة لاختبارات التطوير والتحقق من تطبيقات LBS",
    items: [
      { title: "اختبار تطبيقات ضمان الجودة / LBS", desc: "تحقق من أن الميزات المعتمدة على الموقع تعمل بشكل صحيح عبر إحداثيات مختلفة." },
      { title: "محاكاة المسارات وإعادة تشغيلها", desc: "أعد تشغيل نفس المسار بشكل متكرر لإجراء اختبارات متسقة وقابلة للتكرار." },
      { title: "محاكاة سلوك نظم المعلومات الجغرافية", desc: "حاكِ استجابة نظام المعلومات الجغرافية لتحديد الموقع في مناطق مختلفة." },
      { title: "اختبار انحراف وضوضاء GPS", desc: "تحقق من كيفية تعامل تطبيقك مع الأخطاء وإعادة المحاولة عند عدم استقرار الإشارة." },
      { title: "إعادة تشغيل الموقع (GPX／مسارات مخصصة)", desc: "استورد ملف GPX موجودًا أو إحداثيات مخصصة لإعادة إنتاج مسار حركة معين." },
    ],
  },
  screenshots: {
    title: "شاهد التطبيق أثناء العمل",
    subtitle: "لمحة سريعة عن التطبيق أثناء الاستخدام",
    captions: ["شاشة الخريطة الرئيسية", "توليد المسار بالذكاء الاصطناعي", "قائمة الميزات الإضافية", "خطط اشتراك Pro"],
  },
  why: {
    title: "لماذا تختار Capy GPS Simulator",
    items: [
      { title: "محاكاة واقعية وموثوقة", desc: "ليست مجرد نقلة فورية، بل محاكاة كاملة لعملية الحركة تشمل السرعة والتسارع وخطأ GPS." },
      { title: "مناسب للمطورين", desc: "تعمل خدمة مستقرة في المقدمة على محاكاة مزوّدي الموقع Mock GPS والشبكة في آن واحد." },
      { title: "تحديثات مستمرة", desc: "تُضاف الميزات باستمرار، ويحصل مشتركو Pro على وصول مبكر لكل جديد." },
      { title: "خصوصية شفافة", desc: "سياسة خصوصية وشروط خدمة معلنة بالكامل، مما يجعل استخدام البيانات واضحًا وقابلاً للتحقق." },
    ],
  },
  pricing: {
    title: "الخطط والأسعار",
    subtitle: "ابدأ مجانًا وقم بالترقية عند الحاجة",
    free: {
      name: "مجاني", price: "$0", note: "مجاني للأبد",
      items: ["توليد مسارات أساسي بالذكاء الاصطناعي (مع إعلانات أحيانًا)", "انحراف GPS أساسي", "سجل تحليلات لمدة 7 أيام", "رسم المسارات / استيراد وتصدير GPX"],
      cta: "نزّل الآن",
    },
    pro: {
      name: "Pro", monthly: "1.99 دولار / شهريًا", yearly: "12.00 دولار / سنويًا", badge: "الأكثر شيوعًا",
      items: [
        "التطبيق بالكامل بدون إعلانات", "مسارات الذكاء الاصطناعي بدون إعلانات", "أنماط سلوك Premium: مشي / قيادة / دراجة / جري / سياحة",
        "وضع السياحة: توجيه تلقائي بناءً على نقاط اهتمام حقيقية", "نصف قطر انحراف GPS قابل للتخصيص + تأثير الوادي الحضري", "معدل تحديث عالٍ (15 / 20 / 30 هرتز)",
        "سجل تحليلات كامل", "تصدير GPX + تقارير HTML", "مزامنة عبر الشبكة المحلية", "مزامنة خطوات Google Fit / Health",
        "تنزيل خرائط بدون اتصال بلا حدود", "وصول مبكر لكل الميزات المستقبلية",
      ],
      cta: "الترقية إلى Pro",
    },
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      { q: "هل هذا التطبيق آمن؟ هل يمكن اكتشافه؟", a: "يستخدم Capy GPS Simulator واجهة برمجة الموقع الوهمي القياسية في أندرويد (خيارات المطورين)، وهو مصمم لاختبارات التطوير والتحقق من ضمان الجودة واختبار تطبيقات LBS. تقع على عاتقك مسؤولية التحقق من توافق استخدام معين مع شروط خدمة أي تطبيق." },
      { q: "هل أحتاج إلى هاتف بصلاحيات الروت؟", a: "لا. يكفي تفعيل \"اختيار تطبيق الموقع الوهمي\" في خيارات المطورين، دون الحاجة إلى صلاحيات الروت." },
      { q: "ما إصدارات أندرويد المدعومة؟", a: "أندرويد 8.0 (واجهة برمجة التطبيقات 26) وما فوق." },
      { q: "هل يمكنني استيراد مساراتي الخاصة؟", a: "نعم، يمكنك استيراد ملفات GPX (متوافقة مع تصدير Strava وGarmin)، أو رسم المسارات على الخريطة، أو لصق قائمة إحداثيات." },
      { q: "ما الفرق بين النسخة المجانية ونسخة Pro؟", a: "توفر النسخة المجانية المحاكاة الأساسية وميزات المسارات بالذكاء الاصطناعي (مع إعلانات أحيانًا). تفتح نسخة Pro تجربة بلا إعلانات، وأنماط سلوك Premium، ومعدل تحديث أعلى، ومزامنة عبر الشبكة المحلية، وتكامل مع Google Fit، وخرائط بدون اتصال." },
      { q: "هل يمكنني إلغاء الاشتراك في أي وقت؟", a: "نعم، يمكن إلغاء اشتراك Pro في أي وقت من خلال حساب Google Play الخاص بك، دون أي التزام طويل الأمد." },
    ],
  },
  whatsNew: {
    title: "الجديد",
    subtitle: "تحسين مستمر — إليك بعض أبرز التحديثات الأخيرة",
    items: [
      "أصبحت مسارات الذكاء الاصطناعي تُعرض كمعاينة على الخريطة فورًا دون الحاجة لبدء المحاكاة",
      "إعادة تنظيم قائمة \"المزيد\" للعثور على الميزات بسرعة أكبر",
      "تبسيط الجولة التعريفية الأولى إلى 9 خطوات أساسية",
      "إضافة 3 فئات جديدة للعلامات المفضلة: صالة رياضية، محطة إمداد، أحفورة",
    ],
  },
  related: {
    title: "المزيد من التوصيات",
    subtitle: "موارد أخرى تستحق الاستخدام مع هذا التطبيق",
    placeholder: { name: "قريبًا", desc: "المزيد من التوصيات قيد الإعداد", cta: "اعرف المزيد" },
  },
  ctaBanner: { title: "هل أنت مستعد لبدء المحاكاة؟", subtitle: "نزّل التطبيق مجانًا وجرّب توليد المسارات بالذكاء الاصطناعي الآن", button: "احصل عليه من Google Play" },
  footer: {
    tagline: "محاكي موقع GPS لأندرويد",
    privacy: "سياسة الخصوصية", terms: "شروط الخدمة", playstore: "Google Play",
    disclaimer: "هذا التطبيق مخصص فقط لاختبارات التطوير والتحقق من ضمان الجودة والاستخدام التعليمي. يُرجى الالتزام بالقوانين المحلية وشروط خدمة كل تطبيق.",
    copyright: "© 2026 Capy GPS Simulator. جميع الحقوق محفوظة.",
  },
},

th: {
  nav: { features: "ฟีเจอร์", usecases: "การใช้งาน", screenshots: "ภาพหน้าจอ", pricing: "ราคา", faq: "คำถามที่พบบ่อย", download: "ดาวน์โหลดฟรี" },
  hero: {
    badge: "เครื่องมือจำลองตำแหน่ง GPS สำหรับ Android",
    title: "เทเลพอร์ตไปที่ไหนก็ได้ในโลก เพียงแตะเดียว",
    subtitle: "Capy GPS Simulator คือเครื่องมือจำลองตำแหน่ง GPS ที่สร้างมาเพื่อการทดสอบการพัฒนา การตรวจสอบแอป LBS และการจำลองเส้นทาง มาพร้อมการสร้างเส้นทางด้วย AI, ระบบจำลองความคลาดเคลื่อนของ GPS, แผงควบคุมแบบลอย และการซิงค์หลายอุปกรณ์ ครบจบในแอปเดียว",
    ctaPrimary: "ดาวน์โหลดบน Google Play",
    ctaSecondary: "ดูฟีเจอร์",
    trust: ["ไม่ต้องรูท", "รองรับ 10 ภาษา", "เส้นทางสร้างโดย AI"],
  },
  features: {
    title: "ฟีเจอร์หลัก",
    subtitle: "ออกแบบมาเพื่อการทดสอบ QA การจำลอง GIS และการตรวจสอบการพัฒนา",
    items: [
      { title: "สร้างเส้นทางด้วย AI", desc: "กำหนดระยะทางและรูปแบบพฤติกรรม AI จะสร้างเส้นทางที่สมจริงสำหรับการเดินทาง เดินเล่น วิ่ง หรือท่องเที่ยว พร้อมตัวเลือกเดินตามถนนหรือวนรอบ" },
      { title: "ระบบจำลองความคลาดเคลื่อน GPS", desc: "จำลองปรากฏการณ์ตึกสูงบดบังสัญญาณ ความสั่นไหวของสัญญาณ และความคลาดเคลื่อนความแม่นยำ เพื่อจำลองสัญญาณรบกวน GPS ในโลกจริง" },
      { title: "วาดเส้นทาง / นำเข้า GPX", desc: "วาดเส้นทางด้วยการแตะบนแผนที่ นำเข้าไฟล์ GPX จาก Strava หรือ Garmin หรือวางรายการพิกัดเพื่อสร้างเส้นทางได้ทันที" },
      { title: "แผงควบคุมแบบลอย", desc: "หน้าต่างลอย 7 ปุ่ม พร้อมจอยสติ๊ก มินิแมป และการควบคุมความเร็ว ควบคุมการจำลองได้แม้ขณะใช้แอปอื่นอยู่" },
      { title: "แผนที่ออฟไลน์", desc: "ดาวน์โหลดไทล์แผนที่เพื่อใช้งานแบบออฟไลน์ วางแผนและจำลองเส้นทางได้แม้ไม่มีเครือข่าย" },
      { title: "แดชบอร์ดวิเคราะห์ข้อมูล", desc: "บันทึกเส้นทาง ความเร็ว และการใช้แบตเตอรี่ของทุกการจำลองอย่างครบถ้วน ส่งออกเป็นรายงาน HTML และไฟล์ GPX ได้" },
      { title: "ซิงค์หลายอุปกรณ์ผ่าน LAN", desc: "ซิงค์ตำแหน่ง GPS ระหว่างหลายอุปกรณ์ผ่านเครือข่ายท้องถิ่น เหมาะสำหรับการทดสอบร่วมกันหลายเครื่อง" },
      { title: "อินเทอร์เฟซ 10 ภาษา", desc: "รองรับภาษาจีน อังกฤษ ญี่ปุ่น เกาหลี สเปน โปรตุเกส ฮินดี อาหรับ อิตาลี และไทย รวม 10 ภาษา" },
    ],
  },
  how: {
    title: "วิธีการทำงาน",
    subtitle: "จากเส้นทางสู่ตำแหน่งจำลอง เพียง 4 ขั้นตอน",
    steps: [
      { title: "เลือกเส้นทาง", desc: "ให้ AI สร้างให้ วาดบนแผนที่ นำเข้าไฟล์ GPX หรือวางรายการพิกัด" },
      { title: "ตั้งค่าความเร็วและความคลาดเคลื่อน", desc: "เลือกอัตราการอัปเดตและความเร็วในการเคลื่อนที่ และเพิ่มความคลาดเคลื่อน GPS เพื่อจำลองสัญญาณรบกวนที่สมจริงยิ่งขึ้น" },
      { title: "เริ่มการจำลอง", desc: "แตะเริ่ม บริการพื้นหน้าจะเข้าควบคุมทั้ง Mock GPS และผู้ให้บริการเครือข่าย" },
      { title: "แอปอ่านตำแหน่งจำลอง", desc: "แอปใดก็ตามที่อ่านตำแหน่งของคุณจะเห็นพิกัดที่คุณตั้งค่าไว้ อัปเดตแบบเรียลไทม์" },
    ],
  },
  useCases: {
    title: "เหมาะสำหรับสถานการณ์เหล่านี้",
    subtitle: "5 กรณีการใช้งานทั่วไปสำหรับการทดสอบการพัฒนาและการตรวจสอบ LBS",
    items: [
      { title: "การทดสอบแอป QA / LBS", desc: "ตรวจสอบว่าฟีเจอร์ที่อิงตำแหน่งทำงานถูกต้องในพิกัดต่างๆ" },
      { title: "การจำลองและเล่นซ้ำเส้นทาง", desc: "เล่นซ้ำเส้นทางเดียวกันซ้ำๆ เพื่อการทดสอบที่สม่ำเสมอและทำซ้ำได้" },
      { title: "การจำลองพฤติกรรม GIS", desc: "จำลองการตอบสนองของระบบ GIS ต่อการระบุตำแหน่งในภูมิภาคต่างๆ" },
      { title: "การทดสอบความคลาดเคลื่อนและสัญญาณรบกวน GPS", desc: "ตรวจสอบว่าแอปของคุณรับมือกับข้อผิดพลาดและลองใหม่อย่างไรเมื่อสัญญาณไม่เสถียร" },
      { title: "เล่นซ้ำตำแหน่ง (GPX／เส้นทางกำหนดเอง)", desc: "นำเข้าไฟล์ GPX ที่มีอยู่หรือพิกัดกำหนดเองเพื่อจำลองเส้นทางการเคลื่อนที่เฉพาะ" },
    ],
  },
  screenshots: {
    title: "แอปในการใช้งานจริง",
    subtitle: "ดูตัวอย่างการทำงานของแอปแบบรวดเร็ว",
    captions: ["หน้าจอแผนที่หลัก", "การสร้างเส้นทางด้วย AI", "เมนูฟีเจอร์เพิ่มเติม", "แผนสมัครสมาชิก Pro"],
  },
  why: {
    title: "ทำไมต้องเลือก Capy GPS Simulator",
    items: [
      { title: "การจำลองที่สมจริง", desc: "ไม่ใช่แค่การเปลี่ยนตำแหน่งทันที แต่จำลองกระบวนการเคลื่อนที่ทั้งหมด รวมถึงความเร็ว ความเร่ง และความคลาดเคลื่อนของ GPS" },
      { title: "เป็นมิตรกับนักพัฒนา", desc: "บริการพื้นหน้าที่เสถียรจำลองทั้ง Mock GPS และผู้ให้บริการตำแหน่งเครือข่ายพร้อมกัน" },
      { title: "อัปเดตอย่างต่อเนื่อง", desc: "ฟีเจอร์ใหม่ออกอย่างสม่ำเสมอ และผู้สมัครสมาชิก Pro จะได้ใช้ก่อนใคร" },
      { title: "ความเป็นส่วนตัวที่โปร่งใส", desc: "นโยบายความเป็นส่วนตัวและข้อกำหนดการให้บริการเปิดเผยต่อสาธารณะทั้งหมด ตรวจสอบการใช้ข้อมูลได้ชัดเจน" },
    ],
  },
  pricing: {
    title: "แพ็กเกจและราคา",
    subtitle: "เริ่มต้นใช้งานฟรี อัปเกรดเมื่อต้องการเพิ่มเติม",
    free: {
      name: "ฟรี", price: "฿0", note: "ฟรีตลอดไป",
      items: ["สร้างเส้นทางด้วย AI ขั้นพื้นฐาน (มีโฆษณาบ้าง)", "ระบบจำลองความคลาดเคลื่อน GPS พื้นฐาน", "ประวัติการวิเคราะห์ 7 วัน", "วาดเส้นทาง / นำเข้า-ส่งออก GPX"],
      cta: "ดาวน์โหลดเลย",
    },
    pro: {
      name: "Pro", monthly: "USD $1.99 ต่อเดือน", yearly: "USD $12.00 ต่อปี", badge: "ยอดนิยม",
      items: [
        "ทั้งแอปไม่มีโฆษณา", "เส้นทาง AI ไม่มีโฆษณา", "พฤติกรรม AI ระดับพรีเมียม: เดิน / ขับรถ / ปั่นจักรยาน / วิ่งเหยาะ / ท่องเที่ยว",
        "โหมดท่องเที่ยว: จัดเส้นทางอัตโนมัติจากสถานที่ POI จริง", "ปรับรัศมีความคลาดเคลื่อน GPS เอง + ปรากฏการณ์ตึกสูงบดบังสัญญาณ", "อัตราอัปเดตสูง (15 / 20 / 30 Hz)",
        "ประวัติการวิเคราะห์แบบเต็ม", "ส่งออก GPX + รายงาน HTML", "ซิงค์หลายอุปกรณ์ผ่าน LAN", "ซิงค์จำนวนก้าวกับ Google Fit / Health",
        "ดาวน์โหลดแผนที่ออฟไลน์ไม่จำกัด", "ใช้ฟีเจอร์ใหม่ในอนาคตก่อนใคร",
      ],
      cta: "อัปเกรดเป็น Pro",
    },
  },
  faq: {
    title: "คำถามที่พบบ่อย",
    items: [
      { q: "แอปนี้ปลอดภัยไหม จะถูกตรวจจับหรือเปล่า", a: "Capy GPS Simulator ใช้ Mock Location API มาตรฐานของ Android (ตัวเลือกนักพัฒนา) ออกแบบมาเพื่อการทดสอบการพัฒนา การตรวจสอบ QA และการทดสอบแอป LBS การใช้งานเฉพาะกรณีจะสอดคล้องกับข้อกำหนดการให้บริการของแอปนั้นๆ หรือไม่ เป็นความรับผิดชอบของผู้ใช้ที่ต้องตรวจสอบเอง" },
      { q: "ต้องรูทเครื่องหรือไม่", a: "ไม่ต้อง เพียงเปิด \"เลือกแอปตำแหน่งจำลอง\" ในตัวเลือกนักพัฒนา ไม่จำเป็นต้องมีสิทธิ์รูท" },
      { q: "รองรับ Android เวอร์ชันใดบ้าง", a: "รองรับ Android 8.0 (API 26) ขึ้นไป" },
      { q: "สามารถนำเข้าเส้นทางของตัวเองได้ไหม", a: "ได้ รองรับการนำเข้าไฟล์ GPX (ใช้ร่วมกับไฟล์ส่งออกจาก Strava และ Garmin ได้) วาดเส้นทางบนแผนที่ หรือวางรายการพิกัดได้โดยตรง" },
      { q: "เวอร์ชันฟรีกับ Pro ต่างกันอย่างไร", a: "เวอร์ชันฟรีใช้งานการจำลองหลักและฟีเจอร์เส้นทาง AI ได้ (มีโฆษณาบ้าง) ส่วน Pro ปลดล็อกประสบการณ์ไม่มีโฆษณา พฤติกรรม AI ระดับพรีเมียม อัตราอัปเดตที่สูงขึ้น การซิงค์ผ่าน LAN การเชื่อมต่อ Google Fit และแผนที่ออฟไลน์" },
      { q: "ยกเลิกการสมัครสมาชิกได้ตลอดเวลาไหม", a: "ได้ สามารถยกเลิกการสมัครสมาชิก Pro ได้ตลอดเวลาผ่านบัญชี Google Play ของคุณ โดยไม่มีข้อผูกมัด" },
    ],
  },
  whatsNew: {
    title: "อัปเดตล่าสุด",
    subtitle: "ปรับปรุงอย่างต่อเนื่อง นี่คือไฮไลต์ล่าสุด",
    items: [
      "เส้นทางที่สร้างด้วย AI แสดงตัวอย่างบนแผนที่ได้ทันที ไม่ต้องรอเริ่มจำลอง",
      "จัดหมวดหมู่เมนู \"เพิ่มเติม\" ใหม่ ให้หาฟีเจอร์ได้เร็วขึ้น",
      "ปรับทัวร์แนะนำครั้งแรกให้เหลือ 9 ขั้นตอนหลัก",
      "เพิ่มหมวดหมู่หมุดโปรด 3 หมวดใหม่: ยิม, จุดเสบียง, ฟอสซิล",
    ],
  },
  related: {
    title: "คำแนะนำเพิ่มเติม",
    subtitle: "แหล่งข้อมูลอื่นๆ ที่ควรใช้คู่กับแอปนี้",
    placeholder: { name: "เร็วๆ นี้", desc: "กำลังเตรียมคำแนะนำเพิ่มเติม", cta: "ดูเพิ่มเติม" },
  },
  ctaBanner: { title: "พร้อมเริ่มจำลองแล้วหรือยัง", subtitle: "ดาวน์โหลดฟรีแล้วลองสร้างเส้นทางด้วย AI ได้เลยตอนนี้", button: "ดาวน์โหลดบน Google Play" },
  footer: {
    tagline: "เครื่องมือจำลองตำแหน่ง GPS สำหรับ Android",
    privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดการให้บริการ", playstore: "Google Play",
    disclaimer: "แอปนี้มีไว้สำหรับการทดสอบการพัฒนา การตรวจสอบ QA และการใช้งานเพื่อการศึกษาเท่านั้น โปรดปฏิบัติตามกฎหมายท้องถิ่นและข้อกำหนดการให้บริการของแต่ละแอป",
    copyright: "© 2026 Capy GPS Simulator. All rights reserved.",
  },
},

};

/* ---------- render ---------- */

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderLang(lang) {
  const t = T[lang] || T.zh;
  document.documentElement.lang = lang;
  document.documentElement.dir = LANG_META[lang].dir;

  // nav
  document.querySelectorAll("[data-i18n-nav]").forEach((n) => {
    const key = n.getAttribute("data-i18n-nav");
    n.textContent = t.nav[key];
  });
  document.getElementById("navDownloadBtn").href = PLAY_URL;

  // hero
  document.getElementById("heroBadge").textContent = t.hero.badge;
  document.getElementById("heroTitle").textContent = t.hero.title;
  document.getElementById("heroSubtitle").textContent = t.hero.subtitle;
  document.getElementById("heroCtaPrimary").textContent = t.hero.ctaPrimary;
  document.getElementById("heroCtaPrimary").href = PLAY_URL;
  document.getElementById("heroCtaSecondary").textContent = t.hero.ctaSecondary;
  const trustRow = document.getElementById("trustRow");
  trustRow.innerHTML = "";
  t.hero.trust.forEach((txt) => trustRow.appendChild(el("span", null, txt)));

  // features
  document.getElementById("featuresTitle").textContent = t.features.title;
  document.getElementById("featuresSubtitle").textContent = t.features.subtitle;
  const fg = document.getElementById("featuresGrid");
  fg.innerHTML = "";
  t.features.items.forEach((item, i) => {
    const card = el("div", "card");
    card.appendChild(el("div", "card-icon", FEATURE_ICONS[i] || "★"));
    card.appendChild(el("h3", null, item.title));
    card.appendChild(el("p", null, item.desc));
    fg.appendChild(card);
  });

  // how it works
  document.getElementById("howTitle").textContent = t.how.title;
  document.getElementById("howSubtitle").textContent = t.how.subtitle;
  const hs = document.getElementById("howSteps");
  hs.innerHTML = "";
  t.how.steps.forEach((step, i) => {
    const card = el("div", "step-card");
    card.appendChild(el("div", "step-num", String(i + 1)));
    card.appendChild(el("h3", null, step.title));
    card.appendChild(el("p", null, step.desc));
    hs.appendChild(card);
  });

  // use cases
  document.getElementById("useCasesTitle").textContent = t.useCases.title;
  document.getElementById("useCasesSubtitle").textContent = t.useCases.subtitle;
  const ug = document.getElementById("useCasesGrid");
  ug.innerHTML = "";
  t.useCases.items.forEach((item, i) => {
    const card = el("div", "card");
    card.appendChild(el("div", "card-icon", USECASE_ICONS[i] || "★"));
    card.appendChild(el("h3", null, item.title));
    card.appendChild(el("p", null, item.desc));
    ug.appendChild(card);
  });

  // screenshots
  document.getElementById("screensTitle").textContent = t.screenshots.title;
  document.getElementById("screensSubtitle").textContent = t.screenshots.subtitle;
  const shots = [
    "assets/screenshots/map-screen.jpg",
    "assets/screenshots/ai-route-dialog.jpg",
    "assets/screenshots/more-menu.jpg",
    "assets/screenshots/paywall.jpg",
  ];
  const sr = document.getElementById("screensRow");
  sr.innerHTML = "";
  shots.forEach((src, i) => {
    const item = el("div", "screen-item");
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = t.screenshots.captions[i];
    item.appendChild(img);
    item.appendChild(el("p", null, t.screenshots.captions[i]));
    sr.appendChild(item);
  });

  // why
  document.getElementById("whyTitle").textContent = t.why.title;
  const wg = document.getElementById("whyGrid");
  wg.innerHTML = "";
  t.why.items.forEach((item, i) => {
    const c = el("div", "why-card");
    c.appendChild(el("div", "why-icon", WHY_ICONS[i] || "★"));
    const body = el("div");
    body.appendChild(el("h3", null, item.title));
    body.appendChild(el("p", null, item.desc));
    c.appendChild(body);
    wg.appendChild(c);
  });

  // pricing
  document.getElementById("pricingTitle").textContent = t.pricing.title;
  document.getElementById("pricingSubtitle").textContent = t.pricing.subtitle;
  const pr = document.getElementById("pricingRow");
  pr.innerHTML = "";

  const freeCard = el("div", "price-card");
  freeCard.appendChild(el("div", "plan-name", t.pricing.free.name));
  freeCard.appendChild(el("div", "plan-price", t.pricing.free.price));
  freeCard.appendChild(el("div", "plan-note", t.pricing.free.note));
  const freeUl = el("ul");
  t.pricing.free.items.forEach((i) => freeUl.appendChild(el("li", null, i)));
  freeCard.appendChild(freeUl);
  const freeBtn = el("a", "btn btn-ghost", t.pricing.free.cta);
  freeBtn.href = PLAY_URL; freeBtn.target = "_blank"; freeBtn.rel = "noopener";
  freeCard.appendChild(freeBtn);
  pr.appendChild(freeCard);

  const proCard = el("div", "price-card featured");
  proCard.appendChild(el("div", "price-tier-badge", t.pricing.pro.badge));
  proCard.appendChild(el("div", "plan-name", t.pricing.pro.name));
  proCard.appendChild(el("div", "plan-price", t.pricing.pro.yearly));
  proCard.appendChild(el("div", "plan-note", t.pricing.pro.monthly));
  const proUl = el("ul");
  t.pricing.pro.items.forEach((i) => proUl.appendChild(el("li", null, i)));
  proCard.appendChild(proUl);
  const proBtn = el("a", "btn btn-primary", t.pricing.pro.cta);
  proBtn.href = PLAY_URL; proBtn.target = "_blank"; proBtn.rel = "noopener";
  proCard.appendChild(proBtn);
  pr.appendChild(proCard);

  // faq
  document.getElementById("faqTitle").textContent = t.faq.title;
  const fl = document.getElementById("faqList");
  fl.innerHTML = "";
  t.faq.items.forEach((item, i) => {
    const details = document.createElement("details");
    details.className = "faq-item";
    if (i === 0) details.open = true;
    const summary = el("summary", null, item.q);
    details.appendChild(summary);
    details.appendChild(el("p", null, item.a));
    fl.appendChild(details);
  });

  // what's new
  document.getElementById("whatsNewTitle").textContent = t.whatsNew.title;
  document.getElementById("whatsNewSubtitle").textContent = t.whatsNew.subtitle;
  const wn = document.getElementById("whatsNewList");
  wn.innerHTML = "";
  t.whatsNew.items.forEach((txt) => wn.appendChild(el("li", null, txt)));

  // related
  document.getElementById("relatedTitle").textContent = t.related.title;
  document.getElementById("relatedSubtitle").textContent = t.related.subtitle;
  const rr = document.getElementById("relatedRow");
  rr.innerHTML = "";
  RELATED_PRODUCTS.forEach((p) => {
    const card = el("a", "related-card");
    card.href = p.link || "#";
    card.target = "_blank";
    card.rel = "noopener";
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name || t.related.placeholder.name;
    card.appendChild(img);
    card.appendChild(el("h3", null, p.name || t.related.placeholder.name));
    card.appendChild(el("p", null, p.desc || t.related.placeholder.desc));
    rr.appendChild(card);
  });

  // cta banner
  document.getElementById("ctaTitle").textContent = t.ctaBanner.title;
  document.getElementById("ctaSubtitle").textContent = t.ctaBanner.subtitle;
  const ctaBtn = document.getElementById("ctaButton");
  ctaBtn.textContent = t.ctaBanner.button;
  ctaBtn.href = PLAY_URL;

  // footer
  document.getElementById("footerTagline").textContent = t.footer.tagline;
  document.getElementById("footerPrivacy").textContent = t.footer.privacy;
  document.getElementById("footerTerms").textContent = t.footer.terms;
  document.getElementById("footerPlayStore").textContent = t.footer.playstore;
  document.getElementById("footerDisclaimer").textContent = t.footer.disclaimer;
  document.getElementById("footerCopy").textContent = t.footer.copyright;
}

function initLangSelect() {
  const sel = document.getElementById("langSelect");
  sel.innerHTML = "";
  Object.keys(LANG_META).forEach((code) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = LANG_META[code].label;
    sel.appendChild(opt);
  });
  sel.addEventListener("change", () => {
    const lang = sel.value;
    try { localStorage.setItem("capy_lang", lang); } catch (e) {}
    renderLang(lang);
  });
}

function detectInitialLang() {
  try {
    const saved = localStorage.getItem("capy_lang");
    if (saved && T[saved]) return saved;
  } catch (e) {}
  const nav = (navigator.language || "en").toLowerCase();
  const map = { "zh": "zh", "en": "en", "ja": "ja", "ko": "ko", "es": "es", "pt": "pt", "hi": "hi", "ar": "ar", "it": "it", "th": "th" };
  for (const prefix in map) {
    if (nav.startsWith(prefix)) return map[prefix];
  }
  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSelect();
  const lang = detectInitialLang();
  document.getElementById("langSelect").value = lang;
  renderLang(lang);

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});
