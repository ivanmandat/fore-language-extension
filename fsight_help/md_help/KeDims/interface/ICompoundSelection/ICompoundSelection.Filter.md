# ICompoundSelection.Filter

ICompoundSelection.Filter
-


# ICompoundSelection.Filter


## Синтаксис


Filter: [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm);


## Описание


Свойство Filter возвращает параметры
 фильтрации составной отметки.


## Комментарии


Фильтрация задается в виде матрицы. Размерность матрицы и размерность
 составного измерения должны совпадать.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1», компонента UiDimension с идентификатором «UiDimension1»,
 служащим источником данных для компонента DimensionTree. В репозитории
 должны присутствовать справочники с идентификаторами «OBJ_PD_01» и «OBJ_PD_02».
 Также необходимо добавить ссылки на системные сборки «Metabase», «Cubes»,
 «Matrix», «Dimensions».


Пример является обработчиком события OnClick для компонента «Button1».


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	        Var

	        CompoundDimension: ICompoundDimension;

	        Mb: IMetabase;

	        DimFirst: IDimInstance;

	        DimSecond: IDimInstance;

	        CreateInfo: IMetabaseObjectCreateInfo;

	        Source: ICompoundDimensionSource;

	        SelSet: IDimSelectionSet;

	        SourceSelSet: IDimSelectionSet;

	        SelSetFactory: IDimSelectionSetFactory;

	        CompoundSel: ICompoundSelection;

	        Obj: IMetabaseObject;

	        Values: IMetabaseObjectParamValues;

	    Begin

	        Mb := MetabaseClass.Active;

	        SelSetFactory := New DimSelectionSetFactory.Create;

	        SelSet := SelSetFactory.CreateDimSelectionSet;

	        SourceSelSet := SelSetFactory.CreateDimSelectionSet;

	        CreateInfo := Mb.CreateCreateInfo;

	        CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_COMPOUNDDIM;

	        CreateInfo.Permanent := False;

	        CreateInfo.Name := "Составное измерение";

	        CreateInfo.Id := "CompoundDimension";

	        CompoundDimension := Mb.CreateObject(CreateInfo).Edit As ICompoundDimension;

	        DimFirst := Mb.ItemById("OBJ_PD_01").Open(Null) As IDimInstance;

	        DimSecond := Mb.ItemById("OBJ_PD_02").Open(Null) As IDimInstance;

	        Source := CompoundDimension.Sources.Add(0);

	        Source.Dimensions.Add(DimFirst.Dimension);

	        Source.Dimensions.Add(DimSecond.Dimension);

	        SourceSelSet.Add(DimFirst).SelectAll;

	        SourceSelSet.Add(DimSecond).SelectAll;

	        CompoundSel := SelSet.AddCompound(0, SourceSelSet);

	        CompoundSel.Filter := CreateFilterMatrix;

	        Obj := CompoundDimension As IMetabaseObject;

	        Values := Obj.Params.CreateEmptyValues;

	        Values.FindById("SELECTIONS").Value := SelSet;

	        UiDimension1.Instance := Obj.Open(Values);

	        UiDimension1.Active := True;

	    End Sub Button1OnClick;


	    Function CreateFilterMatrix: IMatrixModel;

	    Var

	        result: IMatrixModel;

	        factory: MatrixFactory;

	        coord: IMatrixModelCoord;

	    Begin

	        factory := New MatrixFactory.Create;

	        result := factory.CreateMatrixModel(2);

	        coord := result.CreateModelCoord;

	        coord.Item(0) := 0;

	        coord.Item(1) := 1;

	        result.Item(coord) := 1;

	        coord.Item(0) := 2;

	        coord.Item(1) := 1;

	        result.Item(coord) := 1;

	        coord.Item(0) := 3;

	        coord.Item(1) := 3;

	        result.Item(coord) := 1;

	        coord.Item(0) := 2;

	        coord.Item(1) := 2;

	        result.Item(coord) := 1;

	        Return result;

	    End Function CreateFilterMatrix;


После выполнения примера на основе справочников «OBJ_PD_01» и «OBJ_PD_02»
 будет создано составной справочник. К элементам справочника будет применена
 фильтрация. В компонент DimensionTree
 будут выведены элементы справочника с учетом наложенной фильтрации.


См. также:


[ICompoundSelection](ICompoundSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
