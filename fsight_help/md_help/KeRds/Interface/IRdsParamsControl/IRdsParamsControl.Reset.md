# IRdsParamsControl.Reset

IRdsParamsControl.Reset
-


# IRdsParamsControl.Reset


## Синтаксис


Reset;


## Описание


Метод Reset осуществляет сброс
 привязки всех параметров параметрического справочника.


## Комментарии


Для получения настроек привязки параметров используйте свойство [IRdsLink.ParamsControl](../IRdsLink/IRdsLink.ParamsControl.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_LINK», содержащего справочник НСИ с идентификатором «DICT». В справочнике
 должен быть добавлен атрибут для связи с параметрическим справочником
 и настроена привязка атрибута к параметру другого справочника. Пример
 создания такого справочника приведен в описании свойства [IRdsLink.ParamsControl](../IRdsLink/IRdsLink.ParamsControl.htm).


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Link: IRdsLink;

    Param: IRdsParam;

    ParamsControl: IRdsParamsControl;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("DICT", MB.ItemById("NSI_LINK").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Link := Dict.Links.FindByAttribute(Attrs.FindById("LINKATTR"));

    Param := Link.Reference.Dictionary.Params.Item(0);

    ParamsControl := Link.ParamsControl;

    ParamsControl.Reset;

    MObj.Save;

End Sub UserProc;


После выполнения примера при нажатии кнопки будет произведен сброс всех
 [привязок](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link_Property.htm)
 справочника.


См. также:


[IRdsParamsControl](IRdsParamsControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
