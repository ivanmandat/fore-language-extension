# IRdsParamsControlInstance.Link

IRdsParamsControlInstance.Link
-


# IRdsParamsControlInstance.Link


## Синтаксис


Link: [IRdsLinkInstance](../IRdsLinkInstance/IRdsLinkInstance.htm);


## Описание


Свойство Link возвращает связь
 со справочником, параметрами которого необходимо управлять.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «btnPLink», репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «MAINDICT». В справочнике
 имеется атрибут с идентификатором «PARAM_ATTR», с помощью которого осуществляется
 управление параметром связанного справочника. Необходимо подключить системные
 сборки Metabase, Rds, Forms.


Пример является обработчиком события OnClick для кнопки.


			Sub btnPLinkOnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    ElData: IRdsDictionaryElementData;

Begin

    Mb := MetabaseClass.Active;

    Dict := Mb.ItemByIdNamespace("MAINDICT", Mb.GetObjectKeyById("NSI_1")).Bind As IRdsDictionary;

    DictInst := Dict.Open(Null);

    ElData := DictInst.CreateElementData;

    ElData.Attribute(Dict.Attributes.FindById("PARAM_ATTR").Key) := 0;

    Text := DictInst.Links.Item(0).ParamsControl(ElData).Link.Id;

End Sub btnPLinkOnClick;


После выполнения примера в заголовок формы будет выведен идентификатор
 связи со справочником, параметрами которого осуществляется управление.


См. также:


[IRdsParamsControlInstance](IRdsParamsControlInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
