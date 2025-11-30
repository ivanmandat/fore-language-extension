# ICustomDimElements

ICustomDimElements
-


# ICustomDimElements


## Описание


Интерфейс ICustomDimElements
 содержит свойства и методы коллекции элементов конструируемого справочника.


## Комментарии


Коллекцию элементов возвращает свойство [ICustomDimension.Elements](../ICustomDimension/ICustomDimension.Elements.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeCount](ICustomDimElements.AttributeCount.htm)
		 Свойство AttributeCount
		 возвращает количество атрибутов, по которым могут быть заданы
		 значения для элементов.


		 ![](../../Property_Image.gif)
		 [AttributeValue](ICustomDimElements.AttributeValue.htm)
		 Свойство AttributeValue
		 определяет значение указанного атрибута для указанного элемента
		 справочника.


		 ![](../../Property_Image.gif)


		 [DisplayAttributeValue](ICustomDimElements.DisplayAttributeValue.htm)


		 Свойство DisplayAttributeValue
		 определяет отображаемое значение атрибута элемента.


		 ![](../../Property_Image.gif)


		 [DisplayAttributeValueByKey](ICustomDimElements.DisplayAttributeValueByKey.htm)


		 Свойство DisplayAttributeValueByKey
		 определяет отображаемое значение атрибута элемента по ключу
		 атрибута.


		 ![](../../Property_Image.gif)
		 [Include](ICustomDimElements.Include.htm)
		 Свойство Include определяет,
		 будет ли указанный элемент доступен в отметке в OLAP.


		 ![](../../Property_Image.gif)
		 [Owner](ICustomDimElements.Owner.htm)
		 Свойство Owner определяет
		 первичный ключ элемента-владельца для элемента, находящегося в
		 указанной строке.


		 ![](../../Property_Image.gif)
		 [RowCount](ICustomDimElements.RowCount.htm)
		 Свойство RowCount возвращает
		 число строк в соответствии с общим числом элементов в справочнике.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICustomDimElements.Add.htm)
		 Метод Add осуществляет
		 добавление нового элемента.


		 ![](../../Sub_Image.gif)
		 [Clear](ICustomDimElements.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех элементов справочника.


		 ![](../../Sub_Image.gif)
		 [Remove](ICustomDimElements.Remove.htm)
		 Метод Remove осуществляет
		 удаление указанного элемента со всеми дочерними элементами.


		 ![](../../Sub_Image.gif)
		 [RemoveAndMoveChildren](ICustomDimElements.RemoveAndMoveChildren.htm)
		 Метод RemoveAndMoveChildren
		 осуществляет удаление указанного элемента со смещение всех дочерних
		 элементов на одну строку вверх.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
