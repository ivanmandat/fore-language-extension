# IMetabaseUpdateLogRecord.LocalOriginalMetabase

IMetabaseUpdateLogRecord.LocalOriginalMetabase
-


# IMetabaseUpdateLogRecord.LocalOriginalMetabase


## Синтаксис


LocalOriginalMetabase: String;


## Описание


Свойство LocalOriginalMetabase
 возвращает идентификатор репозитория-источника локального объекта до обновления.


## Комментарии


Свойство будет доступно, если в политике безопасности репозитория включён
 контроль версий объектов при обновлении ([IMetabasePolicy.CheckObjectVerionOnUpdateFromPef](../IMetabasePolicy/IMetabasePolicy.CheckObjectVerionOnUpdateFromPef.htm)
 = True).


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateLog.Records](../IMetabaseUpdateLog/IMetabaseUpdateLog.Records.htm).


См. также:


[IMetabaseUpdateLogRecord](IMetabaseUpdateLogRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
