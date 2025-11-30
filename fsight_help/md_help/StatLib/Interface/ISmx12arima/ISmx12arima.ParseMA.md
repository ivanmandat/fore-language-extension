# ISmx12arima.ParseMA

ISmx12arima.ParseMA
-


# ISmx12arima.ParseMA


## Синтаксис


ParseMA(Value: String; [AssignOrder: Boolean = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISmx12arima.OrderMA](ISmx12arima.OrderMA.htm).


## Описание


Метод ParseMA разбирает строки
 с параметрами скользящего среднего.


## Комментарии


Параметр Value должен содержать номера или диапазоны порядков авторегрессии,
 разделённые запятыми. Например:


ParseMA("1-3,5,7-9", True);


Если AssignOrder = True, то после выполнения ParseMA
 полученное значение устанавливается в свойство [ISmx12arima.OrderMA](ISmx12arima.OrderMA.htm).
 Если AssignOrder = False, то порядок параметров скользящего среднего не
 изменяется.


## Пример


Использование свойства приведено в примере для [ISmx12arima.OutliersARIMAls](ISmx12arima.OutliersARIMAls.htm).


См. также:


[ISmx12arima](ISmx12arima.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
