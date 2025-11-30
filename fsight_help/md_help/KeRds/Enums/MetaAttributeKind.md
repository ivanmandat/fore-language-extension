# MetaAttributeKind

MetaAttributeKind
-


# MetaAttributeKind


## Описание


Перечисление MetaAttributeKind
 содержит типы атрибута системного справочника.


Используется следующими свойствами и методами:


	- [IMetaAttribute.Kind](../Interface/IMetaAttribute/IMetaAttribute.Kind.htm);


	- [IMetaAttributesSet.FindByKind](../Interface/IMetaAttributesSet/IMetaAttributesSet.FindByKind.htm);


	- [IMetaAttributesSet.FindByKindBasis](../Interface/IMetaAttributesSet/IMetaAttributesSet.FindByKindBasis.htm);


	- [IMetaAttributesSet.Predefined](../Interface/IMetaAttributesSet/IMetaAttributesSet.Predefined.htm);


	- [IMetaDataMembers.FindByKind](../Interface/IMetaDataMembers/IMetaDataMembers.FindByKind.htm);


	- [IRubricatorCreatorBinding.Kind](KeCubes.chm::/Interface/IRubricatorCreatorBinding/IRubricatorCreatorBinding.Kind.htm);


	- [IRubricatorFactorIO.FactDataKind](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataKind.htm);


	- [IRubricatorFactorIO.ValueKind](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueKind.htm).


## Допустимые значения


		 Значение


		 Краткое
		 описание


		 0
		 None. Тип не определен.


		 1
		 Common. Простой атрибут.


		 2
		 Reference. Атрибут
		 ссылочного типа.


		 4
		 Collection. Атрибут,
		 имеющий множественные значения.


		 8
		 Key. Ключ.


		 16
		 Index. Индекс для множественных
		 значений атрибута.


		 32
		 Base. Базовый атрибут.


		 64
		 Dimension. Ссылка на
		 справочник.


		 96
		 BaseDimension. Базовый
		 атрибут, являющийся ссылкой на справочник.


		 128
		 Revision. Ревизия.


		 256
		 Factor. Показатель.


		 512
		 CalendarLevel. Тип
		 иерархии в календаре.


		 1024
		 CalendarDate. Дата.


		 2048
		 Scenario. Сценарий.


		 4096
		 Unit. Единицы измерения.


		 8192
		 Value. Значение.


		 16384
		 Identity. Автоинкрементный
		 атрибут.


		 32768
		 Children. Дочерний
		 атрибут.


		 32772
		 ChildrenCollection.
		 Дочерний атрибут, имеющий множественные значения.


		 65536
		 Parent. Атрибут, имеющий
		 дочерние атрибуты.


		 65638
		 ParentReference. Атрибут
		 ссылочного типа, имеющий дочерние атрибуты.


		 131072
		 Name. Наименование.


		 139264
		 NameValue. Атрибут,
		 являющийся наиименованием или значением.


		 262144
		 Restricted. Атрибут,
		 который запрещено изменять.


		 524288
		 User. Пользователь.


		 1048576
		 Object. Объект.


		 2097152
		 Comment. Комментарий.


		 4194304
		 Mnemo. Мнемоника.


		 16777216
		 Version. Версия элемента
		 табличного справочника НСИ.


См. также:


[Перечисления сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
