# IDbClass.SupportsElementDependencies

IDbClass.SupportsElementDependencies
-


# IDbClass.SupportsElementDependencies


## Синтаксис


SupportsElementDependencies: Boolean;


## Описание


Свойство SupportsElementDependencies
 возвращает признак того, отслеживает ли класс изменения в справочниках
 НСИ.


## Комментарии


Если класс отслеживает изменения в справочниках НСИ, то свойство возвращает
 значение True, иначе - False.


Свойство актуально для регламентных отчетов, экспресс-отчетов, виртуальных
 кубов, рабочих книг, валидаций, моделей, метамоделей, пользовательских
 объектов, объектов импорта/экспорта, репликации. Если в окне свойств объекта
 на вкладке «Состоит из» установлен флаг «Отслеживать изменения элементов
 в справочниках НСИ», значит для свойства SupportsElementDependencies установлено
 значение True.


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

        Debug.WriteLine("Наименование: " + Cls.Name + "; Поддержка НСИ: " + Cls.SupportsElementDependencies.ToString);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список,
 состоящий из наименований классов и сообщений о том, отслеживают ли классы
 изменения в справочниках НСИ.


См. также:


[IDbClass](IDbClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
