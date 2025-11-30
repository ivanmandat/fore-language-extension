# IDmTemplateFillDetails.FillTarget

IDmTemplateFillDetails.FillTarget
-


# IDmTemplateFillDetails.FillTarget


## Синтаксис


FillTarget;


## Описание


Метод FillTarget выполняет
 выгрузку результатов заполнения пропусков в источник данных.


## Комментарии


Выгрузка результатов возможна только после расчёта метода.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором DATAMINING_DATA. Таблица должна состоять из нескольких
 столбцов, содержащих только числовые значения. В последнем столбце должна
 отсутствовать часть значений.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    mb: IMetabase;

    TableDS: IDmTableDataSource;

    Method: IDmMethod;

    BackProp: IDmBackPropagation;

    i: Integer;

    Attrs: Array Of Integer;

Begin

    mb := MetabaseClass.Active;

    // Создаем табличный источник данных

    TableDS := (New TableDataSource.Create) As IDmTableDataSource;

    // Указываем таблицу-источник

    TableDS.Table := mb.ItemByID("DATAMINING_DATA").Bind;

    // Создаем метод расчёта

    Method := (New DataMiningMethod.Create) As IDmMethod;

    // Указываем тип метода

    Method.Kind := DmMethodKind.BackPropagation;

    // Задаем входной источник данных

    Method.InputDataSource := TableDS;

    // Задаем приёмник данных

    Method.OutputDataSource := TableDS;

    // Настраиваем параметры метода расчёта

    BackProp := Method.Details As IDmBackPropagation;

    // Указываем столбец для анализа

    BackProp.Target := TableDS.FieldCount - 1;

    // Задаем факторы, влияющие на анализ

    Attrs := New Integer[TableDS.FieldCount - 2];

    For i := 0 To Attrs.Length - 1 Do

        Attrs[i] := i + 1;

    End For;

    BackProp.Attributes := Attrs;

    // Выполняем анализ

    Method.Execute;

    // Проверяем, доступна ли выгрузка результатов

    If TableDS.ReadOnly = False Then

        // Выгружаем результаты в таблицу-источник

        BackProp.FillTarget;

        TableDS.Save;

    Else

        // Выводим сообщение, что выгрузка недоступна

        Debug.WriteLine("Источник доступен только для чтения. " +

            "Сохранение результатов в источник недоступно." );

    End If;

End Sub UserProc;


В результате выполнения примера в таблице DATAMINING_DATA в последнем
 столбце будет выполнено заполнение пропусков с помощью сети обратного
 распространения. Результаты заполнения будут выгружены в исходную таблицу.


См. также:


[IDmTemplateFillDetails](IDmTemplateFillDetails.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
