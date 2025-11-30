# IMetabaseCustomClass.Resource

IMetabaseCustomClass.Resource
-


# IMetabaseCustomClass.Resource


## Синтаксис


Resource: [IResourceObject](ModIo.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resource определяет
 ресурс репозитория, в котором будут храниться метаданные пользовательского
 класса.


## Комментарии


По умолчанию свойство не определено, при этом метаданные пользовательского
 класса хранятся в [контейнере
 пользовательских классов](../IMetabaseCustomExtender/IMetabaseCustomExtender.htm). Если для класса определить ресурс, то в
 нём будут сохранятся наименование и описание класса, крупный и маленький
 значок. Для определения значков будут использоваться свойства [LargeImage](IMetabaseCustomClass.LargeImage.htm)
 и [SmallImage](IMetabaseCustomClass.SmallImage.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурса
 с идентификатором CLS_RESOURCES. В ресурсе сохранены изображения с идентификаторами
 LARGEICON и SMALLICON. Также в пользовательских метаданных репозитория
 создан класс с идентификатором 2889473.


Добавьте ссылки на системные сборки: Drawing, IO, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    CustomClassExtender: IMetabaseCustomExtender;

    CustomClass: IMetabaseCustomClass;

    Resource: IResourceObject;

Begin

    Mb := MetabaseClass.Active;

    // Получение контейнера пользовательских классов

    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

    Resource := Mb.ItemById("CLS_RESOURCES").Bind As IResourceObject;

    // Изменение пользовательского класса

    CustomClass := CustomClassExtender.Classes.FindByClassId(2889473);

    CustomClass.Resource := Resource;

    CustomClass.LargeImage := New GxBitmap.CreateFromStream(Resource.Binaries.Value("LARGEICON"));

    CustomClass.SmallImage := New GxBitmap.CreateFromStream(Resource.Binaries.Value("SMALLICON"));

    // Сохранение изменений

    (CustomClassExtender As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для указанного пользовательского класса будет
 определён ресурс для хранения метаданных. Изображения из ресурса будут
 установлены в качестве значков для пользовательского класса.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
