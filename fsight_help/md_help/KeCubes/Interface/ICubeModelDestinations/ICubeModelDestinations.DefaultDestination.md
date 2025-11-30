# ICubeModelDestinations.DefaultDestination

ICubeModelDestinations.DefaultDestination
-


# ICubeModelDestinations.DefaultDestination


## Синтаксис


DefaultDestination: [ICubeModelDestination](../ICubeModelDestination/ICubeModelDestination.htm);


## Описание


Свойство DefaultDestination
 возвращает вариант отображения, установленный для куба по умолчанию.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 Cube_Sep.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICubeModel;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("Cube_Sep").Bind As ICubeModel;

    Debug.WriteLine(Cube.Destinations.DefaultDestination.Name);

End Sub UserProc;


После выполнения примера в консоль будет выведено наименование варианта
 отображения по умолчанию для куба.


См. также:


[ICubeModelDestinations](ICubeModelDestinations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
