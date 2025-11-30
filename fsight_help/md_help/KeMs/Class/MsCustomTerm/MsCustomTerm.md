# MsCustomTerm

MsCustomTerm
-


# MsCustomTerm


Сборка: Ms;


## Описание


Класс MsCustomTerm предназначен для работы с временными и фиктивными переменными (даммисами).


## Иерархия наследования


           [IMsCustomTerm](../../Interface/IMsCustomTerm/IMsCustomTerm.htm)


           MsCustomTerm


## Комментарии


Временная переменная - это переменная, значения которой последовательно увеличиваются на единицу с каждым новым наблюдением: 1, 2, 3, 4 и т.д.


Фиктивная переменная - это переменная, каждое наблюдение которой может принимать значение только 0 или 1.


Даммисы могут использоваться в векторном и поточечном режимах расчета. В поточечном режиме даммис возвращает значение на текущую точку расчета, а в векторном - объект [ITimeSeries](../../Interface/ITimeSeries/ITimeSeries.htm) со значениями на весь период.


Даммисы можно использовать как в выражениях методов моделирования, так и в выражениях [IMsCompositeFormulaTerm](../../Interface/IMsCompositeFormulaTerm/IMsCompositeFormulaTerm.htm).


## Методы, унаследованные от [IMsCustomTerm](../../Interface/IMsCustomTerm/IMsCustomTerm.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [IsPeriod](../../Interface/IMsCustomTerm/IMsCustomTerm.IsPeriod.htm)


		 Метод IsPeriod возвращает
		 фиктивную переменную, определяющую признак расположения наблюдения
		 в указанном периоде.


		 ![](../../Sub_Image.gif)
		 [NoDate](../../Interface/IMsCustomTerm/IMsCustomTerm.NoDate.htm)


		 Метод NoDate применяется
		 для обозначения начальной или конечной даты периода идентификации
		 модели.


		 ![](../../Sub_Image.gif)
		 [SameDate](../../Interface/IMsCustomTerm/IMsCustomTerm.SameDate.htm)


		 Метод SameDate возвращает
		 дату начала периода для фиктивной переменной.


		 ![](../../Sub_Image.gif)
		 [Seas](../../Interface/IMsCustomTerm/IMsCustomTerm.Seas.htm)


		 Метод Seas возвращает
		 фиктивную переменную, каждый элемент которой соответствует признаку
		 принадлежности наблюдения указанному периоду в течение текущего
		 года. Год разделён согласно календарной динамике ряда.


		 ![](../../Sub_Image.gif)
		 [Time](../../Interface/IMsCustomTerm/IMsCustomTerm.Time.htm)


		 Метод Time возвращает
		 временной ряд, значение которого для каждого последующего наблюдения
		 увеличивается на единицу.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
