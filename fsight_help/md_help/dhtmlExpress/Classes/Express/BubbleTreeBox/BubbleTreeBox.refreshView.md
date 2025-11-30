# BubbleTreeBox.refreshView

BubbleTreeBox.refreshView
-


# BubbleTreeBox.refreshView


## Синтаксис


refreshView(args: Object|[PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


args. Настройки контейнера
 для пузырькового дерева.


## Описание


Метод refreshView обновляет
 контейнер для пузырькового дерева в соответствии с указанными настройками.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleTreeBox](../../../Components/Express/BubbleTreeBox/BubbleTreeBox.htm)
 с наименованием «bubbleTreeBox» (см. «[Пример
 создания компонента BubbleTreeBox](../../../Components/Express/TreeMapBox/TreeMapBox_Example.htm)»). Отобразим на легенде 3 интервала
 и расположим её под областью построения пузырькового дерева слева:


if (bubbleTreeBox.isLoaded()) {
    // Обработаем событие Refreshed
    bubbleTreeBox.Refreshed.add(function (sender, args) {
        console.log("Контейнер для пузырькового дерева обновлён");
    });
    // Получим настройки контейнера
    var state = bubbleTreeBox.getState();
    var metadata = [];
    for (i in state.getMetadata()) {
        var option = state.getMetadata()[i];
        // Отобразим на легенде пузырькового дерева 3 интервала
        if (option.Name == "TreeChartMaster.ColorPanel.IntervalsCount") {
            option.Value = 3;
            metadata.push(option);
        }
    };
    // Определим объект с изменёнными настройками
    var args = new PP.Ui.PropertyChangedEventArgs({
        PropertyName: 'TreeChartSettings',
            Metadata: metadata
    });
    // Обновим контейнер для пузырькового дерева
    var result = bubbleTreeBox.refreshView(args);
    if (!result) {
        // Вызовем событие Refreshed
        bubbleTreeBox.Refreshed.fire(this);
    };
    // Расположим легенду под областью построения пузырькового дерева слева
    bubbleTreeBox.setLegendPosition("bottom|left");
} else {
    console.log("Контейнер для пузырькового дерева не загружен.");
};
В результате выполнения примера легенда стала содержать три интервала
 и была отображена под областью построения пузырькового дерева слева:


![](BubbleTreeBox_refreshView.png)


В консоли браузера было выведено уведомление о том, что контейнер для
 пузырькового дерева обновлён.


См. также:


[BubbleTreeBox](BubbleTreeBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
