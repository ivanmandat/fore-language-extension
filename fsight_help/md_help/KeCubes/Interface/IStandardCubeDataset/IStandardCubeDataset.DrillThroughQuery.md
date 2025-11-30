# IStandardCubeDataset.DrillThroughQuery

IStandardCubeDataset.DrillThroughQuery
-


# IStandardCubeDataset.DrillThroughQuery


## Синтаксис


DrillThroughQuery: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство DrillThroughQuery определяет
 объект репозитория «Запрос» для
 получения детализированных данных.


## Комментарии


Для каждого реляционного источника данных стандартного куба возможно
 использование запроса.


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- стандартного куба с идентификатором «CUBE»;


	- объекта репозитория «Запрос»
	 с идентификатором «QUERY».


Добавьте ссылки на системные сборки: Cubes, Db, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    StandCub: IStandardCube;

    Dataset: IStandardCubeDataset;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим стандартный куб

    StandCub := MB.ItemById("CUBE").Edit As IStandardCube;

    // Получим первый источник данных куба

    Dataset := StandCub.Datasets.Item(0);

    // Зададим запрос для получения детализированных данных

    Dataset.DrillThroughQuery := MB.ItemById("QUERY").Bind as IDatasetModel;

    // Сохраним изменения

    (StandCub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для первого реляционного источника данных стандартного
 куба будет применен указанный запрос для получения детализированных данных.


См. также:


[IStandardCubeDataset](IStandardCubeDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
