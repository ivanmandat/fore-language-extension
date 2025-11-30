# IROCcurve.OneMinusSpecificity

IROCcurve.OneMinusSpecificity
-


# IROCcurve.OneMinusSpecificity


## Синтаксис


OneMinusSpecificity: Array;


## Описание


Свойство OneMinusSpecificity
 возвращает значение 1 - специфичность.


## Комментарии


Специфичность - это доля истинно отрицательных случаев, которые были
 правильно идентифицированы моделью. Данные значения следует рассматривать
 вместе со значениями чувствительности, возвращаемыми свойством [IROCcurve.Sensitivity](IROCcurve.Sensitivity.htm).


Модель с высокой чувствительностью часто дает истинный результат при
 наличии положительного исхода (обнаруживает положительные примеры). Наоборот,
 модель с высокой специфичностью чаще дает истинный результат при наличии
 отрицательного исхода (обнаруживает отрицательные примеры).


## Пример


Использование свойства приведено в примере для [ISmGradientBoostedTree.ClassificationSummary](../ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm).


См. также:


[IROCcurve](IROCcurve.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
