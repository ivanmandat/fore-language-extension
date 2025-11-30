# DomainSelectType

DomainSelectType
-


# DomainSelectType


## Описание


Перечисление DomainSelectType
 содержит способы указания домена при поиске субъектов безопасности.


Используется следующими свойствами и методами:


	- [ISecuritySubjectsSearch.DomainSelectCriteria](../Interface/ISecuritySubjectsSearch/ISecuritySubjectsSearch.DomainSelectCriteria.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. По умолчанию.
		 Если наименование домена не задано явно в свойстве [ISecuritySubjectsSearch.NameCriteria](../Interface/ISecuritySubjectsSearch/ISecuritySubjectsSearch.NameCriteria.htm),
		 то поиск осуществляется в домене текущего пользователя.


		 1
		 CurrentComputerDomain.
		 Домен текущего компьютера.


		 2
		 SpecifiedDomain. Наименование
		 домена задано явно. Наименование указывается в свойстве [ISecuritySubjectsSearch.NameCriteria](../Interface/ISecuritySubjectsSearch/ISecuritySubjectsSearch.NameCriteria.htm).


		 3
		 DomainController. Задано
		 наименование контроллера домена. Наименование указывается в свойстве
		 [ISecuritySubjectsSearch.NameCriteria](../Interface/ISecuritySubjectsSearch/ISecuritySubjectsSearch.NameCriteria.htm).


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
