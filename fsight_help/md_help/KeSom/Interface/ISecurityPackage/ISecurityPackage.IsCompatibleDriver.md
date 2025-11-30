# ISecurityPackage.IsCompatibleDriver

ISecurityPackage.IsCompatibleDriver
-


# ISecurityPackage.IsCompatibleDriver


## Синтаксис


IsCompatibleDriver(DriverName: String): Boolean;


## Параметры


DriverName. Идентификатор
 драйвера БД.


## Описание


Метод IsCompatibleDriver возвращает
 признак поддержки текущим модулем безопасности указанного драйвера БД.


## Комментарии


Список идентификаторов, которые могут использоваться в качестве значения
 параметра DriverName, представлен
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


Допустимые значения, возвращаемые методом:


	- True. Модуль безопасности
	 поддерживает определённый тип драйвера БД;


	- False. Модуль безопасности
	 не поддерживает определённый тип драйвера БД.


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
