# IDatabase.SupportBinaryProtocol

IDatabase.SupportBinaryProtocol
-


# IDatabase.SupportBinaryProtocol


## Синтаксис


SupportBinaryProtocol: Boolean;


## Описание


Свойство SupportBinaryProtocol
 определяет, будут ли для работы с сервером PostgreSQL использоваться запросы
 в бинарном виде.


## Комментарии


Свойство актуально, если база данных осуществляет подключение к серверу
 на базе СУБД PostgreSQL.


Допустимые значения:


	- True. Для работы с сервером
	 используются запросы, приведённые к бинарному виду. Использование
	 бинарных запросов позволяет сократить объем трафика, который требуется
	 для отправки запросов и получения данных с сервера;


	- False. Значение по умолчанию.
	 Для работы с сервером используются текстовые запросы.


Примечание.
 Возможность использовать бинарные запросы доступна, если на сервере СУБД
 используется PostgreSQL версии 9.3 и выше.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    DB: IDatabase;

    LogonData: IPrimaryPostgresSPLD;

Begin

    MB := MetabaseClass.Active;

    //Информация о создаваемом объекте

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

    CrInfo.Id := "POSTGRESQL_DB";

    CrInfo.Name := "База данных PostgreSQL";

    CrInfo.Parent := MB.Root;

    //Создание новой базы данных и настройка свойств

    DB := MB.CreateObject(CrInfo).Edit As IDatabase;

    DB.Authentication := AuthenticationMode.Password;

    DB.DriverId := "POSTGRES";

    DB.SupportBinaryProtocol := True;

    LogonData := DB.LogonData As IPrimaryPostgresSPLD;

    LogonData.Server := "Server";

    LogonData.Database := "PPTest";

    //Сохранение

    (DB As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в корневом каталоге репозитория будет создана
 новая база данных. База будет осуществлять подключение к указанной схеме,
 расположенной на сервере PostgreSQL. При обращении к серверу будут использоваться
 запросы в бинарном виде.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
