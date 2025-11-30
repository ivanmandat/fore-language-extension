# IMsMetaModelVisualController.FindChainVariableBySlice

IMsMetaModelVisualController.FindChainVariableBySlice
-


# IMsMetaModelVisualController.FindChainVariableBySlice


## Синтаксис


FindChainVariableBySlice(Slice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm)): [IMsCalculationChainVariable](../IMsCalculationChainVariable/IMsCalculationChainVariable.htm);


## Параметры


Slice. Срез переменной.


## Описание


Метод FindChainVariableBySlice выполняет поиск переменной по срезу.


## Комментарии


Параметр Slice не может принимать значение Null.


Если переменная с указанным срезом не найдена, то метод возвращает значение Null.


## Пример


Пример является функцией, возвращающей признак наличия переменной с указанным срезом в цепочке расчёта метамодели. Входной параметр функции - срез переменной. Если переменная найдена, то функция возвращает значение True, в обратном случае - False.


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования с идентификатором «WEB_PROBLEM». Задача моделирования должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Function FindChainVariableBySlice(Slice: IMsFormulaTransformSlice): Boolean;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainVar: IMsCalculationChainVariable;

Begin

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsObj := MB.ItemById("MODEL_SPACE").Bind;

    // Получаем задачу моделирования
    Problem := MB.ItemByIdNamespace("WEB_PROBLEM", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель
    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Выполняем поиск переменной
    ChainVar := MetaVisual.FindChainVariableBySlice(Slice);

    // Возвращаем признак наличия переменной в метамодели
    If Slice <> Null Then

        Return True;

    Else

        Return False;

    End If;

End Function FindChainVariableBySlice;


В результате выполнения примера функция вернет признак наличия переменной с указанным срезом в цепочке расчёта метамодели.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
