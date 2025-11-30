# Breadcrumb.SelectedItemsChanged

Breadcrumb.SelectedItemsChanged
-


# Breadcrumb.SelectedItemsChanged


## Синтаксис


SelectedItemsChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectedItemsChanged наступает при изменении состава [коллекции выбранных элементов](../BreadcrumbSelectedItemsList/BreadcrumbSelectedItemsList.htm).


## Комментарии


Состав коллекции выбранных элементов изменяется при выборе элемента из раскрывающегося списка или из истории.


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавьте обработчик события SelectedItemsChanged:


        bread.SelectedItemsChanged.add(function (sender, args) {


            var drop = bread.getItems().getItem(0)._DropForm;


            drop = new PP.Ui.DropPanel({ Content: "1" });


            drop.show(12, 12);


        });


После выполнения примера при выборе элемента из раскрывающегося списка или из истории для первого элемента коллекции будет установлена [раскрывающаяся панель](../../Components/DropPanel/DropPanel.htm).


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
