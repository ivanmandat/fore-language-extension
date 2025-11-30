# IMsVariableDimensions.Add

IMsVariableDimensions.Add
-


# IMsVariableDimensions.Add


## Синтаксис


Add(Dimension:  [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
 [IMsVariableDimension](../IMsVariableDimension/IMsVariableDimension.htm);


## Параметры


Dimension. Структура справочника,
 который необходимо добавить.


## Описание


Метод Add осуществляет добавление
 дополнительного справочника в структуру переменной моделирования.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL и справочник с идентификатором
 D_SRC. В контейнере содержится переменная моделирования с идентификатором
 VAR_1.


Добавьте ссылки на системные сборки: Dimension, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Variable: IMsVariable;

    ScenInst: IDimInstance;

    Dims: IMsVariableDimensions;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Variable := MObj As IMsVariable;

    Dims := Variable.Dimensions;

    Dims.Add(MB.ItemById("D_SRC").Bind As IDimensionModel);

    MObj.Save;

End Sub UserProc;


После выполнения примера в список измерений переменной моделирования
 с идентификатором VAR_1 будет добавлен справочник репозитория с идентификатором
 D_SRC.


См. также:


[IMsVariableDimensions](IMsVariableDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
