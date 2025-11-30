# IDatabase.GrantCurrentRights

IDatabase.GrantCurrentRights
-


# IDatabase.GrantCurrentRights


## Синтаксис


GrantCurrentRights: Boolean;


## Описание


Свойство GrantCurrentRights определяет, будут ли раздаваться права пользователю БД в новой схеме, при изменении имени схемы или сервера в свойствах БД.


## Комментарии


Свойство имеет смысл, если [AutoAdjustRights](IDatabase.AutoAdjustRights.htm) установлено значение True. По умолчанию GrantCurrentRights установлено в True.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором "BD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    DB: IDatabase;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("BD").Edit;

	    DB := MObj As IDatabase;

	    DB.LogonData.ParamValue("SERVER") := "NewTest";

	    DB.LogonData.ParamValue("SCHEME") := "NewTestShema";

	    DB.AutoAdjustRights := True;

	    DB.GrantCurrentRights := True;

	    DB.RevokeGrantedRights := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены наименования сервера и схемы в настройках базы данных "BD". При сохранении будут автоматически розданы права пользователю на все объекты БД в новой схеме и забраны права в старой схеме.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
