# IAutoCubeSourceFixInfo.ItemByDim

IAutoCubeSourceFixInfo.ItemByDim
-


# IAutoCubeSourceFixInfo.ItemByDim


## Синтаксис


ItemByDim(Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm)):
 [IAutoCubeSourceDimensionFix](../IAutoCubeSourceDimensionFix/IAutoCubeSourceDimensionFix.htm);


## Параметры


Dimension. Структура
 справочника, зафиксированного в автоматическом кубе.


## Описание


Свойство ItemByDim возвращает
 фиксированное измерение источника данных автоматического куба, которое
 соответствует структуре справочника, передаваемой посредством входного
 параметром.


## Пример


Для выполнения примера необходимо наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCub: IAutoCube;

    SourceDim: IDimensionModel;

    Dim: IAutoCubeSourceDimensionFix;

Begin

    MB := MetabaseClass.Active;

    AutoCub := MB.ItemById("AUTO_CUBE").Bind As IAutoCube;

    SourceDim := AutoCub.Source.Cube.Dimensions.Item(0);

    Dim := AutoCub.Source.FixInfo.ItemByDim(SourceDim);

    Debug.WriteLine((Dim.Dimension As IMetabaseObject).Name);

End Sub UserProc;


После выполнения примера в консоль будет выведено название первого фиксированного
 измерения куба.


См. также:


[IAutoCubeSourceFixInfo](IAutoCubeSourceFixInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
