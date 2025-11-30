# ICubeSelectionControl.FindByParamO

ICubeSelectionControl.FindByParamO
-


# ICubeSelectionControl.FindByParamO


## Синтаксис


FindByParamO(


ControlledParam: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


[IsDimension: Boolean
 = True];


[ControlledOwnerKey:
 Integer = -1]): [ICubeSelectionControlItem](../ICubeSelectionControlItem/ICubeSelectionControlItem.htm);


## Параметры


ControlledParam. Параметр куба.


IsDimension. Признак того,
 что управляющее измерение является измерением куба. Необязательный параметр,
 значение по умолчанию True - управляющее
 измерение является измерением куба.


ControlledOwnerKey. Ключ объекта-владельца
 управляющего измерения. Необязательный параметр, по умолчанию не определен.


## Описание


Метод FindByParamO осуществляет
 поиск измерения в коллекции по параметру и по ключу объекта-владельца.


См. также:


[ICubeSelectionControl](ICubeSelectionControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
