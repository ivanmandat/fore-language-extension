# IStandardCubeDestinations.AddEx

IStandardCubeDestinations.AddEx
-


# IStandardCubeDestinations.AddEx


## Синтаксис


		AddEx([SourceKey: Integer = -1;][CopyAggr:
		 Boolean = True]): [IStandardCubeDestination](../IStandardCubeDestination/IStandardCubeDestination.htm);


## Параметры


SourceKey. Ключ варианта отображения
 из которого копируются настройки.


CopyAggr. Признак копирования
 настроек агрегации.


## Описание


Метод AddEx добавляет новый
 вариант отображения куба с копированием настроек из существующего варианта
 отображения.


## Комментарии


Настройки копируются из варианта отображения с ключом SourceKey.
 Если параметр SourceKey не указан
 или равен «-1», то настройки будут скопированы из варианта отображения
 по умолчанию.


Если не требуется копировать настройки агрегации, то укажите в параметре
 CopyAggr значение False.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «STD_CUBE». В кубе, кроме варианта отображения по умолчанию, создан еще
 один вариант отображения.


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cube: IStandardCube;

		    Dests: IStandardCubeDestinations;

		    Dest: IStandardCubeDestination;

		Begin

		    Mb := MetabaseClass.Active;

		    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

		    Dests := Cube.Destinations;

		    Dest := Dests.Item(1);

		    Dests.AddEx(Dest.Key, False);

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера в кубе будет создан новый вариант отображения,
 настрой будут скопированы из указанного варианта отображения. Настройки
 агрегации не будут скопированы.


См. также:


[IStandardCubeDestinations](IStandardCubeDestinations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
