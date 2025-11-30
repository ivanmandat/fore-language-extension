# WbkDocument.getSheetOdId

WbkDocument.getSheetOdId
-


# WbkDocument.getSheetOdId


## Синтаксис


getSheetOdId (value);


## Параметры


value. Задает значение ключа.


## Описание


Метод getSheetOdld возвращает объект, содержащий моникёр листа, по ключу.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, определить ключ активного листа (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var sheetOdId = wbkDocument.getSheetOdId(sheetKey);
	console.log("объект с OdId листа");
	console.log(sheetOdId);

После выполнения примера в консоль браузера будет выведен объект OdId листа:


объект с OdId листа


Object {id: "PLIFCPLEOAECEOAELJBANONDACNJPKEEKKFIPLGAIIOCEBNP!M…OAEKBKMIEIGKMHFOBHEKJMJAABNCMJMGPEP!Sheets!857804"}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
