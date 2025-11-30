# IDimElements.NextSibling

IDimElements.NextSibling
-


# IDimElements.NextSibling


## Синтаксис


NextSibling(Element: Integer; [Through: Boolean]):
 Integer;


## Параметры


Element. Индекс элемента.


Through. Необязательный параметр,
 определяющий, будет ли осуществляться переход к элементам этого же уровня
 у другого родителя. По умолчанию False.


## Описание


Свойство NextSibling возвращает
 индекс следующего элемента относительно заданного с учетом родителя и
 уровня. «-1» если нет следующего элемента.


## Комментарии


Для получения индекса предыдущего элемента относительно заданного используйте
 свойство [IDimElements.PrevSibling](IDimElements.PrevSibling.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Elem: IDimElements;

    i, j, k: Integer;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Elem := Dimen.Elements;

    i := 21;

    Debug.WriteLine("Индекс текущего элемента: " + i.ToString);

    j := Elem.PrevSibling(i, False);

    Debug.WriteLine("Индекс предыдущего элемента: " + j.ToString);

    k := Elem.NextSibling(i, False);

    Debug.WriteLine("Индекс следующего элемента: " + k.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- индекс текущего элемента;


	- индекс предыдущего элемента;


	- индекс следующего элемента.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
