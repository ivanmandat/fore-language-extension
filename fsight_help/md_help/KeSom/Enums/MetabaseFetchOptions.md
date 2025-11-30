# MetabaseFetchOptions

MetabaseFetchOptions
-


# MetabaseFetchOptions


## Описание


Перечисление MetabaseFetchOptions
 содержит варианты чтения объектов метабазы при [отложенной
 загрузке описания](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm).


Используется следующими свойствами и методами:


	- [IMetabase.FetchItem](../Interface/IMetabase/IMetabase.FetchItem.htm);


	- [IMetabase.FetchItemById](../Interface/IMetabase/IMetabase.FetchItemById.htm);


	- [IMetabase.FetchItems](../Interface/IMetabase/IMetabase.FetchItems.htm);


	- [IMetabase.FetchItemsById](../Interface/IMetabase/IMetabase.FetchItemsById.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Читается только
		 объект. Значение по умолчанию.


		 1
		 NoFetch. Чтение объектов
		 только из памяти.


		 2
		 Parent. Чтение
		 объектов вместе с родительскими.


		 4
		 ParentRec. Чтение
		 объектов вместе с родительскими (рекурсивное).


		 8
		 Children. Чтение объектов
		 вместе с дочерними.


		 16
		 ChildrenRec. Чтение
		 объектов вместе с дочерними (рекурсивное).


		 32
		 Dependencies. Чтение
		 объектов вместе с теми, от которых они зависят.


		 64
		 DependenciesRec. Чтение
		 объектов месте с теми, от которых они зависят (рекурсивное).


		 128
		 Dependents. Чтение
		 объектов вместе с теми, которые от них зависят.


		 256
		 DependentsRec.
		 Чтение объектов вместе с теми, которые от них зависят.


		 512
		 HasChildren.
		 Чтение объектов вместе с подсчётом количества дочерних объектов.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
