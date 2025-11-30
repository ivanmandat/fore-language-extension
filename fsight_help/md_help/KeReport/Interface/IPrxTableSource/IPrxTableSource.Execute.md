# IPrxTableSource.Execute

IPrxTableSource.Execute
-


# IPrxTableSource.Execute


## Синтаксис


Execute([Options: Integer = 0]): [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


Options - параметр зарезервирован,
 на данный момент не используется.


## Описание


Метод Execute позволяет извлечь
 данные из реляционного источника.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TSources: IPrxTableSources;

    TSource: IPrxTableSource;

    DS: IDalCursor;

    Name: String;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TSources := Report.TableSources;

    TSource := TSources.Item(0);

    DS := TSource.Execute;

    Name := DS.Fields.Item(0).Name;

    Debug.WriteLine(Name);

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 поля таблицы, которая является реляционным источником в регламентном отчете.
 «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableSource](IPrxTableSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
