# IRdsAttributes.ImageIndex

IRdsAttributes.ImageIndex
-


# IRdsAttributes.ImageIndex


## Синтаксис


ImageIndex: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство ImageIndex определяет
 атрибут, который будет использован в качестве пиктограммы элементов.


## Комментарии


Такой атрибут определяет индекс значка, отображаемого для элемента справочника.
 Следует использовать, если для репозитория установлен объект, содержащий
 [пиктограммы
 элементов измерений](uinav.chm::/02_navigator/uinav_repo_adjustment.htm). Если данный атрибут задан, то около наименования
 элементов будет выводиться изображение, индекс которого соответствует
 значению данного атрибута. Данное свойство актуально только для целочисленных
 атрибутов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "RDS",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict : IRdsDictionary;

	    Att : IRdsAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("RDS").Key).Edit As IRdsDictionary;

	    Att := Dict.Attributes;

	    Att.ImageIndex := Att.FindById("Image");

	    (Dict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера атрибут с идентификатором «Image» будет использован
 в качестве пиктограммы элементов.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
