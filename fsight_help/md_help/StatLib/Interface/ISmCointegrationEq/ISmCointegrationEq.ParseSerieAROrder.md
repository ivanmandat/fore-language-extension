# ISmCointegrationEq.ParseSerieAROrder

ISmCointegrationEq.ParseSerieAROrder
-


# ISmCointegrationEq.ParseSerieAROrder


## Синтаксис


ParseSerieAROrder:(Value: String; [AssignOrder:
 Boolean = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии.


AssignOrder. Признак установки
 полученного значения в свойство [ISmCointegrationEq.SerieAROrder](ISmCointegrationEq.SerieAROrder.htm).


## Описание


Метод ParseSerieAROrder осуществляет
 разбор строкового представления порядка авторегрессии эндогенных переменных.


## Комментарии


Параметр Value должен содержать
 номера или диапазоны порядков авторегрессии, разделённые запятыми. Например:


	ParseSerieAROrder("1-3,5,7-9");


Если AssignOrder = True,
 то после выполнения ParseSerieAROrder
 полученное значение устанавливается в свойство [ISmCointegrationEq.SerieAROrder](ISmCointegrationEq.SerieAROrder.htm).
 Если AssignOrder = False,
 то порядок авторегрессии эндогенных переменных не изменяется.


## Пример


Использование свойства приведено в примере для [ISmCointegrationEq.CommonExogenious](ISmCointegrationEq.CommonExogenious.htm).


См. также:


[ISmCointegrationEq](ISmCointegrationEq.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
