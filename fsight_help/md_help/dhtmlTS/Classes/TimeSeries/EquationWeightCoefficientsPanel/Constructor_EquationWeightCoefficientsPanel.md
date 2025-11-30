# Конструктор EquationWeightCoefficientsPanel

Конструктор EquationWeightCoefficientsPanel
-


# Конструктор EquationWeightCoefficientsPanel


## Синтаксис


PP.TS.Ui.EquationWeightCoefficientsPanel (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор EquationWeightCoefficientsPanel
 создает экземпляр класса [EquationWeightCoefficientsPanel](EquationWeightCoefficientsPanel.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js-файлы:


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js.


Предполагается наличие базы данных временных рядов и рабочей книги с
 ключами 112 и 5183 соответственно.


Для корректного отображения примера в разных браузерах добавьте следующий
 код, задающий подключение css-файлов:


<script type="text/javascript">
	if (window.devicePixelRatio == 2) // Retina
		PP.scriptManager.loadStyles(["../build/PP.retina.css", "../build/PP.App.retina.css", "../build/PP.Express.retina.css", "../build/PP.TS.retina.css", "../build/PP.Metabase.retina.css"]);
	else if (PP.IsIE && PP.IEVer < 8) // Old IE
		PP.scriptManager.loadStyles(["../build/PP.css", "../build/PP.App.css", "../build/PP.Express.css", "../build/PP.TS.css", "../build/PP.Metabase.css", "../build/PP_IE7.css"]);
	else // All other
		PP.scriptManager.loadStyles(["../build/PP.css", "../build/PP.App.css", "../build/PP.Express.css", "../build/PP.TS.css", "../build/PP.Metabase.css"]);
</script>

В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" id = "example" onload="Ready()">
</body>
В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
	PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


	<script type="text/javascript">
		// Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY_DBTS = 112; //ключ базы данных временных рядов
		var WORKBOOKKEY = 5183; //ключ рабочей книги
		var IMG_PATH = "build/img/"; //путь к папке с пиктограммами
	    PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем переменные
		var metabase, hieSrv, hie;
		var waiter, metabase, tsService, wbk, wbkDataBox
		, breadcrumb, chartView, gridView, metaAttrTree, modeSelectorView, titleView, toolBarView
		, cbIsBreadcrumbVisible, cbIsMainElementsVisible, btnShowCannotOpenCube;
		PP.ScriptPath = "../build/";
		PP.CSSPath = "../build/";

		// Объявляем переменные
		var ctrl;
		function Ready() //обработчик события загрузки body
		{
		// Создаём индикатор загрузки
			waiter = new PP.Ui.Waiter();
		// Создаём соединение с репозиторием

			metabase = new PP.Mb.Metabase({
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
			// Создаём экземпляр класса сервиса для работы с иерархией базы данных временных рядов
			hieSrv = new PP.TS.HieService({ Metabase: metabase });

			// Открываем базу данных временных рядов по ее индификатору и устанавливаем callback
			tsService = new PP.TS.TSService({ Metabase: metabase });

			// Открываем документ
			var wbk;
			console.log("Открываем документ по ключу");
			tsService.openDocument(WORKBOOKKEY, onWbkOpened);

			// Обработчик события открытия иерархии рабочей книги
			function onWbkOpened (sender, args)
			{
			// Создаём экземпляр вида панели параметров агрегации
			ctrl = new PP.TS.Ui.EquationWeightCoefficientsPanel({});
			// Добавляем в узел DOM "example"
			ctrl.addToNode("example");
			var wbk = args.Workbook;
			console.log("Задаем рабочую книгу для панели «Весовые Коэффициенты»");
			ctrl.setSource(wbk);
			console.log("Рабочая книга задана");
			}
		}
	</script>
После выполнения примера на html-странице будет размещена панель «Весовые
 коэффициенты» метода «Выделение сезонности (X11)»:


![](EquationWeightCoefficientsPanel_Ex.png)


См. также:


[EquationWeightCoefficientsPanel](EquationWeightCoefficientsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
