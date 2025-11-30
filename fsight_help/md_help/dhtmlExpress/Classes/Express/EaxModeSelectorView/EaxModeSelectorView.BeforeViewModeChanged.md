# EaxModeSelectorView.BeforeViewModeChanged

EaxModeSelectorView.BeforeViewModeChanged
-


**


# EaxModeSelectorView.BeforeViewModeChanged


## Синтаксис


BeforeViewModeChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие BeforeViewModeChanged** наступает перед сменой режима отображения представлений данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие BeforeViewModeChanged:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
// Получаем представление кнопки «Раскладка»
var modeSelector = dataView.getModeSelectorView();
// Обрабатываем событие BeforeViewModeChanged
modeSelector.BeforeViewModeChanged.add(
    function () {
        // Обновим компонент для выбора режима отображения представлений данных
        modeSelector.refresh();
    }

В результате выполнения данного примера после каждого наступления события BeforeViewModeChanged будет обновляться кнопка «Раскладка» для выбора режима отображения представлений данных.


См. также:


[EaxModeSelectorView](EaxModeSelectorView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
