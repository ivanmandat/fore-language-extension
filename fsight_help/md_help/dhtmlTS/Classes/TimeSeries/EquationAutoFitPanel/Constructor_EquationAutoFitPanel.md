# Конструктор EquationAutoFitPanel

Конструктор EquationAutoFitPanel
-


# Конструктор EquationAutoFitPanel


## Синтаксис


PP.TS.Ui.EquationAutoFitPanel (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор EquationAutoFitPanel
 создает экземпляр класса [EquationAutoFitPanel](EquationAutoFitPanel.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js- и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js;


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css.


Также необходимо наличие рабочей книги с ключом 5183.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
	<div id='example'></div>
</body>

В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
	PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


	<script type="text/javascript">
		PP.setCurrentCulture(PP.Cultures.ru);

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
			var key = 5183;
			tsService.openDocument(key, onFirstOpened);
			function onFirstOpened(sender, args) {
				var wbk = args.Workbook;
				console.log(wbk);

				function onDummyActionFactory(actionCaption){
					return function (sender, args){
						console.log(actionCaption);
						console.log(sender);
						console.log(args);
					};
				}

				var equationAutoFitPanel = new PP.TS.Ui.EquationAutoFitPanel({
					Source: wbk,
					GroupName: PP.TS.Ui.PropertyGroups.AutoFit,
					ResourceKey: "WorkbookPropertyAutoFitParameters",
					ViewType: PP.Ui.NavigationItem,
					IsHeaderControlVisible: false,
					ControlChanged: PP.Delegate(onDummyActionFactory("equationAutoFitPanel ControlChanged"), this)
				});
				console.log(equationAutoFitPanel);

				var navbar = new PP.Ui.NavigationBar({
					ParentNode: "example",
					Width: 400,
					Height: 800,
					VisibleAreaHeight: 810,
					ShowBorders: true,
					IsAlwaysExpanded: false
				});
				navbar.addItem(equationAutoFitPanel);
			}
		}
	</script>

После выполнения примера на html-странице будет размещена панель автоподбора
 параметров экспоненциального сглаживания. Щелкнув по ее заголовку, получим
 панель следующего вида:


![](EAFP.PNG)


См. также:


[EquationAutoFitPanel](EquationAutoFitPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
