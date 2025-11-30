# IAutoCubeDimensions.ItemByDimension

IAutoCubeDimensions.ItemByDimension
-


# IAutoCubeDimensions.ItemByDimension


## Синтаксис


ItemByDimension(Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm)):
 [IAutoCubeDimension](../IAutoCubeDimension/IAutoCubeDimension.htm);


## Параметры


Dimension. Структура справочника
 репозитория, на основе которого построено измерение в автоматическом кубе.


## Описание


Свойство ItemByDimension возвращает
 измерения автоматического куба, в основе которого лежит указанный справочник
 репозитория.


## Комментарии


Свойство возвращает значение Null,
 если на основе указанного справочника отсутствует измерение в автоматическом
 кубе.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE. В кубе настроен источник данных.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    SourceDim: IDimensionModel;

    Dim: IAutoCubeDimension;

Begin

    MB := MetabaseClass.Active;

    AutoCube := MB.ItemById("AUTO_CUBE").Bind As IAutoCube;

    // Справочник, на котором построено измерение куба-источника

    SourceDim := AutoCube.Source.Cube.Dimensions.Item(0);

    // Поиск измерения на основе справочника в автоматическом кубе

    Dim := AutoCube.Dimensions.ItemByDimension(SourceDim);

    Debug.WriteLine("На основе справочника '" + (SourceDim As IMetabaseObject).Name +

        (IsNull(Dim)? "' отсутствует " : "' имеется ") +

        "общее измерение в автоматическом кубе " );

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия общего измерения
 автоматического куба и его источника. Соответствующее сообщение будет
 выведено в консоль среды разработки.


См. также:


[IAutoCubeDimensions](IAutoCubeDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
