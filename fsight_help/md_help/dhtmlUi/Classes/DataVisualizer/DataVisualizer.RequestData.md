# DataVisualizer.RequestData

DataVisualizer.RequestData
-


**


# DataVisualizer.RequestData


## Синтаксис


RequestData: function (sender, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestData** генерируется
 при необходимости дозагрузки данных в источник диаграммы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Обработаем событие RequestData:


bubbleChart.RequestData.add(function (sernder, args) {
        console.log("Запрос недостающих данных");
    });

В результате выполнения примера при каждом наступлении события RequestData в консоли браузера будет
 выводиться сообщение о том, что осуществляется запрос недостающих данных.


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
