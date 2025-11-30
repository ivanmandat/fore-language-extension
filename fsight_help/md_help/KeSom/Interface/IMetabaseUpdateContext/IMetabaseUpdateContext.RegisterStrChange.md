# IMetabaseUpdateContext.RegisterStrChange

IMetabaseUpdateContext.RegisterStrChange
-


# IMetabaseUpdateContext.RegisteStrChange


## Синтаксис


RegisterStrChange(OldStr: String; NewStr: String);


## Параметры


OldStr. Идентификатор атрибута
 объекта до обновления.


NewStr. Идентификатор атрибута
 объекта после обновления.


## Описание


Метод RegisterStrChange переопределяет
 идентификаторы атрибутов объекта обновления.


## Комментарии


Метод RegisterStrChange используется
 для изменения привязки атрибутов объектов экспорта/импорта в базе данных
 временных рядов путем замены идентификаторов.


Примечание.
 Данный метод используется для поддержки старых объектов, в которых не
 произведены новые доработки. Используйте [IMetabaseUpdateContext.RegisterAttributeIdChange](IMetabaseUpdateContext.RegisterAttributeIdChange.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx»
 и наличие в репозитории базы данных временных рядов. В базе создан объект
 экспорта с настроенной привязкой атрибутов. В репозитории-источнике один
 из атрибутов объекта экспорта связан со справочником «COUNTRY_RU», который
 содержит наименования стран на русском языке. В репозитории-приёмнике
 имеется аналогичный по назначению справочник с идентификатором «COUNTRY_EN».
 В данном справочнике хранятся наименования стран на английском языке.


Добавьте ссылку на системную сборку «Metabase».


			Sub UserProc;

Var

MB: IMetabase;

    Update: IMetabaseUpdate;

    UpdateCxt: IMetabaseUpdateContext;

Begin

    MB := MetabaseClass.Active;

    Update := Mb.CreateUpdate;

    Update.LoadFromFileNF("C:\Update.pefx");

    UpdateCxt := Update.CreateUpdateContext;

    UpdateCxt.RegisterStrChange("COUNTRY_RU", "COUNTRY_EN");

    Update.ApplyEx(Null, UpdateCxt);

End Sub UserProc;


После выполнения примера будет осуществлена перенастройка привязки атрибута
 объекта экспорта с «COUNTRY_RU» на «COUNTRY_EN».


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
