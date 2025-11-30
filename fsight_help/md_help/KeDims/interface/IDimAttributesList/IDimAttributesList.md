# IDimAttributesList

IDimAttributesList
-


# IDimAttributesList


Сборка: Dimensions;


## Описание


Интерфейс IDimAttributesList
 предназначен для работы со списком атрибутов, используемых для каких-либо
 действий.


## Иерархия наследования


IDimAttributesList


## Комментарии


Заполняемый список атрибутов используется при [поиске
 элементов](IDimAttributesList.Probe.htm) в различных справочниках репозитория, а также при настройке
 вида отображения [наименований
 элементов](KeMs.chm::/Interface/IMsFormulaTransform/IMsFormulaTransform.NamingAttributes.htm) в формулах.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IDimAttributesList.Attributes.htm)
		 Свойство Attributes
		 определяет список атрибутов, по которым будет производиться поиск
		 в виде символьной строки.


		 ![](../../Property_Image.gif)
		 [Count](IDimAttributesList.Count.htm)
		 Свойство Count возвращает
		 количество атрибутов в коллекции.


		 ![](../../Property_Image.gif)
		 [Dimension](IDimAttributesList.Dimension.htm)
		 Свойство Dimension
		 определяет справочник, из атрибутов которого строится данная коллекция.


		 ![](../../Property_Image.gif)
		 [Item](IDimAttributesList.Item.htm)
		 Свойство Item возвращает
		 параметры атрибута, добавленного в коллекцию.


		 ![](../../Property_Image.gif)
		 [Probe](IDimAttributesList.Probe.htm)
		 Свойство Probe возвращает
		 коллекцию атрибутов, реализуемую интерфейсом [IDimAttributeProbe](../IDimAttributeProbe/IDimAttributeProbe.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IDimAttributesList.Add.htm)
		 Метод Add осуществляет
		 добавление указанного атрибута в коллекцию.


		 ![](../../Sub_Image.gif)
		 [FindById](IDimAttributesList.FindById.htm)
		 Метод FindById осуществляет
		 поиск атрибута в коллекции по идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IDimAttributesList.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск атрибута в коллекции по ключу.


		 ![](../../Sub_Image.gif)
		 [Remove](IDimAttributesList.Remove.htm)
		 Метод Remove осуществляет
		 удаление атрибута из коллекции по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IDimAttributesList.RemoveByKey.htm)
		 Метод RemoveByKey осуществляет
		 удаление атрибута из коллекции по ключу.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
