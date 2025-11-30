# IDimIndexesInstance.SelectionIndex

IDimIndexesInstance.SelectionIndex
-


# IDimIndexesInstance.SelectionIndex


## Синтаксис


SelectionIndex: [IDimIndexInstance](../IDimIndexInstance/IDimIndexInstance.htm);


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


			Sub UseProc;

Var

    mb: IMetabase;

    DimInst: IDimInstance;

    Indexes: IDimIndexesInstance;

    Index: IDimIndexInstance;

    Attr: IDimAttribute;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    DimInst := mb.ItemById("USE_IN_SELECTION").Open(Null) As IDimInstance;

    // Получаем индексы справочника

    Indexes := DimInst.Indexes;

    // Получаем индекс справочника, который используется для формирования отметки

    Index := Indexes.SelectionIndex;

    // Выводим информацию об индексе в окно консоли

    If Index <> Null Then

        Debug.WriteLine("Наименование индекса: " + Index.Index.Name);

        Debug.WriteLine(Index.CaseSensitive ? "Индекс регистрозависимый" : "Индекс регистронезависимый");

        Debug.WriteLine("Атрибуты в составе индекса:");

        For Each Attr In Index.Index.Attributes Do

            Debug.WriteLine("    " + Attr.Name);

        End For;

    End If;

End Sub UseProc;


В результате выполнения примера в окно консоли будет выведена информация
 о индексе, используемом для формирования отметки, если он присутствует
 в справочнике.


См. также:


[IDimIndexesInstance](IDimIndexesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
