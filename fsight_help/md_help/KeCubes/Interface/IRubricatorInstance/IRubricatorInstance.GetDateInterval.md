# IRubricatorInstance.GetDateInterval

IRubricatorInstance.GetDateInterval
-


# IRubricatorInstance.GetDateInterval


## Синтаксис


GetDateInterval(Var From_:DateTime; Var To_:DateTime): Boolean;


## Параметры


From_. Переменная, возвращающая минимальную дату.


To_. Переменная, возвращающая максимальную дату.


## Описание


Метод GetDateInterval возвращает минимальную и максимальную даты, на которые присутствуют данные в базе данных временных рядов.


## Комментарии


GetDateInterval возвращает False, если в базе данных временных рядов нет данных, либо последняя ревизия каждой точки данных удалена; в остальных случаях метод возвращает значение True.


В качестве параметров From_ и To_ необходимо указывать только переменные. Указание констант недопустимо.


## Пример


Для выполнения примера предполагается наличие базы данных временных рядов с идентификатором «OBJ_RUBRICATOR». Также необходимо добавить ссылки на системные сборки «Cubes» и «Metabase».


			    Sub UserProc;

    Var

        mb: IMetabase;

        Rub: IRubricator;

        RubI: IRubricatorInstance;

        dateFrom: DateTime;

        dateTo: DateTime;

    Begin

        mb := MetabaseClass.Active;

        Rub := mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

        RubI := (Rub As IMetabaseObject).Open(Null) As IRubricatorInstance;

        If RubI.GetDateInterval(dateFrom, dateTo) Then

            Debug.WriteLine("С: " + dateFrom.ToShortDateString + " По: " + dateTo.ToShortDateString);

        End If;

    End Sub UserProc;


После выполнения примера в окно консоли будут выведены минимальная и максимальная даты, на которые присутствуют данные в базе данных временных рядов.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
