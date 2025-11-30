# Конструктор ParametersPanel

Конструктор ParametersPanel
-


# Конструктор ParametersPanel


## Синтаксис


PP.TS.Ui.ParametersPanel(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор ParametersPanel
 создает экземпляр класса [ParametersPanel](ParametersPanel.htm).


## Пример


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы:


	- PP.css


	- PP.Express.css


	- PP.TS.css


	- PP.Metabase.css


 И добавить ссылки на js-файлы:


	- PP.js


	- PP.Metabase.js


	- PP.TabSheet.js


	- PP.Express.js


	- PP.TS.js


Также необходимо наличие рабочей книги с ключом 5183.


2. В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
// Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY = 5183; //ключ документа

		// Объявляем переменные
		var waiter, metabase, tsService, wbk, parametersPanel, navbar;

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


	 	function Ready() { //обработчик события загрузки body
	 	// Создаем индикатор загрузки
			waiter = new PP.Ui.Waiter();
			// Создаём соединение с репозиторием
			metabase = new PP.Mb.Metabase(
			{
			 Id: "pmart_ms",
			 UserCreds: { UserName: "sa", Password: "H88cp229" },
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
	 		tsService.openDocument(KEY, onFirstOpened);
	 	// Обработчик события открытия документа
			function onFirstOpened(sender, args) {
	 		wbk = args.Workbook; //рабочая книга

				// Создаем экземпляр класса панели параметров
				parametersPanel = new PP.TS.Ui.ParametersPanel({
					Source: wbk, //источник
					//идентификатор группы панели свойств
					GroupName: PP.TS.Ui.PropertyGroups.Parameters,
					ResourceKey: "WorkbookPropertyParameters", //ключ ресурса
					ViewType: PP.Ui.NavigationItem,
					IsHeaderControlVisible: false,
					ControlChanged: PP.Delegate(onDummyActionFactory("outputSerieWizardView ControlChanged"), this)
				});

				navbar = new PP.Ui.NavigationBar({
					ParentNode: "example",
					Width: 400,
					Height: 800,
					VisibleAreaHeight: 810,
					ShowBorders: true,
					IsAlwaysExpanded: false
				});
	 			navbar.addItem(parametersPanel);
	 			console.log("Устанавливаем рабочую книгу данные которой отображаются в компоненте");
	 			var value = args.Workbook;
	 			parametersPanel.setSource(value);
	 		}
	 }
	</script>

3. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()" style="margin: 0px">
	<div id='example'></div>
</body>
4. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещен экземпляр класса
 [ParametersPanel](ParametersPanel.htm), для которого установлены
 данные рабочей книги с указанным ключом.


См. также:


[ParametersPanel](ParametersPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
