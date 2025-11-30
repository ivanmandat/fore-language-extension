# IMetabase.RefreshO

IMetabase.RefreshO
-


# IMetabase.RefreshO


## Синтаксис


RefreshO(Options: [MetabaseRefreshOptions](../../Enums/MetabaseRefreshOptions.htm);
 [Parent: Integer = -1]);


## Параметры


Options. Параметры обновления
 репозитория;


Parent. Ключ объекта репозитория,
 список дочерних объектов которого будет обновляться.


## Описание


Метод RefreshO осуществляет
 обновление репозитория по заданным параметрам.


## Комментарии


Обновление репозитория в режиме Reconnect не поддерживается, если код
 на Fore выполняется с помощью операции [ForeExec](PPSOMService.chm::/Operations/Repository/ForeExec.htm)
 при настроенном для BI-сервера [пуле
 соединений](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm) (группа настроек Pool).


## Пример


Пример использования приведен в описании [IMetabase.IsDisconnected](IMetabase.IsDisconnected.htm).


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
