# IDbClass.SupportsElementDependents

IDbClass.SupportsElementDependents
-


# IDbClass.SupportsElementDependents


## Синтаксис


SupportsElementDependents: Boolean;


## Описание


Свойство SupportsElementDependents
 возвращает признак того, отслеживает ли класс изменения его элементов.


## Комментарии


Если класс отслеживает изменения его элементов, то свойству возвращается
 значение True, иначе - False.


Свойство актуально для справочников НСИ, табличных и составных справочников
 НСИ. Если в редакторе справочника во вкладке «Описание» установлен флаг
 «Отслеживать ссылки на элементы из других объектов», то при удалении элемента,
 от которого зависят другие объекты репозитория, выдается окно с предупреждением,
 что удаление повлияет на другие объекты.


По умолчанию установлено значение False.


## Пример


Для выполнения примера подключите ссылку на сборку Metabase.


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

        Debug.WriteLine("Наименование: " + Cls.Name + "; Изменения элементов: " + Cls.SupportsElementDependents.ToString);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список,
 состоящий из наименований классов и сообщений о том, отслеживают ли классы
 изменения своих элементов.


См. также:


[IDbClass](IDbClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
