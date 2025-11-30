# Конструктор LanerBox

Конструктор LanerBox
-


# Конструктор LanerBox


## Синтаксис


PP.TS.Ui.LanerBox (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор LanerBox создает
 экземпляр класса [LanerBox](LanerBox.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие js
 и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


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


<body onload="Ready()">
	<div id='example'></div>
</body>

В конце документа вставьте код для установки
 стилей к вершине «document.body», которые соответствуют операционной системе
 клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


	<script type="text/javascript">
		// Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY = 5183; //ключ документа
		var IMG_PATH = "../build/img/";  //путь к папке с пиктограммами
		// Объявляем переменные
		var waiter, metabase, tsService, wbk, lanerbox;
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
			function onFirstOpened(sender, args) {
					var wbk = args.Workbook; //рабочая книга
				// Создаём экземпляр класса компонента для отображения таблицы рабочей книги
					var lanerbox = new PP.TS.Ui.LanerBox({
						Source: wbk, //источник
						EditMode: false, //разрешить редактирование
					ImagePath: IMG_PATH, //путь к папке с пиктограммами
						Width: 1000, //ширина
						Height: 150, //высота
						ParentNode: "example" //родительский узел DOM
				});
				//Устанавливаем для всех ячеек ширину по умолчанию;
				lanerbox.setDefaultWidth();
				//Устанавливаем признак обновления отметки, после загрузки TabSheet;
				lanerbox.setNeedUpdateSelection(true);
			}
		}
	</script>

После выполнения примера на html-странице
 будет размещена таблица рабочей книги, имеющая следующий вид:


![](../../../Components/TimeSeries/LanerBox/LanerBox.PNG)


Для всех ячеек будет установлена ширина по
 умолчанию, будет установлен признак обновления отметки.


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
