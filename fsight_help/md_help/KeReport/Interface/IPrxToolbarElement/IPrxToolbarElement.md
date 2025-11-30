# IPrxToolbarElement

IPrxToolbarElement
-


# IPrxToolbarElement


Сборка: Report;


## Описание


Интерфейс IPrxToolbarElement
 содержит базовые свойства элементов, отображаемых на панели инструментов.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IPrxToolbarElement


## Комментарии


В зависимости от [типа](IPrxToolbarElement.Type.htm) каждый
 элемент панели инструментов может быть приведён к одному из следующих
 интерфейсов:


	- [IPrxUserGroupElement](../IPrxUserGroupElement/IPrxUserGroupElement.htm)
	 - для работы с группой кнопок;


	- [IPrxUserButtonElement](../IPrxUserButtonElement/IPrxUserButtonElement.htm)
	 - для работы с пользовательской кнопкой;


	- [IPrxSystemButtonElement](../IPrxSystemButtonElement/IPrxSystemButtonElement.htm)
	 - для работы с системной кнопкой.


Разделители не имеются собственного интерфейса и описываются интерфейсом
 IPrxToolbarElement.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [NameVisible](IPrxToolbarElement.NameVisible.htm)
		 Свойство NameVisible
		 определяет признак отображения наименования кнопки.


		 ![](../../Property_Image.gif)
		 [Type](IPrxToolbarElement.Type.htm)
		 Свойство Type возвращает
		 тип элемента панели инструментов.


		 ![](../../Property_Image.gif)
		 [Visible](IPrxToolbarElement.Visible.htm)
		 Свойство Visible определяет
		 видимость элемента на панели инструментов.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
