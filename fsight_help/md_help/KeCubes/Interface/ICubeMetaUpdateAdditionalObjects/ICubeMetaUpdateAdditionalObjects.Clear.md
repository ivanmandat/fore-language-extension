# ICubeMetaUpdateAdditionalObjects.Clear

ICubeMetaUpdateAdditionalObjects.Clear
-


# ICubeMetaUpdateAdditionalObjects.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию объектов.


## Комментарии


После вызова данного метода значение свойства [ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm) становится равным нулю.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта репликации с идентификатором «CUBE_META_UPD» Также необходимо добавить ссылки на системные сборки «Cubes» и «Metabase».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        Update: ICubeMetaUpdateEx;

        AdditionalObjs: ICubeMetaUpdateAdditionalObjects;

    Begin

        Mb := MetabaseClass.Active;

        Update := Mb.ItemById("CUBE_META_UPD").Edit As ICubeMetaUpdateEx;

        AdditionalObjs := Update.AdditionalObjects;

        AdditionalObjs.Clear;

        (Update As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера будут изменены параметры копирования базы данных временных рядов: он будет скопирован без внешних объектов.


См. также:


[ICubeMetaUpdateAdditionalObjects](ICubeMetaUpdateAdditionalObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
