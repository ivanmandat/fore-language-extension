# BubbleChartMasterSize.SettingChanged

BubbleChartMasterSize.SettingChanged
-


**


# BubbleChartMasterSize.SettingChanged


## Синтаксис


SettingChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Массив объектов, содержащих
 информацию о событии. Доступные аргументы: Name - название настройки,
 Value - значение данной настройки.


## Описание


Событие SettingChanged**
 наступает после изменения настроек вкладки «Размер» в мастере управления
 пузырьковой диаграммой экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с активной вкладкой
 «Размер» в мастере управления пузырьковой диаграммой. Обработаем событие
 **SettingChanged**:


// Получаем список панелей у мастера управления пузырьковой диаграммой экспресс-отчета
var panels = expressBox.getPropertyBarView().getBubbleChartMaster().getItems();
for (var i in panels) {
    var panel = panels[i];
    if (panel.getTypeName() == "BubbleChartMasterSize") {
        // Обработаем событие SettingChanged
        panel.SettingChanged.add(function (sender, args) {
            console.log("Измененное свойство: " + args[0].Name);
            console.log("Новое значение: " + args[0].Value);
        });
    }
};

Выполним указанный пример и изменим вручную способ расчёта размера цветовых
 индикаторов на вкладке «Размер». Тогда в консоли браузера в результате
 обработки события **SettingChanged**
 будет выведено наименование и новое значение измененного свойства (в
 данном случае - минимальный размер цветового индикатора):


Измененное свойство: chartmaster.sizepanel.min


Новое значение: 15


См. также:


[BubbleChartMasterSize](BubbleChartMasterSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
