# ICompoundDimension.CustomContainer

ICompoundDimension.CustomContainer
-


# ICompoundDimension.CustomContainer


## Синтаксис


CustomContainer: [ICustomDimension](../ICustomDimension/ICustomDimension.htm);


## Описание


Свойство CustomContainer определяет
 источники построения составного справочника по измерению фактов куба.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «CUBE_VIRTUAL» и конструируемого справочника с
 идентификатором «OBJ_CUSTOMDIM».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Obj, MbObj: IMetabaseObject;

	    Cub: IVirtualCube;

	    Dim: ICompoundDimension;

	    CubeModel: ICubeModel;

	    CustDim: ICustomDimension;

	Begin

	    Mb := MetabaseClass.Active;

	    Obj := Mb.ItemById("CUBE_VIRTUAL").Edit;

	    Cub := Obj As IVirtualCube;

	    dim := Cub.FactDimension As ICompoundDimension;

	    CubeModel := Cub As ICubeModel;

	    MbObj := Mb.ItemById("OBJ_CUSTOMDIM").Bind;

	    CustDim := MbObj As ICustomDimension;

	    Dim.CustomContainer := CustDim;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера, измерение фактов виртуального куба будет определено
 как составной справочник. Данное измерение будет построено на основе конструируемого
 справочника.


См. также:


[ICompoundDimension](ICompoundDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
