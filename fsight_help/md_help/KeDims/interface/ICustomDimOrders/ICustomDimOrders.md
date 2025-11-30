# ICustomDimOrders

ICustomDimOrders
-


# ICustomDimOrders


## Описание


Интерфейс ICustomDimOrders содержит
 свойства и методы коллекции атрибутов, по которым производится сортировка
 элементов в конструируемом справочнике.


## Комментарии


Коллекцию атрибутов, по которым производится сортировка, возвращает
 свойство [ICustomDimAttributes.Orders](../ICustomDimAttributes/ICustomDimAttributes.Orders.htm).


Порядок сортировки определяется порядком расположения атрибутов в коллекции:
 сначала сортировка осуществляется по значениям первого атрибута, затем
 второго и так далее. По умолчанию в коллекцию сортировки включается атрибут
 с назначением «[Порядок](../ICustomDimAttributes/ICustomDimAttributes.Order.htm)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICustomDimOrders.Count.htm)
		 Свойство Count возвращает
		 количество атрибутов в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](ICustomDimOrders.Item.htm)
		 Свойство Item возвращает
		 параметры сортировки по атрибуту с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICustomDimOrders.Add.htm)
		 Метод Add осуществляет
		 добавление указанного атрибута в список сортировки.


		 ![](../../Sub_Image.gif)
		 [Delete](ICustomDimOrders.Delete.htm)
		 Метод Delete осуществляет
		 удаление атрибута с указанным индексом и возвращает признак удачного
		 удаления.


		 ![](../../Sub_Image.gif)
		 [FindByKey](ICustomDimOrders.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск атрибута в коллекции по ключу.


		 ![](../../Sub_Image.gif)
		 [Move](ICustomDimOrders.Move.htm)
		 Метод Move осуществляет
		 перемещение атрибутов в списке сортировки, изменяя тем самым приоритет
		 сортировки по какому-либо атрибуту.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
