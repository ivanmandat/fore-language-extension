# ISecuritySubject.DistinguishedName

ISecuritySubject.DistinguishedName
-


# ISecuritySubject.DistinguishedName


## Синтаксис


DistinguishedName: String;


## Описание


Свойство DistinguishedName возвращает
 уникальное имя для субъекта безопасности.


## Комментарии


Свойство актуально только для доменных субъектов безопасности. Данное
 свойство возвращает уникальное имя в формате, который определен для службы
 каталогов, например: CN=user,OU=group,DC=domain,DC=ru. В зависимости от
 настроек службы для конкретного домена формат будет отличаться от указанного
 в примере.


## Пример


Использование свойства приведено в примере для [ISecuritySubjectsSearch.DomainCredentials](../ISecuritySubjectsSearch/ISecuritySubjectsSearch.DomainCredentials.htm).


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
