/**
 * 应用全局主题选项
 * @enum
 * @property { number } THEME_LIGHT
 * @property { number } THEME_DARK
 * @property { number } THEME_MAC_AUTO
 */
export enum ThemeOption {
    /**
     * 亮色主题
     */
    THEME_LIGHT,
    /**
     * 暗色主题
     */
    THEME_DARK,
    /**
     * ！Mac 专用
     * 
     * 自动切换主题
     * 
     * 自动切换亮色或暗色主题
     */
    THEME_MAC_AUTO

}