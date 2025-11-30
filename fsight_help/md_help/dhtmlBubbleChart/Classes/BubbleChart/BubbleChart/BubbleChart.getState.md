# BubbleChart.getState

BubbleChart.getState
-


**


# BubbleChart.getState


## Синтаксис


getState();


## Описание


Метод getState** возвращает
 настройки пузырьковой диаграммы.


## Комментарии


Метод возвращает значение типа [PP.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Расположим элементы легенды пузырьковой диаграммы
 в два столбца и обработаем событие [Refreshed](BubbleChart.Refreshed.htm):


// Обработаем событие Refreshed
bubbleChart.Refreshed.add(function (sender, args) {
    // Будем выводить наименование и значение изменённой настройки
    console.log("Наименование изменённой настройки: " + args.getMetadata().Name);
    console.log("Её новое значение: " + args.getMetadata().Value);
})
if (bubbleChart.isLoaded()) {
    // Получим настройки пузырьковой диаграммы
    var state = bubbleChart.getState();
    // Получим наименование и значение настройки, определяющей количество столбцов в легенде пузырьковой диаграммы
    var metadataArray = state.getMetadata();
    var metadata = null;
    for (var i = 0; i < metadataArray.length; i++) {
        var m = metadataArray[i];
        if (m.Name = "chartmaster.legendpanel.columnscount") {
            metadata = m;
            metadata.Value = 2; // Легенду будем отображать в два столбца
            break;
        }
    }
    // Зададим настройки для отображения легенды, описывающей интервалы значений пузырьковой диаграммы, в два столбца
    var args = new PP.Ui.PropertyChangedEventArgs({
        PropertyName: "BubbleChartSettings",
        Metadata: metadata
    });
    // Обновим пузырьковую диаграмму, применив новые настройки
    bubbleChart.refreshView(args);
} else {
    console.log("пузырьковая диаграмма не загружена.");
};

В результате выполнения примера элементы легенды пузырьковой диаграммы были расположены
 в два столбца:


![](BubbleChart_getLegend.png)


После обновления значения настройки, определяющей количество столбцов
 в легенде пузырьковой диаграммы, в результате срабатывания события [Refreshed](BubbleChart.Refreshed.htm)
 в консоли браузера было выведено наименование и значение данной настройки:


Наименование изменённой настройки: chartmaster.legendpanel.columnscount

Её новое значение: 2


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
