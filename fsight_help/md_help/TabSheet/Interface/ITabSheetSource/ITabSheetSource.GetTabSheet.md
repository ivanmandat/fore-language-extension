# ITabSheetSource.GetTabSheet

ITabSheetSource.GetTabSheet
-


# ITabSheetSource.GetTabSheet


## Синтаксис


GetTabSheet: [ITabSheet](../ITabSheet/ITabSheet.htm);


## Описание


Метод GetTabSheet возвращает
 электронную таблицу, для которой используется источник данных.


## Пример


	Sub UserProc;

	Var

	    Tab: ITabSheet;

	Begin

	    Tab:=(UiTabSheet1 As ITabSheetSource).GetTabSheet;

	    Tab.Clear;

	End Sub UserProc;


После выполнения примера таблица, для которой источником данных является
 «UiTabSheet1», будет очищена.


См. также:


[ITabSheetSource](ITabSheetSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
