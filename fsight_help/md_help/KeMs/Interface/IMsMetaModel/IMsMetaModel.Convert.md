# IMsMetaModel.Convert

IMsMetaModel.Convert
-


# IMsMetaModel.Convert


## Синтаксис


Convert(format: [MsModelFormat](../../Enums/MsModelFormat.htm));


## Параметры


format. Требуемый формат внутренних
 моделей.


## Описание


Метод Convert преобразует внутренние
 модели метамодели в сущности, не являющиеся объектами репозитория, и обратно.


## Комментарии


По умолчанию при создании внутренние модели метамодели не являются отдельными
 объектами репозитория и располагаются внутри метаданных метамодели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего метамодель с идентификатором
 «METAMODEL_CONVERT».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Meta: IMsMetaModel;

Begin

    mb := MetabaseClass.Active;

    MsKey := mb.GetObjectKeyById("MS");

    Meta := mb.ItemByIdNamespace("METAMODEL_CONVERT", MsKey).Edit As IMsMetaModel;

    Meta.Convert(MsModelFormat.WithObject);

    (Meta As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера внутренние модели в метамодели «METAMODEL_CONVERT»
 будут преобразованы в отдельные объекты репозитория.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
