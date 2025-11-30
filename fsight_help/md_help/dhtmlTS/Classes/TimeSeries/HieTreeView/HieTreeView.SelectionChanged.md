# HieTreeView.SelectionChanged

HieTreeView.SelectionChanged
-


# HieTreeView.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanged наступает
 при изменении отметки в дереве.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, создать компонент для отображения иерархии каталога показателей
 с наименованием «maTree» (см. «[Конструктор
 MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)») и в теге SCRIPT добавить следующий код:


	maTree.SelectionChanged.add(function(sender, args){console.log("Изменена отметка")});
	//Генерируем событие изменения отметки в дереве
	maTree.SelectionChanged.fire(maTree, {});

После выполнения примера будет вызвано событие изменения отметки в дереве,
 а в консоль браузера будет выведено соответствующее сообщение.


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
