# CubeMetaUpdateAttributeRemappingType

CubeMetaUpdateAttributeRemappingType
-


# CubeMetaUpdateAttributeRemappingType


## Описание


Перечисление CubeMetaUpdateAttributeRemappingType
 содержит способы определения значения атрибута базы-копии.


Используется следующими свойствами и методами:


	- [ICubeMetaUpdateAttributeRemapping.Type](../Interface/ICubeMetaUpdateAttributeRemapping/ICubeMetaUpdateAttributeRemapping.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Source. Источником
		 данных для атрибута показателей базы-копии являются данные атрибута
		 показателей копируемой базы данных временных рядов.


		 1
		 Const_. Значением атрибута
		 показателей базы-копии является константа, заданная пользователем.


		 2
		 ValueSource. Источником
		 данных для атрибута наблюдения базы-копии являются данные атрибута
		 наблюдения из копируемой базы данных временных рядов.


		 3
		 ValueConst. Значением
		 атрибута наблюдения базы-копии является константа, заданная пользователем.


## Комментарии


Если источником данных атрибута-копии является атрибут из копируемой
 базы данных временных рядов, то он указывается в свойстве [ICubeMetaUpdateAttributeRemapping.Source](../Interface/ICubeMetaUpdateAttributeRemapping/ICubeMetaUpdateAttributeRemapping.Source.htm).


Если источником данных атрибута-копии является константа, то она указывается
 в свойстве [ICubeMetaUpdateAttributeRemapping.Value](../Interface/ICubeMetaUpdateAttributeRemapping/ICubeMetaUpdateAttributeRemapping.Value.htm).


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
