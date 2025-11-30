# Breadcrumb.ItemClick

Breadcrumb.ItemClick
-


# Breadcrumb.ItemClick


## Синтаксис


ItemClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ItemClick наступает при нажатии на заголовок элемента компонента [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm).


## Комментарии


Событие наступает при нажатии на заголовок элемента, уже добавленного в компонент [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm):


![](../../Components/Breadcrumb/bread7.gif)


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавьте обработчики событий


        bread.ItemClick.add(function (sender, args) {


            alert("Выбран элемент" + args.Item.getContent());


        });


После выполнения примера при нажатии на заголовок элемента на экран будет выведено сообщение «Выбран элемент <название элемента>».


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
