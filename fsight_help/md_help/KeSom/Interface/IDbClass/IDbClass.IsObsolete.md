# IDbClass.IsObsolete

IDbClass.IsObsolete
-


# IDbClass.IsObsolete


## Синтаксис


IsObsolete: Boolean;


## Описание


Свойство IsObsolete возвращает
 признак того, является ли класс устаревшим.


## Комментарии


Если класс является устаревшим, то возвращается значение True,
 иначе - False.


## Пример


Для выполнения примера подключите ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Man: IMetabaseManager;

    Classes: IDbClasses;

    Cls: IDbClass;

    i, c: Integer;

Begin

    Man := MetabaseManagerFactory.Active;

    Classes := Man.Classes;

    c := Classes.Count;

    For i := 0 To c - 1 Do

        Cls := Classes.Item(i);

        Debug.WriteLine("Наименование: " + Cls.Name + "; Устарел: " + Cls.IsObsolete.ToString);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 наименований классов объектов репозитория и сообщения о том, являются
 ли эти классы устаревшими.


См. также:


[IDbClass](IDbClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
