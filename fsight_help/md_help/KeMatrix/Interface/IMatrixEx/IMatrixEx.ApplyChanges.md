# IMatrixEx.ApplyChanges

IMatrixEx.ApplyChanges
-


# IMatrixEx.ApplyChanges


## Синтаксис


ApplyChanges(RestoreValueFlag: Boolean);


## Параметры


RestoreValueFlag. Признак восстановления
 значения свойства [IMatrix.ValueFlag](../IMatrix/IMatrix.ValueFlag.htm)
 для изменённых значений матрицы.


## Описание


Метод ApplyChanges применяет
 внесённые изменения значений матрицы.


## Комментарии


Допустимые значения параметра RestoreValueFlag:


	- True. После применения
	 изменений будут возвращены исходные значения свойства [IMatrix.ValueFlag](../IMatrix/IMatrix.ValueFlag.htm) для изменённых значений;


	- False. После применения
	 изменений будут сохранены новые значения свойства [IMatrix.ValueFlag](../IMatrix/IMatrix.ValueFlag.htm)
	 для изменённых значений.


См. также:


[IMatrixEx](IMatrixEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
