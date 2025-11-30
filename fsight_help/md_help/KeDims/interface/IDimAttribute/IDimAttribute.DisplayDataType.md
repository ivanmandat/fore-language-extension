# IDimAttribute.DisplayDataType

IDimAttribute.DisplayDataType
-


# IDimAttribute.DisplayDataType


## Синтаксис


DisplayDataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DisplayDataType возвращает
 тип отображаемого значения атрибута.


## Комментарии


Данное свойство актуально для атрибутов, имеющих тип Дата
 (Свойство [DataType](IDimAttribute.DataType.htm) = [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm)).
 В справочниках НСИ присутствует возможность создания атрибутов, имеющих
 тип Дата без времени ([DbDataType.Date](Dal.chm::/Enums/DbDataType.htm)).
 Фактически значения таких атрибутов хранятся вместе со временем и свойство
 [DataType](IDimAttribute.DataType.htm) также вернет значение
 [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm).
 Данное свойство позволяет определить тип, с которым значения будут отображаться
 в визуальных компонентах: [DbDataType.Date](Dal.chm::/Enums/DbDataType.htm),
 либо [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm).


Для атрибутов, имеющих другой тип данных, данное свойство возвращает
 значение совпадающее со значением свойства [DataType](IDimAttribute.DataType.htm).


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
