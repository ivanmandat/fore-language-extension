# TreeColorPanel.getContentPanel

TreeColorPanel.getContentPanel
-


**


# TreeColorPanel.getContentPanel


## Синтаксис


getContentPanel();


## Описание


Метод getContentPanel**
 возвращает элемент, в котором располагается содержимое панели управления
 цветами.


## Комментарии


Метод возвращает объект типа [PP.Ui.GridPanel](dhtmlUi.chm::/Classes/GridPanel/GridPanel.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap.htm)
 с наименованием «treeMap» и компонента [TreeMapMaster](dhtmlBubbleTree.chm::/Components/TreeMapMaster/TreeMapMaster.htm)
 с наименованием «treeMapMaster» (см. «[Пример
 размещения компонентов TreeMapMaster и TreeMap](dhtmlBubbleTree.chm::/Components/TreeMapMaster/TreeMapMaster_and_TreeMap.htm)» ). Получим панель
 управления цветами, развернем панель, получим элемент, в котором располагается
 содержимое панели, выведем его идентификатор. Получим мастер панели и
 выведем его идентификатор:


// Получим панель управления цветами
var colorPanel = treeMapMaster.getColorPanel();
// Развернем панель
colorPanel.expand();
// Получим контент панели управления цветом
var contentPanel = colorPanel.getContentPanel();
// Выведем идентификатор
console.log("Идентификатор панели: " + contentPanel.getId());
// Получим мастер панели
var master = colorPanel.getTreeMaster();
// Выведем идентификатор мастера
console.log("Идентификатор мастера: " + master.getId());

В результате выполнения примера в консоли браузера был выведен идентификатор
 элемента, в котором располагается содержимое панели и идентификатор мастера
 панели:


Идентификатор панели: GridPanel2740


Идентификатор мастера: TreeMapMaster499


См. также:


 [TreeColorPanel](TreeColorPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
