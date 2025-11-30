# IDimIndexes.SelectionIndex

IDimIndexes.SelectionIndex
-


# IDimIndexes.SelectionIndex


## Синтаксис


SelectionIndex: [IDimIndex](../IDimIndex/IDimIndex.htm);


## Описание


Свойство SelectionIndex возвращает
 индекс, который используется для формирования отметки.


## Комментарии


Подобный индекс используется для сохранения и восстановления отметки
 по измерению, основанному на справочнике.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором «USE_IN_SELECTION». Данный справочник должен содержаться
 вне репозитория НСИ и использоваться в качестве измерения в базе данных
 временных рядов.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    DimModel: IDimensionModel;

    Indexes: IDimIndexes;

    Index: IDimIndex;

    Attr: IDimAttribute;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    DimModel := mb.ItemById("USE_IN_SELECTION").Bind As IDimensionModel;

    // Получаем индексы справочника

    Indexes := DimModel.Indexes;

    // Получаем индекс справочника, который используется для формирования отметки

    Index := Indexes.SelectionIndex;

    // Выводим информацию об индексе в окно консоли

    If Index <> Null Then

        Debug.WriteLine("Наименование индекса: " + Index.Name);

        Debug.WriteLine(Index.CaseSensitive ? "Индекс регистрозависимый" : "Индекс регистронезависимый");

        Debug.WriteLine("Атрибуты в составе индекса:");

        For Each Attr In Index.Attributes Do

            Debug.WriteLine("    " + Attr.Name);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о индексе, используемом для формирования отметки, если он присутствует
 в справочнике.


См. также:


[IDimIndexes](IDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
