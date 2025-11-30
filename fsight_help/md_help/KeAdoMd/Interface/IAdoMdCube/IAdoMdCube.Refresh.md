# IAdoMdCube.Refresh

IAdoMdCube.Refresh
-


# IAdoMdCube.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh обновляет структуру
 куба в репозитории на основании информации о кубе на сервере, к которому
 подключается каталог ADOMD.


## Комментарии


Для обновления структуры куб должен находиться в состоянии [редактирования](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется куб ADOMD с идентификатором
 «Cube_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAdoMdCube;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemByIdNamespace("Cube_1", MB.GetObjectKeyById("ADOMDTest")).Edit As IAdoMdCube;

    Cube.Refresh;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет обновлена структура указанного куба ADOMD
 на основании информации о кубе, полученной с сервера.


См. также:


[IAdoMdCube](IAdoMdCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
