# IStandardDimIndexes.SelectionIndex

IStandardDimIndexes.SelectionIndex
-


# IStandardDimIndexes.SelectionIndex


## Синтаксис


SelectionIndex: [IStandardDimIndex](../IStandardDimIndex/IStandardDimIndex.htm);


## Описание


Свойство SelectionIndex возвращает
 индекс, который используется для формирования отметки.


## Комментарии


Подобный индекс используется для сохранения и восстановления отметки
 по измерению, основанному на справочнике.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «SELECTION_INDEX». Данный справочник должен
 использоваться в качестве измерения в базе данных временных рядов.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UseProc;

Var

    mb: IMetabase;

    Dim: IStandardDimension;

    Indexes: IStandardDimIndexes;

    Index: IStandardDimIndex;

    Attr: IDimAttribute;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    Dim := mb.ItemById("SELECTION_INDEX").Bind As IStandardDimension;

    // Получаем индексы справочника

    Indexes := Dim.Indexes;

    // Получаем индекс справочника, который используется для формирования отметки

    Index := Indexes.SelectionIndex;

    // Выводим информацию об индексе в окно консоли

    If Index <> Null Then

        Debug.WriteLine("Наименование индекса: " + Index.Name);

        Debug.WriteLine("Атрибуты в составе индекса:");

        For Each Attr In Index.Attributes Do

            Debug.WriteLine("    " + Attr.Name);

        End For;

    End If;

End Sub UseProc;


В результате выполнения примера в окно консоли будет выведена информация
 о индексе, используемом для формирования отметки, если он присутствует
 в справочнике.


См. также:


[IStandardDimIndexes](IStandardDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
