# IMetabaseUpdateLogRecord.HasOnResolve

IMetabaseUpdateLogRecord.HasOnResolve
-


# IMetabaseUpdateLogRecord.HasOnResolve


## Синтаксис


HasOnResolve: Boolean;


## Описание


Свойство HasOnResolve возвращает
 признак наличия конфликта, связанного с наличием зависимостей объекта
 обновления от объектов репозитория-источника, которые отсутствуют в репозитории
 назначения.


## Комментарии


Если свойство возвращает значение True,
 то конфликт может быть обработан в свойстве [OnResolve](IMetabaseUpdateLogRecord.OnResolve.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateLog.Records](../IMetabaseUpdateLog/IMetabaseUpdateLog.Records.htm).


См. также:


[IMetabaseUpdateLogRecord](IMetabaseUpdateLogRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
