# ISecurityPackage.CreateLogonData

ISecurityPackage.CreateLogonData
-


# ISecurityPackage.CreateLogonData


## Синтаксис


CreateLogonData(DriverName: String): [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm);


## Параметры


DriverName. Идентификатор
 драйвера БД.


## Описание


Метод CreateLogonData возвращает
 объект, содержащий свойства параметров модуля безопасности.


## Комментарии


Список идентификаторов, которые могут использоваться в качестве значения
 параметра DriverName, представлен
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)». Для проверки, поддерживается
 ли выбранный драйвер, используйте метод [ISecurityPackage.IsCompatibleDriver](ISecurityPackage.IsCompatibleDriver.htm).


## Пример


Использование свойства приведено в примере для [ISecurityPackage.CreateCredentials](ISecurityPackage.CreateCredentials.htm).


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
