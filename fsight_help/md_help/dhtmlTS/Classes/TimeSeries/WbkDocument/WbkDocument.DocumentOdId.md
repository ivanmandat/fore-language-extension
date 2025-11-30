# WbkDocument.DocumentOdId

WbkDocument.DocumentOdId
-


# WbkDocument.DocumentOdId


## Синтаксис


DocumentOdId: Object;


## Описание


Свойство DocumentOdld определяет объект, содержащий моникёр документа рабочей книги.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	var docOdId = wbkDocument.getDocumentOdId();
	console.log("объект с OdId документа");
	console.log(docOdId);

После выполнения примера в консоль браузера будет выведен моникёр рабочей книги:


объект с OdId документа


Object {id: "CIDEKFGEHPDCEOAEHPLLDBLNJBIINFCEDIDHIEEOLDNLBIID!M…WCIDEKFGEHPDCEOAEDDDEGNNDDPCLPDGEEIEDMJGCPGGMBOPD"}


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
