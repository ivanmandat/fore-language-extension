# Конструктор WbkDataBox

Конструктор WbkDataBox
-


# Конструктор WbkDataBox


## Синтаксис


PP.TS.Ui.WbkDataBox (settings);


## Параметры


settings.
 JSON-объект со значениями свойств компонента.


## Описание


Конструктор WbkDataBox
 создает экземпляр класса [WbkDataBox](WbkDataBox.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js-файлы и css-файлы:


-
jquery.js;


-
Silverlight.js;


-
PP.ChartMaster.js;


-
PP.MapMaster.js;


-
PP.MapChart.js;


-
PP.Metabase.js;


-
PP.Express.js;


-
PP.TabSheet.js;


-
PP.TS.js.


В разных версиях браузера поместите в тег script и добавьте в тег HEAD
 html-страницы соответствующие css-файлы:


1. else if (PP.IsIE && PP.IEVer < 8) // Old IE


-
PP.App.css;


-
PP.Express.css;


-
PP.TS.css;


-
PP.Metabase.css;


-
PP_IE7.css;


-
PP.css.


2. else // All other


-
PP.css;


-
PP.App.css;


-
PP.Express.css;


-
PP.TS.css;


-
PP.Metabase.css.


Для отображения на экране Retina поместите в тег script и добавьте в
 тег HEAD html-страницы следующие css-файлы:


3. if (window.devicePixelRatio == 2) // Retina


-
PP.retina.css;


-
PP.App.retina.css;


-
PP.Express.retina.css;


-
PP.TS.retina.css;


- PP.Metabase.retina.css.


Также необходимо наличие рабочей книги с ключом 5183.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
	<div id='params'></div>
	<div id='example'></div>
</body>

В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
		// Устанавливаем языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY = 5183; //ключ документа
		var IMG_PATH = "build/img/"; //путь к папке с пиктограммами
		// Объявляем переменные
		var waiter, metabase, tsService, wbk, wbkDataBox, sheets, sheet, keySheet;
		//Функция для получения функций обработчиков
		//В качестве параметра принимает вспомогательную информацию, выводимую в консоль при вызове обработчика.
		//Это может быть, например, строка, содержащая имя класса и события
		function onDummyActionFactory(actionCaption){
			return function (sender, args){
				console.log(actionCaption);
				console.log(sender);
				console.log(args);
			};
		}
		function Ready() //обработчик события загрузки body
		{
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
			tsService.editDocument(KEY, onFirstOpened);
			// Обработчик события открытия документа
			function onFirstOpened (sender, args)
			{
				wbk = args.Workbook; // Получаем рабочую книгу
				// Создаём экземпляр класса компонента отображения и управления данными рабочей книги
				wbkDataBox = new PP.TS.Ui.WbkDataBox({
					Source: wbk, //источник
					ParentNode: "example", //родительский узел DOM
					Width: 1035, //ширина
					Height: 500, //высота
					ImagePath: IMG_PATH //путь к папке с пиктограммами
				});
			}
		}
	</script>

После выполнения примера на html-странице будет размещен компонент [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm), имеющий следующий вид:


![](../../../Components/TimeSeries/WbkDataBox/ex_.PNG)


См. также:


[WbkDataBox](WbkDataBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
