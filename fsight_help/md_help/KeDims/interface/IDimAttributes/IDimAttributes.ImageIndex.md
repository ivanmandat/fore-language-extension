# IDimAttributes.ImageIndex

IDimAttributes.ImageIndex
-


# IDimAttributes.ImageIndex


## Синтаксис


ImageIndex: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Описание


Свойство ImageIndex определяет
 атрибут справочника, который будет использован в качестве пиктограммы
 элементов.


## Комментарии


Данное свойство актуально, если для репозитория установлен документ,
 содержащий [значки
 элементов справочника](UiNav.chm::/02_Navigator/Repo_Default.htm). Если данный атрибут задан, то около наименования
 элементов будет выводиться изображение. Индекс изображения соответствует
 значению по данному атрибуту.


В качестве значения данного свойства может быть указан только целочисленный
 атрибут справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "RDS",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict : IRdsDictionary;

	    Dim : IDimensionModel;

	    Att : IDimAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("RDS").Key).Edit As IRdsDictionary;

	    Dim := Dict As IDimensionModel;

	    Att := Dim.Attributes;

	    Att.ImageIndex := Att.FindById("Image");

	    (Dict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера атрибут с идентификатором «Image» будет использован
 в качестве пиктограммы элементов.


См. также:


[IDimAttributes](IDimAttributes.htm) | [Значки элементов
 справочника по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
