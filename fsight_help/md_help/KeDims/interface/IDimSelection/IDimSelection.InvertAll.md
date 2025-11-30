# IDimSelection.InvertAll

IDimSelection.InvertAll
-


# IDimSelection.InvertAll


## Синтаксис


InvertAll;


## Описание


Метод InvertAll осуществляет
 инверсию отметки справочника.


## Пример


			Sub Main;

    Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Selection: IDimSelection;

Begin

    MB:=MetabaseClass.Active;

    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Selection:=Dimen.CreateSelection;

    Selection.SelectElement(11,False);

    Selection.SelectElement(30,False);

    Selection.InvertAll;

End Sub Main;


После выполнения примера в отметке «Selection» будут содержаться все
 элементы справочника кроме «11» и «30».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
