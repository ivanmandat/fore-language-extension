# IRubricatorCubeDestination.MakeDefault

IRubricatorCubeDestination.MakeDefault
-


# IRubricatorCubeDestination.MakeDefault


## Синтаксис


MakeDefault;


## Описание


Метод MakeDefault устанавливает
 данный вариант отображения базы данных временных рядов в качестве варианта
 по умолчанию.


## Комментарии


Для получения признака того, что вариант является вариантом по умолчанию
 используйте свойство [ICubeModelDestination.IsDefault](../ICubeModelDestination/ICubeModelDestination.IsDefault.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    TSDB: IRubricator;

	    Cube: ICubeModel;

	    Dest: IRubricatorCubeDestination;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем базу данных временых рядов

	    TSDB := MB.ItemById("TSDB").Edit As IRubricator;

	    // Представляем базу данных временных рядов в виде модели куба

	    Cube := TSDB As ICubeModel;

	    // Получаем первый вариант отображения

	    Dest := Cube.Destinations.Item(0) As IRubricatorCubeDestination;

	    // Устанавливаем вариант отображения в качестве варианта по умолчанию

	    Dest.MakeDefault;

	    // Сохраняем изменения

	    (TSDB As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера первый вариант отображения базы данных
 временных рядов будет использоваться в качестве варианта по умолчанию.


См. также:


[IRubricatorCubeDestination](IRubricatorCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
