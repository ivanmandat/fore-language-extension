# IMatrix.ValueCount

IMatrix.ValueCount
-


# IMatrix.ValueCount


## Синтаксис


ValueCount: Integer;


## Описание


Свойство ValueCount возвращает
 количество значений, имеющихся по каждой координате матрицы.


## Комментарии


Свойство актуально при работе с матрицей [показателей](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Factors.htm)
 или [значений](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Values.htm),
 которые могут быть получены в результате расчёта базы данных временных
 рядов. Если при расчёте не заданы свойства [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm),
 то результирующая матрица показателей [IRubricatorExecuteResult.Factors](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Factors.htm)
 будет иметь пустые значения, а результирующая матрица значений [IRubricatorExecuteResult.Values](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Values.htm)
 будет содержать значения показателей (значения атрибута VL).


Если определить свойства [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm),
 то в каждой ячейке результирующей матрицы будет доступен набор значений
 всех указываемых атрибутов, соответствующих точке расчёта. Свойство ValueCount
 вернет количество значений атрибутов в каждой ячейке матрицы (соответствует
 количеству атрибутов, указываемых в свойствах [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm)).
 Значение каждого атрибута можно будет получить с помощью свойства [IMatrixIterator.Values](../IMatrixIterator/IMatrixIterator.Values.htm).


## Пример


Пример использования приведён в описании свойства [IMatrixIterator.Values](../IMatrixIterator/IMatrixIterator.Values.htm).


См. также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
