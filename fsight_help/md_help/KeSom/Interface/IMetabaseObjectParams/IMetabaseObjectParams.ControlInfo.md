# IMetabaseObjectParams.ControlInfo

IMetabaseObjectParams.ControlInfo
-


# IMetabaseObjectParams.ControlInfo


## Синтаксис


ControlInfo: [IMetabaseObjectControlInfo](../IMetabaseObjectControlInfo/IMetabaseObjectControlInfo.htm);


## Описание


Свойство ControlInfo возвращает
 объект, используемый для управления параметрами вложенных объектов.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ_1. Данный объект и все вложенные объекты, используемые
 для его настройки, содержат одинаковое количество параметров.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParams;

	    ConInf: IMetabaseObjectControlInfo;

	    Con: IMetabaseObjectControl;

	    Param: IMetabaseObjectParamControl;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := Mb.ItemById("Obj_1").Edit;

	    Params := MObj.Params;

	    ConInf := Params.ControlInfo;

	    For i := 0 To ConInf.Count - 1 Do

	        Con := ConInf.Item(i);

	        For j := 0 To Con.Count - 1 Do

	            Param := Con.Item(j);

	            Param.Expression.AsString := ":" + Params.Item(j).Id;

	        End For;

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет осуществлена настройка управления параметрами
 вложенных объектов для указанного объекта. При открытии объекта, после
 ввода значений параметров, данные значения будут также переданы для открытия
 вложенных объектов один к одному.


См. также:


[IMetabaseObjectParams](IMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
