# IMetabaseCustomClass.StandardOperations

IMetabaseCustomClass.StandardOperations
-


# IMetabaseCustomClass.StandardOperations


## Синтаксис


StandardOperations: [IMetabaseCustomClassStandardOperations](../IMetabaseCustomClassStandardOperations/IMetabaseCustomClassStandardOperations.htm);


## Описание


Свойство StandardOperations
 возвращает коллекцию стандартных операций класса.


## Комментарии


Для объектов существуют следующие стандартные операции:


		 Наименование операция
		 Идентификатор операции


		 Открыть
		 OPEN (OPENWITHPARAMS
		 для обработки открытия параметрических объектов)


		 Редактировать
		 EDIT (EDITWITHPARAMS
		 для обработки редактирования параметрических объектов)


		 Удалить
		 DELETE


		 Вставить
		 PASTE


## Пример


Для выполнения примера в пользовательских метаданных репозитория предполагается
 наличие минимум одного пользовательского класса.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClass: IMetabaseCustomClass;

	    StdOperations: IMetabaseCustomClassStandardOperations;

	    Operations: IMetabaseCustomClassOperations;

	    Operation: IMetabaseCustomClassOperation;

	    i, c: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение контейнера пользовательских классов

	    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    // Первый пользовательский класс

	    CustomClass := CustomClassExtender.Classes.Item(0);

	    StdOperations := CustomClass.StandardOperations;

	    Operations := CustomClass.Operations;

	    // Просмотр списка операций

	    Debug.WriteLine("---Стандартные операции---");

	    c := StdOperations.Count;

	    For i := 0 To c - 1 Do

	        Operation := StdOperations.Item(i);

	        Debug.WriteLine(Operation.Name + " (" + Operation.Id + ')')

	    End For;

	    Debug.WriteLine("---Пользовательские операции---");

	    c := Operations.Count;

	    For i := 0 To c - 1 Do

	        Operation := Operations.Item(i);

	        Debug.WriteLine(Operation.Name + " (" + Operation.Id + ')')

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 стандартных и пользовательских операций, которые созданы для первого пользовательского
 класса.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
