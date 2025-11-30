# IForeClass.BindToProperty

IForeClass.BindToProperty
-


# IForeClass.BindToProperty


## Синтаксис


		BindToProperty(PropertyName: String): [IForeProperty](../IForeProperty/IForeProperty.htm);


## Параметры


PropertyName. Наименование
 пользовательского свойства.


## Описание


Метод BindToProperty возвращает
 информацию об указанном свойстве.


## Комментарии


Метод возвращает значение Null,
 если свойство с указанным именем в текущей конструкции не найдено.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке реализован класс «CCalculate», в
 классе имеется свойство «Tag».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FClass: IForeClass;

		    FProp: IForeProperty;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    // Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    // Получение информации о свойствах класса

		    FClass := Assm.BindToClass("CCalculate");

		    // Получение свойства

		    FProp := FClass.BindToProperty("Tag");

		    Debug.WriteLine("Свойство: " + FProp.Name);

		    Debug.WriteLine("Метод, реализующий Get-часть: " + FProp.NameOfGetMethod);

		    Debug.WriteLineIf(FProp.NameOfSetMethod <> "", "Метод, реализующий Set-часть: " + FProp.NameOfSetMethod);

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В сборке будет получен доступ к указанному
 свойству. Информация о Get и Set частях свойства будет выведена в консоль
 среды разработки.


См. также:


[IForeClass](IForeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
