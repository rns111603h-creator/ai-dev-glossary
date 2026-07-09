export type GlossaryTerm = {
  id: string;
  term: string;
  reading?: string;
  aliases?: string[];
  category: string;
  tags: string[];
  summary: string;
  description: string;
  whyImportant?: string;
  commonMisunderstandings?: string[];
  examples?: string[];
  relatedTerms?: string[];
  sourceNote?: string;
  createdAt: string;
  updatedAt: string;
};

type TermInput = Omit<GlossaryTerm, "sourceNote" | "createdAt" | "updatedAt"> &
  Partial<Pick<GlossaryTerm, "sourceNote" | "createdAt" | "updatedAt">>;

const initialTerm = (term: TermInput): GlossaryTerm => ({
  sourceNote: "初期登録データ",
  createdAt: "2026-07-09",
  updatedAt: "2026-07-09",
  ...term
});

export const glossaryTerms: GlossaryTerm[] = [
  initialTerm({
    id: "frontend",
    term: "フロントエンド",
    reading: "ふろんとえんど",
    aliases: ["Front-end", "Frontend"],
    category: "基礎",
    tags: ["Web", "UI", "ブラウザ"],
    summary: "ユーザーが直接見る・操作するWeb画面側の領域。",
    description: "WebサイトやWebアプリでユーザーが目にして操作する部分です。HTML、CSS、JavaScript、UI、フォーム、表示速度、アクセシビリティなどを扱います。",
    whyImportant: "AIツールや業務アプリを作るとき、最終的に人が触る画面の品質が成果に直結します。",
    commonMisunderstandings: ["単に見た目を整えるだけでなく、データ取得、状態管理、テスト、パフォーマンスも含まれます。"],
    examples: ["予約管理画面、チャットUI、社内ダッシュボードなど。"],
    relatedTerms: ["HTML", "CSS", "JavaScript", "React"]
  }),
  initialTerm({
    id: "html",
    term: "HTML",
    reading: "えいちてぃーえむえる",
    aliases: ["HyperText Markup Language"],
    category: "基礎",
    tags: ["Web", "マークアップ", "構造"],
    summary: "Webページの構造と意味を表す言語。",
    description: "見出し、段落、リンク、画像、フォームなど、Webページの内容と構造を定義するための言語です。",
    whyImportant: "どんなフレームワークを使っても、最終的にはHTMLとしてブラウザに表示されるため基礎になります。",
    commonMisunderstandings: ["HTMLはプログラミング言語というより、文書構造を表すマークアップ言語です。"],
    examples: ["見出しや保存ボタンなどの要素を記述します。"],
    relatedTerms: ["CSS", "JavaScript", "DOM"]
  }),
  initialTerm({
    id: "css",
    term: "CSS",
    reading: "しーえすえす",
    aliases: ["Cascading Style Sheets"],
    category: "基礎",
    tags: ["Web", "スタイル", "デザイン"],
    summary: "HTMLの見た目を整えるための言語。",
    description: "色、余白、フォント、レイアウト、レスポンシブ対応など、Webページの見た目を指定します。",
    whyImportant: "UIの見やすさ、使いやすさ、ブランド感、スマホ対応を左右します。",
    commonMisunderstandings: ["CSSは簡単そうに見えますが、大規模になると設計や命名が重要になります。"],
    examples: ["ボタンの色を変える、カードを横並びにする、スマホ幅で1列にする。"],
    relatedTerms: ["HTML", "Tailwind CSS", "CSS Modules", "Sass"]
  }),
  initialTerm({
    id: "javascript",
    term: "JavaScript",
    reading: "じゃばすくりぷと",
    aliases: ["JS"],
    category: "基礎",
    tags: ["Web", "プログラミング", "ブラウザ"],
    summary: "Webページに動きや処理を加えるプログラミング言語。",
    description: "ボタンを押したときの処理、フォーム検証、API通信、画面の動的更新などを行います。",
    whyImportant: "ReactやNext.js、AIチャットUIなど、多くのWebアプリ開発の土台になります。",
    commonMisunderstandings: ["Javaとは別の言語です。名前は似ていますが別物です。"],
    examples: ["送信ボタンを押したら入力内容を保存する。"],
    relatedTerms: ["TypeScript", "DOM", "React"]
  }),
  initialTerm({
    id: "dom",
    term: "DOM",
    reading: "どむ",
    aliases: ["Document Object Model"],
    category: "基礎",
    tags: ["Web", "ブラウザ", "HTML"],
    summary: "HTMLをブラウザがオブジェクトとして扱うための仕組み。",
    description: "ブラウザがHTML文書をツリー状のデータとして扱う仕組みです。JavaScriptはDOMを通して画面を変更します。",
    whyImportant: "Reactなどのライブラリも、最終的にはDOMに反映されるUIを扱います。",
    commonMisunderstandings: ["DOMはJavaScriptそのものではなく、ブラウザが提供するWeb APIです。"],
    examples: ["ボタンの文字を変更する、入力欄の値を読む。"],
    relatedTerms: ["HTML", "JavaScript", "React"]
  }),
  initialTerm({
    id: "library",
    term: "ライブラリ",
    reading: "らいぶらり",
    aliases: ["Library"],
    category: "設計概念",
    tags: ["開発", "再利用", "ツール"],
    summary: "必要な機能を呼び出して使う道具箱のようなもの。",
    description: "開発者が必要なときに呼び出して使う機能の集合です。UI作成、日付処理、通信、状態管理など用途はさまざまです。",
    whyImportant: "どのライブラリを選ぶかで、開発速度や保守性が変わります。",
    commonMisunderstandings: ["ライブラリはアプリ全体の作り方まで決めるとは限りません。"],
    examples: ["React、date-fns、axiosなど。"],
    relatedTerms: ["フレームワーク", "React"]
  }),
  initialTerm({
    id: "framework",
    term: "フレームワーク",
    reading: "ふれーむわーく",
    aliases: ["Framework"],
    category: "設計概念",
    tags: ["開発", "設計", "土台"],
    summary: "アプリの作り方や構成をある程度決めてくれる開発の枠組み。",
    description: "ルーティング、データ取得、ビルド、画面生成など、アプリ全体を作るための仕組みを提供します。",
    whyImportant: "フレームワーク選定は、開発体験、保守性、性能、デプロイ方法に影響します。",
    commonMisunderstandings: ["ライブラリと同じ意味で使われることもありますが、一般的にフレームワークの方がアプリ構造への関与が大きいです。"],
    examples: ["Next.js、Nuxt、Astroなど。"],
    relatedTerms: ["ライブラリ", "Next.js", "Nuxt", "Astro"]
  }),
  initialTerm({
    id: "react",
    term: "React",
    reading: "りあくと",
    aliases: ["React.js"],
    category: "フロントエンド",
    tags: ["JavaScript", "UI", "ライブラリ", "コンポーネント"],
    summary: "UIをコンポーネント単位で作るJavaScriptライブラリ。",
    description: "Web画面を小さな部品であるコンポーネントとして組み立てるためのJavaScriptライブラリです。状態に応じてUIを効率的に更新できます。",
    whyImportant: "現代のWebアプリ開発で広く使われ、Next.jsなどの土台にもなっています。",
    commonMisunderstandings: ["React単体でルーティングやサーバー機能まで全部備えたフルスタックフレームワークだと思われがちですが、基本はUIライブラリです。"],
    examples: ["ボタン、フォーム、カード、画面全体をコンポーネントとして分けて作る。"],
    relatedTerms: ["Component", "JSX", "useState", "Next.js"]
  }),
  initialTerm({
    id: "vue",
    term: "Vue",
    reading: "びゅー",
    aliases: ["Vue.js"],
    category: "フロントエンド",
    tags: ["JavaScript", "UI", "フレームワーク", "コンポーネント"],
    summary: "HTML/CSS/JavaScriptを土台にしたコンポーネントベースのUIフレームワーク。",
    description: "宣言的にUIを作れるJavaScriptフレームワークです。単一ファイルコンポーネントなど、まとまった書き方で開発できます。",
    whyImportant: "学習しやすく、管理画面や業務アプリなどでも採用されることがあります。",
    commonMisunderstandings: ["Reactと同じものではありません。思想や書き方、周辺エコシステムが異なります。"],
    examples: ["template、script、styleを1つの.vueファイルにまとめて画面部品を作る。"],
    relatedTerms: ["Nuxt", "Component", "JavaScript"]
  }),
  initialTerm({
    id: "svelte",
    term: "Svelte",
    reading: "すべると",
    aliases: [],
    category: "フロントエンド",
    tags: ["JavaScript", "UI", "コンパイラ", "フレームワーク"],
    summary: "ビルド時に効率的なJavaScriptへ変換するUIフレームワーク。",
    description: "実行時に重いライブラリを使うより、ビルド時にコンポーネントを効率的なJavaScriptへ変換する考え方のフレームワークです。",
    whyImportant: "少ないコード量と軽量な出力を狙えるため、パフォーマンス重視のUIで候補になります。",
    commonMisunderstandings: ["Reactの単なる別記法ではなく、コンパイルを重視する設計思想が特徴です。"],
    examples: ["コンポーネントを書いてビルドすると、ブラウザで動く効率的なJavaScriptに変換される。"],
    relatedTerms: ["React", "Vue", "コンパイラ"]
  }),
  initialTerm({
    id: "solid",
    term: "Solid",
    reading: "そりっど",
    aliases: ["SolidJS"],
    category: "フロントエンド",
    tags: ["JavaScript", "UI", "リアクティビティ"],
    summary: "細かい単位で状態変化を追跡してUIを更新するライブラリ。",
    description: "状態の変化を細かく追跡し、必要な部分だけ効率よく更新するUIライブラリです。",
    whyImportant: "高いパフォーマンスや細かなリアクティブ更新を重視する文脈で登場します。",
    commonMisunderstandings: ["見た目がReactに似ていても、内部の更新方式は異なります。"],
    examples: ["一部の値が変わったとき、その値に依存するUIだけを更新する。"],
    relatedTerms: ["React", "リアクティビティ", "Component"]
  }),
  initialTerm({
    id: "nextjs",
    term: "Next.js",
    reading: "ねくすとじぇーえす",
    aliases: ["Next"],
    category: "フレームワーク",
    tags: ["React", "SSR", "SSG", "フルスタック"],
    summary: "Reactを使ったフルスタック寄りのWebフレームワーク。",
    description: "Reactを土台に、ルーティング、SSR、SSG、API、画像最適化などを提供するWebフレームワークです。",
    whyImportant: "Reactで実用的なWebアプリやサイトを作る際によく選ばれます。",
    commonMisunderstandings: ["Reactそのものではなく、Reactを使いやすくするフレームワークです。"],
    examples: ["社内ポータル、予約サイト、ブログ、AIチャットUIなどを作る。"],
    relatedTerms: ["React", "SSR", "SSG", "Server Components", "use client"]
  }),
  initialTerm({
    id: "nuxt",
    term: "Nuxt",
    reading: "なっくすと",
    aliases: ["Nuxt.js"],
    category: "フレームワーク",
    tags: ["Vue", "SSR", "SSG", "フルスタック"],
    summary: "Vueを使ったフルスタック寄りのWebフレームワーク。",
    description: "Vueを土台に、ルーティング、SSR、SSG、データ取得などを扱いやすくするフレームワークです。",
    whyImportant: "Vueで本格的なWebアプリやサイトを作るときの代表的な選択肢です。",
    commonMisunderstandings: ["VueとNuxtは同じではありません。NuxtはVueアプリを作るためのフレームワークです。"],
    examples: ["Vueベースのコーポレートサイトや管理画面を作る。"],
    relatedTerms: ["Vue", "SSR", "SSG"]
  }),
  initialTerm({
    id: "astro",
    term: "Astro",
    reading: "あすとろ",
    aliases: [],
    category: "フレームワーク",
    tags: ["Web", "静的サイト", "パフォーマンス"],
    summary: "コンテンツ中心の高速サイトに強いWebフレームワーク。",
    description: "ブログ、ドキュメント、コーポレートサイトなど、コンテンツ中心のサイトを高速に作るためのフレームワークです。",
    whyImportant: "情報発信サイトや社内ドキュメントサイトなど、表示速度を重視する場面で有力です。",
    commonMisunderstandings: ["ReactやVueの代替というより、必要に応じてそれらも組み込めるコンテンツ向けフレームワークです。"],
    examples: ["技術ブログ、用語集、ヘルプセンターを作る。"],
    relatedTerms: ["SSG", "React", "Vue"]
  }),
  initialTerm({
    id: "jsx",
    term: "JSX",
    reading: "じぇいえすえっくす",
    aliases: [],
    category: "React基礎",
    tags: ["React", "JavaScript", "UI記法"],
    summary: "JavaScriptの中にHTMLのような見た目でUIを書く構文。",
    description: "JavaScript内でUI構造をHTMLに似た形で書くための構文です。HTMLそのものではなく、ビルド時にJavaScriptへ変換されます。",
    whyImportant: "Reactの画面実装では頻繁に使うため、読み書きできることが重要です。",
    commonMisunderstandings: ["JSXはHTMLそのものではないため、classではなくclassNameを使うなど違いがあります。"],
    examples: ["return <button>保存</button>; のように書く。"],
    relatedTerms: ["React", "className", "Component"]
  }),
  initialTerm({
    id: "classname",
    term: "className",
    reading: "くらすねーむ",
    aliases: ["CSSクラス指定"],
    category: "React基礎",
    tags: ["React", "JSX", "CSS"],
    summary: "React/JSXでCSSクラスを指定するための属性。",
    description: "HTMLではclass属性を使いますが、ReactのJSXではCSSクラスを指定するときにclassNameを使います。",
    whyImportant: "Reactでスタイルを当てる基本なので、HTMLとの差分として最初に覚える必要があります。",
    commonMisunderstandings: ["HTMLのclassをそのままJSXに書くと警告や問題になることがあります。"],
    examples: ["<button className=\"primary-button\">保存</button>"],
    relatedTerms: ["JSX", "React", "CSS"]
  }),
  initialTerm({
    id: "component",
    term: "コンポーネント",
    reading: "こんぽーねんと",
    aliases: ["Component", "UI部品"],
    category: "React基礎",
    tags: ["React", "UI", "再利用"],
    summary: "UIを再利用しやすい小さな部品に分けたもの。",
    description: "ボタン、カード、フォーム、ページなど、UIを部品として分けたものです。部品化することで再利用しやすくなります。",
    whyImportant: "画面が複雑になっても、部品ごとに考えることで保守しやすくなります。",
    commonMisunderstandings: ["小さい部品だけでなく、ページ全体もコンポーネントとして扱うことがあります。"],
    examples: ["利用者カード、検索フォーム、サイドバーなどを別々のコンポーネントにする。"],
    relatedTerms: ["React", "props", "state", "JSX"]
  }),
  initialTerm({
    id: "props",
    term: "props",
    reading: "ぷろっぷす",
    aliases: ["properties", "プロパティ"],
    category: "React基礎",
    tags: ["React", "Component", "データ受け渡し"],
    summary: "親コンポーネントから子コンポーネントへ渡す値。",
    description: "コンポーネントに外から渡すデータです。関数の引数のように、同じ部品に違う値を渡して表示を変えられます。",
    whyImportant: "コンポーネントを再利用しながら、表示内容を柔軟に変えるために必要です。",
    commonMisunderstandings: ["propsは子側で直接書き換えるものではなく、基本的には親から渡される読み取り用の値です。"],
    examples: ["<UserCard name=\"山田さん\" /> の name がprops。"],
    relatedTerms: ["Component", "state", "React"]
  }),
  initialTerm({
    id: "state",
    term: "state",
    reading: "すてーと",
    aliases: ["状態"],
    category: "React基礎",
    tags: ["React", "状態管理", "UI"],
    summary: "コンポーネントが覚えている現在の状態。",
    description: "入力中の文字、選択中のタブ、モーダルの開閉、カウント値など、UIの変化に関わるデータです。",
    whyImportant: "Webアプリはユーザー操作によって状態が変わるため、stateの理解が不可欠です。",
    commonMisunderstandings: ["通常の変数を変えるだけではReactの画面は更新されません。stateとして管理する必要があります。"],
    examples: ["検索欄に入力した文字をstateとして保持する。"],
    relatedTerms: ["useState", "props", "状態管理"]
  })
];

