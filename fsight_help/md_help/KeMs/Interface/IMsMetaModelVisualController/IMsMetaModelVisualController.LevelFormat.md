# IMsMetaModelVisualController.LevelFormat

IMsMetaModelVisualController.LevelFormat
-


# IMsMetaModelVisualController.LevelFormat


## Синтаксис


LevelFormat: [MsLevelFormat](../../Enums/MsLevelFormat.htm);


## Описание


Свойство LevelFormat определяет режим отображения календарной динамики.


## Комментарии


По умолчанию календарная динамика не отображается, т.е. LevelFormat = MsLevelFormat.None.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования с идентификатором «PROBLEM». Задача должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainEn: IMsCalculationChainEntries;

    i: Integer;

    ChainVar: IMsCalculationChainVariable;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsObj := mb.ItemById("MODEL_SPACE");

    // Получаем задачу моделирования
    Problem := mb.ItemByIdNamespace("PROBLEM", MsObj.Key).Edit As IMsProblem;

    // Получаем метамодель
    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Задаем параметры отображения календарной динамики
    MetaVisual.LevelFormat := MsLevelFormat.Long;

    MetaVisual.UpdateVariables;

    // Выводим наименования переменных в окно консоли
    ChainEn := Meta.CalculationChain;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Variable Then

            ChainVar := ChainEn.Item(i) As IMsCalculationChainVariable;

                Debug.WriteLine("Переменная: " + ChainVar.Key.ToString);

                Debug.WriteLine("  - исходное наименование: " + ChainVar.OriginalName);

                Debug.WriteLine("  - полное наименование: " + ChainVar.FullName);

        End If;

    End For;

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


Результат выполнения примера: для задачи моделирования изменен режим отображения календарной динамики, в окно консоли выведены различные наименования переменных, содержащихся в задаче.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
