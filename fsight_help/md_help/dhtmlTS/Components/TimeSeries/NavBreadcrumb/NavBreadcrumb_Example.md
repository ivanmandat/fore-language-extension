# Пример создания компонента NavBreadcrumb

Пример создания компонента NavBreadcrumb
-


# Пример создания компонента NavBreadcrumb


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 css- и js-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


	- PP.App.css;


	- PP.css.


Необходимо наличие базы данных временных рядов с ключом 1334.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
	<div id='example'></div>
</body>

В конце документа вставьте код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
	PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
		//Папка с ресурсами
        PP.resourceManager.setRootResourcesFolder("../resources/");
        //Список используемых ресурсов
        PP.resourceManager.setResourceList(['PP', 'Metabase', 'Ts', 'Express', 'TabSheetMaster', 'ChartMaster', 'TreeChartMaster', 'MapMaster', 'GaugeMaster']);
        // Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY = 1334; //ключ документа
		var IMG_PATH = "../build/img/";  //путь к папке с пиктограммами
		// Объявляем переменные
		var waiter, metabase, hieService, hier, attrId, navBreadcrumb, navBreadcrumbItem;
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
		function Ready(){ //обработчик события загрузки body
			// Создаём индикатор загрузки
			waiter = new PP.Ui.Waiter();
			// Создаём соединение с репозиторием
			metabase = new PP.Mb.Metabase({
				Id: "WAREHOUSE",
				UserCreds: { UserName: "user", Password: "password" },
				StartRequest: function(){waiter.show();},
				EndRequest: function(){waiter.hide();},
				Error: function (sender, args){alert(args.ResponseText);}
			});
			// Открываем соединение с репозиторием
			metabase.open();
			// Создаём сервис для работы с иерархией базы данных временных рядов
			hieService = new PP.TS.HieService({ Metabase: metabase });
			// Посылаем запрос на открытие иерархии рабочей книги по ключу KEY каталога показателей
			hier = hieService.openFromRubKey(KEY, null, onHieOpened);
			//обработчик окончания выполнения операции
			function onHieOpened(sender, args)
			{
				console.log("Получаем атрибуты иерархии")
				attrs = hier.getAttributes();
				console.log("Получаем идентификатор по индексу атрибута 0");
				attrId = attrs[0].id;
				console.log(attrId);
				// Создаём экземпляр класса компонента для отображения и управления атрибутами рабочей книги
				navBreadcrumb = new PP.TS.Ui.NavBreadcrumb({
					ImagePath: IMG_PATH, //путь к папке с пиктограммами
					Source: hier, //источник(свойство представления)
					Width: 302, //высота
					Height: 500, //ширина
					ParentNode: "example" //родительский узел DOM
				});
				// Получаем иерархию
				console.log("Обновляем весь компонент в соответствии с метаданными");
				navBreadcrumb.refreshAll();
				console.log("Обновляем выделение в деревьях измерений всех атрибутов");
				navBreadcrumb.refreshSelections();
				console.log("Обновляем надпись на элементе компонента NavBreadcrumb в соответствии с атрибутом");
				navBreadcrumb.updateItemContent(attrId);
				// Присоединяем обработчики событий представления
				navBreadcrumb.AltHierarchyChanged.add(onDummyActionFactory("Произошло событие представления изменения альтернативной иерархии измерения на сервере"));
				navBreadcrumb.AttributeFilterChanged.add(onDummyActionFactory("Произошло событие представления вкл/откл фильтра в атрибуте"));
				navBreadcrumb.AttributeSortChanged.add(onDummyActionFactory("Произошло событие представления изменения сортировки в дереве измерения"));
				navBreadcrumb.DimSelectionChanged.add(onDummyActionFactory("Произошло событие представления изменения отметки измерения на сервере"));
				navBreadcrumb.RequestMetadata.add(onDummyActionFactory("Произошло событие представления запроса метаданных"));
				navBreadcrumb.RequestSelectedItemsChanged.add(onDummyActionFactory("Произошло событие представления перемещения атрибутов в компоненте NavBreadcrumb"));
				navBreadcrumb.TreeNameAttrChanged.add(onDummyActionFactory("Произошло событие представления изменения атрибута наименования уровней"));
				console.log("Добавляем новый компонент для отображения и управления атрибутами рабочей книги");
				addNewItem();
			}
		}
		// Функция добавления нового компонента для отображения и управления атрибутами рабочей книги
		function addNewItem()
		{
			// Класс реализующий панели с деревом измерения атрибута
			// в компоненте для отображения и управления атрибутами рабочей книги
			navBreadcrumbItem = new PP.TS.Ui.NavBreadcrumbItem({
				Source: hier.getDim(hier.getAttributes()[0].k), //источник (измерение)
				ViewType: PP.Ui.NavigationItem,
				Title: "Новый элемент", //заголовок
				Tag: hier.getAttributes()[0].id,
				OwnerMaster: navBreadcrumb,
				ImageList: navBreadcrumb._ImageList
			});
			//добавляем панель в мастер
			navBreadcrumb.addMasterPanel(navBreadcrumbItem);
			//разворачиваем панель
			navBreadcrumbItem.expand();
			console.log("Получаем индекс позиции, в котором размещается измерение");
			var iPos = navBreadcrumbItem.getIndexPosition();
			console.log(iPos);
			console.log("Получаем признак, что атрибут отмечен");
			var isSelected = navBreadcrumbItem.getSelected();
			console.log(isSelected);

		}
	</script>

После выполнения примера на html-странице будет размещен компонент [NavBreadcrumb](NavBreadcrumb.htm), имеющий следующий вид:


![](ex_4.PNG)


Также при наступлении событий:


	- [AltHierarchyChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.AltHierarchyChanged.htm);


	- [AttributeFilterChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.AttributeFilterChanged.htm);


	- [AttributeSortChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.AttributeSortChanged.htm);


	- [DimSelectionChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.DimSelectionChanged.htm);


	- [RequestMetadata](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.RequestMetadata.htm);


	- [RequestSelectedItemsChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.RequestSelectedItemsChanged.htm);


	- [TreeNameAttrChanged](../../../Classes/TimeSeries/NavBreadcrumbView/NavBreadcrumbView.TreeNameAttrChanged.htm).


в консоль браузера будут выдаваться следующие сообщения:


Получаем атрибуты иерархии


Получаем идентификатор по индексу атрибута 0


DL


Обновляем весь компонент в соответствии с метаданными


Обновляем выделение в деревьях измерений всех атрибутов


Обновляем надпись на элементе компонент NavBreadcrumb
 в соответствии с атрибутом


Добавляем новый компонент для отображения и управления
 атрибутами рабочей книги


Получаем индекс позиции в котором размещается измерение


undefined


Получаем признак, что атрибут отмечен


false


См. также:


[NavBreadcrumb](NavBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
