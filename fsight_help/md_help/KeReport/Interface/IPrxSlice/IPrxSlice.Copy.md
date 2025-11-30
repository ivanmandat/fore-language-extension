# IPrxSlice.Copy

IPrxSlice.Copy
-


# IPrxSlice.Copy


## Синтаксис


Copy(Options: [PrxSliceCopyOptions](../../Enums/PrxSliceCopyOptions.htm)):[IPrxSlice](IPrxSlice.htm);


## Параметры


Options. Параметр копирования
 среза.


## Описание


Метод Copy возвращает объект,
 содержащий копию среза данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice, Slice1: IPrxSlice;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Slice1 := Slice.Copy(PrxSliceCopyOptions.All);

    MObj.Save;

End Sub UserProc;


После выполнения примера в переменной «Slice1» будет содержаться полная
 копия первого среза источника данных. Идентификатор регламентного отчета
 - «Report».


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
