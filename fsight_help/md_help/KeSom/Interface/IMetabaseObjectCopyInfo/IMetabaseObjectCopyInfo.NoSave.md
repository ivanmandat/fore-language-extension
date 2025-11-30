# IMetabaseObjectCopyInfo.NoSave

IMetabaseObjectCopyInfo.NoSave
-


# IMetabaseObjectCopyInfo.NoSave


## Синтаксис


NoSave: Boolean;


## Описание


Свойство NoSave определяет признак
 сохранения копии объекта после копирования.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом копия сразу сохраняется. Если свойству установить значение True, то после копирования сохранение
 копии не производится. Открытая на редактирование копия будет доступна
 в свойстве [IMetabaseObjectCopyInfo.Destination](IMetabaseObjectCopyInfo.Destination.htm).
 Используется, если необходимо после копирования произвести какие-либо
 дополнительные изменения в копии, для избежания двойного сохранения.


## Пример


Для выполнения примера предполагается наличие
 в репозитории базы данных с идентификатором DB_1.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CInfo: IMetabaseObjectCopyInfo;

	    MObj: IMetabaseObject;

	    BD: IDatabase;

	Begin

	    MB := MetabaseClass.Active;

	    CInfo := MB.CreateCopyInfo;

	    CInfo.Id := "DB_2";

	    CInfo.Name := "База данных 2";

	    CInfo.Destination := MB.Root;

	    CInfo.Source := MB.ItemById("DB_1");

	    CInfo.NoSave := True;

	    MB.CopyObject(CInfo);

	    MObj := CInfo.Destination As IMetabaseObject;

	    BD := MObj As IDatabase;

	    BD.LogonData.ParamValue("SCHEME") := "TestShema_1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера произойдет копирование базы данных в корневой
 каталог репозитория. В полученной копии базы данных, перед сохранением,
 будет изменено наименование схемы, к которой будет осуществляться подключение.


См. также:


[IMetabaseObjectCopyInfo](IMetabaseObjectCopyInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
