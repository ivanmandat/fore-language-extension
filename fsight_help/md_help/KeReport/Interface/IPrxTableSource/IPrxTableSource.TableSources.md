# IPrxTableSource.TableSources

IPrxTableSource.TableSources
-


# IPrxTableSource.TableSources


## Синтаксис


TableSources: [IPrxTableSources](../IPrxTableSources/IPrxTableSources.htm);


## Описание


Свойство TableSources возвращает
 коллекцию реляционных источников данных.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TSources: IPrxTableSources;

    TSource: IPrxTableSource;

    Count: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TSources := Report.TableSources;

    TSource := TSources.Item(0);

    Count := TSource.TableSources.Count;

    Debug.WriteLine(Count.ToString);

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество реляционных
 источников данных в регламентном отчете. «Report» - идентификатор регламентного
 отчета.


См. также:


[IPrxTableSource](IPrxTableSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
