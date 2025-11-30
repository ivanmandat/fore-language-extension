# IMetabaseOnBeforeLogonArgs.ResultMetabase

IMetabaseOnBeforeLogonArgs.ResultMetabase
-


# IMetabaseOnBeforeLogonArgs.ResultMetabase


## Синтаксис


		ResultMetabase: [IMetabase](../IMetabase/IMetabase.htm);


## Описание


Свойство ResultMetabase определяет
 результирующее соединение с репозиторием, моникёр которого будет передан
 в веб-сервис.


## Комментарии


Если в пользовательском событии осуществляется переопределение параметров
 подключения к репозиторию или изменяется репозиторий, к которому происходит
 подключение, то результат подключения задайте в качестве значения свойства
 ResultMetabase.


## Пример


Пример использования приведён в описании метода [IMetabaseCustomEvents.OnBeforeLogon](../IMetabaseCustomEvents/IMetabaseCustomEvents.OnBeforeLogon.htm).


См. также:


[IMetabaseOnBeforeLogonArgs](IMetabaseOnBeforeLogonArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
