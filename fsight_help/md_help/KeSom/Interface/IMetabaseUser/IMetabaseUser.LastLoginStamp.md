# IMetabaseUser.LastLoginStamp

IMetabaseUser.LastLoginStamp
-


# IMetabaseUser.LastLoginStamp


## Синтаксис


		LastLoginStamp: DateTime;


## Описание


Свойство LastLoginStamp возвращает
 дату последнего входа в систему.


## Комментарии


Дата входа меняется и при удачном (всегда) и при неудачном входе (если
 корректно настроен служебный пользователь).


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    User: IMetabaseUser;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    User := MS.ResolveName("USER") As IMetabaseUser;

		    Debug.WriteLine(User.LastLoginStamp);

		End Sub UserProc;


После выполнения примера в консоль будет выведена дата и время последнего
 входа пользователя USER.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
