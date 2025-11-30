# TreeMap.BranchItemsTooltipStyle

TreeMap.BranchItemsTooltipStyle
-


# TreeMap.BranchItemsTooltipStyle


## Синтаксис


BranchItemsTooltipStyle: PP.Ui.CanvasTooltip;


## Описание


Свойство BranchTooltipStyle
 определяет стиль всплывающей подсказки ветвей плоского дерева.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setBranchTooltipStyle(value),
 а возвращается с помощью метода getBranchTooltipStyle().


## Пример с TreeMap


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ). Поменяем подсказку ветвей плоского
 дерева:


// Получим текущий стиль подсказок веток
style = treeMap.getBranchItemsTooltipStyle();
// Создадим новый стиль
nStyle = new PP.Ui.CanvasTooltip(style);
nStyle.setMaskText("{%Name} branch");
// Применим новый стиль для веток
treeMap.setBranchItemsTooltipStyle(nStyle);
treeMap.refresh();
В результате выполнения примера ветки дерева получили альтернативный
 текст всплывающей подсказки.


## Пример с ExpressBox


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)») и выбран визуализатор
 плоское дерево. Поменяем подсказку ветвей плоского дерева:


// Получим компонент TreeMap
dataView=expressBox.getDataView();
mapView = dataView.getTreeMapView();
treeMap = mapView.getInstance();
// Получим текущий стиль подсказок веток
style = treeMap.getBranchItemsTooltipStyle();
// Создадим новый стиль
nStyle = new PP.Ui.CanvasTooltip(style);
nStyle.setMaskText("{%Name} branch");
// Применим новый стиль для веток
treeMap.setBranchItemsTooltipStyle(nStyle);
treeMap.refresh();
В результате выполнения примера ветки дерева получили альтернативный
 текст всплывающей подсказки.


См. также:


[TreeMap](TreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
