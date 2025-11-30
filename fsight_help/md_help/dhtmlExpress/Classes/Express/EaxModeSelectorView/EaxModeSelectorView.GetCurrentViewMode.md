# EaxModeSelectorView.GetCurrentViewMode

EaxModeSelectorView.GetCurrentViewMode
-


**


# EaxModeSelectorView.GetCurrentViewMode


## Синтаксис


GetCurrentViewMode();


## Описание


Метод GetCurrentViewMode** возвращает текущий режим отображения представлений данных.


## Комментарии


Метод возвращает элемент перечисления PP.Exp.Ui.[EaxViewMode](../../../Enums/EaxViewMode.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим текущий режим отображения представлений данных, а затем проверим его доступность:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
// Получаем представление кнопки «Раскладка»
var modeSelector = dataView.getModeSelectorView();
var currentViewMode =   modeSelector.GetCurrentViewMode();
console.log("Текущий режим: " + currentViewMode);
console.log("Доступен ли данный режим: " + modeSelector.IsViewModeAvailable(currentViewMode));

После выполнения примера в консоли браузера будет выведено наименование текущего режима и признак того, является ли он доступными:


Текущий режим: undefined

Доступен ли данный режим: false


См. также:


[EaxModeSelectorView](EaxModeSelectorView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
