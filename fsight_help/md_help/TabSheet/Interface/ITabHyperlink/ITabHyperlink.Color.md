# ITabHyperlink.Color

ITabHyperlink.Color
-


# ITabHyperlink.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 гиперссылки в ячейке.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Hyperlink: ITabHyperlink;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("Reg_rep").Edit;

	    Rep:=MObj As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    Range:=Tab.Cell(0,0);

	    Hyperlink:=Range.Style.Hyperlink;

	    Hyperlink.Color:=GxColor.FromName("Red");

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для гиперссылки в ячейке «А0», активного листа
 регламентного отчета, будет установлен красный цвет.


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
