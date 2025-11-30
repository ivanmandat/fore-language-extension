# ILogonParams.MetabaseCompatible

ILogonParams.MetabaseCompatible
-


# ILogonParams.MetabaseCompatible


## Синтаксис


MetabaseCompatible: Boolean;


## Описание


Свойство MetabaseCompatible
 возвращает, можно ли использовать учётные данные пользователя, указанные
 при входе в систему, для соединения с базой данных.


## Комментарии


При значении True есть возможность
 использования введенных при регистрации данных, то есть свойство [UseMetabaseLogonCredentials](ILogonParams.UseMetabaseLogonCredentials.htm)
 ранее было установлено в OnOption, при значении False
 – возможности нет.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    LogSes: ILogonSession;

	    Res: Boolean;

	Begin

	    MB := MetabaseClass.Active;

	    LogSes := MB.LogonSession;

	    Res := LogSes.CreateLogonParams.MetabaseCompatible;

	    Debug.WriteLine(Res);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение свойства.


См. также:


[ILogonParams](ILogonParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
