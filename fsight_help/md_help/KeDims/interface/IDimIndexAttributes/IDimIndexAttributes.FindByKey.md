# IDimIndexAttributes.FindByKey

IDimIndexAttributes.FindByKey
-


# IDimIndexAttributes.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Параметры


AttributeKey. Ключ атрибута,
 по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск атрибута в индексе по ключу.


## Комментарии


Если атрибут с указанным ключом не включен в индекс, метод возвращает
 значение Null.


## Пример


Для выполнения примера в репозитории требуется наличие табличного справочника
 с идентификатором «D_TO».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    DimModel: IDimensionModel;

    Index: IDimIndex;

    IndAtr: IDimIndexAttributes;

    Atr: IDimAttribute;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник

    DimModel := MB.ItemById("D_TO").Bind As IDimensionModel;

    // Получаем первый индекс справочника

    Index := DimModel.Indexes.Item(0);

    If Index <> Null Then

        // Получаем атрибуты первого индекса справочника

        IndAtr := Index.Attributes;

        // Осуществляем поиск атрибута по ключу

        Atr := IndAtr.FindByKey(2);

        If Atr <> Null Then

            Debug.WriteLine("Наименование найденного атрибута: " + Atr.Name);

        Else

            Debug.WriteLine("Атрибут не найден");

        End If;

    End If;

End Sub


После выполнения примера в первом индексе справочника будет осуществлен
 поиск атрибута с ключом «2». В случае удачного поиска наименование этого
 атрибута будет выведено в окно консоли.


См. также:


[IDimIndexAttributes](IDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
