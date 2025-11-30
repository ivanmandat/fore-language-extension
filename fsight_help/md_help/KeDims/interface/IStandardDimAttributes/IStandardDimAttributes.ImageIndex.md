# IStandardDimAttributes.ImageIndex

IStandardDimAttributes.ImageIndex
-


# IStandardDimAttributes.ImageIndex


## Синтаксис


ImageIndex: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство ImageIndex определяет
 атрибут табличного справочника, назначение которого – Пиктограмма элементов.


## Комментарии


Данное свойство актуально, если для репозитория установлен документ,
 содержащий [значки
 элементов справочника](UiNav.chm::/02_Navigator/Repo_Default.htm). Если данный атрибут задан, то около наименования
 элементов будет выводиться изображение. Индекс изображения соответствует
 значению по данному атрибуту.


В качестве значения данного свойства может быть указан только целочисленный
 атрибут справочника.


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором "TAB_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	    DimAttrs: IStandardDimAttributes;

	    DimAttribut: IStandardDimAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    DimAttrs := Dimens.Attributes;

	    DimAttribut := DimAttrs.Add;

	    DimAttribut.DataType := DbDataType.Integer;

	    DimAttribut.Id := "ImagesAttr";

	    DimAttribut.Name := "Атрибут для пиктограмм";

	    DimAttrs.ImageIndex := DimAttribut;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике будет создан новый атрибут, назначение
 которого - Пиктограмма элементов.


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)
 | [Значки
 элементов справочника по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
