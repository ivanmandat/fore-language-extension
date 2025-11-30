# WbkDocument.removeSheet

WbkDocument.removeSheet
-


# WbkDocument.removeSheet


## Синтаксис


removeSheet (value);


## Параметры


value. Задает значение ключа.


## Описание


Метод removeSheet удаляет лист по ключу или идентификатору.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов (см. «[WbkDocument.ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)») и в обработчике события открытия документа добавить следующий код:


	// Создаем экземпляр класса кнопка
	var btnInsertSerie = new PP.Ui.Button({
		ParentNode: "test", //родительский узел DOM
		Content: "RemoveSheet", //подпись
		Click: PP.Delegate(function(sender, args){ //обработчик нажатия
			// Получаем объект листа по ключу или Id
			var sheet = wbkDocument.getSheet(sheetKey);
			console.log("объект листа по ключу или Id");
			console.log(sheet);
			// Удаляем лист по ключу или Id
			console.log("Удаляем лист по ключу или Id");
			wbkDocument.removeSheet(sheetKey);
			// Повторно получаем объект листа по ключу или Id
			// чтобы проверить, что лист удалился
			var sheet = wbkDocument.getSheet(sheetKey);
			console.log("объект листа по ключу или Id");
			console.log(sheet);
		}, this)
	});

После выполнения примера при нажатии на кнопку «RemoveSheet» будет удален текущий лист рабочей книги. В консоль браузера будет выводиться информация о ходе удаления листа:


номер текущего листа


857804


объект листа по ключу или Id


PP.TS.Workbook {_WbkMetadata: Object, _Events: Object, ChangedSeries: PP.Delegate, WorkbookMdLoaded: PP.Delegate, _SelectedSeries: Array[0]…}


Удаляем лист по ключу или Id


объект листа по ключу или Id


null


См. также:


[WbkDocument](WbkDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
