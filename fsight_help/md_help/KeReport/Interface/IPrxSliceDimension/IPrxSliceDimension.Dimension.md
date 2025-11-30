# IPrxSliceDimension.Dimension

IPrxSliceDimension.Dimension
-


# IPrxSliceDimension.Dimension


## Синтаксис


Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство Dimension возвращает
 данные измерения среза источника данных регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    SliceDims: IPrxSliceDimensions;

    SliceDim: IPrxSliceDimension;

    DimInst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    SliceDims := Slices.Item(0).Dimensions;

    SliceDim := SliceDims.Item(0);

    DimInst := SliceDim.Dimension;

End Sub UserProc;


После выполнения примера в переменной «DimInst» будет содержаться массив
 данных первого измерения первого среза источника данных регламентного
 отчета. Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
