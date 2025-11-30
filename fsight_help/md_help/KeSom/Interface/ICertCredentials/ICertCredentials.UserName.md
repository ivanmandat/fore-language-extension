# ICertCredentials.UserName

ICertCredentials.UserName
-


# ICertCredentials.UserName


## Синтаксис


UserName: String;


## Описание


Свойство UserName определяет
 пользователя, под которым осуществляется подключение к репозиторию.


## Комментарии


Указанный пользователь может отсутствовать в СУБД репозитория или менеджере
 безопасности. Если указан пользователь, который отсутствует везде, то
 он будет создан в менеджере безопасности репозитория. Если было задано
 свойство [ICertCredentials.RolesStr](ICertCredentials.RolesStr.htm),
 то пользователь будет включен в указанную группу и будет обладать соответствующими
 правами.


## Пример


Пример использования приведен в описании свойства [ICertCredentials.Signature](ICertCredentials.Signature.htm).


См. также:


[ICertCredentials](ICertCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
