# CalculatorWizardView.ControlChanged

CalculatorWizardView.ControlChanged
-


**


# CalculatorWizardView.ControlChanged


## Синтаксис


ControlChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ControlChanged**
 генерируется после изменения настроек мастера калькулятора на [панели
 «Параметры»](../ParametersPanel/ParametersPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем события ControlChanged,
 [FormulaEditBlur](CalculatorWizardView.FormulaEditBlur.htm)
 и [FormulaEditFocus](CalculatorWizardView.FormulaEditFocus.htm):


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель параметров
var parametersPanel = propertyBar.getParametersPanel();
// Отобразим и развернём данную панель
parametersPanel.show();
parametersPanel.expand();
// Получим мастер калькулятора
var calculatorWizard = parametersPanel._CalculatorWizard;
// Отобразим калькулятор
calculatorWizard.show();
// Обработаем событие ControlChanged
calculatorWizard.ControlChanged = PP.Delegate(function (sender, args) {
    console.log("Настройки мастера калькулятора были изменены.");
}, this);
// Обработаем событие FormulaEditFocus
calculatorWizard.FormulaEditFocus.add(function (sender, args) {
    console.log("Фокус в окне ввода выражения установлен.");
});
// Обработаем событие FormulaEditBlur
calculatorWizard.FormulaEditBlur.add(function (sender, args) {
    console.log("Фокус в окне ввода выражения потерян.");
});
// Обработаем событие RequestMetadata
calculatorWizard.RequestMetadata.add(function (sender, args) {
    console.log("Запрошены метаданные.");
});
// Вызовем события ControlChanged, FormulaEditFocus, FormulaEditBlur и RequestMetadata
calculatorWizard.ControlChanged.fire(this);
calculatorWizard.FormulaEditFocus.fire(this);
calculatorWizard.FormulaEditBlur.fire(this);
calculatorWizard.RequestMetadata.fire(this);

В результате выполнения примера после вызова событий изменения настроек
 мастера калькулятора ControlChanged,
 потери фокуса окном ввода выражения FormulaEditBlur
 и установки фокуса в данное окно FormulaEditFocus
 или при запросе метаданных в консоли браузера были выведены соответствующие
 уведомления:


Настройки мастера калькулятора были изменены.

Фокус в окне ввода выражения установлен.

Фокус в окне ввода выражения потерян.

Запрошены метаданные.


См. также:


[CalculatorWizardView](CalculatorWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
