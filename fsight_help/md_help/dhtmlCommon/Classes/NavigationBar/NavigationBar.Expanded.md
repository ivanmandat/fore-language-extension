# NavigationBar.Expanded

NavigationBar.Expanded
-


# NavigationBar.Expanded


## Синтаксис


Expanded: function(sender,args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Expanded наступает после разворачивания вкладки панели.


## Пример


Для выполнения примера предполагается наличие на странице компонента [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB» (см. «[Пример создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавим обработчик события Expanded:


NB.Expanded.add(function ()


{


    NB.setHeight(NB.getActiveItem().getHeightOfCDomNode())


})


После разворачивания одной из вкладок высота панели будет равной высоте DOM-вершины открытой вкладки.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
