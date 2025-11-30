# TSService.getSetSortSettings

TSService.getSetSortSettings
-


# TSService.getSetSortSettings


## Синтаксис


getSetSortSettings (wbk, sortingEnabled, reverseHeader, direction, column);


## Параметры


wbk. Задает рабочую книгу, экземпляр класса [Workbook](../Workbook/Workbook.htm);


sortingEnabled. Задает признак того, что сортировка включена;


reverseHeader. Задает порядок следования элементов календаря;


direction. Задает направление сортировки;


column. Задает столбец сортировки.


## Описание


Метод getSetSortSettings возвращает тело запроса сортировки.


## Комментарии


Параметр reverseHeader может принимать следующие значения:


-
false - прямой порядок дат (по возрастанию);


-
true - обратный порядок дат (по убыванию).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var wbk = args.Workbook;
	//Задаем параметр разрешающий сортировку
	var sortingEnabled = true;
	//Задаем порядок следования элементов календаря
	var reverseHeader = false;
	//Задаем направление сортировки
	var direction = 'west';
	//Задаем столбец сортировки
	var column=0;
	//Возвращаем тело запроса сортировки
	var sortSettings=tsService.getSetSortSettings(wbk,sortingEnabled,reverseHeader,direction,column);
	//Выполняем запрос
	tsService._invokeRemoteProc(wbk, sortSettings, PP.Delegate(onResponse, this));
	//Обработчик получения ответа
	function onResponse(sender, args){
		alert(args.ResponseText);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и тело запроса сортировки будет выведено сообщением.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
