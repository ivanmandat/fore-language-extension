# IDimSelection.CopyTo

IDimSelection.CopyTo
-


# IDimSelection.CopyTo


## Синтаксис


CopyTo(Dest: [IDimSelection](IDimSelection.htm);
 Replace: Boolean);


## Параметры


Dest. Измерение-приёмник, в
 который необходимо скопировать отметку, схемы отметки и группы элементов
 измерения-источника.


Replace. Параметр, определяющий,
 будут ли сбрасываться отметка, схемы отметки и группы элементов, содержащиеся
 в приёмнике Dest при копировании.
 Сбрасывается, если значение True.


## Описание


Метод CopyTo осуществляет копирование
 отметки, схем отметки и групп элементов измерения-источника в измерение-приёмник.


## Пример


Sub Main;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Selection, Selection1: IDimSelection;

Begin

    MB:=MetabaseClass.Active;

    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Selection:=Dimen.CreateSelection;

    Selection1:=Dimen.CreateSelection;

    Selection.SelectElement(11,True);

    Selection.SelectElement(30,True);

    Selection1.SelectElement(42,True);

    Selection1.SelectElement(56,True);

    Selection.CopyTo(Selection1,False);

End Sub Main;


После выполнения примера в отметку «Selection1»
 будет добавлена отметка «Selection».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
