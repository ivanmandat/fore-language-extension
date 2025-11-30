# IPivot.GroupElement

IPivot.GroupElement
-


# IPivot.GroupElement


## Синтаксис


GroupElement(Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);
 El: Integer);


## Параметры


Dimension. Дополнительное измерение
 «Поля источника», полученное в
 результате [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation) в реляционные
 данные;


El. Индекс столбца, данные
 которого необходимо группировать.


## Описание


Метод GroupElement выполняет
 группировку данных столбца при [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation) в реляционные
 данные.


## Комментарии


Для группировки элементов данных необходимо, чтобы свойство [IPivot.DrillThrough](IPivot.DrillThrough.htm) принимало значение
 True.


После группировки в экспресс-отчёте будет создано новое измерение, наименование
 которого соответствует наименованию элемента в измерении «Поля
 источника».


Для отмены группировки данных после группировки столбцов, используйте
 [IPivot.UngroupElement](IPivot.UngroupElement.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS. Источником данных отчёта является куб с настроенной
 серверной агрегацией.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Analyzer: IEaxAnalyzer;

    Pivot: IPivot;

    DimInst: IDimInstance;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Analyzer := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим таблицу данных экспресс-отчета

    Pivot := Analyzer.Pivot;

    // Детализируем данные в реляционную таблицу

    Pivot.DrillThrough := True;

    // Получим данные нового измерения «Поля источника»

    DimInst := Pivot.Selection.FindById("SRC_AND_FLD").Dimension;

    // Отгруппируем первый столбец, который соответствует первому элементу отметки измерения «Поля источника»

    Pivot.GroupElement(DimInst, 0);

    // Сохраним изменения

    (Analyzer As IMetabaseObject).Save;

    …

    { Для отмены группировки столбца }

    If Pivot.CanUngroupElement(Pivot.DimItem(6))

        Then

            Pivot.UngroupElement(DimInst);

        Else Debug.WriteLine("Невозможно разгруппировать данные");

    End If;

    // Сохраним изменения

    (Analyzer As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в экспресс-отчёте будет выполнена детализация
 в реляционные данные, данные первого столбца будут сгруппированы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
