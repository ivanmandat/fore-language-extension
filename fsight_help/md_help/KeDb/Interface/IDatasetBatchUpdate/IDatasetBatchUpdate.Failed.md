# IDatasetBatchUpdate.Failed

IDatasetBatchUpdate.Failed
-


# IDatasetBatchUpdate.Failed


## Синтаксис


Failed(RecNo: Integer): Boolean;


## Параметры


RecNo.
 Номер записи в буфере;


## Описание


Свойство Failed возвращает признак
 обновления записи в источнике данных после применения обновления.


## Комментарии


Если свойства возвращает False,
 то обновление указанной записи произошло успешно, при значении True
 – есть ошибки, обновление к записи не применено.


См. также:


[IDatasetBatchUpdate](IDatasetBatchUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
