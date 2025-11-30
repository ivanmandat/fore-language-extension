# IStyleSheet.Add

IStyleSheet.Add
-


# IStyleSheet.Add


## Синтаксис


Add([Key: Integer = 0]; [Id: String = ""]):
 [IStyleContainer](../IStyleContainer/IStyleContainer.htm);


## Параметры


Key. Необязательный параметр,
 определяет ключ добавляемого контейнера стиля. По умолчанию - 0, при добавлении
 контейнера без указания ключа, будет генерироваться следующий по порядку
 ключ, в зависимости от уже имеющихся;


Id. Необязательный параметр,
 определяющий идентификатор добавляемого контейнера стиля. По умолчанию
 - "", при добавлении контейнера без указания идентификатор,
 будет генерироваться новый идентификатор, содержащий "I" + ключ
 нового контейнера стиля.


## Описание


Метод Add осуществляет добавление
 контейнера стиля в таблицу стилей.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 стилей с идентификатором GLOBAL_STYLE.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    StyleSheet: IStyleSheet;

	    Style: IStyleContainer;

	    TabSty: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("GLOBAL_STYLE").Edit;

	    StyleSheet := MObj As IStyleSheet;

	    StyleSheet.Clear;

	    Style := StyleSheet.Add(10);

	    TabSty := New TabCellStyle.Create;

	    TabSty.Font.Name := "Times New Roman";

	    TabSty.Font.Size := 16;

	    TabSty.Font.Color := GxColor.FromName("Red");

	    TabSty.SaveToContainer(Style);

	    MObj.Save;

	End Sub UserProc;


При выполнении примера в таблицу стилей будет добавлен новый контейнер
 стиля. Наименование и ключ для данного контейнера будут сгенерированы
 автоматически, после этого будет изменено оформление шрифта стиля, хранящегося
 в этом контейнере.


См. также:


[IStyleSheet](IStyleSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
