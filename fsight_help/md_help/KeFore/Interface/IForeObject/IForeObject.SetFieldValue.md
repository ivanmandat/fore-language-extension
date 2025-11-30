# IForeObject.SetFieldValue

IForeObject.SetFieldValue
-


# IForeObject.SetFieldValue


## Синтаксис


SetFieldValue(FieldName: String; Value: Variant;
 Type: [ForeVariantType](ForeSys.chm::/Enums/ForeVariantType.htm));


## Параметры


FieldName. Наименование поля
 класса.


Value. Значение, которое необходимо
 задать полю.


Type. Тип устанавливаемого
 значения.


## Описание


Метод SetFieldValue задаёт указанное
 значение полю класса.


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «MODULE». В модуле добавлен следующий код:


	Class A: Object

	    Public a: Integer;

	    Public b: String;

	End Class A;


	Sub Test(obj: A);

	Begin

	    Debug.WriteLine(obj.a);

	    Debug.WriteLine(obj.b);

	End Sub Test;


Добавьте ссылку на системную сборку Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    ClassInst: IForeObject;

	    FSub: IForeSub;

	    Param: IForeSubParam;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("MODULE");

	    //Получение класса

	    FClass := Assm.BindToClass("A");

	    //Создание экземпляра класса и задание значений его полям

	    ClassInst := FClass.CreateObject;

	    ClassInst.SetFieldValue("FieldA", 100, ForeVariantType.Integer);

	    ClassInst.SetFieldValue("FieldB", "Field", ForeVariantType.String);

	    //Получение метода

	    FSub := Assm.BindToSub("Test");

	    //Установка значения параметра метода

	    Param := FSub.Params.ParamByName("obj");

	    Param.Value := ClassInst.Object;

	    //Выполнение метода

	    FSub.Invoke;

	End Sub UserProc;


При выполнении примера в среду выполнения будет загружен указанный модуль.
 Будет создан экземпляр класса и заданы значения его полей. Полученный
 экземпляр класса будет передан в качестве параметра в метод «Test», после
 этого метод будет запущен на выполнение.


См. также:


[IForeObject](IForeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
