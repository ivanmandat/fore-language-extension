# IDimSelectionSet.AddCompound

IDimSelectionSet.AddCompound
-


# IDimSelectionSet.AddCompound


## Синтаксис


AddCompound(Key: Integer; Selections: [IDimSelectionSet](IDimSelectionSet.htm);
 [IsCompound: Boolean = True]):
 [ICompoundSelection](../ICompoundSelection/ICompoundSelection.htm);


## Параметры


Key - ключ, который будет присвоен
 добавляемой отметке.


Selections - добавляемая отметка.


IsCompound - признак того,
 каким образом задается отметка: над элементами составного справочника
 или над элементами его источников. Необязательный параметр, значение по
 умолчанию True - отметка задана
 над элементами составного справочника.


## Описание


Метод AddCompound осуществляет
 добавление составной отметки.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «CUBE_VIRTUAL» и справочников с идентификаторами
 «OBJ_PD_01» и «OBJ_PD_02».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Obj: IMetabaseObject;

	    Cub: IVirtualCube;

	    Dimension: ICompoundDimension;

	    Source: ICompoundDimensionSource;

	    dimModel: IDimensionModel;

	    dimModel1: IDimensionModel;

	    df: IDimSelectionSetFactory;

	    Selections: IDimSelectionSet;

	    dimModelInstance: IDimInstance;

	    CompoundSelection: IDimSelectionSet;

	    Cinstance: ICompoundDimensionInstance;

	    Instance: IDimInstance;

	    el: IDimElements;

	    i, j: Integer;

	    Sel: ICompoundSelection;

	Begin

	    Mb := MetabaseClass.Active;

	    Obj := Mb.ItemById("CUBE_VIRTUAL").Edit;

	    Cub := Obj As IVirtualCube;

	    Dimension := Cub.FactDimension As ICompoundDimension;

	    If Dimension.CustomContainer <> Null Then

	        Dimension.CustomContainer := Null;

	    End If;

	    Dimension.Sources.Clear;

	    Source := Dimension.Sources.Add(1);

	    dimModel := Mb.ItemById("OBJ_PD_01").Bind As IDimensionModel;

	    dimModel1 := Mb.ItemById("OBJ_PD_02").Bind As IDimensionModel;

	    Source.Dimensions.Add(dimModel);

	    Source.Dimensions.Add(dimModel1);

	    df := New DimSelectionSetFactory.Create;

	    Selections := df.CreateDimSelectionSet;

	    dimModelInstance := (dimModel As IMetabaseObject).Open(Null) As IDimInstance;

	    Selections.Add(dimModelInstance);

	    dimModelInstance := (dimModel1 As IMetabaseObject).Open(Null) As IDimInstance;

	    Selections.Add(dimModelInstance);

	    Selections.Item(0).SelectAll;

	    Selections.Item(1).SelectAll;

	    CompoundSelection := df.CreateDimSelectionSet;

	    Sel := CompoundSelection.AddCompound(1, Selections);

	    Cinstance := (Dimension As IMetabaseObject).OpenWithParam(CompoundSelection) As ICompoundDimensionInstance;

	    Instance := Cinstance As IDimInstance;

	    Debug.WriteLine("Наименования элементов");

	    el := Instance.Elements;

	    j := Instance.Attributes.FindById("NAME").Attribute.Key;

	    For i := 0 To el.Count - 1 Do

	        Debug.WriteLine("Элемент " + (i + 1).ToString + ": " + (el.AttributeValue(i, j) As String));

	    End For;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера, измерение фактов виртуального куба будет определено
 как составной справочник. В данный справочник будут включены справочники
 «OBJ_PD_01» и «OBJ_PD_02». Будет произведена отметка всех элементов составного
 справочника. В окно консоли будут выведены наименования элементов виртуального
 куба.


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
