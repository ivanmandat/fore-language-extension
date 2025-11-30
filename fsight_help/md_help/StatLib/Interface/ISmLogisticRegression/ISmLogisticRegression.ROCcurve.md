# ISmLogisticRegression.ROCcurve

ISmLogisticRegression.ROCcurve
-


# ISmLogisticRegression.ROCcurve


## Синтаксис


ROCcurve: [IROCcurve](../IROCcurve/IROCcurve.htm);


## Описание


Свойство ROCcurve возвращает
 параметры ROC-кривой.


## Комментарии


ROC-кривая - это график, позволяющий оценить качество бинарной классификации.
 ROC-кривая отображает соотношение между долей объектов от общего количества
 носителей признака, верно классифицированных как несущих признак, и долей
 объектов от общего количества объектов, не несущих признака, ошибочно
 классифицированных как несущих признак при варьировании порога решающего
 правила.


Таким образом, ROC-кривая рассчитывается, если объясняемый ряд является
 бинарным.


Для построения ROC-кривой по оси Y откладываются полученные значения
 [чувствительности](../IROCcurve/IROCcurve.Sensitivity.htm),
 а по оси X - [(1 - специфичность)](../IROCcurve/IROCcurve.OneMinusSpecificity.htm).


## Пример


Использование свойства приведено в примере для [ISmLogisticRegression.Probabilities](ISmLogisticRegression.Probabilities.htm).


См. также:


[ISmLogisticRegression](ISmLogisticRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
