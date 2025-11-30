# IBusinessApplication.Database

IBusinessApplication.Database
-


# IBusinessApplication.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных, которая в дальнейшем будет использоваться в бизнес-приложении.


## Комментарии


Значение данного свойства задаётся один раз при создании нового бизнес-приложения.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB и папки с идентификатором F_DBA.


Добавьте ссылки на системные сборки: DBA, Db, Metabase. Также добавьте
 [ссылку на сборку](../../Intro/ModDBA_Programming.htm), необходимую
 для работы с бизнес-приложением.


			Sub UserProc;

Var

    Mb: IMetabase;

    CreateInfo: IMetabaseObjectCreateInfo;

    MDesc: IMetabaseObjectDescriptor;

    App: IBusinessApplication;

    Helper: IMetabaseHelper;

Begin

    MB := MetabaseClass.Active;

    Helper := GetMetabaseHelper;

    CreateInfo := MB.CreateCreateInfo;

    CreateInfo.ClassId := Helper.GetCustomClassByEnum(BPClasses.Business_Application).ClassId;

    CreateInfo.Id := "DBA_APP";

    CreateInfo.Name := "Бизнес-приложение";

    CreateInfo.Parent := Mb.ItemById("F_DBA");

    MDesc := MB.CreateObject(CreateInfo);

    MDesc := MDesc.Edit;

    App := New BusinessApplication.Create(MDesc);

    App.Database := MB.ItemById("DB").Bind As IDatabase;

    App.SaveObject;

End Sub UserProc;


При выполнении примера в указанной папке будет создано новое бизнес-приложение.


См. также:


[IBusinessApplication](IBusinessApplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
