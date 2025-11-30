# IStyleContainer.Key

IStyleContainer.Key
-


# IStyleContainer.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 контейнера стиля.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 стилей с идентификатором Global_Style.


Добавьте ссылки на системные сборки: Drawing, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    StyleSheet: IStyleSheet;

    Style: IStyleContainer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Global_Style").Edit;

    StyleSheet := MObj As IStyleSheet;

    Style := StyleSheet.Add;

    Debug.WriteLine(Style.Key);

    MObj.Save;

End Sub UserProc;


После выполнения примера в таблицу стилей будет добавлен новый контейнер
 стиля. В консоль среды разработки будет выведен ключ созданного контейнера
 стиля.


См. также:


[IStyleContainer](IStyleContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
