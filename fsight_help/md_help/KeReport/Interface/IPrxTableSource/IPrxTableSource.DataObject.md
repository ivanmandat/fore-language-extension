# IPrxTableSource.DataObject

IPrxTableSource.DataObject
-


# IPrxTableSource.DataObject


## Синтаксис


DataObject: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство DataObject возвращает
 объект репозитория, соответствующий данному реляционному источнику данных.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT.


			Sub UserProc;

Var

    MB: IMetabase;

    Rep: IPrxReport;

    TSs: IPrxTableSources;

    TS: IPrxTableSource;

Begin

    MB := MetabaseClass.Active;

    Rep := MB.ItemById("REPORT").Bind As IPrxReport;

    TSs := Rep.TableSources;

    For Each TS In TSs Do

        Debug.WriteLine(TS.DataObject.Id);

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 идентификаторов объектов репозитория, являющихся реляционными источниками
 данных в регламентном отчете.


См. также:


[IPrxTableSource](IPrxTableSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
