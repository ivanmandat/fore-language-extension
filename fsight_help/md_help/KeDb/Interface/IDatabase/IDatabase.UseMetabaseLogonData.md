# IDatabase.UseMetabaseLogonData

IDatabase.UseMetabaseLogonData
-


# IDatabase.UseMetabaseLogonData


## Синтаксис


UseMetabaseLogonData: Boolean;


## Описание


Свойство UseMetabaseLogonData
 определяет, будут ли переопределены настройки подключения к БД.


## Комментарии


Допустимые значения:


	- True. Для подключения
	 используются настройки, заданные в подключении к репозиторию.


	- False. Значение по умолчанию.
	 Для подключения используются собственные настройки, заданные с помощью
	 различных свойств интерфейса [IDatabase](IDatabase.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «OBJ_DB».


	Sub UserProc;

	Var

	    mb: IMetabase;

	    mbobj: IMetabaseObject;

	    db: IDatabase;

	    LogonData: ISecurityPackageLogonData;

	Begin

	    mb := MetabaseClass.Active;

	    mbobj := mb.ItemById("OBJ_DB").Edit;

	    db := mbobj As IDatabase;

	    db.UseMetabaseLogonData := False;

	    db.Authentication := AuthenticationMode.Password;

	    db.DriverId := "ORCL";

	    LogonData := db.LogonData;

	    LogonData.ParamValue("SERVER") := "Test";

	    LogonData.ParamValue("SCHEME") := "TestShema";

	    mbobj.Save;

	End Sub UserProc;


После выполнения примера для базы данных «OBJ_DB» будут переопределены
 настройки подключения.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
