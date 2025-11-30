# FlexLayout.Position

FlexLayout.Position
-


# FlexLayout.Position


## Синтаксис


Position: Object


## Описание


Свойство Position устанавливает
 параметры размещения элементов в контейнере.


## Комментарии


В значении свойства задается JSON-объект со следующими полями:


	- Pack. Вертикальное расположение
	 объекта, элемент перечисления [FlexLayoutPack](dhtmlCommon.chm::/Enums/FlexLayoutPack.htm);


	- Align. Выравнивание
	 элементов в контейнере, элемент перечисления [FlexLayoutAlign](dhtmlCommon.chm::/Enums/FlexLayoutAlign.htm);


	- Flex. Гибкость расположения
	 элементов контейнера, элемент перечисления [FlexLayoutFlex](dhtmlCommon.chm::/Enums/FlexLayoutFlex.htm).


Значение свойства устанавливается из JSON и с помощью метода setPosition,
 а возвращается с помощью метода getPosition.


Нельзя одновременно задавать больше двух типов расположения. Нельзя
 совмещать Pack и Flex.


## Пример


Пример использования свойства приведен на странице «[Пример
 создания компонента FlexLayout](../../Components/FlexLayout/Example_FlexLayout.htm)».


См. также:


[FlexLayout](FlexLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
