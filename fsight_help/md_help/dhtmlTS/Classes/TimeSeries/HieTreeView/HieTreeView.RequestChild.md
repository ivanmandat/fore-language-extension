# HieTreeView.RequestChild

HieTreeView.RequestChild
-


# HieTreeView.RequestChild


## Синтаксис


RequestChild: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestChild наступает
 при запросе дочерних вершин.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, создать компонент для отображения иерархии каталога показателей
 с наименованием «maTree» (см. «[Конструктор
 MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)») и в теге <SCRIPT> добавить следующий код:


	maTree.RequestChild.add(function(sender, args){console.log("Ключ папки: " + args.ParentKey)});

После выполнения примера при раскрытии элемента дерева, имеющего дочерние
 вершины, в консоль браузера будет выведен ключ открытой папки.


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
