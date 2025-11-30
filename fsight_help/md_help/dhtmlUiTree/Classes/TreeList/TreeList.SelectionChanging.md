# TreeList.SelectionChanging

TreeList.SelectionChanging
-


# TreeList.SelectionChanging


## Синтаксис


SelectionChanging: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanging наступает во время выбора элемента.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик событий SelectionChanging и [.SelectionChanged](TreeList.SelectionChanged.htm)


treeListSett.SelectionChanged.add(function (sender, args)


{


   console.log("SelectionChanged")


});


treeListSett.SelectionChanging.add(function (sender, args)


{


   console.log("SelectionChanging")


});


После выполнения примера во время выбора элемента в консоль браузера будет выведено сообщение «SelectionChanging», после выбора элемента - сообщение «SelectionChanged».


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
