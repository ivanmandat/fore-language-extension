# MsMetaAttributeValueType

MsMetaAttributeValueType
-


# MsMetaAttributeValueType


## Описание


Перечисление MsMetaAttributeValueType
 используется для определения способа задания значения атрибута, на котором
 основана переменная.


Используется следующим свойством:


	- [IMsMetaAttributeValue.Kind](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.Kind.htm).


## Описание


		 Значение
		 Краткое описание


		 0
		 Value. Значение атрибута
		 указывается напрямую.


		 1
		 Parameter. Значение
		 атрибута указывается через параметр.


		 2
		 Unspecified. Значение
		 атрибута является неспецифицированным.


		 3
		 IgnoreSaving. Значение
		 атрибута, заданное в [IMsMetaAttributeValue.Value](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.Value.htm)
		 игнорируется, в базу данных будет выгружено значение, рассчитанное
		 по формуле модели.


### Комментарии


Для указания значения атрибута используйте свойство [IMsMetaAttributeValue.Value](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.Value.htm).
 В нем указывается непосредственно само значение атрибута (свойство [IMsMetaAttributeValue.IsParameter](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.IsParameter.htm) должно
 быть установлено в False) или
 идентификатор параметра, передающего значение (свойство [IMsMetaAttributeValue.IsParameter](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.IsParameter.htm)
 должно быть установлено в True).


Если значение атрибута является неспецифицированным, то оно берется
 из входных рядов модели, рассчитывающей переменную. Значение свойств [IMsMetaAttributeValue.Value](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.Value.htm) и [IMsMetaAttributeValue.IsParameter](../Interface/IMsMetaAttributeValue/IMsMetaAttributeValue.IsParameter.htm) игнорируется.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
