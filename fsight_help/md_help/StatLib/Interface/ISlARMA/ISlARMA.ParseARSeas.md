# ISlARMA.ParseARSeas

ISlARMA.ParseARSeas
-


# ISlARMA.ParseARSeas


## Синтаксис


ParseARSeas(Value: String; [AssignOrder: Boolean
 = True]);


## Параметры


Value.
 Строковое представление порядка сезонной авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISlARMA.OrderARSeas](ISlARMA.OrderARSeas.htm).


## Описание


Метод ParseARSeas осуществляет
 разбор строкового представления порядка сезонной авторегрессии.


## Комментарии


Параметр Value
 должен содержать номера или диапазоны порядков сезонной авторегрессии,
 разделённые запятыми. Например:


ParseARSeas("1-3,5,7-9");


Если AssignOrder = True,
 то после выполнения ParseARSeas
 полученное значение устанавливается в свойство [ISlARMA.OrderARSeas](ISlARMA.OrderARSeas.htm). Если
 AssignOrder = False,
 то порядок сезонной авторегрессии не изменяется.


## Пример


Использование свойства приведено в примере для [ISlARMA.CoefficientsARSeas](ISlARMA.CoefficientsARSeas.htm).


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
