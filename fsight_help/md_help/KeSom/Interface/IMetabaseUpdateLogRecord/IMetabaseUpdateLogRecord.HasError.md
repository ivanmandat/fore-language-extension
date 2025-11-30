# IMetabaseUpdateLogRecord.HasError

IMetabaseUpdateLogRecord.HasError
-


# IMetabaseUpdateLogRecord.HasError


## Синтаксис


HasError: Boolean;


## Описание


Свойство HasError возвращает
 признак наличия ошибки в процессе применения элемента обновления.


## Комментарии


Свойство возвращает значение True,
 если при обновлении элемента [Node](IMetabaseUpdateLogRecord.Node.htm)
 возникла какая-либо ошибка и False,
 если элемент обновлён удачно. Ошибку, при её наличии, можно получить в
 свойстве [Error](IMetabaseUpdateLogRecord.Error.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateLog.Records](../IMetabaseUpdateLog/IMetabaseUpdateLog.Records.htm).


См. также:


[IMetabaseUpdateLogRecord](IMetabaseUpdateLogRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
