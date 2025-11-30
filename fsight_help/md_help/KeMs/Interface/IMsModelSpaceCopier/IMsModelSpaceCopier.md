# IMsModelSpaceCopier

IMsModelSpaceCopier
-


# IMsModelSpaceCopier


## Описание


Интерфейс IMsModelSpaceCopier
 предназначен для копирования контейнера моделирования.


## Комментарии


Копирование недоступно для контейнера моделирования, если он является
 дочерним объектом базы данных временных рядов. Также копирование невозможно
 в уже существующие контейнеры моделирования. Таким образом, для копирования
 должен быть создан новый контейнер.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DestinationModelSpace](IMsModelSpaceCopier.DestinationModelSpace.htm)


		 Свойство DestinationModelSpace
		 определяет результирующий контейнер моделирования.


		 ![](../../Property_Image.gif)
		 [SourceModelSpace](IMsModelSpaceCopier.SourceModelSpace.htm)


		 Свойство SourceModelSpace определяет
		 исходный контейнер моделирования.


		 ![](../../Property_Image.gif)
		 [WithObjects](IMsModelSpaceCopier.WithObjects.htm)


		 Свойство WithObjects определяет,
		 копировать ли контейнер моделирования с вложенными объектами.


		 ![](../../Property_Image.gif)
		 [WithObjectsData](IMsModelSpaceCopier.WithObjectsData.htm)


		 Свойство WithObjectsData определяет,
		 копировать ли контейнер моделирования вместе с данными переменных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Copy](IMsModelSpaceCopier.Copy.htm)


		 Метод Copy выполняет
		 копирование контейнера моделирования.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
