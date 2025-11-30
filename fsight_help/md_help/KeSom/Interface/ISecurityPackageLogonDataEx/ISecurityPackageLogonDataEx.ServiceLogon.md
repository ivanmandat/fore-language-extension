# ISecurityPackageLogonDataEx.ServiceLogon

ISecurityPackageLogonDataEx.ServiceLogon
-


# ISecurityPackageLogonDataEx.ServiceLogon


## Синтаксис


		ServiceLogon:
		 Boolean;


## Описание


Свойство ServiceLogon определяет
 признак подключения через веб-сервис платформы без создания соединения
 с репозиторием.


## Комментарии


Свойство актуально только при работе с объектом репозитория «[База данных](UiNavObj.chm::/database/UiDb_database.htm)».


Если свойству установлено значение True,
 то при работе подключение к серверу СУБД будет осуществляться через веб-сервис
 платформы. При этом создается только соединение с сервером БД без создания
 соединения с репозиторием. Такое подключение может использоваться для
 работы с реляционными объектами, созданными в репозитории и хранящимися
 на сервере БД. Параметры модуля безопасности для подключения через веб-сервис
 задаются в свойстве [ServiceLogonData](ISecurityPackageLogonDataEx.ServiceLogonData.htm).


По умолчанию свойству ServiceLogon
 установлено значение False, при
 этом подключение к серверу СУБД осуществляется в соответствии с настройками,
 заданными для базы данных в свойстве [IDatabase.LogonData](KeDb.chm::/Interface/IDatabase/IDatabase.LogonData.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором MS_DB.


Добавьте ссылки на системные сборки: Metabase, Db.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    DB: IDatabase;

		    LdEx: ISecurityPackageLogonDataEx;

		    SvcLd: IPrimaryServiceSPLD;

		Begin

		    MB := MetabaseClass.Active;

		    DB := MB.ItemById("MS_DB").Edit As IDatabase;

		    LdEx := DB.LogonData As ISecurityPackageLogonDataEx;

		    LdEx.ServiceLogon := True;

		    SvcLd := LdEx.ServiceLogonData As IPrimaryServiceSPLD;

		    SvcLd.Endpoint := "http://test-srv:9090/axis2/services/PP.SOM.Som";

		    (DB As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера будут изменены дополнительные параметры указанной
 базы данных: подключение к серверу СУБД, настройки которого определены
 в параметрах базы данных, будет осуществляться через веб-сервис платформы
 с указанным адресом.


См. также:


[ISecurityPackageLogonDataEx](ISecurityPackageLogonDataEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
