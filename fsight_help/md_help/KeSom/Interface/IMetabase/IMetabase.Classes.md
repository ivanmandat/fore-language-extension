# IMetabase.Classes

IMetabase.Classes
-


# IMetabase.Classes


## Синтаксис


Classes: [IDbClasses](../IDbClasses/IDbClasses.htm);


## Описание


Свойство Classes возвращает
 коллекцию классов объектов репозитория.


## Комментарии


Свойство возвращает коллекцию, включающую в себя системные классы и
 классы, которые реализованы в [пользовательских
 метаданных](../ISpecialObjects/ISpecialObjects.SpecialObject.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Classes: IDbClasses;

    Cls: IDbClass;

    i, c: Integer;

Begin

    Mb := MetabaseClass.Active;

    Classes := Mb.Classes;

    c := Classes.Count;

    For i := 0 To c - 1 Do

        Cls := Classes.Item(i);

        Debug.WriteLine("Класс: " + Cls.Name + " (Идентификатор: " + Cls.Id + "; Ключ: " + Cls.Key.ToString + ')');

    End For;

    Debug.WriteLine("Общее количество классов: " + c.ToString);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о классах объектов репозитория.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
