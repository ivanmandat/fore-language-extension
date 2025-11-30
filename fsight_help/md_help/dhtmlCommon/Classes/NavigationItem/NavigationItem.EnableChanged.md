# NavigationItem.EnableChanged

NavigationItem.EnableChanged
-


# NavigationItem.EnableChanged


## Синтаксис


EnableChanged: function (sender, args)


## Параметры


sender. Источник
 события;


args. Информация о событии.


## Описание


Событие EnableChanged наступает
 после изменения доступности вкладки.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавляем к первой вкладке обработчик
 события доступности элемента:


navigationBar.getLayoutItems()[0].EnableChanged.add(function (sender, args) {
    console.log("Изменилась доступность элемента панели свойств")
});
Меняем доступность первого элемента панели:


// Меняем доступность первого элемента панели
navigationBar.getLayoutItems()[0].setEnabled(false);
В результате в консоль будет выведена информация об изменении доступности
 элемента:


Изменилась доступность элемента панели свойств


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
