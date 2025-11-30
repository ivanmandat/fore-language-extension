# IMetabaseOnBeforeLogonArgs.Metabase

IMetabaseOnBeforeLogonArgs.Metabase
-


# IMetabaseOnBeforeLogonArgs.Metabase


## Синтаксис


		Metabase: [IMetabase](../IMetabase/IMetabase.htm);


## Описание


Свойство Metabase возвращает
 соединение с репозиторием, созданное с сохранёнными учетными данными по
 умолчанию.


## Комментарии


Данное соединение создаётся при подключении к репозиторию под служебными
 учётными данными, которые должны быть [защищённо
 сохранены](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm) на BI-сервере. При необходимости соединение
 может быть переопределено.


## Пример


Пример использования приведён в описании метода [IMetabaseCustomEvents.OnBeforeLogon](../IMetabaseCustomEvents/IMetabaseCustomEvents.OnBeforeLogon.htm).


См. также:


[IMetabaseOnBeforeLogonArgs](IMetabaseOnBeforeLogonArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
