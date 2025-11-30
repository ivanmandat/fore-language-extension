# IDimSelection.PredefinedSchema

IDimSelection.PredefinedSchema
-


# IDimSelection.PredefinedSchema


## Синтаксис


PredefinedSchema: [IPredefinedSelectionSchema](../IPredefinedSelectionSchema/IPredefinedSelectionSchema.htm);


## Описание


Свойство PredefinedSchema возвращает
 объект для работы с предопределенной схемой отметки измерения.


## Комментарии


Предопределенная схема отметки служит для автоматического добавления
 нового элемента измерения в отметку после переоткрытия измерения.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «EXPRESS», содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Selection: IDimSelection;

    PreSchema: IPredefinedSelectionSchema;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим отметку измерения

    Selection := Express.Pivot.Selection.Item(3);

    // Получим предопределенную схему отметки измерения

    PreSchema := Selection.PredefinedSchema;

    // Отметим все элементы

    If (PreSchema <> Null) Then

        If (PreSchema.Count = 0) Then

            PreSchema.Add(SelectionPrimitiveType.All);

        End If;

        // Будем использовать предопределенную схему отметки измерения

        PreSchema.Active := True;

    End If;

    // Сохраним отчет

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в указанном измерении при добавлении нового
 элемента он автоматически будет добавлен в отметку после переоткрытия
 отчета.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
