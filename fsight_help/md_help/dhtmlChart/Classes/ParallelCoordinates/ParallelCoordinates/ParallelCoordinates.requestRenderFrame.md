# ParallelCoordinates.requestRenderFrame

ParallelCoordinates.requestRenderFrame
-


# ParallelCoordinates.requestRenderFrame


## Синтаксис


requestRenderFrame(renderPoints: Boolean, renderGrid:
 Boolean, sync: Boolean);


## Параметры


renderPoints. Признак отрисовки
 точек на диаграмме. Необязательный параметр. Допустимые значения:


	- true.
	 На диаграмме будут отрисованы точки;


	- false.
	 На диаграмме не будут отрисованы точки (по умолчанию);


renderGrid. Признак отрисовки
 таблицы на диаграмме. Необязательный параметр. Допустимые значения:


	- true.
	 На диаграмме будет отрисована таблица;


	- false.
	 На диаграмме не будет отрисована таблица (по умолчанию);


sync. Признак синхронного выполнения
 метода. Необязательный параметр. Допустимые значения:


	- true.
	 Метод будет выполнен синхронно;


	- false.
	 Метод будет выполнен асинхронно (по умолчанию).


## Описание


Метод requestRenderFrame отправляет
 запрос на перерисовку диаграммы.


## Пример


Пример использования метода приведен в описании свойства [PCAxis.BaseStroke](../PCAxis/PCAxis.BaseStroke.htm).


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
