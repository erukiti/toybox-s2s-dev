# toybox-s2s-dev

[erukiti/spike\-react\-redux\-using\-s2s](https://github.com/erukiti/spike-react-redux-using-s2s)をベースにしてるんだけど、一応実用的なアプリを作ることを目標＆そのためのs2s環境を模索

## s2s

actions, reducersはそれぞれ自動生成。

1. dispatch関連はrecuder.tsに生えた関数の引数を元に自動生成
2. 


### index-rule

src/renderer/**/index.ts が作成された瞬間に、action.ts, component.tsx, index.ts, reducer.tsをそれぞれディレクトリ名に合わせたテンプレート展開をする。

### reducers-rule

src/renderer/**/reducer.ts を編集したら、その結果を ../actions.ts, ../reducers.tsに反映させる
