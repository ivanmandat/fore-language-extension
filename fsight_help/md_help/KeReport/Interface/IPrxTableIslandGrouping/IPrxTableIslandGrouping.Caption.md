# IPrxTableIslandGrouping.Caption

IPrxTableIslandGrouping.Caption
-


# IPrxTableIslandGrouping.Caption


## Синтаксис


Caption : [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Caption определяет
 заголовок группы.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Grs: IPrxTableIslandGroupings;

    Gr: IPrxTableIslandGrouping;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := Ti.Edit;

    Grs := TI.Groupings;

    Gr := Grs.Add;

    Gr.Field.FieldName := "ORDERS";

    Gr.Caption.AsString := "VALUE";

    Gr.Indent := 2;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для реляционной области данных будет создана
 группа и заданы ее параметры. «Report» - идентификатор регламентного отчета,
 на листе которого расположена реляционная область данных.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
