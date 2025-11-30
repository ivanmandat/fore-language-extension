# ISecurityPackageLogonDataEx.ServiceLogonData

ISecurityPackageLogonDataEx.ServiceLogonData
-


# ISecurityPackageLogonDataEx.ServiceLogonData


## Синтаксис


ServiceLogonData: [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm);


## Описание


Свойство ServiceLogonData возвращает
 дополнительные параметры модуля безопасности, содержащего настройки для
 подключения к СУБД через веб-сервис платформы.


## Комментарии


Свойство актуально только при работе с объектом репозитория «[База данных](UiNavObj.chm::/database/UiDb_database.htm)»
 и при использовании свойства [ServiceLogon](ISecurityPackageLogonDataEx.ServiceLogon.htm)
 с установленным значением True.


Для указания веб-сервиса платформы приведите значения свойства ServiceLogonData к интерфейсу [IPrimaryServiceSPLD](../IPrimaryServiceSPLD/IPrimaryServiceSPLD.htm)
 и определите свойство [IPrimaryServiceSPLD.Endpoint](../IPrimaryServiceSPLD/IPrimaryServiceSPLD.Endpoint.htm).


## Пример


Использование свойства приведено в примере для [ISecurityPackageLogonDataEx.ServiceLogon](ISecurityPackageLogonDataEx.ServiceLogon.htm).


См. также:


[ISecurityPackageLogonDataEx](ISecurityPackageLogonDataEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
