# IMsMetaModelVisualController.GetFreeVariables

IMsMetaModelVisualController.GetFreeVariables
-


# IMsMetaModelVisualController.GetFreeVariables


## Синтаксис


GetFreeVariables: Array;


## Описание


Метод GetFreeVariables возвращает
 массив переменных, не участвующих в моделях.


## Комментарии


Каждый элемент массива - это объект интерфейса [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу моделирования
 с идентификатором «MODEL_VAR_LVL». Данная задача должна содержать внутреннюю
 метамодель.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub GetFreeVars;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    i: Integer;

    Transf: IMsFormulaTransform;

    Series: IMsFormulaTransformVariables;

    Data: Array Of Variant;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("MODEL_VAR_LVL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем все переменные

    MetaVisual.UpdateVariables;

    Transf := MetaVisual.VariablesTransform;

    Series := Transf.Series;

    // Указываем, что в наименованиях переменных

    //будет содержаться наименование источника данных

    MetaVisual.UseSourceName := True;

    // Выводим их наименования в окно консоли

    Debug.WriteLine("Все переменные:");

    For i := 0 To Series.Count - 1 Do

        Debug.WriteLine(" - " + (Series.Item(i).Slices.Item(0).Name));

    End For;

    // Получаем свободные переменные

    Data := MetaVisual.GetFreeVariables;

    // Выводим их наименования в окно консоли

    Debug.WriteLine("");

    Debug.WriteLine("Свободные переменные:");

    For i := 0 To Data.Length - 1 Do

        Debug.WriteLine(" - " + (Data[i] As IMsFormulaTransformSlice).Name);

    End For;

End Sub GetFreeVars;


Результат выполнения примера: в окно консоли выведены наименования всех
 переменных и наименования переменных, не участвующих в моделях.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
