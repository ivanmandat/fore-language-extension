# ITabSheet.Regions

ITabSheet.Regions
-


# ITabSheet.Regions


## Синтаксис


Regions: [ITabRegions](../ITabRegions/ITabRegions.htm);


## Описание


Свойство Regions возвращает
 объект, содержащий коллекцию областей таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Reg: ITabRegions;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    Reg:=Tab.Regions;

	    i:=Reg.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 областей данных и формул регламентного отчета. Идентификатор регламентного
 отчета - «Reg_rep».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
