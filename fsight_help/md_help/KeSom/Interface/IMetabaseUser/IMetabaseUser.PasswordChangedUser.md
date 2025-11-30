# IMetabaseUser.PasswordChangedUser

IMetabaseUser.PasswordChangedUser
-


# IMetabaseUser.PasswordChangedUser


## Синтаксис


		PasswordChangedUser: [IMetabaseUser](IMetabaseUser.htm);


## Описание


Свойство PasswordChangedUser
 возвращает пользователя, который потребовал смену пароля.


## Комментарии


Потребовать смену пароля может пользователь, обладающий привилегией
 «Изменение прав пользователей, раздача ролей, изменение политики».


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    User, ChangedUser: IMetabaseUser;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    User := MS.ResolveName("USER") As IMetabaseUser;

		    ChangedUser := User.PasswordChangedUser;

		    If ChangedUser = Null Then

		        Debug.WriteLine("Смена пароля не требовалась");

		    Else

		        Debug.WriteLine("Смену пароля потребовал пользователь " + ChangedUser.Name);

		    End If;

		End Sub UserProc;


После выполнения примера в консоль будет выведен результат требования
 смены пароля.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
