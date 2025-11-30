# Комплексная отметка

Комплексная отметка
-


# Комплексная отметка


Справочники могут применяться во многих блоках платформы, но основное их назначение - организация измерений в кубах, базах данных временных рядов и т.д. Для работы с отметкой измерений используется комплексная отметка, реализуемая интерфейсом [IDimSelectionSet](../../interface/IDimSelectionSet/IDimSelectionSet.htm). Комплексная отметка представляет из себя коллекцию отметок отдельных измерений.


Для получения комплексной отметки объектов платформы реализованы различные свойства и методы. Для создания новой пустой комплексной отметки предназначен метод [CreateDimSelectionSet](../../interface/IDimSelectionSetFactory/IDimSelectionSetFactory.CreateDimSelectionSet.htm):


			Var

    SelSetFactory: IDimSelectionSetFactory;

    SelSet: IDimSelectionSet;

Begin

    SelSetFactory := New DimSelectionSetFactory.Create;

    SelSet := SelSetFactory.CreateDimSelectionSet;


После создания, используя соответствующие методы интерфейса [IDimSelectionSet](../../interface/IDimSelectionSet/IDimSelectionSet.htm), можно сформировать комплексную отметку по данным справочников и использовать там, где это необходимо.


См. также:


[Работа с отметкой справочника](KeDims_Selection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
