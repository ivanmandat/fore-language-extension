# WbkDocument.getSheets

WbkDocument.getSheets
-


# WbkDocument.getSheets


## Синтаксис


getSheets ();


## Описание


Метод getSheets возвращает список всех листов в документе.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var sheets = wbkDocument.getSheets();
	console.log("ассоциативный массив всех листов(sheet) в документе");
	console.log(sheets);

После выполнения примера в консоль браузера будет выведен ассоциативный массив всех листов (sheet) в документе:


ассоциативный массив всех листов(sheet) в документе


Object {857804: PP.TS.Workbook}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
