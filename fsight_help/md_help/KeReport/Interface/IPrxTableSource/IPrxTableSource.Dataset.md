# IPrxTableSource.Dataset

IPrxTableSource.Dataset
-


# IPrxTableSource.Dataset


## Синтаксис


Dataset : [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Dataset определяет
 реляционный источник данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TSources: IPrxTableSources;

    TSource: IPrxTableSource;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TSources := Report.TableSources;

    TSource := TSources.Add;

    TSource.Dataset := MetabaseClass.Active.ItemById("TABLE").Bind As IDatasetModel;

    TSource.Name := "TableSource";

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будет добавлен реляционный источник
 данных. «Report» - идентификатор регламентного отчета, «Table» - идентификатор
 таблицы.


См. также:


[IPrxTableSource](IPrxTableSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
