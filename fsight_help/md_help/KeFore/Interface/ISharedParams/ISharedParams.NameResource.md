# ISharedParams.NameResource

ISharedParams.NameResource
-


# ISharedParams.NameResource


## Синтаксис


NameResource: String;


## Описание


Свойство NameResource определяет
 строковый ресурс, значения которого будут использоваться для наименований
 глобальных переменных в зависимости от используемого [языка
 репозитория](UiNav.chm::/02_Navigator/Repo_Config/UiNav_RepoConfig_repo1.htm#lang).


## Комментарии


В качестве значения данного свойства следует указать часть идентификатора
 строкового ресурса. Идентификатор строкового ресурса в [редакторе
 ресурсов](UiNavObj.chm::/UiNavObj_resource.htm) должен иметь структуру: <Идентификатор, который будет
 передаваться свойству NameResource>_<Идентификатор глобальной переменной>.


Ресурсы, из которого будут браться наименования, определяется свойством
 [Resource](ISharedParams.Resource.htm).


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


После выполнения примера будет создана глобальная переменная, причем
 ее наименование будет зависеть от настроенного языка репозитория (схемы).
 В редакторе ресурсов (идентификатор Resource) строковый ресурс должен
 иметь идентификатор «SHARA_GLOBAL_INT».


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
