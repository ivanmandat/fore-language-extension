# ICompoundDimensionInstance.ComposeElement

ICompoundDimensionInstance.ComposeElement
-


# ICompoundDimensionInstance.ComposeElement


## Синтаксис


ComposeElement(Source: Integer; Elements: Array):
 Integer;


## Параметры


Source - индекс источника составного
 справочника, которому принадлежит элемент.


Elements - массив индексов
 элементов-источников. Размерность массива определяется числом фиксированных
 измерений источника Source.


## Описание


Метод ComposeElement возвращает
 индекс элемента составного справочника по его источникам.


Если элемент не найден, то метод возвращает значение «-1».


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «Virt_Cube».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IVirtualCube;

	    Sources: IVirtualCubeSources;

	    CDim: ICompoundDimension;

	    CSource: ICompoundDimensionSource;

	    CSel, Sel: IDimSelectionSet;

	    FixInfo: ICubeDimensionFixInfo;

	    Fix: ICubeDimensionFix;

	    Params: IMetabaseObjectParamValues;

	    CDimInst: ICompoundDimensionInstance;

	    Instance: IDimInstance;

	    Elements: IDimElements;

	    Source, i: Integer;

	    Arr: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := MB.ItemById("Virt_Cube").Bind As IVirtualCube;

	    Sources := Cube.Sources;

	    //Формирование отметки для открытия составного справочника

	    CDim := Cube.FactDimension As ICompoundDimension;

	    Sel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

	    CSel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

	    For Each CSource In CDim.Sources Do

	        Sel.Clear;

	        //Формирование отметки в соответствии с отметкой фиксированных измерений в источниках

	        FixInfo := Sources.FindByKey(CSource.Key).FixInfo;

	        For Each Fix In FixInfo Do

	            If Fix.Selection.SelectedCount <> 0 Then

	                Fix.Selection.CopyTo(Sel.Add(Fix.Instance), True);

	            End If;

	        End For;

	        CSel.AddCompound(CSource.Key, Sel);

	    End For;

	    //Открытие составного справочника

	    Params := (CDim As IMetabaseObject).Params.CreateEmptyValues;

	    Params.FindById("SELECTIONS").Value := CSel;

	    CDimInst := (CDim As IMetabaseObject).Open(Params) As ICompoundDimensionInstance;

	    //Получение элементов составного справочника

	    Instance := CDimInst As IDimInstance;

	    Elements := Instance.Elements;

	    //Индекс последнего источника данных

	    Source := CDim.Sources.Count - 1;

	    //Последний источник данных

	    CSource := CDim.Sources.Item(Source);

	    //Массив индексов элементов для получения индекса элемента составного справочника

	    Arr := New Integer[CSource.Dimensions.Count];

	    For i := 0 To CSource.Dimensions.Count - 1 Do

	        Arr[i] := 0;

	    End For;

	    //Индекс элемента в составном справочнике

	    i := CDimInst.ComposeElement(Source, Arr);

	    If i <> -1 Then

	        Debug.WriteLine(Elements.Name(i));

	    End If;

	End Sub UserProc;


После выполнения примера будет получен составной справочник виртуального
 куба. В консоль среды разработки будет выведено наименование источника
 данных и элементов фиксированных измерений источника, которые использовались
 при составлении наименования указанного элемента составного справочника.


См. также:


[ICompoundDimensionInstance](ICompoundDimensionInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
