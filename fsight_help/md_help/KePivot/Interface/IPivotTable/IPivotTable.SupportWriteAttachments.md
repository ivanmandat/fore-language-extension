# IPivotTable.SupportWriteAttachments

IPivotTable.SupportWriteAttachments
-


# IPivotTable.SupportWriteAttachments


## Синтаксис


SupportWriteAttachments(Row: Integer; Column: Integer):
 Boolean;


## Параметры


Row. Индекс строки ячейки;


Column. Индекс столбца ячейки.


## Описание


Свойство SupportWriteAttachments
 возвращает признак возможности работы с вложениями для указанной ячейки.


## Комментарии


Допустимые значения:


	- True. В ячейке доступна
	 работа с вложениями;


	- False. В ячейке недоступна
	 работа с вложениями.


Для работы с вложениями в источнике данных таблицы должно быть задано
 [место
 хранения вложений](KeCubes.chm::/Interface/IStandardCubeDestination/IStandardCubeDestination.AttachmentsStorage.htm).


## Пример


Использование свойства приведено в примере для [IPivotTable.Attachments](IPivotTable.Attachments.htm).


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
