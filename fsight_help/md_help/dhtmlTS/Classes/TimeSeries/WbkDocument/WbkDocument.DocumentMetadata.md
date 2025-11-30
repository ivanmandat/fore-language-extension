# WbkDocument.DocumentMetadata

WbkDocument.DocumentMetadata
-


# WbkDocument.DocumentMetadata


## Синтаксис


DocumentMetadata: PP.TS.[WbkDocument](WbkDocument.htm);


## Описание


Свойство DocumentMetadata определяет метаданные документа.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var md = wbkDocument.getDocumentMetadata();
	console.log("объект метаданных");
	console.log(md);

После выполнения примера в консоль браузера будет выведен объект метаданных:


объект метаданных


Object {obInst: Object, dirty: false, sheets: Object, windowsPosition: "Vertical", hasPivot: false…}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
