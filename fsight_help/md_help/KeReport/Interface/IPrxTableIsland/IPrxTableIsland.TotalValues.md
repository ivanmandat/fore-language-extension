# IPrxTableIsland.TotalValues

IPrxTableIsland.TotalValues
-


# IPrxTableIsland.TotalValues


## Синтаксис


TotalValues(GroupValues: Array): [IPrxTableIslandTotalValues](../IPrxTableIslandTotalValues/IPrxTableIslandTotalValues.htm);


## Параметры


GroupValues. Значения группы.


## Описание


Метод TotalValues используется
 для получения итоговых значений размещения в реляционной области данных.


## Комментарии


Для определения параметров размещения реляционной области данных
 используйте свойство [IPrxTableIsland.Layout](IPrxTableIsland.Layout.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT», содержащего реляционную область данных.


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report : IPrxReport;

    TabIs : IPrxTableIslands;

    TI : IPrxTableIsland;

    TV: IPrxTableIslandTotalValues;

    Valid: Boolean;

    Val: Variant;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.FindById("ITEM");

    TV:= TI.TotalValues("GENDER", "AGE");

    Valid := TV.IsValid;

        If Valid = True Then

        val:= TV.TotalValue(TI.Layout.Rows(0).Cells(1).LayoutCellId);

        Debug.WriteLine(val);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены итоговые
 значения размещения по группам «GENDER», «AGE».


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
