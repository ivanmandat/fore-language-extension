# IDimAttributes.Item

IDimAttributes.Item
-


# IDimAttributes.Item


## Синтаксис


Item(Index: Variant): [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Параметры


Index. Индекс атрибута.


## Описание


Свойство Item возвращает объект,
 содержащий атрибут справочника.


## Комментарии


Индекс атрибута передается через параметр Index.


## Пример


Для выполнения примера в репозитории требуется наличие табличного справочника с идентификатором
 «D_TO».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    DimModel: IDimensionModel;

    Index: IDimIndex;

    IndAtr: IDimIndexAttributes;

    Atr: IDimAttribute;

    S: String;

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

        // Получаем первый атрибут

        Atr := IndAtr.Item(0);

        S := Atr.Name;

        Debug.WriteLine("Наименование первого атрибута индекса: " + S);

    Elseif Index = Null Then

        Debug.WriteLine("Индекс не найден");

    End If;

End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться наименование
 первого атрибута первого индекса справочника.


См. также:


[IDimAttributes](IDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
