# IVirtualCubeDimensionFix.ForcedCommonElemToFill

IVirtualCubeDimensionFix.ForcedCommonElemToFill
-


# IVirtualCubeDimensionFix.ForcedCommonElemToFill


## Синтаксис


		ForcedCommonElemToFill: Integer;


## Описание


Свойство ForcedCommonElemToFill
 определяет элемент частного измерения, заполняемый данными из источника
 без этого измерения.


## Комментарии


При выполнении принудительного переноса частного измерения в общие для
 источника, в котором это измерение отсутствует, данные будут располагаться
 в элементе ForcedCommonElemToFill
 переносимого измерения. Если задать свойству значение «-1», то данные
 из источника будут отображаться во всех элементах переносимого измерения.


Для принудительного переноса частного измерения в общие используйте
 свойство [IVirtualCubeDimensionFix.ForcedCommon](IVirtualCubeDimensionFix.ForcedCommon.htm).


См. также:


[IVirtualCubeDimensionFix](IVirtualCubeDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
