# ITargetResults

ITargetResults
-


# ITargetResults


Сборка: Cp;


## Описание


Интерфейс ITargetResults
 предназначен для работы с результатами расчета целевой задачи.


## Иерархия наследования


           [ICpResults](../ICpResults/ICpResults.htm)


           ITargetResults


## Комментарии


Для получения результатов расчета целевой задачи выполните метод [ICpMethod.Evaluate](../ICpMethod/ICpMethod.Evaluate.htm)
 и приведите полученный результат к интерфейсу ITargetResults.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CriterionFunctionTrajectory](ITargetResults.CriterionFunctionTrajectory.htm)
		 Свойство CriterionFunctionTrajectory
		 возвращает траекторию целевой функции.


		 ![](../../Property_Image.gif)
		 [ObjValByAdjustIter](ITargetResults.ObjValByAdjustIter.htm)
		 Свойство ObjValByAdjustIter
		 возвращает прогресс изменения целевой функции в процессе последовательного
		 ослабления границ.


		 ![](../../Property_Image.gif)
		 [ObjValByIter](ITargetResults.ObjValByIter.htm)
		 Свойство ObjValByIter
		 возвращает прогресс изменения целевой функции в процессе решения
		 задачи нелинейного программирования.


		 ![](../../Property_Image.gif)
		 [OptimalValue](ITargetResults.OptimalValue.htm)
		 Свойство OptimalValue
		 возвращает оптимальное значение целевой функции.


		 ![](../../Property_Image.gif)
		 [VarValues](ITargetResults.VarValues.htm)
		 Свойство VarValues
		 возвращает значения фазовых и управляющих переменных.


## Свойства, унаследованные от [ICpResults](../ICpResults/ICpResults.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorMsg](../ICpResults/ICpResults.ErrorMsg.htm)
		 Свойство ErrorMsg возвращает
		 информационное сообщение о результатах расчета.


		 ![](../../Property_Image.gif)
		 [Status](../ICpResults/ICpResults.Status.htm)
		 Свойство Status возвращает
		 код ошибки.


См. также:


[Интерфейсы
 сборки Cp](../KeCp_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
