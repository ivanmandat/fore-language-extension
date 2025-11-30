# ITabRegions.FindByKey

ITabRegions.FindByKey
-


# ITabRegions.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITabRegion](../ITabRegion/ITabRegion.htm);


## Параметры


Key - ключ региона.


## Описание


Метод FindByKey осуществляет
 поиск региона, ключ которого передается посредством параметра Key.


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

	    Reg := Regs.FindByKey(9);

	    If Reg <> Null Then

	        s := Reg.Range.Address;

	    End If;

	End Sub UserProc;


После выполнения примера на активном листе регламентного отчета будет
 осуществлен поиск региона с ключом "9" и в случае удачного поиска
 в переменной "s" будет содержаться адрес диапазона, в котором
 расположен данный регион.


См. также:


[ITabRegions](ITabRegions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
