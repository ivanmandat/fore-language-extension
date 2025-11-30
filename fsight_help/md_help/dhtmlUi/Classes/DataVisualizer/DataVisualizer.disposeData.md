# DataVisualizer.disposeData

DataVisualizer.disposeData
-


**


# DataVisualizer.disposeData


## Синтаксис


disposeData();


## Описание


Метод disposeData** удаляет
 сложные свойства визуализатора.


## Комментарии


Метод удаляет свойства DataSources, Visuals, Scales, Transformers, Legends
 визуализатора.


Рекомендуется использовать перед использованием метода dispose().


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Удалим компонент
 визуализатора и его настройки:


// Удаляем сложные свойства визуализатора
bubbleChart.disposeData();
// Удаляем сам визуализатор
bubbleChart.dispose();

В результате выполнения примера все возможные настройки визуализатора
 были удалены.


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
