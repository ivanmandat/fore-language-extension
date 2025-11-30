# IStandardCubeFactBinding.ReadOnly

IStandardCubeFactBinding.ReadOnly
-


# IStandardCubeFactBinding.ReadOnly


## Синтаксис


ReadOnly: Boolean;


## Описание


Свойство ReadOnly возвращает
 признак доступности данных факта куба только для чтения.


## Комментарии


Для фактов, [связанных
 с данными](../IStandardCubeDestination/IStandardCubeDestination.FactBindings.htm), свойство всегда возвращает значение True.


Для вычисляемых фактов свойство возвращает True,
 если не задано свойство [IStandardCubeFactBinding.ReverseFactKey](IStandardCubeFactBinding.ReverseFactKey.htm),
 иначе - False.


См. также:


[IStandardCubeFactBinding](IStandardCubeFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
