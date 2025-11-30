# IForeObject.FieldItem

IForeObject.FieldItem
-


# IForeObject.FieldItem


## Синтаксис


FieldItem(Index: Integer): [IForeVar](../IForeVar/IForeVar.htm);


## Параметры


Index. Индекс поля.


## Описание


Метод FieldItem возвращает поле
 класса с указанным индексом.


## Комментарии


Количество доступных полей можно получить с помощью метода [FieldsCount](IForeObject.FieldsCount.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «MODULE». В модуле добавлен следующий класс:


	Class Test: Object

	    Public A: Integer;

	    Public B: String;

	    Public C: DateTime;


	    Public Constructor Create;

	    Begin

	        a := 100;

	        b := "Test";

	        c := DateTime.Now;

	    End Constructor Create;

	End Class Test;


Добавьте ссылки на системные сборки: Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    ClassInst: IForeObject;

	    FSub: IForeSub;

	    Field: IForeVar;

	    c, i: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("MODULE");

	    //Получение класса

	    FClass := Assm.BindToClass("Test");

	    //Создание экземпляра класса

	    ClassInst := FClass.CreateObject;

	    //Вызов конструктора, инициализирующего значения для полей

	    FSub := FClass.BindToMethod("Create");

	    FSub.Self := ClassInst;

	    FSub.Invoke;

	    //Просмотр полей

	    c := ClassInst.FieldsCount;

	    For i := 0 To c - 1 Do

	        Field := ClassInst.FieldItem(i);

	        Debug.WriteLine(Field.Name + " : " + Field.Value);

	    End For;

	End Sub UserProc;


При выполнении примера в среду выполнения будет загружен указанный модуль.
 Будет создан экземпляр класса, выполнен конструктор, который инициализирует
 значения полей. После этого значения всех полей будут выведены в консоль
 среды разработки.


См. также:


[IForeObject](IForeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
