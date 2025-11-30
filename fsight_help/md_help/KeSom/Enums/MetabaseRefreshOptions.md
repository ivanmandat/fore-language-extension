# MetabaseRefreshOptions

MetabaseRefreshOptions
-


# MetabaseRefreshOptions


## Описание


Перечисление MetabaseRefreshOptions
 определяет параметры обновления репозитория.


Используется следующим методом:


	- [IMetabase.RefreshO](../Interface/IMetabase/IMetabase.RefreshO.htm).


## Комментарии


Обновление репозитория в режиме Reconnect
 не поддерживается, если код на Fore выполняется с помощью операции [ForeExec](PPSOMService.chm::/Operations/Repository/ForeExec.htm)
 при настроенном для BI-сервера [пуле
 соединений](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm) (группа настроек Pool).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Objects. Обновлять
		 объекты репозитория.


		 1
		 ClearSecurity. Обновлять
		 политику безопасности.


		 2
		 NoObjects. Не обновлять
		 объекты репозитория.


		 4
		 NoRefreshEvent. Не
		 обновлять элементы управления, привязанные к списку объектов.


		 8
		 AppendOnly. Не обновлять
		 объекты, находящиеся на удаленном компьютере.


		 16
		 NoDependents. Не обновлять
		 элементы, зависимые от изменения объектов.


		 32
		 FindParent. Значение
		 не используется, зарезервировано на будущее.


		 64
		 Reconnect. Установить
		 повторное соединение с сервером БД репозитория. Для проверки состояния
		 соединения с сервером предназначено свойство [IMetabase.IsDisconnected](../Interface/IMetabase/IMetabase.IsDisconnected.htm).


		 128
		 EstablishTies. Данное
		 значение не предназначено для использования в прикладном коде.


		 256
		 Recursive. Рекурсивно
		 обновлять объект со всеми потомками.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
