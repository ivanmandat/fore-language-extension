# WbkDocument.getSheetName

WbkDocument.getSheetName
-


# WbkDocument.getSheetName


## Синтаксис


getSheetName (value);


## Параметры


value. Задает ключ или идентификатор листа.


## Описание


Метод getSheetName возвращает имя листа по ключу или идентификатору.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, определить ключ активного листа (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var sheetName = wbkDocument.getSheetName(sheetKey);
	console.log("имя листа");
	console.log(sheetName);

После выполнения примера в консоль браузера будет выведено имя листа рабочей книги:


имя листа


Лист1


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
