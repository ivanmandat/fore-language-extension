# HieService.getChildEls

HieService.getChildEls
-


# HieService.getChildEls


## Синтаксис


getChildEls (hie, parentKey, callback);


## Параметры


hie. Задает объект иерархии;


parentKey. Задает значение ключа дочернего элемента;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод getChildEls используется для подгрузки дочерних элементов.


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие js-файлы:


-
PP.js;


-
PP.Metabase.js;


-
PP.Express.js;


-
PP.TS.js.


Необходимо наличие базы данных временных рядов с ключом 1334.


В теге <body> в качестве значения атрибута «onLoad» указываем имя функции, которая выполняется после окончания загрузки тела страницы:


<body onload="Ready()">
	<div id='example'></div>
</body>

В теле html-страницы добавить следующий скрипт:


	<script type="text/javascript">
		// Объявляем константы
		var RUB_KEY = 1334;

		// Объявляем переменные
		var metabase, hieSrv, hie;
		PP.ImagePath = "../build/img/";
		PP.ScriptPath = "../build/";
		PP.CSSPath = "../build/";

		// Фабрика обработчиков-заглушек
		function onDummyActionFactory(actionCaption){
			return function (sender, args){
				console.log(actionCaption);
				console.log(args);
			};
		}
		function Ready() //обработчик события загрузки body
		{
			metabase = new PP.Mb.Metabase({
				Id: "p7mart_ms",
				UserCreds: { UserName: "sa", Password: "H88cp229" },
				Error: function (sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();
			hieSrv = new PP.TS.HieService({ Metabase: metabase });
			hieSrv.HieOpened.add(onDummyActionFactory("Иерархия рядов открыта"));
			//Посылаем запрос на открытие иерархии рабочей книги
			hieSrv.open(null, null, RUB_KEY, new PP.Delegate(onOpened));

			function onOpened (sender, res)
			{
				//Получаем экземпляр иерархии метаданных
				hie = res.Args.Hier;
				console.log(hie);
				hieSrv.ElementsLoaded.add(onDummyActionFactory("Произошло событие получения дочерних элементов"));

				//Посылаем запрос на получение дочерних элементов
				hieSrv.getChildEls(hie, "", function(sender, res){
					console.log("Получен ответ на запрос дочерних элементов");
					console.log(res);

				});
			}
		}
	</script>

После выполнения примера будет создан сервис для работы с иерархией базы данных временных рядов. Будет открыта иерархия базы данных временных рядов с ключом 1334, при этом в консоль будет выведено соответствующее сообщение. После открытия иерархии базы данных временных рядов будет отправлен запрос на получение дочерних элементов иерархии, который сгенерирует событие [ElementsLoaded](HieService.ElementsLoaded.htm). При наступлении события [HieOpened](HieService.HieOpened.htm) в консоль будет выведено сообщение «Произошло событие получения дочерних элементов». После получения дочерних элементов в консоль будет выведено сообщение «Получен ответ на запрос дочерних элементов».


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
