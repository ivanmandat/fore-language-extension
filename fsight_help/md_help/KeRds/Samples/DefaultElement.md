# Выбор элемента по умолчанию в справочнике

Выбор элемента по умолчанию в справочнике
-


# Выбор элемента по умолчанию в справочнике


На языке Fore приведены примеры установки в справочнике элемента по
 умолчанию и отметка этого элемента в экспресс-отчёте, использующего справочник
 в качестве одного из измерений.


Для выполнения примеров предполагается наличие в репозитории справочника
 НСИ с идентификатором RDS_DICT_OBJ. У справочника добавлена схема отметки.
 Справочник является измерением стандартного куба, на котором построен
 экспресс-отчёт с идентификатором EAX_OBJ.


В результате выполнения примера у справочника будет задан элемент по
 умолчанию, и при открытии экспресс-отчёта будет выделен один элемент,
 являющийся элементом по умолчанию, в этом измерении.


## Пример


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Selection: IDimSelection;

    PreSchema: IPredefinedSelectionSchema;

    Obj: IMetabaseObject;

    Dict: IRdsDictionary;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    Obj := MB.ItemById("RDS_DICT_OBJ").Edit;

    Dict := Obj As IRdsDictionary;

    // Установим ключ элемента по умолчанию
 в справочнике

    Dict.DefaultElementKey := 11;

    // Получаем экспресс-отчёт

    Express := MB.ItemById("EAX_OBJ").Edit As IEaxAnalyzer;

    // Получим отметку измерения, в котором есть элемент по умолчанию

    Selection := Express.Pivot.Selection.Item(1);

    // Получим предопределенную схему отметки измерения

    PreSchema := Selection.PredefinedSchema;

    If (PreSchema <> Null) Then

        PreSchema.Clear;

        PreSchema.Add(SelectionPrimitiveType.DefaultElement);

        // Будем использовать предопределенную схему отметки измерения

        PreSchema.Active := True;

    End If;

    (Express As IMetabaseObject).Save;

End Sub userproc;


См. также:


[Примеры](KeRds_Sample.htm)
 | [IRdsDictionary](../Interface/IRdsDictionary/IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
