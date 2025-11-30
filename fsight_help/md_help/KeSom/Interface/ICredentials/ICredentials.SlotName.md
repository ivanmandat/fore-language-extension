# ICredentials.SlotName

ICredentials.SlotName
-


# ICredentials.SlotName


## Синтаксис


SlotName(Index: Intege): String;


## Параметры


Index - номер
 столбца.


## Описание


Свойство SlotName возвращает
 наименование столбца таблицы учетных данных репозитория, номер которого
 передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    LoS: ILogonSession;

	    Sc: ISecurityConnection;

	    Cr: ICredentials;

	    S: String;

	Begin

	    Mb := MetabaseClass.Active;

	    LoS := Mb.LogonSession;

	    Sc := LoS.PrimaryConnection;

	    Cr := Sc.Credentials;

	    S := Cr.SlotName(0);

	End Sub UserProc;


После выполнения примера в переменной «s» будет находиться наименование
 первого столбца таблицы учётных данных репозитория.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
