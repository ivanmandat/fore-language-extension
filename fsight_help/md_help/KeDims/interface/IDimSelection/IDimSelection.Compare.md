# IDimSelection.Compare

IDimSelection.Compare
-


# IDimSelection.Compare


## Синтаксис


Compare(Value: [IDimSelection](IDimSelection.htm)):
 Boolean;


## Параметры


Value - отметка,
 с которой происходит сравнение.


## Описание


Метод Compare осуществляет сравнение
 отметки с отметкой, передаваемой посредством параметра Value.


## Комментарии


Метод возвращает значение True,
 если отметки идентичны и False
 во всех других случаях.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором "Dim_1".


	Sub Main;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Selection, Selection1: IDimSelection;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Selection:=Dimen.CreateSelection;

	    Selection1:=Dimen.CreateSelection;

	    Selection.SelectSiblings(11);

	    Selection1.SelectSiblings(56);

	    If Selection.Compare(Selection1) Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	End Sub Main;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 отметки «Selection» и «Selection1» идентичны.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
