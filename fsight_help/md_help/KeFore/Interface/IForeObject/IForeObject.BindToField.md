# IForeObject.BindToField

IForeObject.BindToField
-


# IForeObject.BindToField


## Синтаксис


BindToField(FieldName: String): [IForeVar](../IForeVar/IForeVar.htm);


## Параметры


FieldName. Наименование поля
 класса.


## Описание


Метод BindToField возвращает
 поле класса по наименованию.


## Комментарии


Метод возвращает значение Null,
 если в классе нет поля с указанным наименованием.


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «MODULE». В модуле добавлен следующий класс:


	Class B: Object

	    Public X: Double;


	    Public Function LogX: Double;

	    Begin

	        Return Math.Log10(X)

	    End Function LogX;

	End Class B;


Добавьте ссылку на системную сборку Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    ClassInst: IForeObject;

	    Field: IForeVar;

	    FSub: IForeSub;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("MODULE");

	    //Получение класса

	    FClass := Assm.BindToClass("B");

	    //Создание экземпляра класса, получение метода и задание значения поля

	    ClassInst := FClass.CreateObject;

	    FSub := FClass.BindToMethod("LogX");

	    FSub.Self := ClassInst;

	    //Поле

	    Field := ClassInst.BindToField("X");

	    Field.Value := 123.456;

	    FSub.Invoke;

	    Debug.WriteLine(FSub.ResultValue);

	    //Новое значение поля

	    Field.Value := 654.321;

	    FSub.Invoke;

	    Debug.WriteLine(FSub.ResultValue);

	End Sub UserProc;


При выполнении примера в среду выполнения будет загружен указанный модуль.
 Будет создан экземпляр класса, получена функция «LogX» и поле «X». Для
 поля два раза задаётся значение и дважды выполняется функция «LogX». Результаты
 работы функции будут выведены в консоль среды разработки.


См. также:


[IForeObject](IForeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
