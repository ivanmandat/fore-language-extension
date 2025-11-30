# IPrxSliceDimension.MoveFirst

IPrxSliceDimension.MoveFirst
-


# IPrxSliceDimension.MoveFirst


## Синтаксис


MoveFirst(Disposition: [PrxHeaderDisposition](../../Enums/PrxHeaderDisposition.htm));


## Параметры


Disposition - заголовок среза.


## Описание


Метод MoveFirst осуществляет
 перемещение измерения в первую позицию указанного заголовка среза. Заголовок
 среза передается посредством параметра Disposition.


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

    SliceDim.MoveFirst(PrxHeaderDisposition.Fixed);

    MObj.Save;

End Sub UserProc;


После выполнения примера последнее измерение первого среза источника
 данных будет перемещено на первую позицию в группе «Фиксированные». Идентификатор
 регламентного отчета - «Report».


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
