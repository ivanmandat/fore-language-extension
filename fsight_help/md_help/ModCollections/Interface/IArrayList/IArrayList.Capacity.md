# IArrayList.Capacity

IArrayList.Capacity
-


# IArrayList.Capacity


## Синтаксис


Capacity: Integer;


## Описание


Свойство Capacity определяет количество элементов, которое может содержаться в массиве.


## Комментарии


Свойство Capacity - это количество элементов, которое может содержаться в массиве. Свойство [Count](../ICollection/ICollection.Count.htm) - это количество элементов, которое в действительности содержится в массиве. Значение свойства Capacity всегда больше или равно значению свойства [Count](../ICollection/ICollection.Count.htm). Если при добавлении элементов свойство [Count](../ICollection/ICollection.Count.htm) превысит значение свойства Capacity, то размера массива автоматически будет увеличен в два раза.


Емкость массива может быть уменьшена при вызове метода [TrimToSize](IArrayList.TrimToSize.htm) либо при явном задании свойства Capacity.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
