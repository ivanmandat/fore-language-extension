# IDimAttribute.DisplayDataDomain

IDimAttribute.DisplayDataDomain
-


# IDimAttribute.DisplayDataDomain


## Синтаксис


DisplayDataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DisplayDataDomain возвращает
 тип отображаемой в атрибуте многобайтовой информации.


## Комментарии


Для получения типа данных для хранения в атрибуте многобайтовой информации
 используйте свойство [IDimAttribute.DataDomain](IDimAttribute.DataDomain.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором TMDMDICT_MEMO.


Для выполнения примера добавьте ссылки на системные сборки: Dal, Dimensions,
 Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    dimension := mb.ItemById("TMDMDICT_MEMO").Bind As IDimensionModel;

    // Получаем атрибуты справочника

    attributes := dimension.Attributes;

    // Перебираем полученные атрибуты

    For i := 0 To attributes.Count - 1 Do

        attribute := attributes.Item(i);

        // Если атрибут отображает
 данные типа «Длинный текст», то выводим информацию о нем

        If (attribute.DisplayDataDomain = DbDataDomain.Memo) And

            (attribute.DataType = DbDataType.String) Then

            Debug.WriteLine("Наименование: " + attribute.Name);

            Debug.WriteLine("Идентификатор: " + attribute.Id);

            Debug.WriteLine("Ключ: " + attribute.Key.ToString);

        End If;

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 об атрибутах типа «Длинный текст»,
 если они присутствуют в справочнике НСИ.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
