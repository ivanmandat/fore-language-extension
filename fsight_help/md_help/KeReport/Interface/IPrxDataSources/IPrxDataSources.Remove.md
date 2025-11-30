# IPrxDataSources.Remove

IPrxDataSources.Remove
-


# IPrxDataSources.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс источника данных.


## Описание


Метод Remove осуществляет удаление
 источника данных по его индексу.


## Комментарии


Метод возвращает True в случае
 удачного удаления.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DtSources: IPrxDataSources;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    DtSources := Report.DataSources;

    If DtSources.Remove(0) Then

        Debug.WriteLine("Remove");

        Else Debug.WriteLine("Don't remove");

    End If;

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено сообщение, удалён
 ли выбранный источник данных.


См. также:


[IPrxDataSources](IPrxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
