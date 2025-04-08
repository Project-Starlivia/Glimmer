.glimx。jsxとかtsxのノリでいい感じにシーン管理ができることを目指すもの。一旦アイデアだけ供養
- sceneで書いてるけど、classとして扱えるようにしたい
- idは指定でき、なかったら自動で振られる
- id経由型チェックとかしたい
- これをもとにguiエディタの生成、編集ができる
- 子→親のauto injectionとか整備したい
	- →自分の子供は全部autoinjectionかな。複数ある場合ではあるが
	- 複数の同じ型のインジェクト欲しいよなぁ。arrayというかdictというか
```tsx
import { Scene, Transform, MeshRenderer, Light, Camera } from 'render';
import { IUpdatable } from 'engine';

import { Cube } from './cube.fbx';

class MyCubeController: IUpdatable {
	private readonly Transform transform;
	public MyCubeController(Transform transform){
		this.transform = transform;
	}
	public function Update(){
		// movement...
	}	
}

const MainScene: Scene = () =>{
	// can write scripts
	return {
		<>
			<MyCubeController transform="CubeTranform">
				<Transform id="CubeTranform" />
				<SpriteRenderer mesh={ Cube } />
			</MyCubeController>
			<Light />
			<Camera />
		</>
	}
}
```