# IMsNonLinearControlFormulaTerm

IMsNonLinearControlFormulaTerm
-


# IMsNonLinearControlFormulaTerm


## Описание


Интерфейс IMsNonLinearControlFormulaTerm
 содержит свойства и методы для работы с термом, который соответствует
 управляющей переменной в задаче оптимального управления.


## Иерархия наследования


           [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


           [IMsOptimizationFormulaTerm](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.htm)


           IMsNonLinearControlFormulaTerm


## Комментарии


Для работы с задачей оптимального управления используйте интерфейс [IMsControlProblem](../IMsControlProblem/IMsControlProblem.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [LowerBound](IMsNonLinearControlFormulaTerm.LowerBound.htm)
		 Свойство LowerBound
		 определяет нижнюю границу для управляющей переменной.


		 ![](../../Property_Image.gif)
		 [UpperBound](IMsNonLinearControlFormulaTerm.UpperBound.htm)
		 Свойство UpperBound
		 определяет верхнюю границу для управляющей переменной.


		 ![](../../Property_Image.gif)
		 [UseLowerBound](IMsNonLinearControlFormulaTerm.UseLowerBound.htm)
		 Свойство UseLowerBound
		 определяет, учитывать ли нижнюю границу для управляющей переменной.


		 ![](../../Property_Image.gif)
		 [UseUpperBound](IMsNonLinearControlFormulaTerm.UseUpperBound.htm)
		 Свойство UseUpperBound
		 определяет, учитывать ли верхнюю границу для управляющей переменной.


## Свойства, унаследованные от [IMsOptimizationFormulaTerm](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [InitApproximation](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные значения терма.


## Свойства, унаследованные от [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Key](../IMsFormulaTerm/IMsFormulaTerm.Key.htm)


		 Свойство Key возвращает
		 ключ терма.


		 ![](../../Property_Image.gif)
		 [Lag](../IMsFormulaTerm/IMsFormulaTerm.Lag.htm)


		 Свойство Lag возвращает
		 объект, определяющий значение лага для терма.


		 ![](../../Property_Image.gif)
		 [Serie](../IMsFormulaTerm/IMsFormulaTerm.Serie.htm)


		 Свойство Serie возвращает
		 массив значений терма, рассчитанных с учётом преобразований.


		 ![](../../Property_Image.gif)
		 [Slice](../IMsFormulaTerm/IMsFormulaTerm.Slice.htm)


		 Свойство Slice определяет
		 срез переменной, которому соответствует данный терм.


		 ![](../../Property_Image.gif)
		 [TermInfo](../IMsFormulaTerm/IMsFormulaTerm.TermInfo.htm)


		 Свойство TermInfo определяет
		 параметры терма.


		 ![](../../Property_Image.gif)
		 [UnitInfo](../IMsFormulaTerm/IMsFormulaTerm.UnitInfo.htm)


		 Свойство UnitInfo возвращает
		 данные о единицах измерения терма.


## Методы, унаследованные от [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [TermToInnerText](../IMsFormulaTerm/IMsFormulaTerm.TermToInnerText.htm)
		 Метод TermToInnerText
		 возвращает внутреннее представление терма.


		 ![](../../Sub_Image.gif)
		 [TermToText](../IMsFormulaTerm/IMsFormulaTerm.TermToText.htm)
		 Метод TermToText возвращает
		 наименование терма, которое отображается в списке термов.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
