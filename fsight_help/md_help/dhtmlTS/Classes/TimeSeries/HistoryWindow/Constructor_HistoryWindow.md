# Конструктор HistoryWindow

Конструктор HistoryWindow
-


# Конструктор HistoryWindow


## Синтаксис


PP.TS.Ui.HistoryWindow (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор HistoryWindow создает
 экземпляр класса [HistoryWindow](HistoryWindow.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.TabSheet.js;


	- PP.Express.js;


	- PP.TS.js.


Также необходимо наличие рабочей книги с
 ключом 5183.


В теге <body> в качестве значения атрибута
 «onLoad» укажите имя функции, которая выполняется после окончания загрузки
 тела страницы:


<body>
	<div id='example'></div>
</body>

В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
		PP.setCurrentCulture(PP.Cultures.ru);
		//using: waiter, metabase, tsService, wbk, md, rubrs, rubKey, historyWindow;
		// Объявляем константы
		var KEY = 5183;//ключ документа
			function Ready() {
			var waiter = new PP.Ui.Waiter();
			// Создаём соединение с репозиторием
			var metabase = new PP.Mb.Metabase(
			{
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password" },
				StartRequest: function(){waiter.show();},
				EndRequest: function(){waiter.hide();},
				Error: function (sender, args){alert(args.ResponseText);}
			});
		// Открываем соединение с репозиторием
		metabase.open();
		// Создаём сервис для работы с временными рядами
		var tsService = new PP.TS.TSService({ Metabase: metabase });

		tsService.openDocument(KEY, onFirstOpened);
		// Обработчик события открытия документа
		function onFirstOpened(sender, args) {
			var wbk = args.Workbook; //рабочая книга
			var md = wbk.getWbkMetadata();
		 	var rubrs = md.rubrs.its.it;
		 	var rubKey = rubrs[0].k;

			//Создаём объект класса PP.TS.Ui.HistoryWindow
			var historyWindow = new PP.TS.Ui.HistoryWindow();
			//Показываем окно с историей изменений для точки
			historyWindow.showDialog();

		//Функция, вызываемая при окончании получения ревизий базы данных временных рядов
		var onGetRevisionsComplete = new PP.Delegate(function (sender, args) {
		 	var res = JSON.parse(args.ResponseText);
		 	var revs = res.GetRubMdResult.meta.revisions.its.it;
		 	var rubKey = args.Args.RubKey;
			//Заполняем список ревизий
			historyWindow.getRevisionsListBox().setRevisions(revs);
	 	}, this, { RubKey: rubKey });
		//Получаем ревизии рубрикатора
	 	tsService.getRevisions(wbk, rubKey, onGetRevisionsComplete);
		}
	}
</script>
После выполнения примера на html-странице
 будет размещено окно с историей изменений для точки, имеющее
 следующий вид:


![](ex_2.PNG)


См. также:


[HistoryWindow](HistoryWindow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
