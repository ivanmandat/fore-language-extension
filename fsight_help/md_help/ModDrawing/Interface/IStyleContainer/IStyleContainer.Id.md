# IStyleContainer.Id

IStyleContainer.Id
-


# IStyleContainer.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
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

    Style := StyleSheet.Item(StyleSheet.Count - 1);

    Style.Id := Style.Id + "_Last_Stele";

    MObj.Save;

End Sub UserProc;


После выполнения примера будет изменен идентификатор последнего контейнера
 стиля.


См. также:


[IStyleContainer](IStyleContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
