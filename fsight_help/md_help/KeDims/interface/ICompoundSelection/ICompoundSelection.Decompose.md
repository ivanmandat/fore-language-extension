# ICompoundSelection.Decompose

ICompoundSelection.Decompose
-


# ICompoundSelection.Decompose


## Синтаксис


Decompose;


## Описание


Метод Decompose раскладывает
 составную отметку по измерениям.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «CUBE_VIRTUAL».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Obj: IMetabaseObject;

	    Cub: IVirtualCube;

	    Dimension: ICompoundDimension;

	    Cinstance: ICompoundDimensionInstance;

	    Sel: ICompoundSelection;

	Begin

	    Mb := MetabaseClass.Active;

	    Obj := Mb.ItemById("CUBE_VIRTUAL").Edit;

	    Cub := Obj As IVirtualCube;

	    Dimension := Cub.FactDimension As ICompoundDimension;

	    Cinstance := (Dimension As IMetabaseObject).Open(Null) As ICompoundDimensionInstance;

	    Sel := Cinstance.Selection.Item(0) As ICompoundSelection;

	    If Not Sel.IsSingleSelected Then

	        Sel.Decompose;

	    End If;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера, составная отметка будет разложена источникам,
 если они присутствуют в отметке.


См. также:


[ICompoundSelection](ICompoundSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
