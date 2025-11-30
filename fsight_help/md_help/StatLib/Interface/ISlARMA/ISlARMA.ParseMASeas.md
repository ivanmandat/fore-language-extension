# ISlARMA.ParseMASeas

ISlARMA.ParseMASeas
-


# ISlARMA.ParseMASeas


## Синтаксис


ParseMASeas(Value: String; [AssignOrder: Boolean
 = True]);


## Параметры


Value. Строковое представление
 порядка сезонного скользящего среднего;


AssignOrder. Признак установки
 полученного значения в свойство [ISlARMA.OrderMASeas](ISlARMA.OrderMASeas.htm).


## Описание


Метод ParseMASeas осуществляет
 разбор строкового представления порядка сезонного скользящего среднего.


## Комментарии


Параметр Value
 должен содержать номера или диапазоны порядков скользящего сезонного среднего,
 разделённые запятыми. Например:


ParseMASeas("1-3,5,7-9");


Если AssignOrder = True,
 то после выполнения ParseMASeas
 полученное значение устанавливается в свойство [ISlARMA.OrderMASeas](ISlARMA.OrderMASeas.htm).
 Если AssignOrder = False,
 то порядок сезонного скользящего среднего не изменяется.


## Пример


Использование свойства приведено в примере для [ISlARMA.CoefficientsARSeas](ISlARMA.CoefficientsARSeas.htm).


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
