# EaxBubbleChartView.Source

EaxBubbleChartView.Source
-


**


# EaxBubbleChartView.Source


## Синтаксис


Source: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm)


## Описание


Свойство Source** определяет источник данных для пузырьковой диаграммы экспресс-отчета.


## Комментарии


Значение свойства можно установить с помощью метода setSource и из JSON, а возвратить - с помощью метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в рабочей области экспресс-отчета. Получим идентификатор данной пузырьковой диаграммы:


// Получаем список панелей у мастера управления пузырьковой диаграммой экспресс-отчета
var panels = expressBox.getPropertyBarView().getBubbleChartMaster().getItems();
for (var i in panels) {
    var panel = panels[i];
    if (panel.getTypeName() == "BubbleChartColorIndicator") {
        // Получаем представление пузырьковой диаграммы экспресс-отчета
        var bubbleChartView = panel.getDataView();
        console.log("Идентификатор пузырьковой диаграммы экспресс-отчета:");
        console.log(bubbleChartView.getSource().getBubbleChartId().id);
    }
}

В результате выполнения примера в консоли браузера будет выведен идентификатор пузырьковой диаграммы экспресс-отчета:


Идентификатор пузырьковой диаграммы экспресс-отчета:

GKOCHLPPEHACEOAEOEOFDNBJAMCPCLKEBLPAHNJCKMCAKIDN!M!S!ECAOLJHFDFHACEOAEKBIMOIGJMGNICHGEPJBJDBCAHOJMBIMN!bubbleChart


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
