# BubbleTreeBox.getInstance

BubbleTreeBox.getInstance
-


# BubbleTreeBox.getInstance


## Синтаксис


getInstance();


## Описание


Метод getInstance возвращает
 экземпляр пузырькового дерева.


## Комментарии


Метод возвращает значение типа [PP.UI.BubbleTree](dhtmlBubbleTree.chm::/Classes/BubbleTree/BubbleTree.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleTreeBox](../../../Components/Express/BubbleTreeBox/BubbleTreeBox.htm)
 с наименованием «bubbleTreeBox» (см. «[Пример
 создания компонента BubbleTreeBox](../../../Components/Express/TreeMapBox/TreeMapBox_Example.htm)»). Удалим пузырьковое дерево из
 контейнера:


// Получим экземпляр пузырькового дерева
var instance = bubbleTreeBox.getInstance();
if (instance) {
    // Удалим пузырьковое дерево
    instance.dispose();
};
В результате выполнения примера всё содержимое контейнера для пузырькового
 дерева было удалено.


См. также:


[BubbleTreeBox](BubbleTreeBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
