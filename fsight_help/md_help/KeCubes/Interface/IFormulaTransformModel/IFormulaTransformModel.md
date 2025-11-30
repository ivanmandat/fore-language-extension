# IFormulaTransformModel

IFormulaTransformModel
-


# IFormulaTransformModel


## Описание


Интерфейс IFormulaTransformModel
 содержит свойства и методы, позволяющий настроить параметры вычисляемого
 ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoPeriod](IFormulaTransformModel.AutoPeriod.htm)
		 Свойство AutoPeriod
		 определяет условия, которые используются для вычисления границ
		 периодов идентификации и прогнозирования.


		 ![](../../Property_Image.gif)
		 [AllowForecastBeforeIdent](IFormulaTransformModel.AllowForecastBeforeIdent.htm)
		 Свойство AllowForecastBeforeIdent
		 определяет, может ли период прогнозирования идти до периода идентификации.


		 ![](../../Property_Image.gif)
		 [ForecastEndDate](IFormulaTransformModel.ForecastEndDate.htm)
		 Свойство ForecastEndDate
		 определяет дату окончания периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastEndDateParamId](IFormulaTransformModel.ForecastEndDateParamId.htm)
		 Свойство ForecastEndDateParamId
		 определяет идентификатор параметра, задающего дату окончания периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastEndOffset](IFormulaTransformModel.ForecastEndOffset.htm)
		 Свойство ForecastEndOffset
		 определяет число периодов, на которое сдвигается дата окончания
		 периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDate](IFormulaTransformModel.ForecastStartDate.htm)
		 Свойство ForecastStartDate
		 определяет дату начала периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDateOffset](IFormulaTransformModel.ForecastStartDateOffset.htm)
		 Свойство ForecastStartDateOffset
		 определяет число периодов, на которое сдвигается дата начала периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDateParamId](IFormulaTransformModel.ForecastStartDateParamId.htm)
		 Свойство ForecastStartDateParamId
		 определяет идентификатор параметра, задающего дату начала периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [IdentificationEndDate](IFormulaTransformModel.IdentificationEndDate.htm)
		 Свойство IdentificationEndDate
		 определяет дату окончания периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationEndDateParamId](IFormulaTransformModel.IdentificationEndDateParamId.htm)
		 Свойство IdentificationEndDateParamId
		 определяет идентификатор параметра, задающего дату окончания периода
		 идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationEndOffset](IFormulaTransformModel.IdentificationEndOffset.htm)
		 Свойство IdentificationEndOffset
		 определяет число периодов, на которое сдвигается дата окончания
		 периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartDate](IFormulaTransformModel.IdentificationStartDate.htm)
		 Свойство IdentificationStartDate
		 определяет дату начала периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartDateParamId](IFormulaTransformModel.IdentificationStartDateParamId.htm)
		 Свойство IdentificationStartDateParamId
		 определяет идентификатор параметра, задающего дату начала
		 периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartOffset](IFormulaTransformModel.IdentificationStartOffset.htm)
		 Свойство IdentificationStartOffset
		 определяет число периодов, на которое сдвигается дата начала периода
		 идентификации.


		 ![](../../Property_Image.gif)
		 [InputVariable](IFormulaTransformModel.InputVariable.htm)
		 Свойство InputVariable
		 возвращает входной ряд по его индексу.


		 ![](../../Property_Image.gif)
		 [InputVariableCount](IFormulaTransformModel.InputVariableCount.htm)
		 Свойство InputVariableCount
		 возвращает количество входных рядов.


		 ![](../../Property_Image.gif)
		 [PeriodSet](IFormulaTransformModel.PeriodSet.htm)
		 Свойство PeriodSet
		 определяет параметры периода расчета ряда.


		 ![](../../Property_Image.gif)
		 [Transform](IFormulaTransformModel.Transform.htm)
		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры метода расчета.


		 ![](../../Property_Image.gif)
		 [UsePeriod](IFormulaTransformModel.UsePeriod.htm)
		 Свойство UsePeriod
		 определяет, будут ли при расчёте ряда использоваться указанные
		 периоды идентификации и прогнозирования.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddInputVariable](IFormulaTransformModel.AddInputVariable.htm)
		 Метод AddInputVariable
		 осуществляет добавление входного ряда.


		 ![](../../Sub_Image.gif)
		 [IsInputVariableUsed](IFormulaTransformModel.IsInputVariableUsed.htm)
		 Метод IsInputVariableUsed
		 возвращает признак того, может ли источник данных являться входным
		 рядом.


		 ![](../../Sub_Image.gif)
		 [RemoveInputVariable](IFormulaTransformModel.RemoveInputVariable.htm)
		 Метод RemoveInputVariable
		 осуществляет удаление входного ряда.


		 ![](../../Sub_Image.gif)
		 [RestoreFromFormulaData](IFormulaTransformModel.RestoreFromFormulaData.htm)
		 Метод RestoreFromFormulaData
		 восстанавливает вычисляемый ряд по заданным данным формулы.


		 ![](../../Sub_Image.gif)
		 [UpdateInputVariable](IFormulaTransformModel.UpdateInputVariable.htm)
		 Метод UpdateInputVariable
		 обновляет входной ряд.


		 ![](../../Sub_Image.gif)
		 [UpdateOutputVariable](IFormulaTransformModel.UpdateOutputVariable.htm)
		 Метод UpdateOutputVariable
		 обновляет результирующий ряд.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
