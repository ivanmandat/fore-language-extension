# HieTreeView.NodeDblClick

HieTreeView.NodeDblClick
-


# HieTreeView.NodeDblClick


## Синтаксис


NodeDblClick: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие NodeDblClick наступает
 при двойном щелчке по вершине дерева.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, создать компонент для отображения иерархии каталога показателей
 с наименованием «maTree» (см. «[Конструктор
 MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)») и в теге <SCRIPT> добавить следующий код:


	maTree.NodeDblClick.add(function(sender, args){console.log("Ключ: " + args.SeriesData[0].Fact.k)})

После выполнения примера при двойном щелчке по элементу дерева в консоль
 браузера будет выведен ключ выделенного ряда данных.


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
