# WbkDocument.getActiveSheet

WbkDocument.getActiveSheet
-


# WbkDocument.getActiveSheet


## Синтаксис


getActiveSheet ();


## Описание


Метод getActiveSheet возвращает активный лист.


## Комментарии


Метод getActiveSheet возвращает экземпляр класса [Workbook](../Workbook/Workbook.htm).


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var activeSheet = wbkDocument.getActiveSheet();
	console.log("текущий лист, объект класса Workbook");
	console.log(activeSheet);

После выполнения примера в консоль браузера будет выведен текущий лист, экземпляр класса [Workbook](../Workbook/Workbook.htm):


текущий лист, объект класса Workbook


PP.TS.Workbook {_WbkMetadata: Object, _Events: Object, ChangedSeries: PP.Delegate, WorkbookMdLoaded: PP.Delegate, _SelectedSeries: Array[0]…}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
