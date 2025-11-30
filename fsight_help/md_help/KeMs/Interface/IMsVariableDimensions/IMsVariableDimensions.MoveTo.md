# IMsVariableDimensions.MoveTo

IMsVariableDimensions.MoveTo
-


# IMsVariableDimensions.MoveTo


## Синтаксис


MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс позиции дополнительного
 измерения, который необходимо переместить;


ToIndex. Индекс позиции, в
 которую необходимо переместить.


## Описание


Метод MoveTo осуществляет перемещение
 справочника в списке дополнительных измерений переменной моделирования.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержится переменная
 моделирования с идентификатором VAR_1.


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

    Dims.MoveTo(0, Dims.Count - 1);

    MObj.Save;

End Sub UserProc;


После выполнения примера первое дополнительное измерение переменной
 моделирования будет перемещено в списке на последнюю позицию.


См. также:


[IMsVariableDimensions](IMsVariableDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
