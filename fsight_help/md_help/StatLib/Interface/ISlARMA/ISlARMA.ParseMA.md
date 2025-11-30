# ISlARMA.ParseMA

ISlARMA.ParseMA
-


# ISlARMA.ParseMA


## Синтаксис


ParseMA(Value: String; [AssignOrder: Boolean = True]);


## Параметры


Value.
 Строковое представление порядка скользящего среднего;


AssignOrder. Признак установки
 полученного значения в свойство [ISlARMA.OrderMA](ISlARMA.OrderMA.htm).


## Описание


Метод ParseMA осуществляет
 разбор строкового представления порядка скользящего среднего.


## Комментарии


Параметр Value
 должен содержать номера или диапазоны порядков скользящего среднего, разделённые
 запятыми. Например:


ParseMA("1-3,5,7-9");


Если AssignOrder = True,
 то после выполнения ParseMASeas
 полученное значение устанавливается в свойство [ISlARMA.OrderMA](ISlARMA.OrderMA.htm). Если AssignOrder = False,
 то порядок скользящего среднего не изменяется.


## Пример


Использование свойства приведено в примере для [ISlARMA.ParseAR](ISlARMA.ParseAR.htm).


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
