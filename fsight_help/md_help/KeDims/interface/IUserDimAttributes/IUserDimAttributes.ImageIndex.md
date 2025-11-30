# IUserDimAttributes.ImageIndex

IUserDimAttributes.ImageIndex
-


# IUserDimAttributes.ImageIndex


## Синтаксис


ImageIndex: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Свойство ImageIndex определяет
 атрибут вычисляемого справочника, назначение которого – Пиктограмма элементов.


## Комментарии


Данное свойство актуально, если для репозитория установлен документ,
 содержащий [значки
 элементов справочника](UiNav.chm::/02_Navigator/Repo_Default.htm). Если данный атрибут задан, то около наименования
 элементов будет выводиться изображение. Индекс изображения соответствует
 значению по данному атрибуту.


В качестве значения данного свойства может быть указан только целочисленный
 атрибут справочника.


## Пример


Для выполнения примера предполагается наличие вычисляемого справочника
 с идентификатором "USER_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    UsDimAttr: IUserDimAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("USER_DIM").Edit;

	    UsDim := MObj As IUserDimension;

	    UsDimAts := UsDim.Attributes;

	    UsDimAttr := UsDimAts.Add;

	    UsDimAttr.DataType := DbDataType.Integer;

	    UsDimAttr.Id := "ImagesAttr";

	    UsDimAttr.Name := "Атрибут для пиктограмм";

	    UsDimAts.ImageIndex := UsDimAttr;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике будет создан новый атрибут, назначение
 которого - Пиктограмма элементов.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)
 | [Значки
 элементов справочника по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
