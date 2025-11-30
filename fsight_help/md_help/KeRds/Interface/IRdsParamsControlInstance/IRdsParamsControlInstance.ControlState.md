# IRdsParamsControlInstance.ControlState

IRdsParamsControlInstance.ControlState
-


# IRdsParamsControlInstance.ControlState


## Синтаксис


ControlState: [DictionaryParamsControlState](../../Enums/DictionaryParamsControlState.htm);


## Описание


Свойство ControlState возвращает
 текущее состояние объекта, осуществляющего управление значениями параметров
 связанного справочника.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «btnPState», репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «MAINDICT». В справочнике
 имеется атрибут с идентификатором «PARAM_ATTR», с помощью которого осуществляется
 управление параметром связанного справочника. Необходимо подключить системные
 сборки Metabase, Rds, Forms.


Пример является обработчиком события OnClick для кнопки.


Sub btnPStateOnClick(Sender: Object; Args: IMouseEventArgs);

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

    Text := DictInst.Links.Item(0).ParamsControl(ElData).ControlState.ToString;

End Sub btnPStateOnClick;


После выполнения примера при нажатии кнопки в заголовок формы будет
 выведен код текущего состояния объекта (Значения параметров заданы и не
 изменились), осуществляющего управление значениями параметров связанного
 справочника.


См. также:


[IRdsParamsControlInstance](IRdsParamsControlInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
