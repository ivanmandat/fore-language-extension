# DataVisualizer.ItemsSelected

DataVisualizer.ItemsSelected
-


# DataVisualizer.ItemsSelected


## Синтаксис


ItemsSelected: function (sender, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии.
 Информация о выделенных элементах содержится в свойстве Items.


## Описание


Событие ItemsSelected генерируется
 после выделения элементов визуализатора.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Добавим обработчик
 события для выделения элементов:


bubbleChart.ItemsSelecting.add(function (sender, args) {

    alert(JSON.stringify(args, null, 2));

});


В результате выполнения примера, при выделении элемента, в сообщении
 браузера будет выведена информация о выделенных элементах.


См.
 также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
