# ProtocolSelectType

ProtocolSelectType
-


# ProtocolSelectType


## Описание


Перечисление ProtocolSelectType
 содержит протоколы, которые могут использоваться при подключении к службе
 каталогов.


Используется следующими свойствами и методами:


	- [ISecuritySubjectsSearch.ProtocolSelectCriteria](../Interface/ISecuritySubjectsSearch/ISecuritySubjectsSearch.ProtocolSelectCriteria.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 LDAP. Протокол LDAP
		 (Используется по умолчанию).


		 1
		 GC. Подключение к службе
		 каталогов на базе Active Directory по протоколу LDAP.


		 2
		 OpenLDAP. Подключение
		 к службе каталогов с использованием OpenLDAP (открытая реализация
		 протокола LDAP). Используется, если служба каталогов организована
		 на сервере с ОС Linux.


## Комментарии


Для подключения к службе каталогов с использованием OpenLDAP требуется
 задание дополнительных настроек. Более подробно читайте в статье «[Механизм работы
 со службами каталогов](Admin.chm::/03_Admin/communication_with_ad.htm)».


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
