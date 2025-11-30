# IAutoCubeDimensions.Add

IAutoCubeDimensions.Add
-


# IAutoCubeDimensions.Add


## Синтаксис


Add(Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm)):
 [IAutoCubeDimension](../IAutoCubeDimension/IAutoCubeDimension.htm);


## Параметры


Dimension. Структура справочника,
 на базе которого будет создано измерение в автоматическом кубе.


## Описание


Метод Add осуществляет добавление
 справочника в коллекцию измерений автоматического куба.


Важно. При
 добавлении новых справочников, имеющиеся в автоматическом кубе данные
 будут утеряны.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE и справочника с идентификатором Dim_1.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    Dims: IAutoCubeDimensions;

    Dim: IDimensionModel;

Begin

    MB := MetabaseClass.Active;

    AutoCube := MB.ItemById("AUTO_CUBE").Edit As IAutoCube;

    Dim := MB.ItemById("Dim_1").Bind As IDimensionModel;

    Dims := AutoCube.Dimensions;

    Dims.Add(Dim);

    (AutoCube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в коллекцию измерений автоматического куба будет
 добавлено измерение на базе указанного справочник репозитория.


См. также:


[IAutoCubeDimensions](IAutoCubeDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
