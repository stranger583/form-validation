# Price & Age Group Management System

這是一個基於 React、Typescript、tailwind css 的系統，可以管理年齡區間和價格，並具有顯示價格添加千分位逗號做分隔、年齡找重複和未包含區間功能。

## Features

- addComma function: 將數字每個千分位新增逗號分隔
- getNumberIntervals function: 傳入年齡區間，回傳 0 到 20 歲之間未包含和重疊區間
- PriceInput Component: 只能輸入數字或空白，顯示時加上千分位逗號，若是空白則出現警告
- AgeGroupSelect Component: 可選擇起始年齡和結束年齡，範圍限制在 0-20 的年齡區間，起始年齡不能大於結束年齡、結束年齡不能小於起始年齡。若區間重複則出現警告
- AgeGroupPriceList Component: 支援 onChange props 取得 result 資料，可以新增或移除列表。若年齡區間涵蓋 0-20 則 disabled 新增按鈕

### `npm install -g pnpm`

沒有安裝過 pnpm 可以透過指令安裝

### `pnpm i`

下載 node modules

### `pnpm start`

在開發模式啟動本地端專案
在 [http://localhost:3000](http://localhost:3000) 打開專案


### `pnpm test`

進行 addComma 和 getNumberIntervals 兩支檔案的單元測試

