# ITabRegions.Item

ITabRegions.Item
-


# ITabRegions.Item


## Синтаксис


Item(Index: Integer): [ITabRegion](../ITabRegion/ITabRegion.htm);


## Параметры


Index — индекс
 региона в коллекции регионов таблицы, который необходимо получить.


## Описание


Свойство Item возвращает регион,
 индекс которого передается в качестве входного параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Regs: ITabRegions;

	    Reg: ITabRegion;

	    s: String;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Regs := Rep.ActiveSheet.Table.Regions;

	    If Regs.Count <> 0 Then

	        Reg := Regs.Item(0);

	        i := Reg.Key;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной "i" будет содержаться
 ключ первого региона активного листа регламентного отчета.


См. также:


[ITabRegions](ITabRegions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
