# IDatabase.UseServiceLogonData

IDatabase.UseServiceLogonData
-


# IDatabase.UseServiceLogonData


## Синтаксис


UseServiceLogonData: Boolean;


## Описание


Свойство UseServiceLogonData
 определяет, будут ли переопределены настройки подключения для подключения
 через веб-сервис «Форсайт. Аналитическая платформа».


## Комментарии


Допустимые значения:


	- True. Свойство [IDatabase.LogonData](IDatabase.LogonData.htm)
	 можно привести к типу [IPrimaryServiceSPLD](KeSom.chm::/Interface/IPrimaryServiceSPLD/IPrimaryServiceSPLD.htm)
	 и указать параметры подключения через веб-сервис «Форсайт. Аналитическая платформа»;


	- False. Значение по умолчанию.
	 Используются настройки текущего репозитория или переопределенные настройки,
	 указанные в свойстве [IDatabase.LogonData](IDatabase.LogonData.htm),
	 если свойству [IDatabase.UseMetabaseLogonData](IDatabase.UseMetabaseLogonData.htm)
	 установлено значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «DBWeb».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    DB: IDatabase;

    LogonData: IPrimaryServiceSPLD;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("DBWeb").Edit;

    DB := MObj As IDatabase;

    DB.UseMetabaseLogonData := False;

    DB.Authentication := AuthenticationMode.Password;

    DB.DriverId := "WSF";

    LogonData := DB.LogonData As IPrimaryServiceSPLD;

    LogonData.Endpoint := "http://test-srv:9090/axis2/services/PP.SOM.Som";

    LogonData.Metabase := "Warehouse";

    MObj.Save;

End Sub UserProc;


При выполнении примера будут переопределены параметры подключения для
 указанной базы данных. Подключение будет осуществляться через указанный
 веб-сервис «Форсайт. Аналитическая платформа».


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
