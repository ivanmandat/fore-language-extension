# IDomainCredentials.LogonAsCurrentUser

IDomainCredentials.LogonAsCurrentUser
-


# IDomainCredentials.LogonAsCurrentUser


## Синтаксис


LogonAsCurrentUser: Boolean;


## Описание


Свойство LogonAsCurrentUser
 определяет, будет ли осуществлено подключение под текущим доменным пользователем.


## Комментарии


По умолчанию свойство имеет значение True
 и подключение осуществляется с учетными данными текущего доменного пользователя.
 В случае установки свойства в False
 для подключения к схеме необходимо определить свойства [Domain](IDomainCredentials.Domain.htm),
 [UserName](IDomainCredentials.UserName.htm) и [Password](IDomainCredentials.Password.htm).


## Пример


Использование свойства приведено в примере для [IDomainCredentials.Domain](IDomainCredentials.Domain.htm).


См. также:


[IDomainCredentials](IDomainCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
