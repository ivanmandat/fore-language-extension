# DataVisualizer.MappingInactiveEffects

DataVisualizer.MappingInactiveEffects
-


# DataVisualizer.MappingInactiveEffects


## Синтаксис


MappingInactiveEffects: Array [Object];


## Описание


Свойство MappingInactiveEffects
 определяет сопоставление эффектов для неактивных элементов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMappingInactiveEffects,
 а возвращается с помощью метода getMappingInactiveEffects.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Получим эффекты
 для неактивных элементов:


// Получим первый эффект сопоставления неактивных элементов
Eff = bubbleChart.getMappingInactiveEffects()[0];
// Получим его идентификатор
effId = Eff.getId();
// Проверим использование эффекта сопоставления элементом Item0 визуализатора
bubbleChart.getMappingItemActiveness(effId, "Item0")

В результате выполнения примера в консоль была выведена информация о
 применении эффекта сопоставления для элемента «Item0».


См.
 также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
