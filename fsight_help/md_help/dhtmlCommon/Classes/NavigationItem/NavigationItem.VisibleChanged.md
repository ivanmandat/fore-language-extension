# NavigationItem.VisibleChanged

NavigationItem.VisibleChanged
-


# NavigationItem.VisibleChanged


## Синтаксис


VisibleChanged: function (sender, args)


## Параметры


sender. Источник
 события;


args. Информация о событии.


## Описание


Событие VisibleChanged наступает
 после изменения видимости вкладки.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавляем к первой вкладке обработчики
 событий изменения видимости элемента:


navigationBar.getLayoutItems()[0].VisibleChanging.add(function (sender, args) {
    console.log("Меняется видимость элемента панели свойств")
});
navigationBar.getLayoutItems()[0].VisibleChanged.add(function (sender, args) {
    console.log("Изменилась видимость элемента панели свойств")
});
Скрываем первый элемент панели:


// Скрываем первый элемент панели
navigationBar.getLayoutItems()[0].hide();
В результате в консоль будет выведена информация об изменении видимости
 элемента:


Меняется видимость элемента панели свойств


Изменилась видимость элемента панели свойств


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
