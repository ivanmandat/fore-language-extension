# ICustomDimAttributes

ICustomDimAttributes
-


# ICustomDimAttributes


Сборка: Dimensions;


## Описание


Интерфейс ICustomDimAttributes
 содержит свойства и методы для работы с коллекцией атрибутов конструируемого
 справочника.


## Иерархия наследования


ICustomDimAttributes


## Комментарии


Для получения коллекции атрибутов используйте свойство [ICustomDimension.Attributes](../ICustomDimension/ICustomDimension.Attributes.htm).


Стандартными атрибутами справочника являются - [идентификатор](ICustomDimAttributes.Id.htm),
 [наименование](ICustomDimAttributes.Name.htm) и [порядок](ICustomDimAttributes.Order.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICustomDimAttributes.Count.htm)
		 Свойство Count возвращает
		 количество атрибутов в коллекции.


		 ![](../../Property_Image.gif)
		 [Id](ICustomDimAttributes.Id.htm)
		 Свойство Id определяет
		 атрибут с назначением «Идентификатор».


		 ![](../../Property_Image.gif)
		 [ImageIndex](ICustomDimAttributes.ImageIndex.htm)
		 Свойство ImageIndex
		 определяет атрибут с назначением «Пиктограмма элементов».


		 ![](../../Property_Image.gif)
		 [Item](ICustomDimAttributes.Item.htm)
		 Свойство Item возвращает
		 параметры указанного атрибута.


		 ![](../../Property_Image.gif)
		 [Name](ICustomDimAttributes.Name.htm)
		 Свойство Name определяет
		 атрибут с назначением «Наименование».


		 ![](../../Property_Image.gif)
		 [Order](ICustomDimAttributes.Order.htm)
		 Свойство Order определяет
		 атрибут с назначением «Порядок».


		 ![](../../Property_Image.gif)
		 [Orders](ICustomDimAttributes.Orders.htm)
		 Свойство Orders возвращает
		 коллекцию атрибутов, по которым будет производиться сортировка
		 элементов.


		 ![](../../Property_Image.gif)
		 [Primary](ICustomDimAttributes.Primary.htm)
		 Свойство Primary определяет
		 атрибут, являющийся первичным ключом справочника.


		 ![](../../Property_Image.gif)
		 [ReadAccess](ICustomDimAttributes.ReadAccess.htm)
		 Свойство ReadAccess
		 определяет атрибут, который используется для ограничения прав
		 на чтение значений по определенным элементам.


		 ![](../../Property_Image.gif)
		 [WriteAccess](ICustomDimAttributes.WriteAccess.htm)
		 Свойство WriteAccess
		 определяет атрибут, который используется для ограничения прав
		 на изменение значений по определенным элементам.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICustomDimAttributes.Add.htm)
		 Метод Add добавляет
		 атрибут в коллекцию и возвращает его параметры.


		 ![](../../Sub_Image.gif)
		 [Clear](ICustomDimAttributes.Clear.htm)
		 Метод Clear удаляет
		 все атрибуты из коллекции.


		 ![](../../Sub_Image.gif)
		 [FindById](ICustomDimAttributes.FindById.htm)
		 Метод FindById
		 осуществляет поиск атрибута по идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](ICustomDimAttributes.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск атрибута по ключу.


		 ![](../../Sub_Image.gif)
		 [Remove](ICustomDimAttributes.Remove.htm)
		 Метод Remove осуществляет
		 удаление атрибута по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](ICustomDimAttributes.RemoveByKey.htm)
		 Метод RemoveByKey осуществляет
		 удаление атрибута по ключу.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
