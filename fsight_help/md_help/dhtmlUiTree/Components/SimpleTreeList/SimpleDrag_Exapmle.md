# Пример создания компонента SimpleTreeList с режимом перетаскивания

Пример создания компонента SimpleTreeList с режимом перетаскивания
-


# Пример создания компонента SimpleTreeList с режимом перетаскивания


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container». Добавьте картинку, содержащую список
 пиктограмм вершин.


Подключим скрипт, генерирующий случайные вершины:


<script src="genJson.js" type="text/javascript"></script>
[![](../../Opened.gif)![](../../Closed.gif)Скрипт genJson.js](javascript:TextPopup(this))


 var random = function (nseed)
    {
        var seed;
        var constant = Math.pow(2, 13) + 1;

        var prime = 37;
        var maximum = Math.pow(2, 50);
        if (nseed)
            seed = nseed;
        if (seed == null)

            seed = (new Date()).getTime();
        return {
            next: function ()
            {
                seed *= constant;
                seed += prime;

                seed %= maximum;
                return seed / maximum;
            }
        };
    };
var genJson = function (count, root_length, asArray, seed)
{
    var rnd = random(seed);

    var randomHash = function (len) {
        var letters = 'основные архитектурные черты динамическая типизация слабая типизация автоматическое управление памятью прототипное программирование функции как объекты первого класса при разработке была цель сделать язык похожим на но при этом лёгким для использования непрограммистами не владеет какая-либо компания или организация что отличает его от ряда языков программирования используемых в веб-разработке';
        var result = '';

        for (var i = 0; i < len; i += 2)
        {
            var idx = Math.floor(rnd.next() * (letters.length - 2));
            if (letters[idx] === ' ')
                idx += 1;
            result += i ? letters[idx] : letters[idx].toUpperCase();

            result += letters[idx+1];
        }
        return result;
    };
    var gen = function ()
    {
    var key, par, txt, node;
    key = (100 + genKey) + '000';
  par = (genKey > root_length) ? (Math.floor(rnd.next() * genKey)) : undefined;

  txt = randomHash(Math.floor(rnd.next() * 15 + 5));
  if (par || par === 0)
  {
  if (asArray)
  json[par]["@hc"] = true;
  else
  json[(100 + par) + '000']["@hc"] = true;
  }
if(par !== undefined)
  par = (100 + par) + '000';
node = {
"k": key,
            "@l": 2,

            "@hc": false,
            "@hs": false,
            "e": false,
            "n": txt,
            "a": { "it": [txt, key, randomHash(Math.floor(rnd.next() * 35 + 15)), Math.floor(rnd.next() * 1000000), Math.floor(rnd.next() * 1000000000) / 1000] },

            "h": true,
            "o": 0,
            "s": false,
            "p": par,
"ii": [rnd.next() * 13 | 0, rnd.next() * 18 | 0]
};
if (rnd.next() * 10 > 7)
{
node['s'] = true;
node['@fs'] = true;
}
return node;

    };
   var json, i, node;
   var genKey = 0;
if (asArray)
{
json = [];
for (i = 0; i < count; i++)
{
node = gen();
json.push(node);
genKey += 1;
}
}
else
{
json = {};
for (i = 0; i < count; i++)
{
node = gen();
json[node.k] = node;
delete node.k;
genKey += 1;
}
}
    return json;
};
// -------------------------------

В тег <script> добавим следующий код:


// Определим события перетаскивания
var onNodeDrag = function (s, a)
{
// Запретим добавление листьям новых потомков
    var targetIsFolder = treelist.getNodeChildrenCount(a.TargetNode) > 0,
           draggableIsFolder = treelist.getNodeChildrenCount(a.Nodes[0]) > 0;
    if (!targetIsFolder)
a.CanTakeChildren = false;
};

var onNodeDragEnd = function (s, a) {
// Выведем в консоль результат перетаскивания

    console.log(a);
};

var onNodeDragStart = function (s, a)
{
// Запрещаем перетаскивание последнего потомка
    var dragNode = a.Nodes[0],
    dragNodeParent = t.getNodeParent(dragNode);
    if (dragNodeParent && t.getNodeChildrenCount(dragNodeParent) == 1)
    a.Cancel = true; // отменяем действие, чтобы вершина оставалась "папкой", т.е. чтобы у нее были дочерние элементы
};
// --------------------
// Создадим дерево
    var json = genJson(500, 100, false, 1234567);  // Функция генерирования вершин
    var t, Tree;
    t = Tree = new PP.Ui.SimpleTreeList({
        DataObject: json,
        DataMappers: {

            Key: 'k',
            Index: 'i',
            Parent: 'p',
            Content: new PP.PropertyMapper({
                Getter: function (item) { return item.a.it },
                Setter: function (item, value) { item.a.it = value; }
            }),
            Selected: 's',
            Expanded: 'e',
            ImageIndex: new PP.PropertyMapper({
            Getter: function (item) { return this.getNodeChildrenCount(item.k) ? (item.e ? 1 : 0) : 2 },
            Context: t
            }),

        },
        ImageList: imageList = new PP.ImageList({
            Source: '../../../build/img/treeIcons.png',
            IconHeight: 20,
            IconWidth: 20
        }),
        Width: 580,
        Height: 580,
        // Зададим настройки перетаскивания
        EnableDragAndDrop: true,
        DragAndDropMode: 'MultiDrag',
        DragAndDropDelay: 200,
        DragAndDropIndent: 0,

        EnableDragOutside: true,
        EnableDropOutside: true,
        EnableColumnsMenu: true,
        SelectionMode: 'ControlShiftMultiSelect',
        ParentNode: 'container',
        Captions: [{
         Content: 'first',
            Width: '40%'
        },{
         Content: 'second',

            Width: '10%'
        },{
         Content: 'third',
            Width: '50%'
        }],
        NodeDrag: onNodeDrag,
        NodeDragStart: onNodeDragStart,
        NodeDragEnd: onNodeDragEnd
    });
    Tree.setSelectedForAll(false);

В результате выполнения примера был создан компонент SimpleTreeList
 c возможностью перетаскивания вершин.


См. также:


[SimpleTreeList](SimpleTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
