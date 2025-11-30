# TreeItem.Items

TreeItem.Items
-


**


# TreeItem.Items


## Синтаксис


Items: PP.List


## Описание


Свойство Items** определяет
 дочерние элементы ветви иерархической диаграммы.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается методом getItems. Установить значение свойства
 методом setItems в данный момент
 нельзя.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [BubbleTree](dhtmlBubbleTree.chm::/Components/BubbleTree/BubbleTree.htm)
 с наименованием «bubbleTree» (см. «[Пример
 создания компонента BubbleTree](dhtmlBubbleTree.chm::/Components/BubbleTree/BubbleTree_Example.htm)» ). Получим элемент по идентификатору,
 получим его родительский элемент и измени ориентацию его метки. Переведем
 сцену к полученному элементу. Получим дочерние элементы ветви диагаммы
 и установим им новое значение прозрачности:


// Получим модель данных
var model = bubbleTree.getModel()
// Получим элемент по идентификатору
var item = model.getItem("EU");
// Раскроем элемент с идентификатором «EU»
bubbleTree.drillTo(item);
var childs = item.getItems();
for (var i = 0; i < childs.getCount(); i++) {
    var childItem = childs.getItem(i);
    // Изменим прозрачность элемента
    childItem.setOpacity(0.5);
    childItem.draw();
}

В результате выполнения примера сцена была переведена к полученному
 элементу и было изменено значение прозрачности меток его дочерних
 элементов:


![](TreeItem_Items.png)


См. также:


[TreeItem](TreeItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