const extraTerms: TermInput[] = [
  { id: "usestate", term: "useState", reading: "ゆーずすてーと", aliases: ["React useState"], category: "React Hooks", tags: ["React", "Hook", "state"], summary: "Reactでコンポーネントにstateを持たせるためのHook。", description: "現在の値と、その値を更新する関数を返すReact Hookです。状態が更新されると画面が再レンダーされます。", whyImportant: "Reactでユーザー入力や開閉状態などを扱う最初の基本です。", commonMisunderstandings: ["stateの値を直接書き換えるのではなく、更新関数を使って変更します。"], examples: ["const [count, setCount] = useState(0);"], relatedTerms: ["state", "Hook", "再レンダー"] },
  { id: "hook", term: "Hook", reading: "ふっく", aliases: ["React Hooks"], category: "React Hooks", tags: ["React", "Hook", "関数コンポーネント"], summary: "Reactの機能を関数コンポーネントで使うための仕組み。", description: "stateや副作用、メモ化などのReact機能を関数コンポーネント内で使うための仕組みです。", whyImportant: "現代ReactではHooksを中心にコンポーネントを書くことが多いためです。", commonMisunderstandings: ["Hookは条件分岐やループの中で自由に呼べるものではなく、ルールに従って使う必要があります。"], examples: ["useStateで状態を持つ、useEffectで外部処理と同期する。"], relatedTerms: ["useState", "useEffect", "useMemo", "useCallback"] },
  { id: "useeffect", term: "useEffect", reading: "ゆーずえふぇくと", aliases: ["Effect Hook"], category: "React Hooks", tags: ["React", "Hook", "副作用"], summary: "Reactコンポーネントを外部システムと同期させるためのHook。", description: "API通信、タイマー、イベント購読、ブラウザAPI操作など、描画そのもの以外の処理を扱うために使います。", whyImportant: "データ取得や外部サービス連携など、実務アプリで頻繁に使います。", commonMisunderstandings: ["何でもuseEffectに入れればよいわけではありません。画面表示から計算できる値は通常の計算で十分な場合があります。"], examples: ["画面表示時にAPIから利用者一覧を取得する。"], relatedTerms: ["副作用", "依存配列", "stale closure"] },
  { id: "side-effect", term: "副作用", reading: "ふくさよう", aliases: ["Side Effect"], category: "React Hooks", tags: ["React", "useEffect", "外部処理"], summary: "UIを計算して表示する以外の外部に影響する処理。", description: "API通信、ログ送信、タイマー、DOM操作、ローカルストレージ保存など、描画計算の外側にある処理です。", whyImportant: "扱いを誤ると、無限ループや古いデータ参照、意図しない再実行が起きます。", commonMisunderstandings: ["副作用という言葉は悪い意味ではなく、描画以外の処理という意味で使われます。"], examples: ["画面を開いたらAPIからデータを取得する。"], relatedTerms: ["useEffect", "依存配列", "API"] },
  { id: "dependency-array", term: "依存配列", reading: "いぞんはいれつ", aliases: ["dependency array"], category: "React Hooks", tags: ["React", "useEffect", "Hook"], summary: "useEffectなどを再実行する条件となる値の配列。", description: "どの値が変わったときに処理を再実行するかをReactに伝えるための配列です。", whyImportant: "依存配列を間違えると、無限ループや古い値の参照が起きます。", commonMisunderstandings: ["空配列にすれば常に正しいわけではありません。Effect内で使う値は依存関係に含める必要があります。"], examples: ["useEffect(() => { fetchUser(userId); }, [userId]);"], relatedTerms: ["useEffect", "無限ループ", "stale closure"] },
  { id: "infinite-loop", term: "無限ループ", reading: "むげんるーぷ", aliases: ["Infinite Loop"], category: "React Hooks", tags: ["React", "バグ", "useEffect"], summary: "処理が終わらず何度も繰り返される状態。", description: "Reactでは、useEffect内でstateを更新し、その更新がまたuseEffectを再実行させることで無限ループになることがあります。", whyImportant: "アプリが重くなる、ブラウザが固まる、APIを大量に叩くなどの問題につながります。", commonMisunderstandings: ["Reactのバグではなく、依存配列やstate更新の設計ミスで起きることが多いです。"], examples: ["Effectが毎回setStateし、そのsetStateでまたEffectが動く。"], relatedTerms: ["useEffect", "依存配列", "state"] },
  { id: "stale-closure", term: "古い値を見る / stale closure", reading: "ふるいあたいをみる / すているくろーじゃー", aliases: ["stale closure", "古いクロージャ"], category: "React Hooks", tags: ["React", "Hook", "バグ"], summary: "関数が昔のstateやpropsを参照し続ける現象。", description: "関数やEffectが作られた時点の古い値を覚えてしまい、最新の値ではなく古い値を参照する問題です。", whyImportant: "非同期処理、タイマー、イベントハンドラ、依存配列のミスでよく起きます。", commonMisunderstandings: ["見た目上はstateを更新しているのに、関数内では古い値を見ていることがあります。"], examples: ["setIntervalの中で古いcountを参照し続ける。"], relatedTerms: ["useEffect", "依存配列", "useCallback"] },
  { id: "usememo", term: "useMemo", reading: "ゆーずめも", aliases: [], category: "React Hooks", tags: ["React", "Hook", "メモ化", "パフォーマンス"], summary: "計算結果を再レンダー間でキャッシュするHook。", description: "重い計算の結果を依存値が変わるまで再利用するためのReact Hookです。", whyImportant: "不要な再計算を減らし、パフォーマンス改善に役立つ場合があります。", commonMisunderstandings: ["何でもuseMemoすれば速くなるわけではありません。使いすぎると逆に複雑になります。"], examples: ["大量データのフィルタ結果を検索条件が変わるまで再利用する。"], relatedTerms: ["useCallback", "memo", "再レンダー"] },
  { id: "usecallback", term: "useCallback", reading: "ゆーずこーるばっく", aliases: [], category: "React Hooks", tags: ["React", "Hook", "メモ化", "関数"], summary: "関数の参照を再レンダー間でキャッシュするHook。", description: "依存値が変わるまで同じ関数参照を再利用するためのReact Hookです。", whyImportant: "memo化された子コンポーネントの不要な再レンダーを減らしたい場合に役立ちます。", commonMisunderstandings: ["useCallbackは関数の実行結果ではなく、関数そのものをキャッシュします。"], examples: ["onClickハンドラを子コンポーネントに渡すとき、参照を安定させる。"], relatedTerms: ["useMemo", "memo", "再レンダー"] },
  { id: "memo", term: "memo / React.memo", reading: "めも / りあくとめも", aliases: ["React.memo"], category: "React Hooks", tags: ["React", "メモ化", "パフォーマンス"], summary: "propsが変わっていないときに再レンダーをスキップする最適化。", description: "同じpropsであればコンポーネントの再レンダーをスキップできるようにする最適化機能です。", whyImportant: "大きな一覧や重い子コンポーネントでパフォーマンス改善につながる場合があります。", commonMisunderstandings: ["必ず速くなる保証はありません。propsの比較コストや設計の複雑さも考える必要があります。"], examples: ["同じデータを表示するカード一覧の再レンダーを抑える。"], relatedTerms: ["useMemo", "useCallback", "再レンダー"] },
  { id: "rerender", term: "再レンダー", reading: "さいれんだー", aliases: ["re-render", "rerender"], category: "React基礎", tags: ["React", "UI", "パフォーマンス"], summary: "stateやpropsの変化により、UIが再計算されること。", description: "Reactがコンポーネント関数を再実行してUIの表示内容を再計算することです。必ずDOM全体が書き換わるわけではありません。", whyImportant: "再レンダーの仕組みを理解すると、不要な処理やパフォーマンス問題を見つけやすくなります。", commonMisunderstandings: ["再レンダーは悪ではありません。Reactの通常の動作です。"], examples: ["検索キーワードのstateが変わるたびに一覧表示を再計算する。"], relatedTerms: ["state", "props", "memo", "useMemo"] },
  { id: "csr", term: "CSR / Client Side Rendering", reading: "しーえすあーる / くらいあんとさいどれんだりんぐ", aliases: ["Client Side Rendering"], category: "レンダリング", tags: ["Web", "レンダリング", "ブラウザ"], summary: "ブラウザ側でJavaScriptを実行して画面を作る方式。", description: "サーバーから最小限のHTMLとJavaScriptを受け取り、ブラウザ上でUIを組み立てる方式です。", whyImportant: "管理画面やログイン後アプリなど、ユーザー操作が多い画面でよく使われます。", commonMisunderstandings: ["CSRが常に悪いわけではありません。SEOや初期表示速度とのバランスで選びます。"], examples: ["ブラウザでReactアプリを読み込み、APIからデータを取って表示する。"], relatedTerms: ["SSR", "SSG", "Hydration"] },
  { id: "ssr", term: "SSR / Server Side Rendering", reading: "えすえすあーる / さーばーさいどれんだりんぐ", aliases: ["Server Side Rendering"], category: "レンダリング", tags: ["Web", "レンダリング", "サーバー", "SEO"], summary: "サーバー側でHTMLを生成してブラウザに返す方式。", description: "リクエストごとにサーバー側でHTMLを生成し、ブラウザに返すレンダリング方式です。", whyImportant: "初期表示、SEO、SNS共有時の見え方などに関わります。", commonMisunderstandings: ["SSRならすべて速くなるとは限りません。サーバー処理やキャッシュ設計も重要です。"], examples: ["商品ページや記事ページをサーバーでHTML化して返す。"], relatedTerms: ["CSR", "SSG", "ISR", "Hydration"] },
  { id: "ssg", term: "SSG / Static Site Generation", reading: "えすえすじー / すたてぃっくさいとじぇねれーしょん", aliases: ["Static Site Generation"], category: "レンダリング", tags: ["Web", "静的サイト", "レンダリング"], summary: "ビルド時にHTMLを先に生成しておく方式。", description: "サイトをビルドするタイミングでHTMLを作っておき、アクセス時には作成済みのHTMLを配信する方式です。", whyImportant: "表示が速く、サーバー負荷が低く、ブログや用語集のようなコンテンツサイトに向いています。", commonMisunderstandings: ["静的生成でも、JavaScriptを使って一部を動的にすることはできます。"], examples: ["ブログ記事やヘルプページをビルド時にHTML化する。"], relatedTerms: ["SSR", "CSR", "ISR", "Astro"] },
  { id: "isr", term: "ISR / Incremental Static Regeneration", reading: "あいえすあーる / いんくりめんたるすたてぃっくりじぇねれーしょん", aliases: ["Incremental Static Regeneration"], category: "レンダリング", tags: ["Next.js", "静的サイト", "レンダリング"], summary: "静的ページを必要に応じて後から再生成する方式。", description: "SSGで作った静的ページを、一定時間ごとまたは必要なタイミングで再生成できる仕組みです。", whyImportant: "静的サイトの速さと、情報更新の柔軟性を両立できます。", commonMisunderstandings: ["単なるSSRではなく、静的生成済みページを更新していく考え方です。"], examples: ["ニュース一覧や商品ページを一定時間ごとに再生成する。"], relatedTerms: ["SSG", "SSR", "Next.js"] },
  { id: "hydration", term: "Hydration", reading: "はいどれーしょん", aliases: ["ハイドレーション"], category: "レンダリング", tags: ["React", "SSR", "ブラウザ"], summary: "サーバーから届いたHTMLにJavaScriptの動きを接続する処理。", description: "SSRやSSGで先に表示されたHTMLに、クリックイベントなどのJavaScript処理を後から接続して操作可能にする処理です。", whyImportant: "初期表示は見えているのに操作できない時間や、エラーの原因を理解するために重要です。", commonMisunderstandings: ["HTMLが表示された時点で、すべての操作がすぐ可能とは限りません。"], examples: ["サーバーから届いたボタンに、ブラウザ側でonClickを接続する。"], relatedTerms: ["SSR", "SSG", "CSR", "React"] },
  { id: "server-components", term: "Server Components / RSC", reading: "さーばーこんぽーねんつ / あーるえすしー", aliases: ["React Server Components", "RSC"], category: "レンダリング", tags: ["React", "Next.js", "サーバー"], summary: "サーバー側で実行されるReactコンポーネント。", description: "Reactコンポーネントをサーバー側で実行し、クライアントに送るJavaScript量を減らしたり、サーバー側のデータ取得と組み合わせやすくする仕組みです。", whyImportant: "Next.jsのApp Routerなどで重要な概念で、フロントエンドとサーバーの境界理解に関わります。", commonMisunderstandings: ["Server ComponentではuseStateやuseEffectなど、ブラウザで動くHookは使えません。"], examples: ["DBから取得した記事一覧をサーバー側で組み立てて返す。"], relatedTerms: ["Client Components", "use client", "Next.js", "SSR"] },
  { id: "client-components", term: "Client Components", reading: "くらいあんとこんぽーねんつ", aliases: ["Client Component"], category: "レンダリング", tags: ["React", "Next.js", "ブラウザ"], summary: "ブラウザ側で動く必要があるReactコンポーネント。", description: "useState、useEffect、クリックイベント、ブラウザAPIなど、ブラウザ側で実行する必要がある処理を持つコンポーネントです。", whyImportant: "Next.jsでサーバー側とクライアント側の責任分担を考えるために必要です。", commonMisunderstandings: ["すべてのコンポーネントにuse clientを付ければよいわけではありません。必要な境界だけに付けます。"], examples: ["開閉するモーダル、入力フォーム、クリックで状態が変わるボタン。"], relatedTerms: ["Server Components", "use client", "useState", "useEffect"] },
  { id: "use-client", term: "\"use client\"", reading: "ゆーずくらいあんと", aliases: ["use client directive"], category: "レンダリング", tags: ["React", "Next.js", "Client Component"], summary: "このファイル以下をClient Componentとして扱うための宣言。", description: "React Server Componentsの文脈で、サーバーとクライアントの境界を作るための宣言です。ファイルの先頭に書きます。", whyImportant: "Next.jsでuseStateやuseEffectを使うコンポーネントを作るときに必要になります。", commonMisunderstandings: ["すべてのファイルに付けるものではありません。ブラウザ側の機能が必要な境界に付けます。"], examples: ["ファイル先頭に \"use client\"; と書いてからuseStateを使う。"], relatedTerms: ["Client Components", "Server Components", "Next.js"] },
  { id: "xss", term: "XSS / Cross-Site Scripting", reading: "えっくすえすえす / くろすさいとすくりぷてぃんぐ", aliases: ["クロスサイトスクリプティング"], category: "セキュリティ", tags: ["Web", "攻撃", "セキュリティ"], summary: "悪意あるスクリプトをWebページに注入して実行させる攻撃。", description: "攻撃者が悪意あるJavaScriptなどをページに埋め込み、他のユーザーのブラウザで実行させる攻撃です。", whyImportant: "個人情報漏えい、セッション乗っ取り、不正操作などにつながるため、Web開発では必須知識です。", commonMisunderstandings: ["入力チェックだけで完全に防げるとは限らず、出力時のエスケープや安全なAPI利用も重要です。"], examples: ["コメント欄にscriptタグを埋め込み、閲覧者のブラウザで実行させる。"], relatedTerms: ["CSRF", "セキュリティ", "HTML"] },
  { id: "csrf", term: "CSRF / Cross-Site Request Forgery", reading: "しーえすあーるえふ / くろすさいとりくえすとふぉーじぇり", aliases: ["クロスサイトリクエストフォージェリ"], category: "セキュリティ", tags: ["Web", "攻撃", "セキュリティ"], summary: "ログイン済みユーザーに意図しないリクエストを送らせる攻撃。", description: "ユーザーがログイン済みであることを悪用し、本人の意図しない操作リクエストを送信させる攻撃です。", whyImportant: "設定変更、送金、投稿、削除などの重要操作を守るために知っておく必要があります。", commonMisunderstandings: ["XSSとは違い、ユーザーのブラウザに悪意あるスクリプトを直接実行させることだけが目的ではありません。"], examples: ["ログイン中の管理画面に対して、別サイトから削除リクエストを送らせる。"], relatedTerms: ["XSS", "セキュリティ", "Cookie"] }
];

