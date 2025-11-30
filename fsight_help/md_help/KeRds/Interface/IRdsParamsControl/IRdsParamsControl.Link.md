# IRdsParamsControl.Link

IRdsParamsControl.Link
-


# IRdsParamsControl.Link


## Синтаксис


Link: [IRdsLink](../IRdsLink/IRdsLink.htm);


## Описание


Свойство Link возвращает объект-родитель.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «Dict_1» и формы
 с расположенной на ней кнопкой «Button1». Также следует подключить системные
 сборки Metabase, Dal и Rds. Пример является обработчиком события OnClick
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

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

    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Link := Dict.Links.FindByAttribute(Attrs.FindById("LINK_ATTRIBUTE"));

    Param := Link.Reference.Dictionary.Params.Item(0);

    ParamsControl := Link.ParamsControl;

    text:=ParamsControl.Link.Name;

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки в заголовок формы будет
 выводиться наименование объекта-родителя.


См. также:


[IRdsParamsControl](IRdsParamsControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
