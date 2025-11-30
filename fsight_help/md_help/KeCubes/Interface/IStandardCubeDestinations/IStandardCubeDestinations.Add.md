# IStandardCubeDestinations.Add

IStandardCubeDestinations.Add
-


# IStandardCubeDestinations.Add


## Синтаксис


Add([AddEmpty: Boolean = false]): [IStandardCubeDestination](../IStandardCubeDestination/IStandardCubeDestination.htm);


## Параметры


AddEmpty. Признак, определяющий
 способ добавления варианта отображения куба.


## Описание


Метод Add осуществляет добавление
 нового варианта отображения куба.


## Комментарии


Допустимые значения параметра AddEmpty:


	- True. Добавляется новый
	 вариант отображения;


	- False. По умолчанию.
	 Добавляется копия варианта отображения, установленного по умолчанию.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    StdCube: IStandardCube;

	    Dest: IStandardCubeDestination;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим стандартный куб

	    MObj := MB.ItemById("STD_CUBE").Edit;

	    StdCube := MObj As IStandardCube;

	    // Добавим новый вариант отображения куба

	    Dest := StdCube.Destinations.Add;

	    // Зададим наименование и идентификатор варианта отображения

	    Dest.Name := "Вариант №1";

	    Dest.Id := "DESTINATION";

	    // Сохраним изменения

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в кубе будет добавлена копия варианта отображения,
 установленного по умолчанию.


См. также:


[IStandardCubeDestinations](IStandardCubeDestinations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
