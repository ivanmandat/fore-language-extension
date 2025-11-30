# IRdsParamsControlInstance.Data

IRdsParamsControlInstance.Data
-


# IRdsParamsControlInstance.Data


## Синтаксис


Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Описание


Свойство Data возвращает данные
 атрибутов справочника, значения которых берутся в качестве значений для
 параметров [связанного
 справочника](IRdsParamsControlInstance.ReferenceDictionary.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «btnPData», репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «MAINDICT». В справочнике
 имеется атрибут с идентификатором «PARAM_ATTR», с помощью которого осуществляется
 управление параметром связанного справочника. Необходимо подключить системные
 сборки Metabase, Rds, Forms.


Пример является обработчиком события OnClick для кнопки.


			Sub btnPDataOnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    ElData: IRdsDictionaryElementData;

    iAttrKey: Integer;

Begin

    Mb := MetabaseClass.Active;

    Dict := Mb.ItemByIdNamespace("MAINDICT", Mb.GetObjectKeyById("NSI_1")).Bind As IRdsDictionary;

    iAttrKey := Dict.Attributes.FindById("PARAM_ATTR").Key;

    DictInst := Dict.Open(Null);

    ElData := DictInst.CreateElementData;

    ElData.Attribute(iAttrKey) := 0;

    Text := DictInst.Links.Item(0).ParamsControl(ElData).Data.Attribute(iAttrKey) As String;

End Sub btnPDataOnClick;


После выполнения примера в заголовок формы будет выведено значение элемента
 по атрибуту, управляющему значениями параметров связанного справочника,
 ключ которого передается посредством параметра iAttrKey.


См. также:


[IRdsParamsControlInstance](IRdsParamsControlInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
