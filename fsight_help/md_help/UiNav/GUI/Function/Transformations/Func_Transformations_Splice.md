# Splice

Splice
-


# Splice


## Синтаксис


Splice(Output: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

      Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

       Method: [MsSpliceType](kems.chm::/enums/mssplicetype.htm),

       Direction: [MsSpliceDirection](kems.chm::/enums/mssplicedirection.htm),

       BoundByDates: Boolean,

       StartDate: String,

       EndDate: String)


## Параметры


Output. Результирующая переменная;


Input. Переменная, которая
 будет совмещена с результирующей;


Method. Метод совмещения;


Direction. Направление совмещения.
 Необязательный параметр. По умолчанию параметр имеет значение MsSpliceDirection.Both
 - в обе стороны;


BoundByDates. Параметр определяет,
 использовать ли даты начала (StartDate)
 и окончания (EndDate) совмещения
 ряда. Необязательный параметр. По умолчанию параметр имеет значение False;


StartDate. Дата начала совмещения
 ряда. Необязательный параметр. Значение по умолчанию не задано;


EndDate. Дата окончания совмещения
 ряда. Необязательный параметр. Значение по умолчанию не задано.


## Описание


Осуществляет совмещение переменных.


## Комментарии


Допустимые значения параметра BoundByDates:


	- True. Даты не игнорируются
	 и используются для совмещения переменных;


	- False. Даты игнорируются.


## Пример


		 Формула
		 Результат
		 Применение


		 = Splice({Brazil|BCA},{China|BCA}, MsSpliceType.Pch,
		 MsSpliceDirection.Backward,False)
		 Выполнено совмещение значений показателей Brazil|BCA
		 и China|BCA методом сращивания
		 данных с темпами прироста в обратном направлении.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 являющегося дочерним по отношению к базе данных временных рядов.


		 = Splice(X1,X2,MsSpliceType.Butt, MsSpliceDirection.Both,
		 True,"01.01.2002","01.01.2007")
		 Выполнено совмещение значений факторов X1
		 и X2 c 2002 по 2007 годы.


		 Можно использовать в формулах моделей контейнера моделирования.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Преобразования](Func_Transformations.htm)
 │ [IModelling.Splice](kems.chm::/interface/imodelling/Imodelling.Splice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
