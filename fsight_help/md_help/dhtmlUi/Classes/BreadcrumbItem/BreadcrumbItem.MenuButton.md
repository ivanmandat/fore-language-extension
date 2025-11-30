# BreadcrumbItem.MenuButton

BreadcrumbItem.MenuButton
-


# BreadcrumbItem.MenuButton


## Синтаксис


MenuButton: PP.Ui.[ToolBarButton](../ToolBarButton/ToolBarButton.htm)


## Описание


Свойство MenuButton возвращает кнопку вызова раскрывающегося меню элемента компонента [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm).


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавим обработчик события Click для кнопки ![](../../Components/Breadcrumb/bread4.gif) первого элемента коллекции:


        item = bread.getItems().getItem(0);


        item._MenuButton.Click.add(function (sender, args) {


        if (item.getIsFilterOn() == true)


          {


              item._FilterButton.dispose();


              item.getBreadcrumb().setWidth(200)


          }


        });


После выполнения примера при нажатии на кнопку ![](../../Components/Breadcrumb/bread4.gif) будет удалена кнопка ![](../../Components/Breadcrumb/bread8.gif), если она находилась в нажатом состоянии, и изменится ширина компонента [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm).


См. также:


[BreadcrumbItem](BreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
