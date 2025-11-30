# IMetabaseObjectCreateInfo.SkipIdFormatCheck

IMetabaseObjectCreateInfo.SkipIdFormatCheck
-


# IMetabaseObjectCreateInfo.SkipIdFormatCheck


## Синтаксис


SkipIdFormatCheck: Boolean;


## Описание


Свойство SkipIdFormatCheck определяет
 признак пропуска проверки идентификатора объекта репозитория на соответствие
 установленному формату идентификаторов.


## Комментарии


Допустимые значения:


	- True. Во время создания
	 объекта будет пропущена проверка идентификатора на соответствие установленному
	 в свойстве [IMetabasePolicy.ObjectsIdFormat](../IMetabasePolicy/IMetabasePolicy.ObjectsIdFormat.htm)
	 формату;


	- False. По умолчанию.
	 Во время создания объекта будет выполнена проверка идентификатора
	 на соответствие установленному в свойстве [IMetabasePolicy.ObjectsIdFormat](../IMetabasePolicy/IMetabasePolicy.ObjectsIdFormat.htm)
	 формату.


## Пример


 Добавьте ссылки на системные сборки: Db, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    DB: IDatabase;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

    CrInfo.Id := "NewBD";

    CrInfo.Name := "Новая база данных";

    CrInfo.Parent := MB.Root;

    CrInfo.SkipIdFormatCheck := True;

    MObj := MB.CreateObject(CrInfo).Edit;

    DB := MObj As IDatabase;

    DB.Authentication := AuthenticationMode.Password;

    DB.DriverId := "ORCL";

    DB.LogonData.ParamValue("SERVER") := "Test";

    DB.LogonData.ParamValue("SCHEME") := "TestShema";

    DB.UseMetabaseCredentials := True;

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данные будут располагаться на сервере «Test» в схеме
 «TestShema». При подключении к БД используется парольная аутентификация.
 Логин и пароль берутся из учетных данных, указанных при входе в платформу.
 При создании базы данных проверка на соответствие идентификатора установленному
 формату идентификаторов осуществляться не будет.


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
