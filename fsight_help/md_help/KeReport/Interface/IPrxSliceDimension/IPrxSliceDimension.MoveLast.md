# IPrxSliceDimension.MoveLast

IPrxSliceDimension.MoveLast
-


# IPrxSliceDimension.MoveLast


## Синтаксис


MoveLast(Disposition: [PrxHeaderDisposition](../../Enums/PrxHeaderDisposition.htm));


## Параметры


Disposition - заголовок среза.


## Описание


Метод MoveLast осуществляет
 перемещение измерения в последнюю позицию указанного заголовка среза.
 Заголовок среза передается посредством параметра Disposition.


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

    SliceDim := SliceDims.Item(0);

    SliceDim.MoveLase(PrxHeaderDisposition.Fixed);

    MObj.Save;

End Sub UserProc;


После выполнения примера первое измерение первого среза источника данных
 будет перемещено на последнюю позицию в группе «Фиксированные». Идентификатор
 регламентного отчета - «Report».


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
