# ICalendarDimAttributes.Name

ICalendarDimAttributes.Name
-


# ICalendarDimAttributes.Name


## Синтаксис


Name: [ICalendarDimAttribute](../ICalendarDimAttribute/ICalendarDimAttribute.htm);


## Описание


Свойство Name определяет пользовательский атрибут, который будет использоваться для формирования наименования элементов справочника.


## Комментарии


Для формирования наименований элементов можно использовать любой пользовательский атрибут. Для этого его необходимо установить в данном свойстве.


Если необходимо отменить использование какого-либо атрибута в качестве атрибута для формирования наименований элементов, то в данном свойстве необходимо установить значение Null.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    UserAttrs: ICalendarDimAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim := MObj As ICalendarDimension;

	    UserAttrs := CalDim.Attributes;

	    UserAttrs.Name := CalDim.Attributes.Item(CalDim.Attributes.Count - 1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, при построении календарного справочника, для формирования наименований элементов будет использоваться последний пользовательский атрибут.


См. также:


[ICalendarDimAttributes](ICalendarDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
