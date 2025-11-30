# ICubeSelectionControl.FindByParam

ICubeSelectionControl.FindByParam
-


# ICubeSelectionControl.FindByParam


## Синтаксис


FindByParam(


ControlledParam: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


[IsDimension: Boolean
 = True];


[ControlledOwner: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null]): [ICubeSelectionControlItem](../ICubeSelectionControlItem/ICubeSelectionControlItem.htm);


## Параметры


ControlledParam. Параметр куба.


IsDimension. Признак того,
 что управляющее измерение является измерением куба. Необязательный параметр,
 значение по умолчанию True - управляющее
 измерение является измерением куба.


ControlledOwner. Объект-владелец
 управляющего измерения. Необязательный параметр, по умолчанию не определен.


## Описание


Метод FindByParam осуществляет
 поиск управляющего измерения в коллекции по параметру и объекту-владельцу.


См. также:


[ICubeSelectionControl](ICubeSelectionControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
