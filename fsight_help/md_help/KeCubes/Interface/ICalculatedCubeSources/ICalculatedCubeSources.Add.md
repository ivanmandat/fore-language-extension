# ICalculatedCubeSources.Add

ICalculatedCubeSources.Add
-


# ICalculatedCubeSources.Add


## Синтаксис


Add(Source: [ICubeModelDestination](../ICubeModelDestination/ICubeModelDestination.htm)):
 [ICalculatedCubeSource](../ICalculatedCubeSource/ICalculatedCubeSource.htm);


## Параметры


Source. Куб, который необходимо
 добавить в источники данных вычисляемого куба.


## Описание


Метод Add осуществляет добавление
 источника данных в вычисляемый куб.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube и куба с идентификатором Cube_1, которой
 будет добавлен в источники данных вычисляемого куба.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICalculatedCube;

    Sources: ICalculatedCubeSources;

    CubeSource: ICubeModel;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("Calc_Cube").Edit As ICalculatedCube;

    CubeSource := MB.ItemById("Cube_1").Bind As ICubeModel;

    Sources := Cube.Sources;

    Sources.Add(CubeSource.Destinations.DefaultDestination);

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в источники данных вычисляемого куба будет
 добавлен указанный куб.


См. также:


[ICalculatedCubeSources](ICalculatedCubeSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
