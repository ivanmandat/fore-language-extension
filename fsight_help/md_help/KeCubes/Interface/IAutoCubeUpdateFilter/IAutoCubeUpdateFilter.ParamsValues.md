# IAutoCubeUpdateFilter.ParamsValues

IAutoCubeUpdateFilter.ParamsValues
-


# IAutoCubeUpdateFilter.ParamsValues


## Синтаксис


ParamsValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamsValues определяет
 значения параметров автоматического куба.


## Пример


Для выполнения примера в репозитории предполагается наличие автоматического
 куба с идентификатором AUTOCUBE. Куб имеет целочисленный параметр.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


	Sub UserProc;

	Var

	    Update: IMetabaseUpdate;

	    CubeNode: IMetabaseUpdateDataObjectNode;

	    Object: IMetabaseObject;

	    Filter: IAutoCubeUpdateFilter;

	    Sel: IDimSelection;

	    ParamsVal: IMetabaseObjectParamValues;

	    CubeInst: ICubeInstance;

	    Mb: IMetabase;

	Begin

	    Mb := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    CubeNode := Update.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    Object := Mb.ItemById("AUTOCUBE").Bind;

	    CubeNode.Object := Object;

	    CubeNode.Label := CubeNode.Object.Name;

	    CubeNode.Method := MetabaseUpdateMethod.All;

	    CubeNode.IncludeData := True;

	    CubeNode.ExtendedParams := Object.CreateUpdateExParams;

	    Filter := CubeNode.ExtendedParams As IAutoCubeUpdateFilter;

	    ParamsVal:= Object.Params.CreateEmptyValues;

	    ParamsVal.Item(0).Value := "100";

	    Filter.ParamValues := ParamsVal;

	    CubeInst := Object.Open(ParamsVal) As ICubeInstance;

	    Filter.SelectionSet := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

	    For Each Sel In Filter.SelectionSet Do

	        If sel.Dimension.Ident = "CALENDAR" Then

	            sel.SelectSiblings(0);

	        Else

	            Sel.SelectElement(0, true);

	        End If;

	    End For;

	    Update.SaveToFileNF("D:\Work\autocube.pefx");

	End Sub UserProc;


При выполнении примера будет создано обновление. В обновление будет
 включён автоматический куб, для куба будут определены значения параметров
 и отметка.


См. также:


[IAutoCubeUpdateFilter](IAutoCubeUpdateFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
