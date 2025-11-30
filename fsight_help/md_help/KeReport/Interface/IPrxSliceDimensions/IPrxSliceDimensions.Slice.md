# IPrxSliceDimensions.Slice

IPrxSliceDimensions.Slice
-


# IPrxSliceDimensions.Slice


## Синтаксис


Slice: [IPrxSlice](../IPrxSlice/IPrxSlice.htm);


## Описание


Свойство Slice возвращает объект-родитель.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Contr: IPrxControl;

    Slice: IPrxSlice;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Contr := Report.Controls.Item(0);

    Slice := Contr.Dimension.Dimensions.Slice;

    s := Slice.Name;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 среза, в котором находится измерение, находящееся под контролем первого
 элемента управления.


См. также:


[IPrxSliceDimensions](IPrxSliceDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
