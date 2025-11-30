# IDalConnectionExt.ChangeExpiredPassword

IDalConnectionExt.ChangeExpiredPassword
-


# IDalConnectionExt.ChangeExpiredPassword


## Синтаксис


ChangeExpiredPassword(NewPassword: String);


## Параметры


NewPassword – новый пароль.


## Описание


Метод ChangeExpiredPassword изменяет пароль пользователя на заданный в параметре.


## Комментарии


При данной смене пароля парольная политика репозитория ([IMetabasePasswordPolicy](KeSom.chm::/Interface/IMetabasePasswordPolicy/IMetabasePasswordPolicy.htm))
 не проверяется, также не проверяется запрет на смену пароля пользователем
 ([IMetabaseUser.CannotChangePassword](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.CannotChangePassword.htm)).
 При успешной смене пароля и подключении к репозиторию в протокол доступа
 заносится соответствующая запись, при неудачной смене пароля генерируется
 соответствующая исключительная ситуация с подробностями в виде ошибки
 СУБД. Если предыдущий пароль пользователя был зашифрованным, то и при
 данной смене пароля новый пароль тоже будет зашифрованным.


## Пример


Пример использования приведен в описании [IDalConnectionExt.PasswordExpired](IDalConnectionExt.PasswordExpired.htm).


См. также:


[IDalConnectionExt](IDalConnectionExt.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
