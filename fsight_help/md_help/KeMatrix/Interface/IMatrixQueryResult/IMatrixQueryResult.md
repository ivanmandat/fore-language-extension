# IMatrixQueryResult

IMatrixQueryResult
-


# IMatrixQueryResult


Сборка: Matrix;


## Описание


Интерфейс IMatrixQueryResult
 предназначен для работы с результатами поиска данных в матрице.


## Иерархия наследования


IMatrixQueryResult


## Комментарии


Для получения результатов поиска используйте свойство [IMatrixQuery.Result](../IMatrixQuery/IMatrixQuery.Result.htm).
 Результат содержит информацию о матрице, в которой имеются только те значения,
 которые удовлетворяющее условиям заданного [фильтра](../IMatrixQuery/IMatrixQuery.Filter.htm).
 Фильтрация осуществляется путём изменения отметки измерений. Информация
 об отметке представляется в двух видах:


	- с помощью методов [GetSelection](IMatrixQueryResult.GetSelection.htm),
	 [GetSelectionSet](IMatrixQueryResult.GetSelectionSet.htm)
	 можно получить классическую отметку отдельного измерения или всех
	 измерений соответственно;


	- с помощью свойства [Item](IMatrixQueryResult.Item.htm)
	 можно получить битовый массив, в котором каждый элемент - это признак
	 отметки элемента измерения: True
	 - элемент отмечен, False -
	 элемент не отмечен.


Также в результате будут доступны минимальное и максимальное значение
 в отфильтрованной матрице.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMatrixQueryResult.Count.htm)
		 Свойство Count возвращает
		 количество битовых массивов с информацией об отметке элементов
		 измерений.


		 ![](../../Property_Image.gif)
		 [Item](IMatrixQueryResult.Item.htm)
		 Свойство Item возвращает
		 битовый массив, содержащий информацию об отметке элементов измерения.


		 ![](../../Property_Image.gif)
		 [Matrix](IMatrixQueryResult.Matrix.htm)
		 Свойство Matrix возвращает
		 результат выполнения запроса в виде матрицы.


		 ![](../../Property_Image.gif)
		 [MaxValue](IMatrixQueryResult.MaxValue.htm)
		 Свойство MaxValue возвращает
		 максимальное значение, доступное в результате.


		 ![](../../Property_Image.gif)
		 [MinValue](IMatrixQueryResult.MinValue.htm)
		 Свойство MinValue возвращает
		 минимальное значение, доступное в результате.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByKey](IMatrixQueryResult.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск битового массива с информацией об отмеченных элементах
		 по ключу измерения.


		 ![](../../Sub_Image.gif)
		 [GetSelection](IMatrixQueryResult.GetSelection.htm)
		 Метод GetSelection
		 получает отметку, которая формируется для фильтрации матрицы по
		 заданному измерению.


		 ![](../../Sub_Image.gif)
		 [GetSelectionSet](IMatrixQueryResult.GetSelectionSet.htm)
		 Метод GetSelectionSet
		 получает отметку по всем измерениям, которая формируется для фильтрации
		 матрицы.


См. также:


[Интерфейсы
 сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
