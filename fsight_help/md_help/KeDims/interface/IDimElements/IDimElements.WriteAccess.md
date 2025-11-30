# IDimElements.WriteAccess

IDimElements.WriteAccess
-


# IDimElements.WriteAccess


## Синтаксис


WriteAccess(Element: Integer): Boolean;


## Параметры


Element — индекс
 элемента.


## Описание


Свойство WriteAccess возвращает
 True, если к элементу
 Element есть доступ на запись.


## Пример


Для выполнения примера предполагается наличие объекта репозитория с
 идентификатором «D_TO».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Elem: IDimElements;

s: String;

Begin

    MB:=MetabaseClass.Active;

    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Elem:=Dimen.Elements;

    If Elem.WriteAccess(20) Then

        s:="Write";

        Else s:="Don’t Write";

    End If;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Write»,
 если разрешен доступ на изменение данных двадцатого элемента справочника
 для текущего пользователя.


См. также:


[IDimElements](IDimElements.htm) | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
