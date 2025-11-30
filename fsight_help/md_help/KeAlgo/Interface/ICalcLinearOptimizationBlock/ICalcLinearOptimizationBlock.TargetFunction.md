# ICalcLinearOptimizationBlock.TargetFunction

ICalcLinearOptimizationBlock.TargetFunction
-


# ICalcLinearOptimizationBlock.TargetFunction


## Синтаксис


TargetFunction: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство TargetFunction возвращает
 коллекцию отметок измерений целевой функции.


## Комментарии


Для настройки целевой функции:


	- Задайте приёмник данных с помощью свойства [ICalcLinearOptimizationBlock.StubOut](ICalcLinearOptimizationBlock.StubOut.htm).


	- Проверьте каждое измерение приёмника на соответствие календарному
	 измерению с помощью свойств [IVariableStub.Dimension](KeCubes.chm::/Interface/IVariableStub/IVariableStub.Dimension.htm),
	 [IDimensionModel.IsCalendar](KeDims.chm::/interface/IDimensionModel/IDimensionModel.IsCalendar.htm).
	 Календарные измерения не должно использоваться в целевой функции.


	- Добавьте измерение в целевую функцию с помощью метода [IDimSelectionSet.Add](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.Add.htm),
	 если оно не является календарным.


	- Удалите добавленное измерение из [многомерного
	 итератора](ICalcLinearOptimizationBlock.Iterator.htm) блока линейной оптимизации с помощью метода [IMsDimIteratorDimensions.Remove](KeMs.chm::/Interface/IMsDimIteratorDimensions/IMsDimIteratorDimensions.Remove.htm)
	 или [IMsDimIteratorDimensions.RemoveByKey](KeMs.chm::/Interface/IMsDimIteratorDimensions/IMsDimIteratorDimensions.RemoveByKey.htm).


По отметке элементов в измерениях формируются управляющие переменные.
 Количество управляющих переменных равно декартовому произведению отмеченных
 элементов в измерениях.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан блок линейной
 оптимизации с какими-либо настройками. Также в репозитории должен быть
 создан стандартный куб с идентификатором CUBE_OUTPUT, в который будут
 выгружены результаты расчёта.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    LinearBlock: ICalcLinearOptimizationBlock;

	    OneDimension: IDimensionModel;

	    DimInstance: IDimInstance;

	    TargetFunction: IDimSelectionSet;

	    Sel: IDimSelection;

	    i, DimCount: Integer;

	    IterDim: IMsDimIteratorDimension;

	    StubOut: IVariableStub;

	    Iter: IMsCalculationChainMultiDimIterator;

	    IterDims: IMsDimIteratorDimensions;

	    CubeOut: IStandardCube;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим первый блок линейной оптимизации

	    CalcBlock := List.Item(0);

	    LinearBlock := CalcBlock As ICalcLinearOptimizationBlock;

	    // Зададим приёмник данных

	    CubeOut := MB.ItemById("CUBE_OUTPUT").Edit As IStandardCube;

	    LinearBlock.StubOut := CubeOut As IVariableStub;

	    // Получим количество измерений приёмника

	    StubOut := LinearBlock.StubOut;

	    DimCount := StubOut.DimensionCount;

	    // Получим коллекцию измерений целевой функции

	    TargetFunction := LinearBlock.TargetFunction;

	    // Добавим измерения приёмника в целевую функцию

	    For i := 0 To DimCount - 1 Do

	        OneDimension := StubOut.Dimension(i);

	        // Проверим, не является ли измерение календарным

	        If Not OneDimension.IsCalendar Then

	            // Получим данные измерения

	            DimInstance := (OneDimension As IMetabaseObjectDescriptor).Open(Null) As IDimInstance;

	            // Проверим идентификатор измерения (не добавляем факты в целевую функцию)

	            If DimInstance.Ident <> "FACTS" Then

	                // Получим отметку измерения

	                Sel := TargetFunction.FindByKey(DimInstance.Key);

	                // Добавим измерение в целевую функцию, если отметка задана

	                If Sel = Null Then

	                    TargetFunction.Add(DimInstance);

	                    // Получим многомерный итератор

	                    Iter := LinearBlock.Iterator;

	                    // Получим измерения, по которым будет выполняться итерация

	                    IterDims := Iter.Dimensions;

	                    IterDim := IterDims.FindByKey(DimInstance.Key);

	                    // Удалим измерения из итератора

	                    IterDims.RemoveByKey(IterDim.Dimension.Key);

	                End If;

	            End If;

	        End If;

	    End For;

	    // Сохраним изменения

	    LinearBlock.SaveObject;

	End Sub UserProc;


При выполнения примера в блоке линейной оптимизации будут добавлены
 измерения приёмника в целевую функцию.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
