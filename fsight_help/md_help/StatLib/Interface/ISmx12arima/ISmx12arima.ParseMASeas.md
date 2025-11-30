# ISmx12arima.ParseMASeas

ISmx12arima.ParseMASeas
-


# ISmx12arima.ParseMASeas


## Синтаксис


ParseMASeas(Value: String; [AssignOrder: Boolean
 = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISmx12arima.OrderMASeas](ISmx12arima.OrderMASeas.htm).


## Описание


Метод ParseMASeas осуществляет
 разбор строк с параметрами сезонного скользящего среднего.


## Комментарии


Параметр Value должен содержать номера или диапазоны порядков авторегрессии,
 разделённые запятыми. Например:


ParseMASeas("1-3,5,7-9", True);


Если AssignOrder = True, то после выполнения ParseMASeas
 полученное значение устанавливается в свойство [ISmx12arima.OrderMASeas](ISmx12arima.OrderMASeas.htm).
 Если AssignOrder = False, то порядок параметров сезонного скользящего
 среднего не изменяется.


## Пример


Использование свойства приведено в примере для [ISmx12arima.OutliersARIMAls](ISmx12arima.OutliersARIMAls.htm).


См. также:


[ISmx12arima](ISmx12arima.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
