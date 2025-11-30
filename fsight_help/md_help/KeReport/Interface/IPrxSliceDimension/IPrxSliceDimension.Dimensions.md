# IPrxSliceDimension.Dimensions

IPrxSliceDimension.Dimensions
-


# IPrxSliceDimension.Dimensions


## Синтаксис


Dimensions: [IPrxSliceDimensions](../IPrxSliceDimensions/IPrxSliceDimensions.htm);


## Описание


Свойство Dimensions возвращает
 объект-родитель.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Contr: IPrxControl;

    Dimens: IPrxSliceDimensions;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Contr := Report.Controls.Item(0);

    Dimens := Contr.Dimension.Dimensions;

    i := Dimens.Count;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 измерений среза, в котором находится измерение, находящееся под контролем
 первого элемента управления.


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
