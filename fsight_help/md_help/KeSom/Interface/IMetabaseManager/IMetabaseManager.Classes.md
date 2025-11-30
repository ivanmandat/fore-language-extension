# IMetabaseManager.Classes

IMetabaseManager.Classes
-


# IMetabaseManager.Classes


## Синтаксис


Classes: [IDbClasses](../IDbClasses/IDbClasses.htm);


## Описание


Свойство Classes возвращает
 коллекцию классов объектов, доступных в платформе.


## Комментарии


Свойство возвращает коллекцию только системных классов, реализованных
 в самой платформе.


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

        Debug.WriteLine("Класс: " + Cls.Name + " (Идентификатор: " + Cls.Id + "; Ключ: " + Cls.Key.ToString + ')');

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 обо всех, доступных в платформе, классах объектов.


См. также:


[IMetabaseManager](IMetabaseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
