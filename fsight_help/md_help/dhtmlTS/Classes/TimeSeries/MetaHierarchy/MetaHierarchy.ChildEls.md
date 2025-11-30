# MetaHierarchy.ChildEls

MetaHierarchy.ChildEls
-


# MetaHierarchy.ChildEls


## Синтаксис


ChildEls: Object;


## Описание


Свойство ChildEls возвращает дочерние элементы объекта по указанному ключу.


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие css- и js-файлы:


-
PP.js;


-
PP.Metabase.js;


-
PP.Express.js;


-
PP.TS.js;


-
PP.css.


Необходимо наличие базы данных временных рядов с ключом 112.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onload="Ready()">
	<div id='example'></div>
</body>

В теге SCRIPT добавьте следующий скрипт:


	<script type="text/javascript">
		var metabase, hieSrv, hie;
		PP.ImagePath = "../Debug/img/";
		PP.ScriptPath = "../Debug/";
		PP.CSSPath = "../Debug/";
		function Ready() //обработчик события загрузки body
		{
			metabase = new PP.Mb.Metabase({
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password" },
				Error: function (sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();
			hieSrv = new PP.TS.HieService({ Metabase: metabase });
			// Открываем базу данных временных рядов по ее индификатору и устанавливаем callback
			hieSrv.open(null, null, 1334, new PP.Delegate(onOpened));
			function onOpened (d, res)
			{
				console.log(hieSrv);
				console.log(res);

				console.log("Получаем экземпляр иерархии метаданных");
				hie = res.Args.Hier;
				console.log(hie);
				//Посылаем запрос на получение дочерних элементов
				hieSrv.getChildEls(hie, "", function(sender, res){
					console.log("Получен ответ на запрос дочерних элементов");
					console.log(res);

				});
			}
		}
	</script>

После выполнения примера в консоль браузера будут выведены json-объекты экземпляра иерархии метаданных и дочерние элементы объекта по указанному ключу.


PP.TS.MetaHierarchy {_RubricatorKey: 1334, _RubInstanceId:  null,_WorkbookInstanceId: null, _FilterFacts: Array[0], _Metabase: PP.Mb.Metabase…}

undefined


Значение undefined говорит о том, что у полученного объекта нет дочерних элементов.


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
