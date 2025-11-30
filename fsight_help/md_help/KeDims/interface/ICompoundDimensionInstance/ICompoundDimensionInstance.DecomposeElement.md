# ICompoundDimensionInstance.DecomposeElement

ICompoundDimensionInstance.DecomposeElement
-


# ICompoundDimensionInstance.DecomposeElement


## Синтаксис


DecomposeElement(Element; Integer; Var
 Source: Integer; Var Elements:
 Array);


## Параметры


Element - индекс элемента составного
 справочника.


Source - переменная, в которую
 будет помещен индекс источника составного справочника, которому принадлежит
 элемент.


Elements - переменная, в которую
 будет помещен массив индексов элементов-источников. Размерность массива
 определяется числом фиксированных измерений источника Source.


## Описание


Метод DecomposeElement раскладывает
 элемент составного справочника на источники.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «Virt_Cube».


			Sub Main;

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

        Elements: IDimElements;

        Source, i: Integer;

        Arr: Array Of Integer;

    Begin

        MB := MetabaseClass.Active;

        Cube := MB.ItemById("Virt_Cube").Bind As IVirtualCube;

        Sources := Cube.Sources;

        //Формирование отметки для открытия составного справочника

        CDim := Cube.FactDimension As ICompoundDimension;

        CSel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

        For Each CSource In CDim.Sources Do

        Sel := (New DimSelectionSetFactory.Create).CreateDimSelectionSet;

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

        //Индекс данных, использованных для составления наименования элемента

        CDimInst.DecomposeElement(8, Source, Arr);

        CSource := CDim.Sources.Item(Source);

        Debug.WriteLine("Источник: " + CSource.Name + "(" + CSource.Id + ")");

        Debug.WriteLine("Элементы фиксированных измерений источника");

        FixInfo := Sources.FindByKey(CSource.Key).FixInfo;

        Debug.Indent;

        For i := 0 To CSource.Dimensions.Count - 1 Do

            Elements := FixInfo.ItemByDim(CSource.Dimensions.Item(i)).Instance.Elements;

            Debug.WriteLine(Elements.Name(Arr[i]));

        End For;

        Debug.Unindent;

End Sub Main;


После выполнения примера, в окно консоли будет выведено наименование
 источника составного справочника, которому принадлежит первый элемент.


См. также:


[ICompoundDimensionInstance](ICompoundDimensionInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
