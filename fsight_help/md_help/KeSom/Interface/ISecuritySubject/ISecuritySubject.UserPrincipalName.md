# ISecuritySubject.UserPrincipalName

ISecuritySubject.UserPrincipalName
-


# ISecuritySubject.UserPrincipalName


## Синтаксис


UserPrincipalName: String;


## Описание


Свойство UserPrincipalName возвращает
 наименование доменного пользователя.


## Комментарии


Свойство актуально только для доменных пользователей. Для пользователей,
 созданных в менеджере безопасности репозитория или доменных групп, свойство
 вернет пустую строку. Для доменных пользователей наименование возвращается
 в формате: субъект@домен.


## Пример


Пример использования приведен в описании свойства [ISecuritySubjectsSearch.DomainCredentials](../ISecuritySubjectsSearch/ISecuritySubjectsSearch.DomainCredentials.htm).


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
