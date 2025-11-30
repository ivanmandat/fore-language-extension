# IDimAttributesInstance.EnsureValuesLoaded

IDimAttributesInstance.EnsureValuesLoaded
-


# IDimAttributesInstance.EnsureValuesLoaded


## Синтаксис


EnsureValuesLoaded(AttributeKeys: Array; Option:
 Integer; Filter: [IDimSelection](../IDimSelection/IDimSelection.htm));


## Параметры


AttributeKeys. Ключи загружаемых
 атрибутов.


Option. Опция загрузки значений
 атрибута.


Filter. Отметка справочника,
 по которой выполняется догрузка атрибутов.


## Описание


Метод EnsureValuesLoaded осуществляет
 динамическую догрузку атрибутов элементов измерений.


## Комментарии


Параметр Option принимает значения
 доступные для [DimAttributeInstanceValuesLoadOptions](../../Enums/DimAttributeInstanceValuesLoadOptions.htm).


## Пример


Для выполнения примера предполагается наличие справочника с идентификатором
 DIC.


Добавьте ссылки на системные сборки: Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Attrs: IDimAttributesInstance;

    Ar: Array Of integer;

    Selection: IDimSelection;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("DIC").Open(Null) As IDimInstance;

    Attrs := Dimen.Attributes;

    Ar := New integer[Attrs.Count];

    For i := 0 To Attrs.Count - 1 Do

        Ar[i] := Attrs.Item(i).Attribute.Key;

    End For;

    // Настраиваем отметку, по которой нужно догрузить атрибуты

    Selection := Dimen.CreateSelection;

    Selection.SelectAll;

    // Догружаем атрибуты

    Attrs.EnsureValuesLoaded(Ar, DimAttributeInstanceValuesLoadOptions.DisplayValue, Selection);

End Sub UserProc;


В результате выполнения примера будут динамически догружены атрибуты
 элементов измерений.


См. также:


[IDimAttributesInstance](IDimAttributesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
