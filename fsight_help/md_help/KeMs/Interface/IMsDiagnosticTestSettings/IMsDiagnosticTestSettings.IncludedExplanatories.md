# IMsDiagnosticTestSettings.IncludedExplanatories

IMsDiagnosticTestSettings.IncludedExplanatories
-


# IMsDiagnosticTestSettings.IncludedExplanatories


## Синтаксис


		IncludedExplanatories: Array;


## Описание


Свойство IncludedExplanatories
 определяет индексы объясняющих рядов.


## Комментарии


Индексы представлены в виде целочисленного массива, формируемого на
 основе свойства [IMsLinearRegressionTransform.Explanatories](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.Explanatories.htm).
 По умолчанию в список индексов включаются лишь те факторы модели, для
 которых свойству [IMsCompositeFormulaTerm.Included](../IMsCompositeFormulaTerm/IMsCompositeFormulaTerm.htm)
 установлено True.


Для обновления значения свойства используйте метод [IMsDiagnosticTestSettings.RefreshIncluded](IMsDiagnosticTestSettings.RefreshIncluded.htm).


## Пример


Использование свойства приведено в примере для [IMsLinearRegressionTransform.DiagnosticTests](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.DiagnosticTests.htm).


См. также:


[IMsDiagnosticTestSettings](IMsDiagnosticTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
