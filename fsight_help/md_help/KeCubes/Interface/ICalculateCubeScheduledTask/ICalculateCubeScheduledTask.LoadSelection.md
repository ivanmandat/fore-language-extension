# ICalculateCubeScheduledTask.LoadSelection

ICalculateCubeScheduledTask.LoadSelection
-


# ICalculateCubeScheduledTask.LoadSelection


## Синтаксис


LoadSelection(Value: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm)):
 [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);


## Параметры


Value. Пустая
 отметка куба-источника, в которую будет загружена отметка, в соответствии
 с которой будет осуществляться загрузка в куб.


## Описание


Метод LoadSelection копирует
 отметку, в соответствии с которой осуществляется загрузка в куб.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач. В контейнере содержится задача выполнения вычисляемого
 куба, настроенная на запуск загрузчика в куб.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Loader: ICubeLoader;

    LoaderTask: ICalculateCubeScheduledTask;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    LoaderTask := MB.ItemById("LoaderTask").Edit As ICalculateCubeScheduledTask;

    // Задача запуска загрузчика в куб

    Loader := (LoaderTask.SourceCube As ICubeLoader);

    // Получение пустой отметки, по которой будет осуществляться загрузка данных

    CubeInst := (Loader.Destination.Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    DimSS := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

    // Копирование отметки, уже установленной для задачи

    DimSS := LoaderTask.LoadSelection(DimSS);

    // Изменение отметки

    For Each DimS In DimSS Do

        DimS.DeselectAll;

        DimS.SelectElement(0, True);

    End For;

    // Установка новой отметки

    LoaderTask.SetSelection(DimSS);

    (LoaderTask As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для задачи запуска загрузчика в куб будет изменена
 отметка, по которой осуществляется загрузка.


См. также:


[ICalculateCubeScheduledTask](ICalculateCubeScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
