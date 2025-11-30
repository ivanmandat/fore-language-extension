# ISharedParams.IsShared

ISharedParams.IsShared
-


# ISharedParams.IsShared


## Синтаксис


IsShared: Boolean;


## Описание


Свойство IsShared определяет
 признак глобального объекта.


## Комментарии


В случае если значение свойства True,
 то объект считается областью глобальных переменных ([MetabaseSpecialObject.SharedParams](KeSom.chm::/Enums/MetabaseSpecialObject.htm)),
 в противном случае - нет. Данное свойство может быть установлено в True только для одного объекта репозитория,
 поэтому при установке свойства в True
 для предыдущей области оно будет автоматически установлено в False.


По умолчанию свойство имеет значение False.


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

	    CrInfo.Parent := MB.ItemById("Folder");

	    CrInfo.Permanent := False;

	    Des := Mb.CreateObject(CrInfo);

	    Obj := Des.Edit;

	    Shp := Obj As ISharedParams;

	    Shp.IsShared := True;

	    Params := Shp.Params;

	    //создание параметра

	    Pa := Params.Add;

	    Pa.Id := "GLOBAL_INT";

	    Pa.DataType := DbDataType.Integer;

	    Pa.DefaultValue := 15;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера будет создана область глобальных параметров
 и создана одна глобальная переменная.


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
