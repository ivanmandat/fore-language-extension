# Пример создания компонента TreeListBox

Пример создания компонента TreeListBox
-


# Пример создания компонента TreeListBox


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


// Создадим вершины
var json = genJson(5540, 254, false, 123457);

// Создадим компонент
     var t, treelist;
    t = treelist = new PP.Ui.TreeListBox({
        ParentNode: 'container',
        DataObject: json,
        DataMappers: {

            Key: 'k',
            Index: 'i',
            Parent: 'p',
            Content: new PP.PropertyMapper({
                Getter: function (item) { return item.a.it },
                Setter: function (item, value) { item.a.it = value; },
                Context: null
            }),
            Selected: 's',
            FixedSelected: '@fs',
            Expanded: 'e',

            ChildrenCount: '@cc'
        },
        Width: 700,
        Height: 550,
        ShowCheckBoxes: true,
        EnableSort: true,
        ShowCaptions: true,
        EnableResizeColumns: false,
        EnableColumnsMenu: true,

        EnableEdit: true,
        ShowTree: true,
        Captions:

        [{
            Content: 'first',
            Width: '36%'
        },{
            Content: 'second',
            Width: '11%'
        },{

            Content: 'third',
            Width: '53%'
        }
        ],
    });

В результате выполнения примера был создан компонент TreeListBox.


См. также:


[TreeListBox](TreeListBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
