# IRdsUniqueKey.UseInSelection

IRdsUniqueKey.UseInSelection
-


# IRdsUniqueKey.UseInSelection


## Синтаксис


UseInSelection: Boolean;


## Описание


Свойство UseInSelection
 определяет, используется ли уникальный ключ при формировании отметки.


## Комментарии


Допустимые значения:


	- True. Уникальный ключ
	 используется при формировании отметки. Это позволит его использовать
	 для сохранения и восстановления отметки по измерению, основанному
	 на справочнике НСИ.

	В справочнике НСИ может быть только один уникальный ключ, используемый
	 для формирования отметки. Если какой-либо ключ уже используется для
	 этого, то для него значение свойства UseInSelection
	 будет автоматически изменено на False;


	- False. Уникальный ключ
	 не используется при формировании отметки.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором «USE_IN_SELECTION». Данный справочник должен содержаться
 вне репозитория НСИ и использоваться в качестве измерения в базе данных
 временных рядов.


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    Dict: IRdsDictionary;

    UniqueKeys: IRdsUniqueKeys;

    UniqueKey: IRdsUniqueKey;

    Attributes: IRdsAttributes;

    Attribute: IRdsAttribute;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := mb.ItemById("USE_IN_SELECTION").Edit As IRdsDictionary;

    // Получаем уникальные ключи справочника

    UniqueKeys := Dict.UniqueKeys;

    // Добавляем новый ключ

    UniqueKey := UniqueKeys.Add;

    // Получаем атрибуты справочника

    Attributes := Dict.Attributes;

    // Добавляем новый атрибут

    Attribute := Attributes.Add;

    // Задаем наименование и тип данных атрибута

    Attribute.Name := "Уникальный ключ";

    Attribute.DataType := DbDataType.String;

    // Указываем, что созданный атрибут входит в новый уникальный ключ

    UniqueKey.Contains(Attribute) := True;

    // Указываем, что уникальный ключ будет использоваться при формировании отметки

    UniqueKey.UseInSelection := True;

    // Указываем, что уникальный ключ регистрозависимый

    UniqueKey.CaseSensitive := True;

    // Сохраняем изменения в справочнике НСИ

    (Dict As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в справочнике НСИ создан уникальный
 ключ, который может быть использован для сохранения и восстановления отметки
 по измерению, основанному на данном справочнике.


См. также:


[IRdsUniqueKey](IRdsUniqueKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
