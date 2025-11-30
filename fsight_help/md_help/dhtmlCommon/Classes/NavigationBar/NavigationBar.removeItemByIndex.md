# NavigationBar.removeItemByIndex

NavigationBar.removeItemByIndex
-


# NavigationBar.removeItemByIndex


## Синтаксис


removeItemByIndex (index, notDispose)


## Параметры


index. Индекс вкладки, которую нужно удалить;


notDispose. Определяет, будет ли вкладка удалена полностью.


## Описание


Метод removeItemByIndex удаляет вкладку по индексу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB» (см. «[Пример создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавим обработчик события [NavigationBar.Collapsed](NavigationBar.Collapsed.htm):


NB.Collapsed.add(function ()


{


    NB.removeItemByIndex(0)


})


После закрытия любой из вкладок, будет удалена первая вкладка панели.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
