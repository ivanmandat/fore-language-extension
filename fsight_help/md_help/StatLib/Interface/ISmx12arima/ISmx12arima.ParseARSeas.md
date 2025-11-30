# ISmx12arima.ParseARSeas

ISmx12arima.ParseARSeas
-


# ISmx12arima.ParseARSeas


## Синтаксис


ParseARSeas(Value: String; [AssignOrder: Boolean
 = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISmx12arima.OrderARSeas](ISmx12arima.OrderARSeas.htm).


## Описание


Метод ParseARSeas разбирает
 строки с параметрами сезонной авторегрессии.


## Комментарии


Параметр Value должен содержать номера или диапазоны порядков авторегрессии,
 разделённые запятыми. Например:


ParseARSeas("1-3,5,7-9", True);


Если AssignOrder = True, то после выполнения ParseARSeas
 полученное значение устанавливается в свойство [ISmx12arima.OrderARSeas](ISmx12arima.OrderARSeas.htm).
 Если AssignOrder = False, то порядок параметров сезонной авторегрессии
 не изменяется.


## Пример


Использование свойства приведено в примере для [ISmx12arima.OutliersARIMAls](ISmx12arima.OutliersARIMAls.htm).


См. также:


[ISmx12arima](ISmx12arima.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
