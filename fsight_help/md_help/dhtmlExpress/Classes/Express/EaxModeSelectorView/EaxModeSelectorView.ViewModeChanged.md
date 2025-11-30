# EaxModeSelectorView.ViewModeChanged

EaxModeSelectorView.ViewModeChanged
-


**


# EaxModeSelectorView.ViewModeChanged


## Синтаксис


ViewModeChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ViewModeChanged**
 наступает после смены режима отображения представлений данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие ViewModeChanged:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
// Получаем представление кнопки «Раскладка»
var modeSelector = dataView.getModeSelectorView();
// Обрабатываем событие ViewModeChanged
modeSelector.ViewModeChanged.add(
    function () {
        alert("Режим отображения представлений данных изменен.");
    }
);

В результате выполнения данного примера после каждого наступления события
 ViewModeChanged будет выводиться
 сообщение о том, что режим отображения представлений данных изменен.


См. также:


[EaxModeSelectorView](EaxModeSelectorView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
