# IAutoCubeDestinations.Add

IAutoCubeDestinations.Add
-


# IAutoCubeDestinations.Add


## Синтаксис


Add: [IAutoCubeDestination](../IAutoCubeDestination/IAutoCubeDestination.htm);


## Описание


Метод Add создает новый вариант
 отображения автоматического куба.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    AutoCube: IAutoCube;

    Dest: IAutoCubeDestination;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("AUTO_CUBE").Edit;

    AutoCube := MObj As IAutoCube;

    Dest := AutoCube.Destinations.Add;

    Dest.Id := "New" + MObj.Id;

    Dest.Name := "New" + MObj.Name;

    Dest.MakeDefault;

    MObj.Save;

End Sub UserProc;


После выполнения примера в автоматическом кубе будет создан новый вариант
 отображения. Данный вариант будет установлен вариантом отображения по
 умолчанию.


См. также:


[IAutoCubeDestinations](IAutoCubeDestinations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
