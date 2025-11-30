# IDimElements.Name

IDimElements.Name
-


# IDimElements.Name


## Синтаксис


Name(Element: Integer): String;


## Параметры


Element - индекс
 элемента справочника.


## Описание


Свойство Name возвращает значение
 атрибута «Наименование» у элемента с индексом Element.


## Комментарии


При получении значения данного свойства используется свойство [IDimAttributeInstance.DisplayValue](../IDimAttributeInstance/IDimAttributeInstance.DisplayValue.htm).


Если для справочника установлена альтернативная иерархия, данное свойство
 неактуально для получения наименования элемента.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO».


Добавьте ссылки на системные сборки «Metabase» и «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Elem: IDimElements;

    s: String;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Elem := Dimen.Elements;

    For i := 0 To Elem.Count - 1 Do

        s := Elem.Name(i) + "; ";

        Debug.WriteLine(s);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведены значения атрибута
 «Наименование» элемента справочника.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
