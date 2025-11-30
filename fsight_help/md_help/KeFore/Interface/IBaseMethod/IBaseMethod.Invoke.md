# IBaseMethod.Invoke

IBaseMethod.Invoke
-


# IBaseMethod.Invoke


## Синтаксис


		Invoke([Value: Variant = Null]);


## Параметры


Value. Значение, передаваемое
 в метод.


## Описание


Метод Invoke выполняет пользовательский
 метод.


## Комментарии


Invoke позволяет выполнить пользовательский
 метод, но не позволяет получить результат выполнения. Может использоваться
 для проверки работоспособности пользовательского метода. Выполняемый пользовательский
 метод может содержать максимум один параметр.


## Пример


Для выполнения примера в репозитории должны быть добавлены пользовательские
 методы. Первый пользовательский метод в своей сигнатуре не должен иметь
 параметров.


Добавьте ссылки на системные сборки: Fore и Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    SharedParams: ISharedParams;

		    Method: IForeMethod;

		Begin

		    Mb := MetabaseClass.Active;

		    SharedParams := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

		    Method := SharedParams.Methods.FindByKey(16);

		    Try

		        Method.Invoke;

		    Except On e: Exception Do

		        Debug.WriteLine("Ошибка: " + e.Message);

		    End Try;

		End Sub UserProc;


При выполнении примера будет осуществлена проверка выполнения пользовательского
 метода. Если во время выполнения возникнет ошибка, то текст ошибки будет
 выведен в консоль среды разработки.


См. также:


[IBaseMethod](IBaseMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
