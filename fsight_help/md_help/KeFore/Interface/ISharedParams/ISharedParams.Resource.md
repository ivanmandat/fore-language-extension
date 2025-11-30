# ISharedParams.Resource

ISharedParams.Resource
-


# ISharedParams.Resource


## Синтаксис


Resource: [IResourceObject](ModForms.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resource определяет
 [ресурсы](UiNav.chm::/Multilanguage/Resources.htm),
 из которого будут браться текстовые значения в зависимости от используемого
 [языка
 репозитория](Setup.chm::/06_AK_Client_Config/UiNav_RepoConfig_repo1.htm#lang).


## Пример


	Sub UserProc;

	Var

	    MB : IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Des: IMetabaseObjectDescriptor;

	    Obj: IMetabaseObject;

	    Shp: ISharedParams;

	    Params: IMetabaseObjectParams;

	    Pa: IMetabaseObjectParam;

	Begin

	    MB := MetabaseClass.Active;

	    Mb.SpecialObject(MetabaseSpecialObject.SharedParams) := Null;

	    //создание области глобальных переменных

	    CrInfo := Mb.CreateCreateInfo;

	    CrInfo.Id := "MyParam";

	    CrInfo.Name := "MyParam";

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_SHAREDPARAMS;

	    CrInfo.Parent := MB.ItemById("OBJ19645");

	    CrInfo.Permanent := False;

	    Des := Mb.CreateObject(CrInfo);

	    Obj := Des.Edit;

	    Shp := Obj As ISharedParams;

	    Shp.IsShared := True;

	    Shp.Resource := MB.ItemById("Resource").Bind As IResourceObject;

	    Shp.NameResource := "SHARA";

	    Params := Shp.Params;

	    //создание параметра

	    Pa := Params.Add;

	    Pa.Id := "GLOBAL_INT";

	    Pa.DataType := DbDataType.Integer;

	    Pa.DefaultValue := 15;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера будет создана глобальная переменная, ее наименование
 будет зависеть от настроенного языка репозитория. В редакторе ресурсов
 (идентификатор Resource) строковый ресурс должен иметь идентификатор «SHARA_GLOBAL_INT».


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
