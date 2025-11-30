# IMetabasePasswordPolicy.CheckPassword

IMetabasePasswordPolicy.CheckPassword
-


# IMetabasePasswordPolicy.CheckPassword


## Синтаксис


		CheckPassword(User: [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm);
		 NewPassword: String; OldPassword: String);


## Параметры


User. Пользователь, для которого
 необходимо проверить корректность нового пароля.


NewPassword. Пароль, который
 необходимо проверить.


OldPassword. Старый пароль,
 относительно которого происходит проверка.


## Описание


Метод CheckPassword осуществляет
 проверку нового пароля пользователя на корректность в соответствии с установленной
 политикой паролей в менеджере безопасности. Если пароль не соответствует
 установленной политике паролей - генерируется исключительная ситуация.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Sec: IMetabaseSecurity;

		    User: IMetabaseUser;

		Begin

		    Mb := MetabaseClass.Active;

		    Sec := Mb.Security;

		    User := Sec.Users.Item(0);

		    Sec.Policy.PasswordPolicy.CheckPassword(User, "qwe", "qwr");

		End Sub UserProc;


После выполнения примера, если в политике паролей установлено ограничение
 на минимальное отличие старого пароля от нового более одного символа,
 то будет сгенерирована исключительная ситуация.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
