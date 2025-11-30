# FormulasCatView.getUserFunctionsButton

FormulasCatView.getUserFunctionsButton
-


# FormulasCatView.getUserFunctionsButton


## Синтаксис


getUserFunctionsButton();


## Описание


Метод getUserFunctionsButton
 возвращает кнопку «Пользовательские функции».


## Пример


Пример использования метода аналогичен методу [FormulasCatView.getAggregationButton](FormulasCatView.getAggregationButton.htm),
 для выполнения необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), рабочая книга должна содержать
 пользовательские функции:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Вычисления»
var formulasCatView = ribbon.getFormulasCategory();
// Обновим вкладку
formulasCatView.refresh();
// Получим кнопку «Пользовательские функции»
var userFuncButton = formulasCatView.getUserFunctionsButton();
// Сделаем кнопку неактивной
userFuncButton.setEnabled(false);
См. также:


[FormulasCatView](FormulasCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
