# IRdsParamsControl.ValueSelect

IRdsParamsControl.ValueSelect
-


# IRdsParamsControl.ValueSelect


## Синтаксис


ValueSelect(Param:
 [IRdsParam](../IRdsParam/IRdsParam.htm)): [RdsParamsControlValueSelect](../../Enums/RdsParamsControlValueSelect.htm);


## Параметры


Param. Параметр связанного
 справочника, для которого необходимо привязать значение параметра к значениям
 атрибута редактируемого справочника.


## Описание


Свойство ValueSelect определяет
 алгоритм выбора значения атрибута при множественной отметке для [привязки](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link_Property.htm#add)
 значений атрибута редактируемого справочника к параметру связываемого
 справочника.


## Комментарии


Привязка параметра связываемого справочника к значениям атрибута редактируемого
 справочника позволяет при изменении значения атрибута менять и значение
 параметра в связываемом справочнике. Алгоритм выбора значения при множественной
 отметке определяет значение, которое будет передаваться в параметр: все
 значения, первое значение, последнее значение.


Для получения подробной информации обратитесь к разделу «[Создание
 привязки](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link_Property.htm#add)».


## Пример


Использование свойства приведено в примере для [IRdsParamsControl.ParamAttribute](IRdsParamsControl.ParamAttribute.htm).


См. также:


[IRdsParamsControl](IRdsParamsControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
