# ICalcAlgorithm

ICalcAlgorithm
-


# ICalcAlgorithm


Сборка: Algo;


## Описание


Интерфейс ICalcAlgorithm предназначен
 для работы с [алгоритмом
 расчёта](CalculationAlgorithm.chm::/Purpose.htm).


## Иерархия наследования


           [ICalcObject](../ICalcObject/ICalcObject.htm)


           ICalcAlgorithm


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CreateFormulaFindInfo](ICalcAlgorithm.CreateFormulaFindInfo.htm)
		 Свойство CreateFormulaFindInfo
		 возвращает объект, используемый для задания условий поиска формул.


		 ![](../../Property_Image.gif)
		 [Included](ICalcAlgorithm.Included.htm)
		 Свойство Included определяет
		 [включение/исключение](CalculationAlgorithm.chm::/Desktop/Work/CalculationOrder.htm)
		 объекта из расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [IsDirty](ICalcAlgorithm.IsDirty.htm)
		 Свойство IsDirty возвращает
		 признак наличия изменений в алгоритме расчёта.


		 ![](../../Property_Image.gif)
		 [Items](ICalcAlgorithm.Items.htm)
		 Свойство Items возвращает
		 список объектов алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [MsProblem](ICalcAlgorithm.MsProblem.htm)
		 Свойство MsProblem
		 возвращает [задачу
		 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm), которая используется при
		 расчёте алгоритма.


		 ![](../../Property_Image.gif)
		 [ObjectParamsControl](ICalcAlgorithm.ObjectParamsControl.htm)
		 Свойство ObjectParamsControl
		 возвращает настройки управления параметрами объектов репозитория.


		 ![](../../Property_Image.gif)
		 [ParamValues](ICalcAlgorithm.ParamValues.htm)
		 Свойство ParamValues
		 возвращает настройки начала и окончания периода расчёта алгоритма
		 и коллекцию [параметров
		 алгоритма расчёта](CalculationAlgorithm.chm::/Desktop/Work/Set_up_calculation_parameters.htm).


		 ![](../../Property_Image.gif)
		 [Settings](ICalcAlgorithm.Settings.htm)
		 Свойство Settings возвращает
		 настройки [периода
		 расчёта алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Calculation_period_management.htm).


		 ![](../../Property_Image.gif)
		 [Stubs](ICalcAlgorithm.Stubs.htm)
		 Свойство Stubs возвращает
		 коллекцию приёмников и источников данных [блоков
		 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm) и [блоков
		 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm).


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
		 [Calculate](ICalcAlgorithm.Calculate.htm)
		 Метод Calculate выполняет
		 расчёт алгоритма.


		 ![](../../Sub_Image.gif)
		 [CalculateAsync](ICalcAlgorithm.CalculateAsync.htm)
		 Метод CalculateAsync
		 выполняет асинхронный расчёт алгоритма.


		 ![](../../Sub_Image.gif)
		 [Debug](ICalcAlgorithm.Debug.htm)
		 Метод Debug выполняет
		 [отладку
		 расчёта алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Debug.htm).


		 ![](../../Sub_Image.gif)
		 [DebugAsync](ICalcAlgorithm.DebugAsync.htm)
		 Метод DebugAsync выполняет
		 асинхронную [отладку
		 расчёта алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Debug.htm).


		 ![](../../Sub_Image.gif)
		 [FindFormulas](ICalcAlgorithm.FindFormulas.htm)
		 Метод FindFormulas
		 осуществляет поиск формул в соответствии с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [MoveObject](ICalcAlgorithm.MoveObject.htm)
		 Метод MoveObject изменяет
		 порядок объектов алгоритма расчёта.


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
