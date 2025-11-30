# IStandardCubeDataset.AggregateDuplicatesMode

IStandardCubeDataset.AggregateDuplicatesMode
-


# IStandardCubeDataset.AggregateDuplicatesMode


## Синтаксис


AggregateDuplicatesMode: [CubeDatasetAggregateDuplicatesMode](../../Enums/CubeDatasetAggregateDuplicatesMode.htm);


## Описание


Свойство AggregateDuplicatesMode
 определяет где будет производиться агрегация дублирующихся данных.


## Комментарии


По умолчанию агрегация дублирующихся значений осуществляется на сервере
 СУБД. Если в свойстве AggregateDuplicatesMode
 указать значение [CubeDatasetAggregateDuplicatesMode.Client](../../Enums/CubeDatasetAggregateDuplicatesMode.htm),
 то агрегация будет осуществляться на компьютере-клиенте. При этом все
 необходимые данные предварительно будут извлечены и загружены в память
 компьютера-клиенте. Также агрегация на клиенте осуществляется, если источник
 данных не поддерживает серверную агрегацию, например, если используется
 источник ODBC.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». Также в репозитории должен быть создан
 источник данных ODBC с идентификатором «YEAR_XLS». Источник данных настроен
 на работу с каким-либо файлом Microsoft Excel.


			Sub UserProc;

Var

    MB: IMetabase;

    StdCube: IStandardCube;

    CubeDest: IStandardCubeDestination;

    DatasetModel: IDatasetModel;

    Dataset: IStandardCubeDataset;

Begin

    MB := MetabaseClass.Active;

    StdCube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CubeDest := StdCube.Destinations.Item(0);

    DatasetModel := MB.ItemById("YEAR_XLS").Bind As IDatasetModel;

    //Добавление источника данных в куб

    Dataset := CubeDest.Datasets.Add(DatasetModel);

    //Способ агрегации

    Dataset.AggregateDuplicatesMode := CubeDatasetAggregateDuplicatesMode.Client;

    //Сохранение

    (StdCube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в куб будет добавлен новый источник данных. При
 работе с данными данного источника агрегация дублирующихся данных будет
 выполняться на компьютере-клиенте.


См. также:


[IStandardCubeDataset](IStandardCubeDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
