# IMatrixQueryResult.GetSelection

IMatrixQueryResult.GetSelection
-


# IMatrixQueryResult.GetSelection


## Синтаксис


GetSelection(Index: Integer; Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Index. Индекс измерения;


Selection. Отметка измерения.


## Описание


Метод GetSelection получает
 отметку, которая формируется для фильтрации матрицы по заданному измерению.


## Комментарии


Индекс измерения, указываемый в параметре Index,
 соответствует индексу измерения в отметке [IMatrixQuery.Select](../IMatrixQuery/IMatrixQuery.Select.htm).


В качестве значения параметра Selection
 необходимо указать переменную, в которую будет помещена сформированная
 для фильтрации матрицы отметка измерения.


См. также:


[IMatrixQueryResult](IMatrixQueryResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
