# IDatabase.DriverId

IDatabase.DriverId
-


# IDatabase.DriverId


## Синтаксис


DriverId: String;


## Описание


Свойство DriverId определяет
 идентификатор драйвера базы данных.


## Комментарии


Идентификатор указывается в зависимости от типа СУБД, которая используется
 на сервере. Список идентификаторов, которые могут быть указаны
 в данном свойстве, представлен в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


Для выполнения примера предполагается наличие файла базы данных Microsoft
 Access с наименованием «db1.mdb».


			Sub Main;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    DB: IDatabase;

Begin

    MB := MetabaseClass.Active;

        CrInfo := MB.CreateCreateInfo;

        CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

        CrInfo.Id := "MSACCESS_DB";

        CrInfo.Name := "Новая база данных";

        CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    DB := MObj As IDatabase;

    DB.Authentication := AuthenticationMode.Password;

    DB.DriverId := "OLEDB";

    DB.LogonData.ParamValue("FILENAME") := "c:\db1.mdb";

    MObj.Save;

End Sub Main;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. База будет использоваться для подключения к в файлу
 базы данных Microsoft Access с указанным наименованием.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
