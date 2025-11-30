# ICustomDimTree

ICustomDimTree
-


# ICustomDimTree


## Описание


Интерфейс ICustomDimTree содержит
 свойства и методы для работы с элементами конструируемого справочника,
 представленными в виде дерева.


## Комментарии


Элементы справочника в виде дерева возвращает свойство [ICustomDimension.Tree](../ICustomDimension/ICustomDimension.Tree.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeValue](ICustomDimTree.AttributeValue.htm)
		 Свойство AttributeValue
		 для указанного элемента измерения фактов определяет значение по
		 указанному атрибуту.


		 ![](../../Property_Image.gif)
		 [Children](ICustomDimTree.Children.htm)
		 Свойство Children возвращает
		 для указанного элемента список дочерних элементов.


		 ![](../../Property_Image.gif)
		 [Include](ICustomDimTree.Include.htm)
		 Свойство Include определяет,
		 будет ли доступен указанный элемент в отметке в OLAP.


		 ![](../../Property_Image.gif)
		 [Name](ICustomDimTree.Name.htm)
		 Свойство Name определяет
		 наименование для элемента с указанным ключом.


		 ![](../../Property_Image.gif)
		 [Owner](ICustomDimTree.Owner.htm)
		 Свойство Owner определяет
		 первичный ключ элемента-владельца для указанного элемента.


		 ![](../../Property_Image.gif)
		 [RootChildren](ICustomDimTree.RootChildren.htm)
		 Свойство RootChildren
		 возвращает список корневых элементов дерева.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](ICustomDimTree.Add.htm)
		 Метод Add осуществляет
		 добавление нового элемента и возвращает его первичный ключ.


		 ![](../../Sub_Image.gif)
		 [MoveAfter](ICustomDimTree.MoveAfter.htm)
		 Метод MoveAfter помещает
		 элемент с первичным ключом PrimaryKey
		 после элемента с ключом Element.


		 ![](../../Sub_Image.gif)
		 [MoveBefore](ICustomDimTree.MoveBefore.htm)
		 Метод MoveBefore помещает
		 элемент с первичным ключом PrimaryKey
		 перед элементом с ключом Element.


		 ![](../../Sub_Image.gif)
		 [Remove](ICustomDimTree.Remove.htm)
		 Метод Remove осуществляет
		 удаление элемента с указанным первичным ключом.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
