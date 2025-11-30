# WbkDocument.ActiveSheetKey

WbkDocument.ActiveSheetKey
-


# WbkDocument.ActiveSheetKey


## Синтаксис


ActiveSheetKey: Number;


## Описание


Свойство ActiveSheetKey определяет
 ключ активного листа.


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 css- и js-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js;


	- PP.css.


Необходимо создать и сохранить рабочую книгу в настольном приложении,
 ключ созданной книги записать в переменную KEY.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onload="Ready()">
	<div id='example'></div>
</body>

В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
	// Установим языковые настройки для ресурсов
	PP.setCurrentCulture(PP.Cultures.ru);
	// Объявляем константы
	var KEY = 857804; //ключ документа
	// Объявляем переменные
	var waiter, metabase, tsService, wbkDocument;
	function Ready() { //обработчик события загрузки body
		// Создаём индикатор загрузки
		waiter = new PP.Ui.Waiter();
		// Создаём соединение с репозиторием
		metabase = new PP.Mb.Metabase(
		{
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password" },
				StartRequest: function () {
					waiter.show();
				},
				EndRequest: function () {
					waiter.hide();
				},
				Error: function (sender, args) {
					alert(args.ResponseText);
				}
		});
			// Открываем соединение с репозиторием
		metabase.open();
		// Создаём сервис для работы с временными рядами
		tsService = new PP.TS.TSService({ Metabase: metabase });
		// Открываем документ
		tsService.openDocument(KEY, onFirstOpened);
		// Обработчик события открытия документа
		function onFirstOpened(sender, args)
		{
			// Получаем экземпляр рабочей книги из базы данных временных рядов
			wbkDocument = args.Workbook;
			console.log("экземпляр рабочей книги из базы данных временных рядов");
			console.log(wbkDocument);
			var sheetKey = wbkDocument.getActiveSheetKey();
			console.log("номер текущего листа");
			console.log(sheetKey);
		}
	}
</script>
После выполнения примера в консоль браузера будет выведен экземпляр
 рабочей книги из базы данных временных рядов и номер текущего листа:


экземпляр рабочей книги из базы данных временных
 рядов


PP.TS.WbkDocument {_DimsObs: Object, _HasChildren:
 false, _Selection: null, _SelectedIndexSeries: null, _KeysSeries: Array[0]…}


номер текущего листа


1


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
