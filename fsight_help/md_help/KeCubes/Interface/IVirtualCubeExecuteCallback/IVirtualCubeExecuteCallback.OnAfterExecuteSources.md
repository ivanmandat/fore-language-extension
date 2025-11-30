# IVirtualCubeExecuteCallback.OnAfterExecuteSources

IVirtualCubeExecuteCallback.OnAfterExecuteSources
-


# IVirtualCubeExecuteCallback.OnAfterExecuteSources


## Синтаксис


OnAfterExecuteSources(Value: [IVirtualCubeSourceMatricesList](../IVirtualCubeSourceMatricesList/IVirtualCubeSourceMatricesList.htm));


## Параметры


Value. Коллекция матриц источников
 виртуального куба.


## Описание


Метод OnAfterExecuteSources
 реализует событие, наступающее после расчёта источников виртуального куба.


## Комментарии


Событие наступает после расчёта отдельных матриц источников, но до построения
 общей матрицы виртуального куба. Используя параметр Value,
 можно получить отдельные матрицы источников.


## Пример


Пример использования приведён в описании свойства [IVirtualCubeInstance.ExecuteCallback](../IVirtualCubeInstance/IVirtualCubeInstance.ExecuteCallback.htm).


См. также:


[IVirtualCubeExecuteCallback](IVirtualCubeExecuteCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
