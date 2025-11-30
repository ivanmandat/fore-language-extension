# TSService.setObsAttr

TSService.setObsAttr
-


# TSService.setObsAttr


## Синтаксис


setObsAttr (wbk, obsTable, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


obsTable. Задает таблицу со значениями атрибутов наблюдений;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод setObsAttr используется для установки атрибутов наблюдений.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами (см. «[TSService.getSetSortSettings](TSService.getSetSortSettings.htm)». Для базы данных временных рядов, которая является источником рабочей книги, должны быть установлены атрибуты наблюдения.


Примечание. Атрибуты наблюдения настраиваются в мастере создания базы данных временных рядов в настольном приложении.


Также в обработчике события открытия документа необходимо добавить следующий код:


	//Используем для установки атрибутов наблюдений
	var wbk = args.Workbook;
	var obsTable = wbk.getSelectedObsTable();
	tsService.setObsAttr(wbk, obsTable, PP.Delegate(onSetObsAttr, this));
	// Обработчик события окончания выполнения метода setObsAttr
	function onSetObsAttr(sender, args){
		console.log(sender);
		console.log(args);
	}

После выполнения примера будут установлены атрибуты наблюдений.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
