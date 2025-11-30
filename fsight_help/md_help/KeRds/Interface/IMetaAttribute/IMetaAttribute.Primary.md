# IMetaAttribute.Primary

IMetaAttribute.Primary
-


# IMetaAttribute.Primary


## Синтаксис


Primary: Boolean;


## Описание


Свойство Primary возвращает
 признак: входит ли атрибут в уникальный ключ базы данных временных рядов.


## Комментарии


В уникальный ключ входят атрибуты, однозначно характеризующие показатель.


Допустимые значения:


	- True. Атрибут входит
	 в уникальный ключ;


	- False. Атрибут не входит
	 в уникальный ключ.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IRubricator;

    RubAttrs: IMetaAttributes;

    i: Integer;

    Attr: IMetaAttribute;

Begin

    Mb := MetabaseClass.Active;

    Cat := Mb.ItemById("FC").Bind As IRubricator;

    RubAttrs := Cat.Facts.Attributes;

    Debug.WriteLine("Атрибуты, образующие уникальный ключ базы
 данных временных рядов:");

    For i := 0 To RubAttrs.Count - 1 Do

        Attr := RubAttrs.Item(i);

        If Attr.Primary Then

            Debug.WriteLine("  - " + Attr.Name);

        End If;

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены атрибуты, образующие
 уникальный ключ базы данных временных рядов.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
