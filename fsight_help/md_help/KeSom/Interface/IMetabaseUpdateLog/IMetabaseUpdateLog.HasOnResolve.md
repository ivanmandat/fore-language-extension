# IMetabaseUpdateLog.HasOnResolve

IMetabaseUpdateLog.HasOnResolve
-


# IMetabaseUpdateLog.HasOnResolve


## Синтаксис


HasOnResolve: Boolean;


## Описание


Свойство HasOnResolve возвращает
 признак наличия событий, которые наступают, если в обновлении имеется
 зависимость от объекта в репозитории-источнике, который отсутствует в
 репозитории назначения.


## Комментарии


Свойство возвращает значение True,
 если в списке [записей](IMetabaseUpdateLog.Records.htm) имеются
 события, наступающие при наличии зависимостей от объекта в репозитории-источнике,
 который отсутствует в репозитории назначения.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateLog.IsFinished](IMetabaseUpdateLog.IsFinished.htm).


См. также:


[IMetabaseUpdateLog](IMetabaseUpdateLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
