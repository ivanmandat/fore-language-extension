# IPrxSlice.Selection

IPrxSlice.Selection
-


# IPrxSlice.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 объект, содержащий отметку среза. Отметка среза включает в себя отметки
 всех измерений.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

    Slices: IPrxSlices;

    Slice: IPrxSlice;

    Selection: IDimSelectionSet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Bind;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    Slices := DtSources.Item(0).Slices;

    Slice := Slices.Item(0);

    Selection := Slice.Selection;

End Sub UserProc;


После выполнения примера в переменной «Selection» будет содержаться
 отметка первого среза первого источника данных регламентного отчета. Идентификатор
 регламентного отчета - «Report».


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
