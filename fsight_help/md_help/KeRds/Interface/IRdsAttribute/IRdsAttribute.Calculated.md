# IRdsAttribute.Calculated

IRdsAttribute.Calculated
-


# IRdsAttribute.Calculated


## Синтаксис


Calculated: Boolean;


## Описание


Свойство Calculated определяет,
 является ли атрибут вычисляемым.


## Комментарии


Допустимые значения:


	- True. Атрибут вычисляемый.
	 Данное значение недопустимо если:


	-


		- атрибут является системным, т.е. [IRdsAttribute.Predefined](IRdsAttribute.Predefined.htm) = True;


		- если атрибут может содержать множественные значения, т.е. [IRdsAttribute.HasMultipleValues](IRdsAttribute.HasMultipleValues.htm)
		 = True.


Текст запроса, по которому вычисляется значение
 атрибута, определяет свойство [IRdsAttribute.Query](IRdsAttribute.Query.htm).
 Задавать значение вычисляемого атрибута недопустимо. Если в запросе присутствуют
 поля основной таблицы и заимствованные поля, то пред основными полями
 необходимо использовать маску #TABLE#.


	- False. Атрибут не вычисляемый.


Если в справочнике присутствуют вычисляемые атрибуты, то при добавлении/изменении
 элемента происходит его перезагрузка.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором RDS, содержащим справочник НСИ с идентификатором
 DICT.


Добавьте ссылки на системные сборки: Metabase, Rds, Dal.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RdsKey: Integer;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    RdsKey := MB.GetObjectKeyById("RDS");

	    MObj := MB.ItemByIdNamespace("DICT", RdsKey).Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.Integer;

	    Attr.Id := "CALC_ATTR";

	    Attr.Name := "Вычисляемый атрибут";

	    Attr.Calculated := True;

	    Attr.Query := "#TABLE#.KEY + 1";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочник НСИ будет добавлен вычисляемый
 атрибут с идентификатором CALC_ATTR. Значение атрибута рассчитывается
 по формуле: значение ключа элемента + 1.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
