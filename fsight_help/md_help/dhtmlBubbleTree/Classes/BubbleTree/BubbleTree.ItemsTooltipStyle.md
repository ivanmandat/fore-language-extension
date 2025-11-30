# BubbleTree.ItemsTooltipStyle

BubbleTree.ItemsTooltipStyle
-


**


# BubbleTree.ItemsTooltipStyle


## Синтаксис


ItemsTooltipStyle: [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.htm);


## Описание


Свойство ItemsTooltipStyle**
 определяет стиль всплывающей подсказки элементов пузырькового дерева.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода set**ItemsTooltipStyle(value)****, который в качестве параметра принимает
 JSON-объект с настройками стиля**, а возвращается с помощью метода
 get**ItemsTooltipStyle()**.


## Пример с BubbleTree


Для выполнения примера предполагается наличие на странице компонента
 [BubbleTree](../../Components/BubbleTree/BubbleTree.htm) с
 наименованием «bubbleTree» (см. «[Пример
 создания компонента BubbleTree](../../Components/BubbleTree/BubbleTree_Example.htm)» ). Поменяем подсказку элементов:


// Получим текущий стиль подсказок
style = bubbleTree.getItemsTooltipStyle();
// Создадим новый стиль
nStyle = new PP.Ui.ChartTooltipBase(style);
nStyle.setMaskText("{%Name} tooltip");
// Применим новый стиль подсказок
bubbleTree.setItemsTooltipStyle(nStyle);
bubbleTree.refresh();
В результате выполнения примера элементы пузырькового дерева получили
 альтернативный текст всплывающей подсказки.


## Пример с ExpressBox


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)») и выбран визуализатор
 пузырьковое дерево. Поменяем подсказку элементов:


// Получим компонент TreeMap
dataView=expressBox.getDataView();
treeView = dataView.getBubbleTreeView();
bubbleTree = treeView.getInstance();
// Получим текущий стиль подсказок
style = bubbleTree.getItemsTooltipStyle();
// Создадим новый стиль
nStyle = new PP.Ui.ChartTooltipBase(style);
nStyle.setMaskText("{%Name} tooltip");
// Применим новый стиль подсказок
bubbleTree.setItemsTooltipStyle(nStyle);
bubbleTree.refresh();
В результате выполнения примера элементы пузырькового дерева получили
 альтернативный текст всплывающей подсказки.


См. также:


[BubbleTree](BubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
