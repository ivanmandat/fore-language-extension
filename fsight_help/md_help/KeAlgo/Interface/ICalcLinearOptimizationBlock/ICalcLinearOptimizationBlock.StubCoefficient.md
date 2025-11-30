# ICalcLinearOptimizationBlock.StubCoefficient

ICalcLinearOptimizationBlock.StubCoefficient
-


# ICalcLinearOptimizationBlock.StubCoefficient


## Синтаксис


StubCoefficient: [IStubSelection](../IStubSelection/IStubSelection.htm);


## Описание


Свойство StubCoefficient определяет
 источник данных для формирования [коэффициентов
 целевой функции](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunctionCoefficients_LinOpt.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта создан и настроен
 [блок
 линейной оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Linear_optimization_block.htm).


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcLinearOptimizationBlock;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим блок линейной
	 оптимизации

	    CalcBlock := List.Item(0);

	    Block := CalcBlock As ICalcLinearOptimizationBlock;

	    // Просмотр информации о блоке линейной оптимизации

	    ShowStub(Block.StubCoefficient);

	    ShowStub(Block.StubValues);

	    ShowStub(Block.StubLowRestriction);

	    ShowStub(Block.StubHighRestriction);

	    ShowStub(Block.StubExpressionRestriction);

	    ShowStub(Block.StubResult);

	End Sub UserProc;


	Sub ShowStub(Stub: IStubSelection);

	Var

	    s: String;

	Begin

	    s := (IsNull(Stub.Stub)? "Источник данных не задан." : Stub.Stub.Name + '(' + Stub.Stub.Id + ')');

	    Select Case Stub.Type

	        Case OptimizationStubType.Coefficient: Debug.WriteLine("Коэффициенты целевой функции : " + s);

	        Case OptimizationStubType.Values: Debug.WriteLine("Начальные значения управляющих переменных :" + s);

	        Case OptimizationStubType.LowRestriction: Debug.WriteLine("Значения нижних границ : " + s);

	        Case OptimizationStubType.HighRestriction: Debug.WriteLine("Значения верхних границ : " + s);

	        Case OptimizationStubType.ExpressionRestriction: Debug.WriteLine("Ограничения на выражения : " + s);

	        Case OptimizationStubType.ResultFunction: Debug.WriteLine("Приёмник результатов расчёта : " + Stub.Stub.Name + '(' + Stub.Stub.Id + ')');

	    End Select;

	End Sub ShowStub;


При выполнении примера в консоль среды разработки будет выведена информация
 о различных источниках и приёмнике, которые используются в блоке линейной
 оптимизации.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
