# IMatrixEx.RevertChanges

IMatrixEx.RevertChanges
-


# IMatrixEx.RevertChanges


## Синтаксис


RevertChanges(AddedValueFlagAnd: Integer; AddedValueFlagOr:
 Integer);


## Параметры


AddedValueFlagAnd. Первое добавленное
 значение;


AddedValueFlagOr. Второе добавленное
 значение.


## Описание


Метод RevertChanges отменяет
 внесённые изменения значений матрицы


## Комментарии


Метод возвращает для элементов матрицы исходные значения и применяет
 дополнительные операции к свойству [IMatrix.ValueFlag](../IMatrix/IMatrix.ValueFlag.htm)
 этих элементов согласно выражению:


ValueFlag = (ValueFlag & AddedValueFlagAnd)
 | AddedValueFlagOr


См. также:


[IMatrixEx](IMatrixEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
