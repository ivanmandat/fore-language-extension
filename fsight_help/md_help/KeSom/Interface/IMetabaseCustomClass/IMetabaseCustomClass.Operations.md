# IMetabaseCustomClass.Operations

IMetabaseCustomClass.Operations
-


# IMetabaseCustomClass.Operations


## Синтаксис


Operations: [IMetabaseCustomClassOperations](../IMetabaseCustomClassOperations/IMetabaseCustomClassOperations.htm);


## Описание


Свойство Operations возвращает
 коллекцию пользовательских операций класса.


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «Operations». В данном модуле реализован класс для обработки
 операций объектов пользовательских классов.


[![](../../opened.gif)![](../../closed.gif)Текст модуля](javascript:TextPopup(this))


		Class OperationsClass: Object

		    Sub Open(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        //Обработка операции "Открыть"

		     End Sub Open;


		    Sub Edit(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        //Обработка операции "Редактировать"

		     End Sub Edit;


		    Sub OpenWithParams(Descr: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        //Обработка операции "Открыть"
		 для параметрических объектов

		     End Sub OpenWithParams;


		    Sub EditWithParams(Descr: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        //Обработка операции "Редактировать"
		 для параметрических объектов

		     End Sub EditWithParams;


		    //Другие обработчики операций

		     //...

		 End Class OperationsClass;


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClass: IMetabaseCustomClass;

	    Operations: IMetabaseCustomClassOperations;

	    Operation: IMetabaseCustomClassOperation;

	Begin

	    Mb := MetabaseClass.Active;

	    //Получение контейнера пользовательских классов

	    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    //Добавление пользовательского класса

	    CustomClass := CustomClassExtender.Classes.Add;

	    CustomClass.Id := "UserObjectClass1";

	    CustomClass.Name := "Тестовый объект";

	    CustomClass.ImplementationAssembly := MB.ItemById("Operations");

	    CustomClass.ImplementationClass := "OperationsClass";

	    //Создание операции

	    Operations := CustomClass.Operations;

	    Operation := Operations.Add(0);

	    Operation.Name := "Новая операция";

	    Debug.WriteLine("Идентификатор созданной операции: " + Operation.Id);

	    (CustomClassExtender As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в контейнере пользовательских классов будет создан
 новый класс объектов. Для класса будут определены базовые свойства и создана
 одна операция. Идентификатор созданной операции будет выведен в консоль
 среды разработки. В качестве обработчика операций будет указан класс OperationsClass.
 В данном классе необходимо реализовать метод с идентификатором, который
 получит созданная операция. Дальнейшая работа с пользовательским классом
 будет возможна в настольном приложении.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
