$(function() {
    $('.mainimg-tate').vegas({
        slides: [
            { src: './images/ha1tate.png' },	//1枚目の写真指定
            { src: './images/hatatenp.png' },	//2枚目の写真指定
            { src: './images/hatate3.png' },	//3枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 8000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});


$(function() {
    $('.mainimg-yoko').vegas({
        slides: [
            { src: './images/yoko_1.jpg' },	//1枚目の写真指定
            { src: './images/yoko_2.jpg' },	//2枚目の写真指定
            { src: './images/yoko_3.jpg' },	//3枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 8000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});
