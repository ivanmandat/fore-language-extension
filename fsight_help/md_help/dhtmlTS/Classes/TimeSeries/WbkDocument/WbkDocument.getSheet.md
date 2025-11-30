# WbkDocument.getSheet

WbkDocument.getSheet
-


# WbkDocument.getSheet


## Синтаксис


getSheet (value);


## Параметры


value. Задает ключ или идентификатор листа.


## Описание


Метод getSheet возвращает объект листа по ключу или идентификатору.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, определить ключ активного листа (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var sheet = wbkDocument.getSheet(sheetKey);
	console.log("объект листа по ключу");
	console.log(sheet);

После выполнения примера в консоль браузера будет выведен json-объект листа документа:


объект листа по ключу


PP.TS.Workbook {_WbkMetadata: Object, _Events: Object, ChangedSeries: PP.Delegate, WorkbookMdLoaded: PP.Delegate, _SelectedSeries: Array[0]…}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
