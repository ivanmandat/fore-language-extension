# Конструктор StatTabSheet

Конструктор StatTabSheet
-


# Конструктор StatTabSheet


## Синтаксис


PP.TS.Ui.StatTabSheet (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор StatTabSheet создает
 экземпляр класса [StatTabSheet](StatTabSheet.htm).


## Пример


Для выполнения примера создайте html-страницу и выполните следующие
 действия:


1. Добавьте ссылки на следующие js и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


	- PP.js;


	- PP.Metabase.js;


	- PP.TabSheet.js;


	- PP.Express.js;


	- PP.TS.js.


Также необходимо наличие рабочей книги с ключом 5183.


Для корректной работы примера StatTabSheet необходимо, чтобы в рабочей
 книге третий ряд (т.е. ряд с индексом 2) был нелинейной регрессией.


2. В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
		// Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);

		// Объявляем константы
	 	var WORKBOOKKEY = 5183; //ключ документа

		// Объявляем переменные
		var waiter, metabase, tsService, wbk, statTabSheet;

		function Ready(){ //обработчик события загрузки body
			// Создаём индикатор загрузки
			waiter = new PP.Ui.Waiter();
			// Создаём соединение с репозиторием
			metabase = new PP.Mb.Metabase({
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password"  },
				StartRequest: function(){waiter.show();},
				EndRequest: function(){waiter.hide();},
				Error: function (sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();
			// Создаём сервис для работы с временными рядами
			tsService = new PP.TS.TSService({ Metabase: metabase });
			//var wbkdoc = tsService.editDocument(WORKBOOKKEY);
			tsService.openDocument(WORKBOOKKEY, onFirstOpened);

			// Обработчик события открытия документа
			function onFirstOpened(sender, args)
			{
				wbk = args.Workbook; //рабочая книга
				// Создаём экземпляр класса электронной таблицы панели статистики рабочей книги
				statTabSheet = new PP.TS.Ui.StatTabSheet({
					Width: 600, //ширина
					Height: 300, //высота
					ParentNode: "example", 	//родительский узел DOM
					Class: "PPTSStatPanelContent"
				});
				 //Получаем метаданные ряда типа "Нелинейная регрессия", в том числе и данные для статистик
				tsService.getMdOfSeries (wbk, [2], [0], onGetMdOfSeries, true);
			}

			// Обработчик события получения метаданных серий
			function onGetMdOfSeries(sender, args)
			{
				// Устанавливаем источник экземпляру класса электронной таблицы панели статистики рабочей книги
				statTabSheet.setSource(wbk.getStatCoeffTabSheetSource());
				// Обновляем экземпляр класса электронной таблицы панели статистики рабочей книги
				statTabSheet.refreshAll();
				statTabSheet.refresh();
			}
		}
</script>

3. В теге <body> в качестве значения атрибута «onLoad» укажите
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body onload="Ready()">
	<div id='example'></div>
</body>

4. В конце документа вставьте код, устанавливающий стили к вершине «document.body»,
 соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещен компонент [StatTabSheet](../../../Components/TimeSeries/StatTabSheet/StatTabSheet.htm),
 имеющий следующий вид:


![](StatTabSheet.png)


См. также:


[StatTabSheet](StatTabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
