# IMsVariableSampling.SourceDimension

IMsVariableSampling.SourceDimension
-


# IMsVariableSampling.SourceDimension


## Синтаксис


SourceDimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство SourceDimension возвращает
 структуру календарного измерения переменной моделирования.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере содержится переменная
 моделирования с идентификатором VAR_1.


Добавьте ссылки на системные сборки: Dimension, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Variable: IMsVariable;

    Lvl: IDimLevels;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Variable := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Lvl := Variable.Sampling.SourceDimension.Levels;

    For i := 0 To Lvl.Count - 1 Do

        Debug.WriteLine(Lvl.Item(i).Name);

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены наименования уровней
 календаря, присутствующих в динамике переменной с идентификатором VAR_1.


См. также:


[IMsVariableSampling](IMsVariableSampling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
