# FormulasCatView.getAggregationButton

FormulasCatView.getAggregationButton
-


# FormulasCatView.getAggregationButton


## Синтаксис


getAggregationButton();


## Описание


Метод getAggregationButton возвращает кнопку «Агрегация».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Сделаем все кнопки вкладки «Вычисления» неактивными и обновим её:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Вычисления»
var formulasCatView = ribbon.getFormulasCategory();
// Обновим вкладку
formulasCatView.refresh();
// Получим все кнопки вкладки «Вычисления» и сделаем их неактивными
// Получим кнопку «Агрегация»
var aggregationButton = formulasCatView.getAggregationButton();
// Сделаем кнопку неактивной
aggregationButton.setEnabled(false);
// Получим кнопку «Арифметика»
var arithmeticButton = formulasCatView.getArithmeticButton();
// Сделаем кнопку неактивной
arithmeticButton.setEnabled(false);
// Получим кнопку «Калькулятор»
var calculatorButton = formulasCatView.getCalculatorButton();
// Сделаем кнопку неактивной
calculatorButton.setEnabled(false);
// Получим кнопку «Преобразования»
var conversionsButton = formulasCatView.getConversionsButton();
// Сделаем кнопку неактивной
conversionsButton.setEnabled(false);
// Получим кнопку «Сглаживание»
var flatteningButton = formulasCatView.getFlatteningButton();
// Сделаем кнопку неактивной
flatteningButton.setEnabled(false);
// Получим кнопку «Прогнозирование»
var predictionButton = formulasCatView.getPredictionButton();
// Сделаем кнопку неактивной
predictionButton.setEnabled(false);
// Получим кнопку «Регрессия»
var regressionButton = formulasCatView.getRegressionButton();
// Сделаем кнопку неактивной
regressionButton.setEnabled(false);

В результате выполнения примера все кнопки вкладки «Вычисления» стали неактивны, а так же была обновлена сама вкладка «Вычисления» ленты инструментов:


![](FormulasCatView_getAggregationButton.png)


См. также:


[FormulasCatView](FormulasCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
