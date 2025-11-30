# BubbleChartMasterSize.DataView

BubbleChartMasterSize.DataView
-


**


# BubbleChartMasterSize.DataView


## Синтаксис


DataView: [PP.Exp.Ui.EaxBubbleChartView](dhtmlExpress.chm::/Classes/Express/EaxBubbleChartView/EaxBubbleChartView.htm)


## Описание


Свойство DataView** содержит
 представление пузырьковой диаграммы экспресс-отчета.


## Комментарии


Значение свойства можно установить с помощью метода setDataView
 и из JSON, а возвратить - с помощью метода getDataView.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с активной вкладкой
 «Размер» в мастере управления пузырьковой диаграммой. Получим идентификатор
 пузырьковой диаграммы экспресс-отчета:


// Получаем список панелей у мастера управления пузырьковой диаграммой экспресс-отчета
var panels = expressBox.getPropertyBarView().getBubbleChartMaster().getItems();
for (var i in panels) {
    var panel = panels[i];
    if (panel.getTypeName() == "BubbleChartMasterSize") {
        // Получаем представление пузырьковой диаграммы экспресс-отчета
        var bubbleChartView = panel.getDataView();
        console.log("Идентификатор пузырьковой диаграммы экспресс-отчета:");
        console.log(bubbleChartView.getSource().getBubbleChartId().id);
    }
}

В результате выполнения примера в консоли браузера будет выведен идентификатор
 пузырьковой диаграммы экспресс-отчета:


Идентификатор пузырьковой диаграммы экспресс-отчета:

BCOEGCJKNKACEOAEOGIOGGDHLIGLACNEBKPOENKLJIDANINN!M!S!EHPHAJBKKNKACEOAECAECEKJFDMHNFONEAJEFMAGJJAKFAJED!bubbleChart


См. также:


[BubbleChartMasterSize](BubbleChartMasterSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
