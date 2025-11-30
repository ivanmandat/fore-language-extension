# IPrxTableSources.Add

IPrxTableSources.Add
-


# IPrxTableSources.Add


## Синтаксис


Add([Value: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm)
 = Null]): [IPrxTableSource](../IPrxTableSource/IPrxTableSource.htm);


## Параметры


Value - добавляемый источник
 данных.


## Описание


Метод Add добавляет реляционный
 источник данных.


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

    TSources.Clear;

    TSource := TSources.Add;

    TSource.Dataset := MetabaseClass.Active.ItemById("Table").Bind As IDatasetModel;

    MObj.Save;

End Sub UserProc


После выполнения примера будет добавлен реляционный источник данных.
 «Report» - идентификатор регламентного отчета, «Table» - идентификатор
 таблицы.


См. также:


[IPrxTableSources](IPrxTableSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
