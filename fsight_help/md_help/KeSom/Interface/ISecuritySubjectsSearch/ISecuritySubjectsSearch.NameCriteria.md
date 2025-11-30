# ISecuritySubjectsSearch.NameCriteria

ISecuritySubjectsSearch.NameCriteria
-


# ISecuritySubjectsSearch.NameCriteria


## Синтаксис


		NameCriteria: String;


## Описание


Свойство NameCriteria определяет
 наименование искомого субъекта безопасности.


## Комментарии


В качестве значения свойства может указываться:


	- Наименование субъекта;


	- Наименование субъекта с доменом (Необходимостью указания домена
	 управляет свойство [DomainSelectCriteria](ISecuritySubjectsSearch.DomainSelectCriteria.htm));


	- Шаблон, в соответствии с которым будет производиться поиск нескольких
	 субъектов безопасности.


В шаблоне можно использовать подстановочный символ «*»,
 указывающий на возможность совпадения нуля или более символов: "User*".


Если в свойстве [DomainSelectCriteria](ISecuritySubjectsSearch.DomainSelectCriteria.htm)
 задана необходимость указания домена или контроллера домена, то значение
 для NameCriteria задается в одном
 из следующих форматов:


	- Для указания домена: <domain>\<subject>
	 или <subject>@<domain.dns>;


	- Для указания контроллера домена: <domain>\<dc>\<subject>,
	 <dc>.<domain.dns>\<subject>
	 или <subject>@<dc>.<domain.dns>.


## Пример


Использование свойства приведено в примере для [ISecuritySubjectsSearch.ExecuteSearch](ISecuritySubjectsSearch.ExecuteSearch.htm).


См. также:


[ISecuritySubjectsSearch](ISecuritySubjectsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
