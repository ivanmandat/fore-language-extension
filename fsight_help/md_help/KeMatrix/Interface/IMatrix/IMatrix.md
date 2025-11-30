# IMatrix

IMatrix
-


# IMatrix


Сборка: Matrix;


## Описание


Интерфейс IMatrix содержит свойства
 и методы для работы с матрицей данных.


## Иерархия наследования


           [Matrix](ForeSys.chm::/Class/Matrix/Matrix.htm)


           [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm)


           IMatrix


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMatrix.Count.htm)
		 Свойство Count возвращает
		 количество ячеек со значениями в матрице.


		 ![](../../Property_Image.gif)
		 [CountV](IMatrix.CountV.htm)
		 Свойство CountV возвращает
		 количество значений, отмеченных указанным флагом.


		 ![](../../Property_Image.gif)
		 [Dimensions](IMatrix.Dimensions.htm)
		 Свойство Dimensions
		 возвращает отметку, на базе которой получена матрица данных. Актуально,
		 если матрица получена на базе какого-либо источника данных.


		 ![](../../Property_Image.gif)
		 [Options](IMatrix.Options.htm)
		 Свойство Options возвращает
		 значение флага, используемого для определения значения масштабирования.


		 ![](../../Property_Image.gif)
		 [ValueChangeCallback](IMatrix.ValueChangeCallback.htm)
		 Свойство ValueChangeCallback
		 определяет объект, который будет использоваться для отслеживания
		 изменений значений в матрице.


		 ![](../../Property_Image.gif)
		 [ValueCount](IMatrix.ValueCount.htm)
		 Свойство ValueCount
		 возвращает количество значений, имеющихся по каждой координате
		 матрицы.


		 ![](../../Property_Image.gif)
		 [ValueFlag](IMatrix.ValueFlag.htm)
		 Свойство ValueFlag
		 определяет значение флага, используемого в матрице для отметки
		 изменившихся значений.


## Свойства, унаследованные от [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DimensionCount](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.DimensionCount.htm)
		 Свойство DimensionCount
		 возвращает количество измерений в матрице.


		 ![](../../Property_Image.gif)
		 [Item](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Item.htm)
		 Свойство Item определяет
		 значение элемента матрицы в заданной координате.


		 ![](../../Property_Image.gif)
		 [LowerBound](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.LowerBound.htm)
		 Свойство LowerBound
		 возвращает нижнюю границу измерения матрицы.


		 ![](../../Property_Image.gif)
		 [LowerBoundI](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.LowerBoundI.htm)
		 Свойство LowerBoundI
		 возвращает нижнюю границу измерения матрицы.


		 ![](../../Property_Image.gif)
		 [Source](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Source.htm)
		 Свойство Source возвращает
		 матрицу-источник, на базе которой была получена данная матрица.


		 ![](../../Property_Image.gif)
		 [Storage](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Storage.htm)
		 Свойство Storage возвращает
		 последнюю непустую матрицу-источник, на базе которой была получена
		 данная матрица.


		 ![](../../Property_Image.gif)
		 [UpperBound](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.UpperBound.htm)
		 Свойство UpperBound
		 возвращает верхнюю границу измерения матрицы.


		 ![](../../Property_Image.gif)
		 [UpperBoundI](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.UpperBoundI.htm)
		 Свойство UpperBoundI
		 возвращает верхнюю границу измерения матрицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ChangeValueFlag](IMatrix.ChangeValueFlag.htm)
		 Метод ChangeValueFlag
		 осуществляет изменение флага, используемого для отметки изменившихся
		 значений.


		 ![](../../Sub_Image.gif)
		 [CreateCoord](IMatrix.CreateCoord.htm)
		 Метод CreateCoord создает
		 объект, представляющий собой координату в матрице.


		 ![](../../Sub_Image.gif)
		 [CreateIterator](IMatrix.CreateIterator.htm)
		 Метод CreateIterator
		 создает итератор, используемый для навигации по элементам матрицы.


		 ![](../../Sub_Image.gif)
		 [CreateSwapInfo](IMatrix.CreateSwapInfo.htm)
		 Метод CreateSwapInfo
		 создает объект, содержащий информацию, необходимую для перестановки
		 измерений с данными матрицы.


		 ![](../../Sub_Image.gif)
		 [SetValueBySelection](IMatrix.SetValueBySelection.htm)
		 Метод SetValueBySelection
		 устанавливает значение для элемента, заданного отметкой.


		 ![](../../Sub_Image.gif)
		 [Swap](IMatrix.Swap.htm)
		 Метод Swap осуществляет
		 перемещение измерений с данными в матрице.


		 ![](../../Sub_Image.gif)
		 [SwapTo](IMatrix.SwapTo.htm)
		 Метод SwapTo осуществляет
		 перемещение измерений с данными в матрице.


## Методы, унаследованные от [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Clear.htm)
		 Метод Clear осуществляет
		 очистку содержимого элементов матрицы.


		 ![](../../Sub_Image.gif)
		 [CreateFixInfo](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.CreateFixInfo.htm)
		 Метод CreateFixInfo
		 создает объект, необходимый для фиксации измерений матрицы.


		 ![](../../Sub_Image.gif)
		 [CreateModelCoord](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.CreateModelCoord.htm)
		 Метод CreateModelCoord
		 создает объект, представляющий собой координату в матрице.


		 ![](../../Sub_Image.gif)
		 [CreateModelIterator](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.CreateModelIterator.htm)
		 Метод CreateModelIterator
		 создает итератор, используемый для навигации по матрице.


		 ![](../../Sub_Image.gif)
		 [Dereference](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Dereference.htm)
		 Метод Dereference осуществляет
		 перестройку матрицы с учетом фиксации по измерениям.


		 ![](../../Sub_Image.gif)
		 [OperationConst](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.OperationConst.htm)
		 Метод OperationConst
		 выполняет математические операции между текущей матрицей и константой,
		 передаваемой посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [OperationMatrix](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.OperationMatrix.htm)
		 Метод OperationMatrix
		 выполняет математические операции между текущей матрицей и матрицей,
		 передаваемой посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [Rank](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Rank.htm)
		 Метод Rank осуществляет
		 составление матрицы ранжирования.


		 ![](../../Sub_Image.gif)
		 [Sort](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.Sort.htm)
		 Метод Sort осуществляет
		 сортировку матрицы.


См. также:


[Интерфейсы сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
