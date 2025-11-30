# ICalcLinearOptimizationBlock.Database

ICalcLinearOptimizationBlock.Database
-


# ICalcLinearOptimizationBlock.Database


## Синтаксис


Database: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Database определяет
 базу данных, которая будет использоваться блоком линейной оптимизации.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан блок линейной
 оптимизации с какими-либо настройками. Также в репозитории должны быть
 созданы следующие стандартные кубы:


	- CUBE_OUTPUT. Куб, в который будут выгружены результаты расчёта.
	 Также в этом кубе должны храниться начальные целочисленные значения
	 управляющих переменных;


	- CUBE_COEFFICIENT. Куб с коэффициентами целевой функции;


	- CUBE_FIXED. Куб с начальными значениями переменных;


	- CUBE_LOW, CUBE_HIGH. Кубы с нижними и верхними границами значений
	 переменных соответственно;


	- CUBE_RESULT. Куб для хранения результатов расчёта.


Примечание.
 Кубы должны содержать одни и те же измерения.


В настройках репозитория должна быть задана база данных по умолчанию.


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

	    Block: ICalcLinearOptimizationBlock;

	    CubeOut, CubeCoefficient, CubeLowBorder, CubeHighBorder, CubeResult, CubeFixed: IStandardCube;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим блок

	    CalcBlock := List.Item(0);

	    Block := CalcBlock As ICalcLinearOptimizationBlock;

	    // Используем базу данных, заданную для репозитория по умолчанию

	    Block.Database := MB.SpecialObject(MetabaseSpecialObject.DefaultDatabase);

	    // Зададим тип
	 модуля расчёта, который будет использоваться при расчёте блока линейной оптимизации

	    Block.SolverType := LinearOptimizationSolverType.Lpsolve;

	    // Зададим критерий целевой функции

	    Block.FunctionCriteria := TargetFunctionCriteria.Max;

	    // Используем целочисленные переменные

	    Block.UseInteger := True;

	    // Зададим приёмник

	    CubeOut := MB.ItemById("CUBE_OUTPUT").Edit As IStandardCube;

	    Block.StubOut := CubeOut As IVariableStub;

	    // Зададим коэффициенты
	 целевой функции

	    CubeCoefficient := MB.ItemById("CUBE_COEFFICIENT").Edit As IStandardCube;

	    Block.StubCoefficient.Stub := CubeCoefficient As IVariableStub;

	    // Зададим начальные
	 значения управляющих переменных

	    Block.StubValues.Stub := CubeOut As IVariableStub;

	    // Зададим куб для фиксации переменных

	    CubeFixed := MB.ItemById("CUBE_FIXED").Edit As IStandardCube;

	    Block.StubFixed.Stub := CubeFixed As IVariableStub;

	    // Зададим ограничения
	 нижних границ

	    CubeLowBorder := MB.ItemById("CUBE_LOW").Edit As IStandardCube;

	    Block.StubLowRestriction.Stub := CubeLowBorder As IVariableStub;

	    // Зададим ограничения
	 верхних границ

	    CubeHighBorder := MB.ItemById("CUBE_HIGH").Edit As IStandardCube;

	    Block.StubHighRestriction.Stub := CubeHighBorder As IVariableStub;

	    // Зададим куб
	 для хранения результатов расчёта

	    CubeResult := MB.ItemById("CUBE_RESULT").Edit As IStandardCube;

	    Block.StubResult.Stub := CubeResult As IVariableStub;

	    // Сохраним изменения

	    Block.SaveObject;

	End Sub UserProc;


При выполнения примера будут изменены настройки блока линейной оптимизации:
 для блока будут установлены все необходимые кубы, а также базовые настройки
 - база данных, тип модуля расчёта, критерий целевой функции.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