glossaryTerms.push(...extraTerms.map(initialTerm));

const compactTerms: Array<[string, string, string, string, string[], string, string, string[], string[]]> = [
  ["typescript", "TypeScript", "たいぷすくりぷと", "言語", ["JavaScript", "型", "開発効率"], "JavaScriptに型の仕組みを加えた言語。", "型注釈や型チェックにより、実行前にミスを見つけやすくし、エディタ補完も強化します。", ["TS"], ["JavaScript", "型", "ビルド"]],
  ["type-erasure", "型はビルド後に消える", "かたはびるどごにきえる", "言語", ["TypeScript", "型", "ビルド"], "TypeScriptの型情報は主に開発時に使われ、実行時には残らないことが多いという性質。", "TypeScriptの型はコードを書くときやビルド時のチェックに使われますが、ブラウザで実行されるJavaScriptには多くの場合残りません。", ["type erasure", "型消去"], ["TypeScript", "API", "バリデーション"]],
  ["api", "API", "えーぴーあい", "API", ["Web", "連携", "バックエンド"], "アプリ同士がデータや機能をやり取りするための窓口。", "あるアプリやサービスの機能やデータを、別のアプリから利用するためのインターフェースです。", ["Application Programming Interface"], ["REST", "GraphQL", "JSON"]],
  ["rest", "REST / REST API", "れすと / れすとえーぴーあい", "API", ["API", "HTTP", "Web"], "URLとHTTPメソッドを使ってリソースを操作するAPI設計の考え方。", "ユーザー、記事、予約などをリソースとしてURLで表し、GET、POST、PUT、DELETEなどのHTTPメソッドで操作する設計です。", ["Representational State Transfer"], ["API", "GraphQL", "HTTP"]],
  ["graphql", "GraphQL", "ぐらふきゅーえる", "API", ["API", "クエリ", "データ取得"], "クライアントが欲しいデータの形を指定できるAPI用クエリ言語。", "クライアントが必要なフィールドをクエリとして指定し、その形に合わせてデータを取得できる仕組みです。", [], ["API", "REST", "クエリ"]],
  ["rest-overfetching", "RESTは取りすぎ？", "れすとはとりすぎ", "API", ["REST", "GraphQL", "データ取得"], "REST APIでは必要以上のデータが返ることがあるという話。", "エンドポイントごとに返すデータが決まっているため、画面で必要な項目より多くのデータを受け取る場合があります。", ["overfetching", "オーバーフェッチ"], ["REST", "GraphQL", "API"]],
  ["jest", "Jest", "じぇすと", "テスト", ["JavaScript", "テスト", "Unit Test"], "JavaScript/TypeScriptでよく使われるテストフレームワーク。", "関数やコンポーネントのテストを実行するためのJavaScriptテストフレームワークです。", [], ["Vitest", "Testing Library", "単体テスト"]],
  ["vitest", "Vitest", "ばいてすと", "テスト", ["Vite", "JavaScript", "テスト"], "Viteと相性がよい高速なテストフレームワーク。", "Viteベースのプロジェクトで使いやすいJavaScript/TypeScript向けテストフレームワークです。", [], ["Jest", "Vite", "単体テスト"]],
  ["testing-library", "Testing Library", "てすてぃんぐらいぶらり", "テスト", ["React", "テスト", "UI"], "ユーザーの使い方に近い形でUIをテストするライブラリ群。", "画面上のテキストやボタンなど、ユーザーが見る・操作するものを基準にテストするためのライブラリです。", ["React Testing Library"], ["Jest", "Vitest", "結合テスト"]],
  ["playwright", "Playwright", "ぷれいらいと", "テスト", ["E2E", "ブラウザ", "テスト"], "実際のブラウザを自動操作してE2Eテストを行うツール。", "Chromium、Firefox、WebKitなどのブラウザを自動操作し、ユーザー操作に近い形でWebアプリをテストします。", [], ["Cypress", "E2Eテスト", "結合テスト"]],
  ["cypress", "Cypress", "さいぷれす", "テスト", ["E2E", "ブラウザ", "テスト"], "WebアプリのE2Eテストやコンポーネントテストに使われるツール。", "ブラウザ上でWebアプリを操作しながらテスト・デバッグできるツールです。", [], ["Playwright", "E2Eテスト", "Testing Library"]],
  ["unit-test", "単体テスト / Unit Test", "たんたいてすと / ゆにっとてすと", "テスト", ["テスト", "品質", "関数"], "関数や小さな部品など、狭い単位を確認するテスト。", "関数や小さなコンポーネントなど、独立した小さい単位が期待通り動くかを確認するテストです。", ["Unit Test"], ["結合テスト", "E2Eテスト", "Jest", "Vitest"]],
  ["integration-test", "結合テスト / Integration Test", "けつごうてすと / いんてぐれーしょんてすと", "テスト", ["テスト", "品質", "連携"], "複数の部品を組み合わせた動作を確認するテスト。", "複数の関数、コンポーネント、API連携などを組み合わせたときに正しく動くかを確認します。", ["Integration Test"], ["単体テスト", "E2Eテスト", "Testing Library"]],
  ["e2e-test", "E2Eテスト", "いーつーいーてすと", "テスト", ["テスト", "ブラウザ", "業務フロー"], "ユーザー操作の流れ全体を確認するテスト。", "ログイン、入力、保存、完了確認など、ユーザーが実際に行う一連の流れを通してアプリを確認するテストです。", ["End to End Test"], ["Playwright", "Cypress", "単体テスト", "結合テスト"]],
  ["stub", "スタブ", "すたぶ", "テスト", ["テスト", "モック", "代替実装"], "本物の代わりに固定の返答をする簡易的な偽物。", "テスト対象が依存する外部処理の代わりに、固定の結果を返す簡単な代替物です。", ["Stub"], ["モック", "APIをモックする", "単体テスト"]],
  ["mock", "モック", "もっく", "テスト", ["テスト", "代替実装", "検証"], "本物の代わりに使う偽物の実装やデータ。", "本物のAPI、関数、サービスなどの代わりに使う偽物です。呼ばれたかを検証する意味でも使います。", ["Mock"], ["スタブ", "APIをモックする", "Testing Library"]],
  ["api-mocking", "APIをモックする", "えーぴーあいをもっくする", "テスト", ["API", "テスト", "モック"], "本物のAPIを叩かず、偽物のレスポンスを返すこと。", "テスト中に本物のAPIへ通信せず、あらかじめ用意したレスポンスを返すようにします。", ["API mocking"], ["API", "モック", "スタブ", "E2Eテスト"]],
  ["state-management", "状態管理", "じょうたいかんり", "状態管理", ["React", "state", "設計"], "アプリ内の状態をどこに置き、どう更新・共有するかを決めること。", "ログインユーザー、入力フォーム、通知などの状態を、どこに保持し、どのように更新し、どこへ共有するかを設計します。", ["State Management"], ["ローカルstate", "グローバルstate", "Redux", "Zustand"]],
  ["local-state", "ローカルstate", "ろーかるすてーと", "状態管理", ["React", "state", "Component"], "特定のコンポーネント内だけで使う状態。", "あるコンポーネントとその近くの子コンポーネントだけで使う状態です。useStateで十分なことが多いです。", ["Local State"], ["グローバルstate", "useState", "状態管理"]],
  ["global-state", "グローバルstate", "ぐろーばるすてーと", "状態管理", ["React", "state", "共有"], "複数の画面やコンポーネントで共有する状態。", "アプリ全体または広い範囲で共有される状態です。ログインユーザー、テーマ、権限、通知などが該当します。", ["Global State"], ["ローカルstate", "Redux", "Zustand", "Context API"]],
  ["redux", "Redux", "りだっくす", "状態管理", ["React", "状態管理", "グローバルstate"], "予測可能なグローバル状態管理のためのライブラリ。", "アプリ全体の状態を一方向のデータフローで管理するためのJavaScriptライブラリです。", [], ["状態管理", "Zustand", "Context API"]],
  ["zustand", "Zustand", "ずすたんど", "状態管理", ["React", "状態管理", "軽量"], "軽量でシンプルなReact向け状態管理ライブラリ。", "hooksベースで少ない記述量で使える状態管理ライブラリです。Reduxよりシンプルに書ける場面があります。", [], ["Redux", "Jotai", "状態管理"]],
  ["jotai", "Jotai", "じょたい", "状態管理", ["React", "状態管理", "atom"], "atomという小さな状態単位を組み合わせる状態管理ライブラリ。", "atomと呼ばれる小さな状態の単位を作り、それらを組み合わせて状態管理するReact向けライブラリです。", [], ["Zustand", "Recoil", "状態管理"]],
  ["recoil", "Recoil", "りこいる", "状態管理", ["React", "状態管理", "atom"], "atomとselectorを使って状態や派生状態を扱うReact向け状態管理ライブラリ。", "Reactアプリで共有状態や派生状態を扱うための状態管理ライブラリです。", [], ["Jotai", "Redux", "状態管理"]],
  ["valtio", "Valtio", "ばるちお", "状態管理", ["React", "状態管理", "Proxy"], "Proxyベースで状態を扱う状態管理ライブラリ。", "JavaScriptのProxyを使って、普通のオブジェクトを書き換えるような感覚で状態を管理できるライブラリです。", [], ["Zustand", "Jotai", "状態管理"]],
  ["context-api", "Context API", "こんてきすとえーぴーあい", "状態管理", ["React", "状態共有", "props"], "propsを何階層も渡さずに値を共有するReact標準機能。", "親から深い子コンポーネントへpropsを何段も渡さずに、共通の値を共有するためのReact標準機能です。", ["React Context"], ["props", "グローバルstate", "Redux", "Zustand"]],
  ["plain-css", "普通のCSS", "ふつうのしーえすえす", "CSS設計", ["CSS", "スタイル", "基礎"], "CSSファイルに直接スタイルを書く基本的な方法。", ".button { color: red; } のようにCSSファイルへクラスや要素のスタイルを記述する方法です。", ["Vanilla CSS"], ["CSS", "CSS Modules", "Sass", "Tailwind CSS"]],
  ["css-modules", "CSS Modules", "しーえすえすもじゅーる", "CSS設計", ["CSS", "スコープ", "React"], "CSSクラス名をファイル単位でローカルに扱う仕組み。", "CSSクラス名が他のファイルと衝突しないように、コンポーネント単位でローカルスコープ化する仕組みです。", [], ["CSS", "普通のCSS", "CSS-in-JS"]],
  ["sass-scss", "Sass / SCSS", "さす / えすしーえすえす", "CSS設計", ["CSS", "プリプロセッサ", "スタイル"], "変数やネストなどを使えるCSS拡張言語。", "CSSに変数、ネスト、mixinなどの便利な機能を追加した拡張言語です。ビルド時に通常のCSSへ変換されます。", ["Sass", "SCSS"], ["CSS", "PostCSS", "ビルド"]],
  ["postcss", "PostCSS", "ぽすとしーえすえす", "CSS設計", ["CSS", "変換", "ビルド"], "JavaScriptプラグインでCSSを変換するツール。", "プラグインを使ってCSSを変換するツールです。自動プレフィックス付与、将来のCSS構文変換、lintなどに使われます。", [], ["CSS", "Tailwind CSS", "ビルド"]],
  ["tailwind-css", "Tailwind CSS", "ているうぃんどしーえすえす", "CSS設計", ["CSS", "ユーティリティクラス", "UI"], "小さなユーティリティクラスを組み合わせてデザインを作るCSSフレームワーク。", "flex、pt-4、text-centerのような小さなクラスをHTMLやJSXに直接書き、UIを組み立てるCSSフレームワークです。", ["Tailwind"], ["ユーティリティクラス", "flex", "items-center", "CSS"]],
  ["css-in-js", "CSS-in-JS", "しーえすえすいんじぇいえす", "CSS設計", ["CSS", "JavaScript", "React"], "JavaScript/TypeScriptの中にCSSを書く手法。", "コンポーネントのロジックとスタイルを近い場所に置き、propsなどに応じて動的にスタイルを変えられる手法です。", ["CSS in JavaScript"], ["CSS Modules", "React", "CSS"]],
  ["utility-class", "ユーティリティクラス", "ゆーてぃりてぃくらす", "CSS設計", ["CSS", "Tailwind CSS", "スタイル"], "1つの小さなスタイルを表すCSSクラス。", "flex、px-4、text-centerのように、1つのクラスが1つまたは少数のスタイルを表す考え方です。", ["Utility Class"], ["Tailwind CSS", "flex", "px-4", "py-2"]],
  ["tailwind-flex", "flex", "ふれっくす", "CSS設計", ["CSS", "Tailwind CSS", "Flexbox"], "Flexboxレイアウトを有効にするTailwindクラス。", "CSSのdisplay: flexを適用し、子要素を横並びや縦並びに配置しやすくするクラスです。", ["Tailwind flex", "display flex"], ["Tailwind CSS", "items-center", "justify-between", "gap-2"]],
  ["tailwind-items-center", "items-center", "あいてむずせんたー", "CSS設計", ["CSS", "Tailwind CSS", "Flexbox"], "Flexboxの交差軸方向で要素を中央揃えにするTailwindクラス。", "CSSのalign-items: centerに相当し、Flexbox内の子要素を交差軸方向に中央揃えします。", ["align-items center"], ["flex", "justify-between", "Tailwind CSS"]],
  ["tailwind-justify-between", "justify-between", "じゃすてぃふぁいびとうぃーん", "CSS設計", ["CSS", "Tailwind CSS", "Flexbox"], "主軸方向に要素を両端へ寄せ、間を空けるTailwindクラス。", "CSSのjustify-content: space-betweenに相当し、Flexbox内の要素を主軸方向に両端配置します。", ["justify-content space-between"], ["flex", "items-center", "Tailwind CSS"]],
  ["tailwind-gap-2", "gap-2", "ぎゃっぷつー", "CSS設計", ["CSS", "Tailwind CSS", "余白"], "要素間のすき間をTailwindのスケールで指定するクラス。", "FlexboxやGridの子要素同士の間隔をTailwindの spacing scale に従って設定するクラスです。", ["gap"], ["Tailwind CSS", "flex", "px-4", "py-2"]],
  ["tailwind-px-4", "px-4", "ぴーえっくすふぉー", "CSS設計", ["CSS", "Tailwind CSS", "余白"], "左右のpaddingをTailwindのスケールで指定するクラス。", "padding-leftとpadding-rightをTailwindのスケールで4に設定するクラスです。xは左右方向を意味します。", ["padding x"], ["py-2", "gap-2", "Tailwind CSS"]],
  ["tailwind-py-2", "py-2", "ぴーわいつー", "CSS設計", ["CSS", "Tailwind CSS", "余白"], "上下のpaddingをTailwindのスケールで指定するクラス。", "padding-topとpadding-bottomをTailwindのスケールで2に設定するクラスです。yは上下方向を意味します。", ["padding y"], ["px-4", "gap-2", "Tailwind CSS"]],
  ["build", "ビルド", "びるど", "ビルドツール", ["開発", "変換", "最適化"], "開発中のコードを本番やブラウザで動く形に変換・最適化すること。", "TypeScriptやJSX、CSS、画像などを、ブラウザや本番環境で読み込みやすい形に変換・圧縮・最適化する処理です。", ["Build"], ["ビルドツール", "バンドラー", "トランスパイル", "ミニファイ"]],
  ["build-tool", "ビルドツール", "びるどつーる", "ビルドツール", ["開発", "ビルド", "ツール"], "ビルド処理を実行・管理するための道具。", "開発中のコードを変換、結合、最適化し、ブラウザや本番環境で動く形に整えるツールです。", ["Build Tool"], ["Vite", "Webpack", "Turbopack", "バンドラー"]],
  ["bundler", "バンドラー", "ばんどらー", "ビルドツール", ["JavaScript", "ビルド", "依存関係"], "複数のファイルを依存関係に沿ってまとめるツール。", "JavaScript、CSS、画像などの複数ファイルを依存関係に沿って解析し、ブラウザで読み込みやすい形にまとめるツールです。", ["Bundler"], ["Webpack", "Vite", "Rollup", "esbuild"]],
  ["webpack", "Webpack", "うぇぶぱっく", "ビルドツール", ["JavaScript", "バンドラー", "ビルド"], "長く使われてきた代表的なJavaScriptモジュールバンドラー。", "JavaScriptやCSSなどの依存関係を解析し、ブラウザで使いやすい形にまとめるモジュールバンドラーです。", ["webpack"], ["バンドラー", "Vite", "Rspack", "Babel"]],
  ["vite", "Vite", "ゔぃーと", "ビルドツール", ["JavaScript", "ビルド", "開発サーバー"], "高速なフロントエンド開発・ビルドツール。", "開発中の起動や更新を高速化し、本番向けビルドも行えるフロントエンドビルドツールです。", [], ["Vitest", "Rollup", "esbuild", "HMR"]],
  ["vite-plus", "Vite+", "ゔぃーとぷらす", "ビルドツール", ["Vite", "ビルド", "周辺ツール"], "文脈によりVite関連の拡張・派生・周辺ツールを指す表現。", "標準的な単一ツール名というより、Viteを中心にした周辺構成や拡張を指して使われる可能性がある表現です。", ["Vite関連ツール"], ["Vite", "Vitest", "ビルドツール"]],
  ["turbopack", "Turbopack", "たーぼぱっく", "ビルドツール", ["Next.js", "Rust", "バンドラー"], "Next.jsに組み込まれている高速なRust製バンドラー。", "JavaScript/TypeScript向けに作られた高速なインクリメンタルバンドラーで、Next.jsの開発環境などで使われます。", [], ["Next.js", "Webpack", "Rspack", "バンドラー"]],
  ["rspack", "Rspack", "あーるえすぱっく", "ビルドツール", ["Rust", "バンドラー", "Webpack互換"], "Rustで書かれた高速なJavaScriptバンドラー。", "webpack互換APIを重視したRust製の高性能バンドラーです。既存webpack構成からの移行を意識しています。", [], ["Webpack", "Turbopack", "バンドラー"]],
  ["rollup", "Rollup", "ろーるあっぷ", "ビルドツール", ["JavaScript", "バンドラー", "ライブラリ開発"], "JavaScriptモジュールをまとめるバンドラー。", "ES Modulesを中心にJavaScriptコードをまとめるバンドラーです。ライブラリ開発やViteの本番ビルド内部でも関係します。", [], ["Vite", "バンドラー", "esbuild"]],
  ["esbuild", "esbuild", "いーえすびるど", "ビルドツール", ["Go", "バンドラー", "高速"], "Goで書かれた非常に高速なバンドラー・ミニファイア。", "JavaScript/TypeScriptの変換、バンドル、ミニファイを非常に高速に行うツールです。", [], ["Vite", "Rollup", "SWC", "Babel"]],
  ["swc", "SWC", "えすだぶりゅーしー", "ビルドツール", ["Rust", "コンパイラ", "JavaScript"], "Rustで書かれた高速なJavaScript/TypeScriptコンパイラ系ツール。", "JavaScriptやTypeScriptの変換、コンパイル、バンドルなどに使われるRust製の高速ツールです。", ["Speedy Web Compiler"], ["Babel", "esbuild", "Next.js", "トランスパイル"]],
  ["babel", "Babel", "ばべる", "ビルドツール", ["JavaScript", "コンパイラ", "トランスパイル"], "新しいJavaScript構文などを別の形に変換するコンパイラ。", "新しいJavaScript構文やJSXなどを、実行環境に合わせたJavaScriptへ変換するために使われてきたコンパイラです。", [], ["SWC", "esbuild", "トランスパイル", "JSX"]],
  ["transpile", "トランスパイル", "とらんすぱいる", "ビルドツール", ["ビルド", "変換", "TypeScript"], "あるコードを同じようなレベルの別コードへ変換すること。", "TypeScriptや新しいJavaScript構文、JSXなどを、実行環境で動くJavaScriptへ変換することです。", ["transpile", "transpilation"], ["TypeScript", "Babel", "SWC", "ビルド"]],
  ["minify", "ミニファイ", "みにふぁい", "ビルドツール", ["ビルド", "最適化", "ファイルサイズ"], "コードから不要な空白やコメントを削って小さくすること。", "JavaScriptやCSSから空白、改行、コメントなどを削り、変数名を短くするなどしてファイルサイズを小さくする処理です。", ["minify", "minification"], ["ビルド", "esbuild", "SWC", "バンドラー"]],
  ["hmr", "HMR / Hot Module Replacement", "えいちえむあーる / ほっともじゅーるりぷれいすめんと", "ビルドツール", ["開発体験", "Vite", "Webpack"], "開発中にページ全体を再読み込みせず、変更部分だけ差し替える仕組み。", "開発中にコードを変更したとき、ページ全体をリロードせずに変更したモジュールだけを差し替える仕組みです。", ["Hot Module Replacement"], ["Vite", "Webpack", "ビルドツール"]]
];

glossaryTerms.push(
  ...compactTerms.map(([id, term, reading, category, tags, summary, description, aliases, relatedTerms]) =>
    initialTerm({
      id,
      term,
      reading,
      aliases,
      category,
      tags,
      summary,
      description,
      whyImportant: "実務で設定ファイル、エラー文、技術記事、AIへの依頼文を読むときに意味を取り違えにくくなります。",
      commonMisunderstandings: ["文脈によって意味や使いどころが変わるため、関連用語とあわせて確認すると理解しやすくなります。"],
      examples: [`${term} が出てきたら、カテゴリ「${category}」の文脈で確認する。`],
      relatedTerms
    })
  )
);
