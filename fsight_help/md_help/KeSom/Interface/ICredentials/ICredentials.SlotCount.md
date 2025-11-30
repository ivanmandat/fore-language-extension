# ICredentials.SlotCount

ICredentials.SlotCount
-


# ICredentials.SlotCount


## Синтаксис


SlotCount: Integer;


## Описание


Свойство SlotCount возвращает
 количество столбцов в таблице учетных данных репозитория.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    LoS: ILogonSession;

	    Sc: ISecurityConnection;

	    Cr: ICredentials;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    LoS := Mb.LogonSession;

	    Sc := LoS.PrimaryConnection;

	    Cr := Sc.Credentials;

	    i := Cr.SlotCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет находиться количество
 столбцов таблицы учётных данных активного репозитория.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
