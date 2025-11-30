# IMetaAttribute.Nullable

IMetaAttribute.Nullable
-


# IMetaAttribute.Nullable


## Синтаксис


Nullable: Boolean;


## Описание


Свойство Nullable определяет,
 может ли элемент по данному атрибуту иметь пустое значение.


## Комментарии


Допустимые значения:


	- True. Допускаются пустые
	 значения для элементов по данному атрибуту;


	- False. Все элементы
	 справочника должны иметь значение по данному атрибуту.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetabaseObject;

	    Att: IMetaAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := (Rubr.Facts As IMetabaseObject).Edit;

	    Att := (Facts As IMetaDictionary).Attributes.Add;

	    Att.Id := "A_COMMENT";

	    Att.Name := "Комментарий";

	    Att.Kind := MetaAttributeKind.Comment;

	    Att.DataType := DbDataType.String;

	    Att.DefaultValue := "Комментарий";

	    Att.Hidden := False;

	    Att.Nullable := True;

	    Att.HasMultipleValues := False;

	    Att.FieldSize := 255;

	    Facts.Save;

	End Sub UserProc;


После выполнения примера в справочнике, содержащем информацию о показателях
 базы данных временных рядов с идентификатором OBJ_FC, будет добавлен атрибут
 «Комментарий». Параметры атрибута:
 строковый (длина 255 символов), не скрытый, множественные значения не
 допускаются, может содержать пустые значения.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
