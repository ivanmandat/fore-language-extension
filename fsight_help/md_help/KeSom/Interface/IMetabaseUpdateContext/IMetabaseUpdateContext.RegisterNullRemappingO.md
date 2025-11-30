# IMetabaseUpdateContext.RegisterNullRemappingO

IMetabaseUpdateContext.RegisterNullRemappingO
-


# IMetabaseUpdateContext.RegisterNullRemappingO


## Синтаксис


RegisterNullRemappingO(OwnObject: Integer; OldKey:
 Integer);


## Параметры


OwnObject. Владелец объекта,
 для которого выполняется повторное сопоставление;


OldKey. Объект, для которого
 выполняется повторное сопоставление.


## Описание


Метод RegisterNullRemappingO
 выполняет нулевое повторное сопоставление для объекта с учетом родительского
 элемента.


## Комментарии


Метод используется для создания объектов с частичной потерей структуры
 (информации), в случае, если разрешаются не все ссылки на внешние объекты.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором «MDM_INDICATOR_S» и базы данных временных
 рядов с идентификатором «TSDB_PEF_NULL». Табличный справочник НСИ должен
 быть дочерним по отношению к базе данных временных рядов.


В файловой системе предполагается наличие файла обновления «C:\NullRemaps.pefx»,
 предназначенного для обновления объекта пользовательского класса, который
 зависит от справочника «MDM_INDICATOR_S» и его родителя.


Добавьте ссылку на системную сборку Metabase.


			Sub userProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    UpdateCxt: IMetabaseUpdateContext;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем обновление

    Update := Mb.CreateUpdate;

    // Загружаем параметры обновления из файла

    Update.LoadFromFileNF("C:\NullRemaps.pefx");

    // Создаем дополнительные настройки обновления

    UpdateCxt := Update.CreateUpdateContext;

    // Задаем нулевые параметры сопоставления для элементов обновления

    UpdateCxt.RegisterNullRemappingO(Mb.ItemById("TSDB_PEF_NULL").Key, Mb.ItemById("MDM_INDICATOR_S").Key);

    // Выполняем обновление

    Update.ApplyEx(Null, UpdateCxt);

End Sub userProc;


В результате выполнения примера для справочника «MDM_INDICATOR_S», от
 которого зависит объект пользовательского класса, заданы нулевые параметры
 повторного сопоставления. Затем выполнено обновление объекта пользовательского
 класса.


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
