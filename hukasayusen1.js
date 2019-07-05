(function () {
	// 2分木を表現するためのクラス
	class BinaryTree {
		constructor (label, left, right) {
			// 自分
			this.label = label;
		 	// 左の子
			this.left = left;
			// 右の子
			this.right = right;	
		}	
	}

	/* 下記の2分木を作成
	 *				 a
	 *			 /   \		
	 *			b     d 
	 *		 / \   / \
	 *		e  	f  h  i
	 *   / \		
	 *  j		k
	*/
	var tree = new BinaryTree("a",
	 new BinaryTree("b",
		new BinaryTree("e", new BinaryTree("j", null, null), new BinaryTree("k",null, null)),
		 new BinaryTree("f", null, null)),
			new BinaryTree("d", new BinaryTree("h",null, null), new BinaryTree("i", null, null)));

	
	console.log('go');
	// 検索スタート
	if (search(tree)) {
		// 見つかった場合
		console.log('bingo!!!');
	} else {
		// 見つからなかった場合
		console.log('nothing...')
	}

	// 探索処理
	function search(node) {
		
		if (node == null) {
			return 0;
		}

		// ここの文字を探す(f)
		if (node.label == 'f') {
			return 1;
		}
		// 探す順に表示していく
		console.log('this is ' + node.label)

		// 目的の値が見つかったら終了
		if (search(node.left) || search(node.right)) {
			return 1;
		}
	}
})();