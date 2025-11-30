# FormulasCatView.IsRExist

FormulasCatView.IsRExist
-


# FormulasCatView.IsRExist


## Синтаксис


IsRExist : Boolean;


## Описание


Свойство IsRExist определяет
 признак наличия кнопки «Методы R».


## Комментарии


Значение свойства устанавливается из JSON или с помощью метода setIsRExist, а возвращается - с
 помощью метода getIsRExist.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Вычисления»
var formulasCatView = ribbon.getFormulasCategory();
// Обновим вкладку
formulasCatView.refresh();
// Если кнопка существует, сделаем её неактивной
if (formulasCatView.getIsRExist()) {
    // Получим кнопку «Методы R»
    var RFunctionsButton = formulasCatView.getRFunctionsButton();
    // Сделаем кнопку неактивной
    RFunctionsButton.setEnabled(false);
};

В результате выполнения примера кнопка «Методы R» стала неактивной.


См. также:


[FormulasCatView](FormulasCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
