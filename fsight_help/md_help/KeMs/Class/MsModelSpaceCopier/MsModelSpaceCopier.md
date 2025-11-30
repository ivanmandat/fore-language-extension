# MsModelSpaceCopier

MsModelSpaceCopier
-


# MsModelSpaceCopier


## Описание


Класс MsModelSpaceCopier предназначен для копирования контейнера моделирования.


## Комментарии


Копирование недоступно для контейнера моделирования, если он является дочерним объектом базы данных временных рядов. Также копирование невозможно в уже существующие контейнеры моделирования. Таким образом, для копирования должен быть создан новый контейнер.


## Свойства класса, унаследованные от [IMsModelSpaceCopier](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DestinationModelSpace](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.DestinationModelSpace.htm)


		 Свойство DestinationModelSpace
		 определяет результирующий контейнер моделирования.


		 ![](../../Property_Image.gif)
		 [SourceModelSpace](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.SourceModelSpace.htm)


		 Свойство SourceModelSpace определяет
		 исходный контейнер моделирования.


		 ![](../../Property_Image.gif)
		 [WithObjects](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.WithObjects.htm)


		 Свойство WithObjects определяет,
		 копировать ли контейнер моделирования с вложенными объектами.


		 ![](../../Property_Image.gif)
		 [WithObjectsData](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.WithObjectsData.htm)


		 Свойство WithObjectsData определяет,
		 копировать ли контейнер моделирования вместе с данными переменных.


## Методы класса, унаследованные от [IMsModelSpaceCopier](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Copy](../../Interface/IMsModelSpaceCopier/IMsModelSpaceCopier.Copy.htm)


		 Метод Copy выполняет
		 копирование контейнера моделирования.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
