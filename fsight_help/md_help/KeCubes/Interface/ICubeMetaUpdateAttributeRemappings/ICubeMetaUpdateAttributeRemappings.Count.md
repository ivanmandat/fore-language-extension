# ICubeMetaUpdateAttributeRemappings.Count

ICubeMetaUpdateAttributeRemappings.Count
-


# ICubeMetaUpdateAttributeRemappings.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 соответствий в коллекции.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Cube_Meta_Upd, содержащего настройки копирования базы
 данных временных рядов.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    AttrRemapping: ICubeMetaUpdateAttributeRemappings;

    AttrR: ICubeMetaUpdateAttributeRemapping;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := Mb.ItemById("Cube_Meta_Upd").Bind As ICubeMetaUpdateEx;

    AttrRemapping := RubUpdateEx.MetafactsAttributeRemappings;

    For i := 0 To AttrRemapping.Count - 1 Do

        AttrR := AttrRemapping.Item(i);

        Debug.WriteLine(AttrR.Name);

    End For;

End Sub UserProc;


После выполнения примера будет загружен объект, содержащий настройки
 копирования базы данных временных рядов. В окно консоли будут выведены
 наименования всех атрибутов показателей базы-копии, для которых установлены
 соответствия с атрибутами показателей копируемой базы.


См. также:


[ICubeMetaUpdateAttributeRemappings](ICubeMetaUpdateAttributeRemappings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
