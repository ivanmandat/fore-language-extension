# Пример создания компонента DynamicTreeList

Пример создания компонента DynamicTreeList
-


# Пример создания компонента DynamicTreeList


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и таблицы визуальных стилей PP.css. В теге BODY добавьте элемент
 DIV с идентификатором «container».


Подключим скрипт, генерирующий случайные вершины:


<script src="genJsonDyn.js" type="text/javascript"></script>
[![](../../Opened.gif)![](../../Closed.gif)Скрипт genJsonDyn.js](javascript:TextPopup(this))


var seed = 12354654;
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
if (seed)

	var rnd = random(seed);
var randomHash = function (len)
{
	var letters = 'основные архитектурные черты динамическая типизация слабая типизация автоматическое управление памятью прототипное программирование функции как объекты первого класса при разработке была цель сделать язык похожим на но при этом лёгким для использования непрограммистами не владеет какая-либо компания или организация что отличает его от ряда языков программирования используемых в веб-разработке';
	var result = '';
	for (var i = 0; i < len; i += 2)
	{

		var idx = Math.floor(rnd.next() * (letters.length - 2));
		if (letters[idx] === ' ')
			idx += 1;
		result += i ? letters[idx] : letters[idx].toUpperCase();
		result += letters[idx + 1];
	}
	return result;
};
var genNode = function (rootKey, index, length)
{
	var key, txt, node;
	key = rootKey ? (rootKey + '-' + index) : '' + index;
	txt = randomHash(Math.floor(rnd.next() * 15 + 5));
	node = {
		"k": key,

		"@l": 2,
		"@hc": true,
		"@hs": false,
		"e": false,
		"n": txt,
		"a": { "it": [key + ': ' + txt, key, randomHash(Math.floor(rnd.next() * 35 + 15)), Math.floor(rnd.next() * 1000000), Math.floor(rnd.next() * 1000000000) / 1000] },
		"h": true,
		"o": 0,
		"s": false,
		"p": rootKey,
		"i": index,
		"@cc": length

	};
	if (rnd.next() * 10 > 7)
	{
		node['s'] = true;
		node['@fs'] = true;
	}
	return node;
};
var genJsonBranch = function (rootKey, length, first, count, asArray, seed)
{
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
	if(seed)
		var rnd = random(seed + parseInt(rootKey));
	var randomHash = function (len)

	{
		var letters = 'основные архитектурные черты динамическая типизация слабая типизация автоматическое управление памятью прототипное программирование функции как объекты первого класса при разработке была цель сделать язык похожим на но при этом лёгким для использования непрограммистами не владеет какая-либо компания или организация что отличает его от ряда языков программирования используемых в веб-разработке';
		var result = '';
		for (var i = 0; i < len; i += 2)
		{
			var idx = Math.floor(rnd.next() * (letters.length - 2));
			if (letters[idx] === ' ')

				idx += 1;
			result += i ? letters[idx] : letters[idx].toUpperCase();
			result += letters[idx + 1];
		}
		return result;
	};
	var gen = function (parent, index, length)
	{
		var key, txt, node;
		key = rootKey ? (rootKey + '-' + index) : '' + index;
		txt = randomHash(Math.floor(rnd.next() * 15 + 5));
		node = {
			"k": key,
			"@l": 2,

			"@hc": true,
			"@hs": false,
			"e": false,
			"n": txt,
			"a": { "it": [key + ': ' + txt, key, randomHash(Math.floor(rnd.next() * 35 + 15)), Math.floor(rnd.next() * 1000000), Math.floor(rnd.next() * 1000000000) / 1000] },
			"h": true,
			"o": 0,
			"s": false,
			"p": rootKey,
			"i": index,
			"@cc": length
		};
		if (rnd.next() * 10 > 7)
		{
			node['s'] = true;
			node['@fs'] = true;

		}
		return node;
	};
	var json, i, node, genKey;
	if (rootKey)
		genKey = parseInt(rootKey);
	else
		genKey = 1;
	if (asArray)
	{
		json = [];
		for (i = 0; i < count; i++)
		{
			node = gen(first + i, length);

			json.push(node);
			genKey += 1;
		}
	}
	else
	{
		json = {};
		for (i = 0; i < count; i++)
		{
			node = gen(first + i, length);
			json[node.k] = node;
			delete node.k;
			genKey += 1;
		}
	}
	return json;
};
// -------------------------------

В тег <script> добавим следующий код:


// Функция получения новых вершин
    function onDataRequest(sender, args) {
        var nodes = {};
        var node;
        if (args.Partial)
            for (var i = 0; i < args.Request.length; i++) {
                node = genNode(args.Request[i].Parent, args.Request[i].Index, count);
                nodes[node['k']] = node;
            }
        else {

            for (var i = 0; i < count; i++) {
                node = genNode(args.Parent, i, count);
                nodes[node['k']] = node;
            }
        }
        PP.setTimeout(function () {  // Имитируем задержку ответа от сервера
            sender.loadNodes(nodes); // Загрузка вершин
        }, 400);
    };

    var count = 50; // Количество создаваемых вершин
    var json = [];
    json.push({
        'k': '',
        '@hc': true,
        '@cc': count
    });
// Создадим компонент
     var t, treelist;
    t = treelist = new PP.Ui.DynamicTreeList({
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
        DataRequest: onDataRequest
    });

В результате выполнения примера был создан компонент DynamicTreeList.
 При открытии вершины будут запрошены новые вершины и динамически добавлены
 в дерево.


См. также:


[DynamicTreeList](../../Classes/DynamicTreeList/DynamicTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
