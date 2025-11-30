# Конструктор TabStatPanel

Конструктор TabStatPanel
-


# Конструктор TabStatPanel


## Синтаксис


PP.TS.Ui.TabStatPanel (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор TabStatPanel создает
 экземпляр класса [TabStatPanel](TabStatPanel.htm).


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


2. В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
		// Устанавливаем языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);

		// Объявляем константы
		var WORKBOOKKEY = 5183; //ключ документа

		// Объявляем переменные
		var waiter, metabase, tsService, wbk, series, serie, tabStatPanel, isCollapsed, btnClear, cbCollapsed
		, coeffDS, corrDS, weightsDS;

		// Фабрика обработчиков-заглушек
		function onDummyActionFactory(actionCaption){
			return function (sender, args){
				console.log(actionCaption);
				console.log(sender);
				console.log(args);
			};
		}

		function Ready(){//обработчик события загрузки body
			// Создаём индикатор загрузки
	 	waiter = new PP.Ui.Waiter();
	 		// Создаём соединение с репозиторием
			metabase = new PP.Mb.Metabase({
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password"  },
				StartRequest: function(){waiter.show();},
				EndRequest: function(){waiter.hide();},
				Error: function(sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();

			// Создаём сервис для работы с временными рядами
			tsService = new PP.TS.TSService({ Metabase: metabase });
			// Открываем документ
			tsService.openDocument(WORKBOOKKEY, onFirstOpened);
			// Обработчик события открытия документа
			function onFirstOpened(sender, args)
			{
				wbk = args.Workbook; //рабочая книга
				// Получаем серии рабочей книги
				series = wbk.getSeries();
				// Получаем серию по индексу
				serie = series[2];
				// Добавляем серию к выбранным
				wbk.addSelectedSeries(serie);

				// Создаём экземпляр класса панели вкладок для отображения статистик
				tabStatPanel = new PP.TS.Ui.TabStatPanel({
					Width: 900, //ширина
					Height: 300, //высота
					Source: wbk, //источник
					ParentNode: "example", //родительский узел DOM
					Class: "PPWbkStatPanel",
					// Обработчик события сворачивания/разворачивания панели статистик
					Toogled: PP.Delegate(function(sender, args){
						console.log("Произошло событие сворачивания/разворачивания панели статистик");
						console.log("Панель статистик сейчас свернута");
						isCollapsed = sender.getIsCollapsed();
						console.log(isCollapsed);
						sender.setHeight(300);
					}, this),
					// Обработчик события нажатия на кнопку "Редактировать" на панели статистик
					FormulaEdit: PP.Delegate(function(sender, args){
						console.log("Произошло событие нажатия на кнопку 'Редактировать' на панели статистик");
					}, this),
					IsRTL: false
				});

				btnClear = new PP.Ui.Button({
					ParentNode: "params", //родительский узел DOM
					Content: "Clear" //подпись
				});
				// Привязывем обработчик к событию изменения состояния флажка
				btnClear.Click.add(function (sender, args) {
					tabStatPanel.clear();
				});

				cbCollapsed = new PP.Ui.CheckBox({
					ParentNode: "params", //родительский узел DOM
					Content: "Collapsed" //подпись
				});
				// Привязывем обработчик к событию изменения состояния флажка
				cbCollapsed.CheckedChanged.add(function (sender, args) {
					// Получаем значение флажка
					var mustCollapsed = sender.getChecked();
					if (mustCollapsed === true){ //если флажок установлен
						tabStatPanel.collapse(); // Сворачиваем панель статистик
					}else{ //иначе
						tabStatPanel.expand(); // Раскрываем панель статистик
					}
				});

				tabStatPanel.expand(); // Раскрываем панель статистик
				//Получаем метаданные ряда с индексом 2, в том числе и данные для статистик
				//необходимо чтобы в рабочей книге третий ряд (т.е. ряд с индексом 2) был нелинейной регрессией !!!
				tsService.getMdOfSeries(wbk, [2], [0], onGetMdOfSeries, true);
			}
			//обработчик события получения метаданных серий
			function onGetMdOfSeries(sender, args)
			{
				// Сохраняем источники для табшитов
				coeffDS = wbk.getStatCoeffTabSheetSource();
				corrDS = wbk.getStatCorrTabSheetSource();
				weightsDS = wbk.getStatWeightsTabSheetSource();
				// Посылаем запрос на получение данных статистики
				tsService.getStatData(wbk, onStatData);
			}
			//обработчик события получения данных статистики
			function onStatData(sender, args)
			{
				// Заполняем сохранённые источники для табшитов
				wbk.setStatCoeffTabSheetSource(coeffDS);
				wbk.setStatCorrTabSheetSource(corrDS);
				wbk.setStatWeightsTabSheetSource(weightsDS);
				// Обновляем панель статистик
				tabStatPanel.refreshAll();
				//обновляет компонент в соответствии с метаданными
				TabStatPanel.refresh;
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
После выполнения примера на html-странице будет размещен экземпляр класса
 [TabStatPanel](TabStatPanel.htm), имеющий следующий вид:


![](TabStatPanel.png)


В пример был добавлен флажок с наименованием «Collapsed», при его установке/снятии
 сворачивается/разворачивается панель статистик. Это связано с генерацией
 события [Toggled](TabStatPanel.Toogled.htm).


Также была добавлена кнопка с наименованием «Clear», после нажатия на
 которую очищается дерево характеристик панели статистик (см. «[TabStatPanel.clear](TabStatPanel.clear.htm)»).


См. также:


[TabStatPanel](TabStatPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
