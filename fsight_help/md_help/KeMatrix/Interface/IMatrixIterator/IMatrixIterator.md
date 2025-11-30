# IMatrixIterator

IMatrixIterator
-


# IMatrixIterator


## Описание


Интерфейс IMatrixIterator содержит
 свойства и методы итератора матрицы с данными.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EqualTo](IMatrixIterator.EqualTo.htm)
		 Свойство EqualTo возвращает
		 признак сравнения текущего итератора с итератором, передаваемым
		 в качестве параметра.


		 ![](../../Property_Image.gif)
		 [ItemID](IMatrixIterator.ItemID.htm)
		 Свойство ItemID возвращает
		 индекс элемента, на котором в данный момент находится курсор итератора.


		 ![](../../Property_Image.gif)
		 [Matrix](IMatrixIterator.Matrix.htm)
		 Свойство Matrix возвращает
		 исходную матрицу.


		 ![](../../Property_Image.gif)
		 [ValueFlag](IMatrixIterator.ValueFlag.htm)
		 Свойство ValueFlag
		 определяет значение флага, используемого для отметки изменившихся
		 значений, для текущего элемента в итераторе.


		 ![](../../Property_Image.gif)
		 [Values](IMatrixIterator.Values.htm)
		 Свойство Values определяет
		 значение указанного атрибута для элемента матрицы, на котором
		 в данный момент находится курсор итератора.


## Свойства, унаследованные от [IMatrixModelIterator](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MatrixModel](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.MatrixModel.htm)
		 Свойство MatrixModel
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Valid](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.Valid.htm)
		 Свойство Valid возвращает
		 признак корректности перехода к какому-либо элементу итератора.


		 ![](../../Property_Image.gif)
		 [Value](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.Value.htm)
		 Свойство Value определяет
		 значение элемента, на котором в данный момент находится курсор
		 итератора.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assign](IMatrixIterator.Assign.htm)
		 Метод Assign осуществляет
		 установку параметров текущего итератора, в соответствии с параметрами
		 указанного итератора.


		 ![](../../Sub_Image.gif)
		 [NextValid](IMatrixIterator.NextValid.htm)
		 Метод NextValid осуществляет
		 переход в итераторе к позиции, соответствующей следующему корректному
		 элементу в матрице относительно элемента, координата которого
		 передается посредством входного параметра.


		 ![](../../Sub_Image.gif)
		 [PreviousValid](IMatrixIterator.PreviousValid.htm)
		 В текущей реализации метод работает аналогично методу [NextValid](IMatrixIterator.NextValid.htm).


		 ![](../../Sub_Image.gif)
		 [SetValueFlagEx](IMatrixIterator.SetValueFlagEx.htm)
		 Метод SetValueFlagEx
		 осуществляет поразрядные операции со значением флага элемента.


## Методы, унаследованные от [IMatrixModelIterator](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Goto](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.Goto.htm)
		 Метод Goto осуществляет
		 переход в итераторе к позиции, которая соответствует указанной
		 координате матрицы.


		 ![](../../Sub_Image.gif)
		 [Move](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.Move.htm)
		 Метод Move осуществляет
		 перемещение в указанном направлении.


		 ![](../../Sub_Image.gif)
		 [PutCoord](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.PutCoord.htm)
		 Метод PutCoord осуществляет
		 переход в итераторе к позиции, которая соответствует указанной
		 координате матрицы.


		 ![](../../Sub_Image.gif)
		 [PutCurrentPos](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.PutCurrentPos.htm)
		 Метод PutCurrentPos
		 вычисляет текущее положение в матрице.


См. также:


[Интерфейсы сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
