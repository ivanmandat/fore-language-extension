# IAlgorithmCalculationAsyncDebug

IAlgorithmCalculationAsyncDebug
-


# IAlgorithmCalculationAsyncDebug


Сборка: Algo;


## Описание


Интерфейс IAlgorithmCalculationAsyncDebug
 предназначен для асинхронной отладки расчёта алгоритма.


## Иерархия наследования


           [IAlgorithmCalculationDebug](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.htm)


           IAlgorithmCalculationAsyncDebug


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorEvent](IAlgorithmCalculationAsyncDebug.ErrorEvent.htm)
		 Свойство ErrorEvent возвращает
		 ошибки, которые возникли при отладке расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [LastObjectKey](IAlgorithmCalculationAsyncDebug.LastObjectKey.htm)
		 Свойство LastObjectKey возвращает
		 ключ последнего рассчитанного объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [State](IAlgorithmCalculationAsyncDebug.State.htm)
		 Свойство State возвращает
		 состояние расчёта алгоритма при отладке.


## Свойства, унаследованные от [IAlgorithmCalculationDebug](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsFinished](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.IsFinished.htm)
		 Свойство IsFinished
		 возвращает признак завершения расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [Matrix](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.Matrix.htm)
		 Свойство Matrix возвращает
		 абстрактный многомерный источник данных для получения промежуточных
		 результатов расчёта [блока
		 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm).


		 ![](../../Property_Image.gif)
		 [Objects](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.Objects.htm)
		 Свойство Objects возвращает
		 список объектов алгоритма расчёта, которые используются в процессе
		 отладки.


		 ![](../../Property_Image.gif)
		 [PrevObject](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.PrevObject.htm)
		 Свойство PrevObject
		 возвращает предыдущий рассчитанный объект алгоритма расчёта для
		 повторного расчёта.


		 ![](../../Property_Image.gif)
		 [PrxReport](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.PrxReport.htm)
		 Свойство PrxReport
		 создаёт [регламентный
		 отчёт](UIReport.chm::/UiReport_purpose.htm)
		 с данными, полученными после расчёта отдельного объекта из приёмника
		 данных.


		 ![](../../Property_Image.gif)
		 [Result](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.Result.htm)
		 Свойство Result возвращает
		 результат расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [UserData](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.UserData.htm)
		 Свойство UserData
		 возвращает пользовательские данные, связанные с алгоритмом расчёта.


		 ![](../../Property_Image.gif)
		 [ValidationMatrix](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.ValidationMatrix.htm)
		 Свойство ValidationMatrix
		 возвращает абстрактный многомерный источник данных для получения
		 промежуточных результатов расчёта [блока
		 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm).


## Методы, унаследованные от [IAlgorithmCalculationDebug](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Dispose_](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.Dispose_.htm)
		 Метод Dispose_ завершает
		 отладку расчёта алгоритма.


		 ![](../../Sub_Image.gif)
		 [NextStep](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.NextStep.htm)
		 Метод NextStep осуществляет
		 переход к следующему объекту алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [RecalcPrev](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.RecalcPrev.htm)
		 Метод RecalcPrev осуществляет
		 повторный расчёт предыдущего рассчитанного объекта алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [StepToObject](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.StepToObject.htm)
		 Метод StepToObject
		 осуществляет переход к указанному объекту алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [StepToSaveData](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.StepToSaveData.htm)
		 Метод StepToSaveData
		 осуществляет переход к сохранению данных в БД.


		 ![](../../Sub_Image.gif)
		 [Stop](../IAlgorithmCalculationDebug/IAlgorithmCalculationDebug.Stop.htm)
		 Метод Stop останавливает
		 отладку расчёта алгоритма.


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
