# IMsTargetFormulaTerm

IMsTargetFormulaTerm
-


# IMsTargetFormulaTerm


Сборка: Ms;


## Описание


Интерфейс IMsTargetFormulaTerm
 предназначен для настройки параметров элементов выражений (термов), используемых
 в целевой задаче.


## Иерархия наследования


           [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


           [IMsOptimizationFormulaTerm](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.htm)


           IMsTargetFormulaTerm


## Комментарии


Для настройки задачи оптимизации используйте интерфейс [IMsTargetProblem](../IMsTargetProblem/IMsTargetProblem.htm).
 Приведите одну из [управляющих
 переменных](../IMsBaseOptimizationProblem/IMsBaseOptimizationProblem.ControlVariables.htm) задачи к интерфейсу IMsTargetFormulaTerm.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [LowerBoundFixed](IMsTargetFormulaTerm.LowerBoundFixed.htm)
		 Свойство LowerBoundFixed
		 определяет тип ограничения снизу.


		 ![](../../Property_Image.gif)
		 [UpperBoundFixed](IMsTargetFormulaTerm.UpperBoundFixed.htm)
		 Свойство UpperBoundFixed
		 определяет тип ограничения сверху.


		 ![](../../Property_Image.gif)
		 [VarConstraints](IMsTargetFormulaTerm.VarConstraints.htm)
		 Свойство VarConstraints
		 возвращает ограничения терма.


## Свойства, унаследованные от [IMsOptimizationFormulaTerm](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [InitApproximation](../IMsOptimizationFormulaTerm/IMsOptimizationFormulaTerm.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные значения терма.


## Свойства, унаследованные от [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


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


## Методы, унаследованные от [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm)


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


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
