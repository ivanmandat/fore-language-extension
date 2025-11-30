# Конструктор WbkPropertyBar

Конструктор WbkPropertyBar
-


# Конструктор WbkPropertyBar


## Синтаксис


PP.TS.Ui.WbkPropertyBar(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор WbkPropertyBar экземпляр
 класса [WbkPropertyBar](WbkPropertyBar.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js-файлы и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js.


А также наличие рабочей книги с ключом 5183.


В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body  onselectstart="return false" class="PPNoSelect" onload="Ready()">
	<div id='example'></div>
</body>

В конце документа вставляем код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>

В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
	// Установим языковые настройки для ресурсов
	PP.setCurrentCulture(PP.Cultures.ru);
	//using: waiter, metabase, tsService, hieService, WORKBOOKKEY, wbk, lanerBoxView, propertyBar;
	function Ready() {
		// Создаем индикатор загрузки
		var waiter = new PP.Ui.Waiter();
		// Создаём соединение с репозиторием
		var metabase = new PP.Mb.Metabase(
			{
				Id: "p7mart_ms",
				UserCreds: { UserName: "sa", Password: "H88cp229" },
				StartRequest: function(){waiter.show();},
				EndRequest: function(){waiter.hide();},
				Error: function(sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();

			// Создаём сервис для работы с временными рядами
			var tsService = new PP.TS.TSService({ Metabase: metabase });
			var WORKBOOKKEY = 5183;
			//tsService.openDocument(WORKBOOKKEY, onFirstOpened);
			tsService.editDocument(WORKBOOKKEY, onFirstOpened);
			// Обработчик события открытия документа
			function onFirstOpened(sender, args) {
				var wbk = args.Workbook; //рабочая книга
				console.log(wbk);
				var propertyBarView = new PP.TS.Ui.WbkPropertyBar({
					ImagePath: "../build/img/",
					Source: wbk,
					Width: 300,
					Height: 500,
					ParentNode: "example",
				});
			}
		}
	</script>

После выполнения примера на html-странице будет размещен компонент [WbkPropertyBar](WbkPropertyBar.htm), имеющий следующий вид:


![](WbkPropertyBar.png)


См. также:


[WbkPropertyBar](WbkPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
