# EaxBubbleChartView.clearInstance

EaxBubbleChartView.clearInstance
-


**


# EaxBubbleChartView.clearInstance


## Синтаксис


clearInstance();


## Описание


Метод clearInstance** удаляет экземпляр пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в рабочей области. Удалим экземпляр пузырьковой диаграммы экспресс-отчета:


// Получаем список панелей мастера управления пузырьковой диаграммой экспресс-отчета
var panels = expressBox.getPropertyBarView().getBubbleChartMaster().getItems();
for (var i in panels) {
    var panel = panels[i];
    if (panel.getTypeName() == "BubbleChartColorIndicator") {
        var bubbleChartView = panel.getDataView();
        bubbleChartView.clearInstance();
        if (bubbleChartView.getInstance() == null) {
            console.log("Экземпляр пузырьковой диаграммы экспресс-отчета успешно удалён.");
        } else {
            console.log("Экземпляр пузырьковой диаграммы экспресс-отчета не удалён.");
        }
    }
}

В результате выполнения примера был удален экземпляр пузырьковой диаграммы экспресс-отчета, о чем в консоли браузера и было выведено соответствующее сообщение:


Экземпляр пузырьковой диаграммы экспресс-отчета успешно удалён.


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
