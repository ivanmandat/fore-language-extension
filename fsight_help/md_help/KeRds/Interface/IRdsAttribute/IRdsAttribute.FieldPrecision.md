# IRdsAttribute.FieldPrecision

IRdsAttribute.FieldPrecision
-


# IRdsAttribute.FieldPrecision


## Синтаксис


FieldPrecision: Integer;


## Описание


Свойство FieldPrecision определяет
 количество десятичных знаков поля таблицы, в котором будут храниться значения
 атрибута.


## Комментарии


Свойство актуально, если атрибут имеет вещественный тип значений. Количество
 десятичных знаков должно быть меньше общей длины, заданной в свойстве
 [FieldSize](IRdsAttribute.FieldSize.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT.


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Dict: IRdsDictionary;

	    Attr: IRdsAttribute;

	Begin

	    Mb := MetabaseClass.Active;

	    Dict := Mb.ItemById("RDS_DICT").Edit As IRdsDictionary;

	    // Добавление атрибута

	    Attr := Dict.Attributes.Add;

	    Attr.Name := "Объем";

	    Attr.Id := "VOLUME";

	    Attr.DataType := DbDataType.Float;

	    Attr.FieldSize := 20;

	    Attr.FieldPrecision := 8;

	    // Сохранение изменений

	    (Dict As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в указанный справочник НСИ будет добавлен новый
 атрибут. Для атрибута будет установлен вещественный тип данных, определены
 общая длина и количество десятичных знаков.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
