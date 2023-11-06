import { CCInteger,_decorator, Component, Node ,Prefab} from 'cc';

const { ccclass, property } = _decorator;

enum BlockType{
    BT_NONE,
    BT_STONE,
}
@ccclass('GameManager')
export class GameManager extends Component {
    @property({type:Prefab})
    public  boxPrefab:Prefab|null=null;
    @property({type: CCInteger})
    public roadLength: number = 50;
    private _road: BlockType[] = [];
    start() {
            //...
    }
//nihai
    update(deltaTime: number) {
        
    }
}


