# IPivotTable.Attachments

IPivotTable.Attachments
-


# IPivotTable.Attachments


## Синтаксис


Attachments(Row: Integer; Column: Integer): [ICubeAttachments](KeCubes.chm::/Interface/ICubeAttachments/ICubeAttachments.htm);


## Параметры


Row. Индекс строки ячейки;


Column. Индекс столбца ячейки.


## Описание


Свойство Attachments возвращает
 вложения, содержащиеся в ячейке с указанными координатами.


## Комментарии


Для работы с вложениями в источнике данных таблицы должно быть задано
 [место
 хранения вложений](KeCubes.chm::/Interface/IStandardCubeDestination/IStandardCubeDestination.AttachmentsStorage.htm).


Для определения возможности работы с вложениями в указанной ячейке используйте
 свойство [IPivotTable.SupportWriteAttachments](IPivotTable.SupportWriteAttachments.htm).


Для определения наличия вложений в ячейке используйте свойство [IPivotTable.HasAttachments](IPivotTable.HasAttachments.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. В отчёте должна содержаться таблица с [вложениями](UiAnalyticalArea.chm::/Attachments.htm)
 в ячейках.


Добавьте ссылки на системные сборки: Cubes, Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Table: IPivotTable;

    Cell: Boolean;

    Count: Integer;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы

    Pivot := Express.Pivot;

    Table := Pivot.ObtainTable;

    // Проверим ячейку с координатой (1,1) на возможность работы с вложениями

    Cell := Table.SupportWriteAttachments(1, 1);

    If Cell Then

        Debug.WriteLine("Ячейка доступна для работы с вложениями");

        // Проверим наличие вложений в ячейке

        If Table.HasAttachments(1, 1) Then

            Count := Table.Attachments(1, 1).Count;

            Debug.WriteLine("Количество вложений: " + Count.ToString);

        End If;

    Else

        Debug.WriteLine("Ячейка недоступна для работы с вложениями");

    End If;

End Sub UserProc;


После выполнения примера в консоль будет выведена информация о возможности
 работы с вложениями в заданной ячейке. Если в ячейке содержатся вложения,
 то будет выведено их количество. Например:


Ячейка доступна для работы с вложениями


Количество вложений: 3


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
