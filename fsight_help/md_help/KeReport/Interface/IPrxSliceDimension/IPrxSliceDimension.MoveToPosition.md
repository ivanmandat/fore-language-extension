# IPrxSliceDimension.MoveToPosition

IPrxSliceDimension.MoveToPosition
-


# IPrxSliceDimension.MoveToPosition


## Синтаксис


MoveToPosition(Disposition: [PrxHeaderDisposition](../../Enums/PrxHeaderDisposition.htm);
 Position: Integer);


## Параметры


Disposition - заголовок среза.


Position - позиция измерения
 в заголовке среза.


## Описание


Метод MoveToPosition осуществляет
 перемещение измерения в указанную позицию заголовка среза. Заголовок и
 позиция передается посредством параметра Disposition
 и Position, соответственно.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    SliceDims: IPrxSliceDimensions;

    SliceDim: IPrxSliceDimension;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    SliceDims := Slices.Item(0).Dimensions;

    SliceDim := SliceDims.Item(SliceDims.Count - 1);

    SliceDim.MoveToPosition(PrxHeaderDisposition.Fixed, 2);

    MObj.Save;

End Sub UserProc;


После выполнения примера последнее измерение первого среза источника
 данных будет перемещено на третью позицию в группе «Фиксированные». Идентификатор
 регламентного отчета - «Report».


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
