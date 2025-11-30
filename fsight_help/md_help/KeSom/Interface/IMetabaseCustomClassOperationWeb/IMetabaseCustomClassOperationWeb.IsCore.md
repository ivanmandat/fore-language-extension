# IMetabaseCustomClassOperationWeb.IsCore

IMetabaseCustomClassOperationWeb.IsCore
-


# IMetabaseCustomClassOperationWeb.IsCore


## Синтаксис


IsCore: Boolean;


## Описание


Свойство IsCore возвращает признак
 необходимости обработки операции в классе без визуальных зависимостей.


## Комментарии


Свойство возвращает значение True,
 если операция должна обрабатываться в классе без визуальных зависимостей.
 Класс задаётся в свойстве [IMetabaseCustomClass.ImplementationCoreClass](../IMetabaseCustomClass/IMetabaseCustomClass.ImplementationCoreClass.htm).
 Из стандартных операций в классе обрабатываются операции Вставить (PASTE)
 и Удалить (DELETE).


Для операций, которые могут быть обработаны на веб-форме, свойство возвращает
 значение False. Веб-форма задаётся
 в свойстве [IMetabaseCustomClassOperationWeb.Handler](IMetabaseCustomClassOperationWeb.Handler.htm).


## Пример


Для выполнения примера в пользовательских метаданных репозитория предполагается
 наличие минимум одного пользовательского класса.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClass: IMetabaseCustomClass;

	    StdOperationsWeb: IMetabaseCustomClassStandardOperationsWeb;

	    OperationsWeb: IMetabaseCustomClassOperationsWeb;

	    Operation: IMetabaseCustomClassOperationWeb;

	    i, c: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение контейнера пользовательских классов

	    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    // Первый пользовательский класс

	    CustomClass := CustomClassExtender.Classes.Item(0);

	    Debug.WriteLine("Пользовательский класс: " + CustomClass.Name + '(' + CustomClass.Id + ')');

	    StdOperationsWeb := CustomClass.StandardOperationsWeb;

	    OperationsWeb := CustomClass.OperationsWeb;

	    // Просмотр списка операций

	    Debug.WriteLine("---Стандартные операции для веба---");

	    c := StdOperationsWeb.Count;

	    For i := 0 To c - 1 Do

	        Operation := StdOperationsWeb.Item(i);

	        Debug.WriteLine(Operation.Name + " (" + Operation.Id + "). Обработка в классе: " + Operation.IsCore.ToString);

	    End For;

	    Debug.WriteLine("---Пользовательские операции для веба---");

	    c := OperationsWeb.Count;

	    For i := 0 To c - 1 Do

	        Operation := OperationsWeb.Item(i);

	        Debug.WriteLine(Operation.Name + " (" + Operation.Id + "). Обработка в классе: " + Operation.IsCore.ToString);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 стандартных и пользовательских операций, которые доступны для первого
 пользовательского класса при работе в веб-приложении.


См. также:


[IMetabaseCustomClassOperationWeb](IMetabaseCustomClassOperationWeb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
