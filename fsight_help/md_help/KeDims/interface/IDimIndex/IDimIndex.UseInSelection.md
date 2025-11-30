# IDimIndex.UseInSelection

IDimIndex.UseInSelection
-


# IDimIndex.UseInSelection


## Синтаксис


UseInSelection: Boolean;


## Описание


Свойство UseInSelection возвращает
 признак того, используется ли индекс при формировании отметки.


## Комментарии


Допустимые значения:


	- True. Индекс используется
	 при формировании отметки. Это позволит его использовать для сохранения
	 и восстановления отметки по измерению, основанному на справочнике.

	В справочнике может быть только один уникальный ключ, используемый
	 для формирования отметки;


	- False. Индекс не используется
	 при формировании отметки.


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

    // Перебираем индексы справочника

    For Each Index In Indexes Do

        // Если индекс используется для формирования отметки,

        // то выводим в окно консоли информацию о нём

        If Index.UseInSelection Then

            Debug.WriteLine("Наименование индекса: " + Index.Name);

            Debug.WriteLine(Index.CaseSensitive ? "Индекс регистрозависимый" : "Индекс регистронезависимый");

            Debug.WriteLine("Атрибуты в составе индекса:");

            For Each Attr In Index.Attributes Do

                Debug.WriteLine("    " + Attr.Name);

            End For;

        End If;

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о индексе, используемом для формирования отметки, если он присутствует
 в справочнике.


См. также:


[IDimIndex](IDimIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
