# ICalcLinearOptimizationBlock

ICalcLinearOptimizationBlock
-


# ICalcLinearOptimizationBlock


Сборка: Algo;


## Описание


Интерфейс ICalcLinearOptimizationBlock
 предназначен для работы с [блоком
 линейной оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Linear_optimization_block.htm).


## Иерархия наследования


           [ICalcObject](../ICalcObject/ICalcObject.htm)


           ICalcLinearOptimizationBlock


## Комментарий


Кубы, определяемые с помощью свойств [ICalcLinearOptimizationBlock.StubOut](ICalcLinearOptimizationBlock.StubOut.htm),
 [ICalcLinearOptimizationBlock.StubCoefficient](ICalcLinearOptimizationBlock.StubCoefficient.htm),
 [ICalcLinearOptimizationBlock.StubFixed](ICalcLinearOptimizationBlock.StubFixed.htm),
 [ICalcLinearOptimizationBlock.StubHighRestriction](ICalcLinearOptimizationBlock.StubHighRestriction.htm),
 [ICalcLinearOptimizationBlock.StubLowRestriction](ICalcLinearOptimizationBlock.StubLowRestriction.htm),
 [ICalcLinearOptimizationBlock.StubResult](ICalcLinearOptimizationBlock.StubResult.htm),
 [ICalcLinearOptimizationBlock.StubValues](ICalcLinearOptimizationBlock.StubValues.htm),
 [ICalcLinearOptimizationBlock.StubExpressionRestriction](ICalcLinearOptimizationBlock.StubExpressionRestriction.htm),
 должны содержать одни и те же измерения.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](ICalcLinearOptimizationBlock.Database.htm)
		 Свойство Database определяет
		 базу данных, которая будет использоваться блоком линейной оптимизации.


		 ![](../../Property_Image.gif)
		 [ExpressionDimension](ICalcLinearOptimizationBlock.ExpressionDimension.htm)
		 Свойство ExpressionDimension
		 определяет измерение источника данных для хранения значений выражений
		 при [сложных
		 ограничениях управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/ExpressionsRestriction_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [FunctionCriteria](ICalcLinearOptimizationBlock.FunctionCriteria.htm)
		 Свойство FunctionCriteria
		 определяет [критерий
		 целевой функции](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunction_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [Iterator](ICalcLinearOptimizationBlock.Iterator.htm)
		 Свойство Iterator возвращает
		 многомерный итератор блока линейной оптимизации.


		 ![](../../Property_Image.gif)
		 [SolverType](ICalcLinearOptimizationBlock.SolverType.htm)
		 Свойство SolverType
		 определяет [тип
		 модуля расчёта](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/DataBase_LinOpt.htm), который будет использоваться
		 при расчёте блока линейной оптимизации.


		 ![](../../Property_Image.gif)
		 [StubCoefficient](ICalcLinearOptimizationBlock.StubCoefficient.htm)
		 Свойство StubCoefficient
		 определяет источник данных для формирования [коэффициентов
		 целевой функции](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunctionCoefficients_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [StubExpressionRestriction](ICalcLinearOptimizationBlock.StubExpressionRestriction.htm)
		 Свойство StubExpressionRestriction
		 определяет источник данных для хранения значений выражений при
		 [сложных
		 ограничениях управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/ExpressionsRestriction_LinOpt.htm).


		 ![](../../Property_Image.gif)


		 [StubFixed](ICalcLinearOptimizationBlock.StubFixed.htm)
		 Свойство StubFixed
		 определяет источник данных для хранения начальных значений переменных.


		 ![](../../Property_Image.gif)
		 [StubHighRestriction](ICalcLinearOptimizationBlock.StubHighRestriction.htm)
		 Свойство StubHighRestriction
		 определяет источник данных для хранения значений верхних границ
		 при [простом
		 ограничении управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/VariablesRestriction_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [StubLowRestriction](ICalcLinearOptimizationBlock.StubLowRestriction.htm)
		 Свойство StubLowRestriction
		 определяет источник данных для хранения значений нижних границ
		 при [простом
		 ограничении управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/VariablesRestriction_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [StubOut](ICalcLinearOptimizationBlock.StubOut.htm)
		 Свойство StubOut определяет
		 приёмник данных.


		 ![](../../Property_Image.gif)
		 [StubResult](ICalcLinearOptimizationBlock.StubResult.htm)
		 Свойство StubResult
		 определяет источник данных для хранения результатов расчёта [задачи
		 оптимизации](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/TargetFunction_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [StubValues](ICalcLinearOptimizationBlock.StubValues.htm)
		 Свойство StubValues
		 определяет источник данных для хранения [начальных
		 значений управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/Variables_LinOpt.htm).


		 ![](../../Property_Image.gif)
		 [TargetFunction](ICalcLinearOptimizationBlock.TargetFunction.htm)
		 Свойство TargetFunction
		 возвращает коллекцию отметок измерений целевой функции.


		 ![](../../Property_Image.gif)
		 [TargetTerm](ICalcLinearOptimizationBlock.TargetTerm.htm)
		 Свойство TargetTerm
		 возвращает параметры элементов выражений (термов), используемых
		 в целевой функции.


		 ![](../../Property_Image.gif)
		 [UseInteger](ICalcLinearOptimizationBlock.UseInteger.htm)
		 Свойство UseInteger
		 определяет признак использования целочисленных переменных.


## Свойства, унаследованные от [ICalcObject](../ICalcObject/ICalcObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Descriptor](../ICalcObject/ICalcObject.Descriptor.htm)
		 Свойство Descriptor
		 возвращает объект алгоритма расчёта в качестве внутреннего объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Id](../ICalcObject/ICalcObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsEdited](../ICalcObject/ICalcObject.IsEdited.htm)
		 Свойство IsEdited возвращает
		 признак редактирования объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsUseExtObject](../ICalcObject/ICalcObject.IsUseExtObject.htm)
		 Свойство IsUseExtObject
		 определяет признак использования объектов репозитория, расположенных
		 вне контейнера или бизнес-приложения.


		 ![](../../Property_Image.gif)
		 [Key](../ICalcObject/ICalcObject.Key.htm)
		 Свойство Key возвращает
		 ключ объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Name](../ICalcObject/ICalcObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Params](../ICalcObject/ICalcObject.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [PrxReport](../ICalcObject/ICalcObject.PrxReport.htm)
		 Свойство PrxReport
		 создаёт [регламентный
		 отчёт](UIReport.chm::/UiReport_purpose.htm)
		 с данными, полученными после расчёта объекта из приёмника данных.


		 ![](../../Property_Image.gif)
		 [SelControl](../ICalcObject/ICalcObject.SelControl.htm)
		 Свойство SelControl
		 определяет настройки управления параметрами измерений источника
		 данных.


		 ![](../../Property_Image.gif)
		 [Type](../ICalcObject/ICalcObject.Type.htm)
		 Свойство Type определяет
		 тип объекта алгоритма расчёта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [InitInterntalStub](ICalcLinearOptimizationBlock.InitInterntalStub.htm)
		 Метод InitInterntalStub
		 создает абстрактный источник данных в соответствии с типом источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [IsValidStub](ICalcLinearOptimizationBlock.IsValidStub.htm)
		 Метод IsValidStub возвращает
		 признак соответствия источника данных целевой функции.


		 ![](../../Sub_Image.gif)
		 [TargetTermInfo](ICalcLinearOptimizationBlock.TargetTermInfo.htm)
		 Метод TargetTermInfo
		 возвращает настройки параметров терма.


## Методы, унаследованные от [ICalcObject](../ICalcObject/ICalcObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../ICalcObject/ICalcObject.CopyTo.htm)
		 Метод CopyTo копирует
		 настройки текущего объекта в объект, передаваемый во входном параметре.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](../ICalcObject/ICalcObject.CreateCopy.htm)
		 Метод CreateCopy создаёт
		 копию объекта алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [Delete](../ICalcObject/ICalcObject.Delete.htm)
		 Метод Delete удаляет
		 объект алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [FillSelSetFromParams](../ICalcObject/ICalcObject.FillSelSetFromParams.htm)
		 Метод FillSelSetFromParams
		 передает отметку измерения, которое используется в качестве параметра
		 алгоритма расчёта, на панель параметров.


		 ![](../../Sub_Image.gif)
		 [FindParamUses](../ICalcObject/ICalcObject.FindParamUses.htm)
		 Метод FindParamUses
		 проверяет использование указанного параметра в объекте алгоритма
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [RefreshMetaModel](../ICalcObject/ICalcObject.RefreshMetaModel.htm)
		 Метод RefreshMetaModel
		 обновляет метамодель.


		 ![](../../Sub_Image.gif)
		 [SaveObject](../ICalcObject/ICalcObject.SaveObject.htm)
		 Метод SaveObject сохраняет
		 объект алгоритма расчёта.


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
