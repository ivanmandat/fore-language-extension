# IForeObject.Debug

IForeObject.Debug
-


# IForeObject.Debug


## Синтаксис


Debug: Boolean;


## Описание


Свойство Debug возвращает признак
 выполнения объекта среды разработки с отладкой.


## Комментарии


Допустимые значения:


	- True. Объект среды разработки
	 выполнен с отладкой;


	- False. Объект среды
	 разработки выполнен без отладки.


Для получения подробной информации обратитесь к разделу «[Запуск
 и отладка объектов среды разработки](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/Run_Debug.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором MODULE. В модуле добавлен следующий код:


	Class A: Object

	    Public a: Integer;

	    Public b: String;

	End Class A;


	Sub Test(obj: A);

	Begin

	    Debug.WriteLine(obj.a);

	    Debug.WriteLine(obj.b);

	End Sub Test;


	Добавьте ссылку на системные сборки: Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    ClassInst: IForeObject;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    // Загрузим модуль

	    Assm := Runtime.BindToAssembly("MODULE");

	    // Получим класс модуля

	    FClass := Assm.BindToClass("A");

	    // Создадим экземпляр класса

	    ClassInst := FClass.CreateObject;

	    // Выведем в консоль признак использования отладки при выполнении модуля

	    If ClassInst.Debug = True Then

	        Debug.WriteLine("Выполнено с отладкой");

	    Else

	        Debug.WriteLine("Выполнено без отладки");

	    End If;

	End Sub UserProc;


В результате выполнения примера в среду выполнения будет загружен указанный
 модуль. В консоль будет выведено сообщение о выполнении модуля с отладкой
 или без отладки.


См. также:


[IForeObject](IForeObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
