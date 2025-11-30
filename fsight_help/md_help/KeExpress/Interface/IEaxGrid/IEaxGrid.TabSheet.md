# IEaxGrid.TabSheet

IEaxGrid.TabSheet
-


# IEaxGrid.TabSheet


## Синтаксис


TabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm);


## Описание


Свойство TabSheet возвращает
 объект, содержащий параметры элементов таблицы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    TabSheet: ITabSheet;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    TabSheet := Grid.TabSheet;

	End Sub UserProc;


После выполнения примера в переменной «TabSheet» будут содержаться параметры
 элементов таблицы. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
