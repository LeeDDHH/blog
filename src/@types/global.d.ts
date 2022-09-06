// Gatsbyのグローバル変数
declare const __PATH_PREFIX__: string

// windowオブジェクトから参照するオブジェクト
// iframely
interface Window {
  iframely: {
    load: () => void
  }
}
