カーソルキーでエントリーを移動するjQuery plugin

#### 使い方

	$(function () {
		$.keyscroll({
			// スクロールのエフェクト名 
			// 初期値「quart」 
			// quartは設定されていない場合、内部のものを設定する 
			'scroll_type' : 'quart',
			// スクロール時間 
			// 初期値900 
			'time' : 900,
			// 各entryのCSS Selector 
			'selector' : '.entryWrapper'
		});
	})

#### 読み込み済み画像

使用される際は是非以下のマークも表示させてみてください。  
（必須ではありません）

![keybord mark](http://tech.kayac.com/img2/img_keybord_01.png)  
（画像URLが変更になる可能性があるので、画像はコピーしてご使用ください）

#### 紹介記事

[カーソルキーでエントリーを移動するjQuery pluginを作成しました | tech.kayac.com - KAYAC engineers' blog](http://tech.kayac.com/archive/jquery-keyscroll-plugin.html)