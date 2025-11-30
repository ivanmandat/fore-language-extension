# EaxModeSelectorView.ModeSelectorChanged

EaxModeSelectorView.ModeSelectorChanged
-


**


# EaxModeSelectorView.ModeSelectorChanged


## Синтаксис


ModeSelectorChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: metaModeSelector - выбранный режим отображения представления данных.


## Описание


Событие ModeSelectorChanged** наступает после смены режима отображения представлений данных в рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие ModeSelectorChanged:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
// Получаем представление кнопки «Раскладка»
var modeSelector = dataView.getModeSelectorView();
// Обрабатываем событие ModeSelectorChanged
modeSelector.ModeSelectorChanged.add(
    function () {
         // Обновим все содержимое кнопки «Раскладка»
        modeSelector.refreshAll()
    }
);

В результате выполнения данного примера после каждого наступления события ModeSelectorChanged будет обновляться все содержимое кнопки для выбора режима отображения представлений данных.


См. также:


[EaxModeSelectorView](EaxModeSelectorView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
