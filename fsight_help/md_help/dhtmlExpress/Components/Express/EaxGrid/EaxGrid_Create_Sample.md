# Пример создания компонента EaxGrid

Пример создания компонента EaxGrid
-


# Пример создания компонента EaxGrid


Для выполнения примера создайте html-страницу и в тег <head> в
 данном порядке добавьте ссылки на следующие js-файлы и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- resources.ru.js.


Также необходимо наличие в репозитории экспресс-отчёта с ключом «66676».


В теге <body> в качестве
 значения атрибута «onLoad» укажите
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body onload="Ready()">
	<div id="eaxGrid" style="float: left"></div>
</body>
В тег <head> добавьте
 следующий скрипт:


	PP.ImagePath = "../Build/img/"; // Путь к папке с изображениями
	PP.ScriptPath = "../Build/"; // Путь к папке со сценариями
	PP.CSSPath = "../Build/"; // Путь к папке с файлами стилей
	// Указываем путь к корневой папке, содержащей файлы ресурсов
	PP.resourceManager.setRootResourcesFolder("../Resources/");
	// Устанавливаем региональные настройки
	PP.setCurrentCulture(PP.Cultures.ru);
	function Ready() {
		var waiter = new PP.Ui.Waiter();
		// Создаём соединение с репозиторием
		metabase = new PP.Mb.Metabase({
			PPServiceUrl: "PPService.axd?action=proxy",
			Id: "warehouse",
			UserCreds: {
				UserName: "sa",
				Password: "Qwerty1"
			},
			StartRequest: function () {
				// При запросе метаданных отображаем компонент типа PP.Ui.Waiter
				waiter.show();
			},
			EndRequest: function () {
				// После запроса метаданных скрываем компонент типа PP.Ui.Waiter
				waiter.hide();
			},
			Error: function (sender, args) {
				// В случае ошибки выводим описание данной ошибки
				alert(args.ResponseText);
			}
		});
		// Открываем соединение с репозиторием
		metabase.open();
		// Создаём сервис для работы с экспресс-отчётами
		eaxMdService = new PP.Exp.EaxMdService({
			Metabase: metabase
		});
		// Открываем экспресс-отчет с ключом 66676 на редактирование
		eaxAnalyzer = eaxMdService.openDocument(66676);
		// Создаём таблицу
		eaxGrid = new PP.Exp.Ui.EaxGrid({
			Source: eaxAnalyzer, // Источник данных
			ParentNode: "eaxGrid",
			Service: eaxMdService, // Сервис
		});
	};
В результате выполнения примера на html-странице будет размещён компонент
 [EaxGrid](EaxGrid.htm).


См. также:


[EaxGrid](../../../Classes/Express/EaxGrid/EaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
